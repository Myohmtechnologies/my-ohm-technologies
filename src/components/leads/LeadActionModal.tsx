'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Lead, LeadAction } from '@/types';
import { addHours } from 'date-fns';

interface LeadActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead;
  onActionComplete: () => void;
}

const ACTION_LABELS = {
  NEW: 'Nouveau',
  CONTACTED: 'Contacté',
  MEETING_SCHEDULED: 'RDV Fixé',
  TECHNICAL_VISIT: 'Visite Technique',
  CONTRACT_SIGNED: 'Contrat Signé',
  INSTALLATION: 'Installation',
  COMPLETED: 'Terminé',
  NOT_INTERESTED: 'Pas Intéressé',
};

const STATUS_TRANSITIONS = {
  NEW: ['CONTACTED', 'NOT_INTERESTED'],
  CONTACTED: ['MEETING_SCHEDULED', 'NOT_INTERESTED'],
  MEETING_SCHEDULED: ['TECHNICAL_VISIT', 'NOT_INTERESTED'],
  TECHNICAL_VISIT: ['CONTRACT_SIGNED', 'NOT_INTERESTED'],
  CONTRACT_SIGNED: ['INSTALLATION'],
  INSTALLATION: ['COMPLETED'],
  COMPLETED: [],
  NOT_INTERESTED: [],
};

export default function LeadActionModal({
  isOpen,
  onClose,
  lead,
  onActionComplete
}: LeadActionModalProps) {
  const [notes, setNotes] = useState('');
  const [nextActionDate, setNextActionDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(lead.status);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState({
    street: '',
    postalCode: '',
    city: '',
    additionalInfo: ''
  });

  const validateForm = () => {
    if (!selectedStatus) {
      setError('Veuillez sélectionner un statut');
      return false;
    }

    if ((selectedStatus === 'MEETING_SCHEDULED' || selectedStatus === 'TECHNICAL_VISIT') && !nextActionDate) {
      setError('Veuillez sélectionner une date pour le rendez-vous');
      return false;
    }

    if ((selectedStatus === 'MEETING_SCHEDULED' || selectedStatus === 'TECHNICAL_VISIT') && 
        (!address.street || !address.postalCode || !address.city)) {
      setError('Veuillez remplir l\'adresse complète pour le rendez-vous');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Préparation des données pour l'API
      const updateData = {
        status: selectedStatus,
        notes: notes.trim(),
        nextAction: nextActionDate ? {
          date: nextActionDate,
          address: (selectedStatus === 'MEETING_SCHEDULED' || selectedStatus === 'TECHNICAL_VISIT') ? {
            street: address.street,
            postalCode: address.postalCode,
            city: address.city,
            additionalInfo: address.additionalInfo
          } : undefined
        } : undefined
      };

      // Appel API pour mettre à jour le lead
      const response = await fetch(`/api/leads/${lead._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update lead');
      }

      const updatedLead = await response.json();

      // Si c'est un rendez-vous, créer l'événement dans le calendrier
      if ((selectedStatus === 'MEETING_SCHEDULED' || selectedStatus === 'TECHNICAL_VISIT') && nextActionDate) {
        try {
          await createCalendarEvent(selectedStatus, nextActionDate);
        } catch (calendarError) {
          console.error('Error creating calendar event:', calendarError);
          // On continue même si la création de l'événement calendrier échoue
        }
      }

      onActionComplete();
      onClose();
    } catch (error) {
      console.error('Error updating lead:', error);
      setError(error instanceof Error ? error.message : 'Une erreur est survenue lors de la mise à jour');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAvailableStatuses = () => {
    return STATUS_TRANSITIONS[lead.status as keyof typeof STATUS_TRANSITIONS] || [];
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                      onClick={onClose}
                    >
                      <span className="sr-only">Fermer</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Mettre à jour le statut
                      </Dialog.Title>

                      {error && (
                        <div className="mt-2 rounded-md bg-red-50 p-4">
                          <div className="text-sm text-red-700">{error}</div>
                        </div>
                      )}

                      <div className="mt-4 space-y-4">
                        {/* Sélection du statut */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Nouveau statut
                          </label>
                          <select
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            required
                          >
                            <option value="">Sélectionner un statut</option>
                            {getAvailableStatuses().map((status) => (
                              <option key={status} value={status}>
                                {ACTION_LABELS[status as keyof typeof ACTION_LABELS]}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Notes */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Notes
                          </label>
                          <textarea
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                          />
                        </div>

                        {/* Date du prochain rendez-vous */}
                        {(selectedStatus === 'MEETING_SCHEDULED' || selectedStatus === 'TECHNICAL_VISIT') && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Date et heure du rendez-vous
                              </label>
                              <input
                                type="datetime-local"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                value={nextActionDate}
                                onChange={(e) => setNextActionDate(e.target.value)}
                                required
                              />
                            </div>

                            {/* Adresse */}
                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-gray-700">
                                Adresse du rendez-vous
                              </label>
                              <input
                                type="text"
                                placeholder="Rue"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                value={address.street}
                                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                                required
                              />
                              <div className="grid grid-cols-2 gap-2">
                                <input
                                  type="text"
                                  placeholder="Code postal"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                  value={address.postalCode}
                                  onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                                  required
                                />
                                <input
                                  type="text"
                                  placeholder="Ville"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                  value={address.city}
                                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                  required
                                />
                              </div>
                              <input
                                type="text"
                                placeholder="Complément d'adresse (optionnel)"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                value={address.additionalInfo}
                                onChange={(e) => setAddress({ ...address, additionalInfo: e.target.value })}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Mise à jour...' : 'Mettre à jour'}
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={onClose}
                    >
                      Annuler
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </form>
      </Dialog>
    </Transition.Root>
  );
}
