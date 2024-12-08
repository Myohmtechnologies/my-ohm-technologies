'use client';

import { useState } from 'react';
import { Lead } from '@/types';
import LeadActionModal from './LeadActionModal';
import LeadDetailsModal from './LeadDetailsModal';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface LeadsTableProps {
  leads: Lead[];
  onLeadUpdate: () => void;
}

const STATUS_LABELS = {
  NEW: 'Nouveau',
  CONTACTED: 'Contacté',
  MEETING_SCHEDULED: 'RDV Fixé',
  TECHNICAL_VISIT: 'Visite Technique',
  CONTRACT_SIGNED: 'Contrat Signé',
  INSTALLATION: 'Installation',
  COMPLETED: 'Terminé',
  NOT_INTERESTED: 'Pas Intéressé',
};

const STATUS_COLORS = {
  NEW: 'bg-blue-100 text-blue-800',
  CONTACTED: 'bg-yellow-100 text-yellow-800',
  MEETING_SCHEDULED: 'bg-purple-100 text-purple-800',
  TECHNICAL_VISIT: 'bg-indigo-100 text-indigo-800',
  CONTRACT_SIGNED: 'bg-green-100 text-green-800',
  INSTALLATION: 'bg-orange-100 text-orange-800',
  COMPLETED: 'bg-gray-100 text-gray-800',
  NOT_INTERESTED: 'bg-red-100 text-red-800',
};

export default function LeadsTable({ leads, onLeadUpdate }: LeadsTableProps) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleActionClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsActionModalOpen(true);
  };

  const handleDetailsClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsDetailsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsActionModalOpen(false);
    setIsDetailsModalOpen(false);
    setSelectedLead(null);
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Nom
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Téléphone
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Statut
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {leads.map((lead) => (
                  <tr key={lead._id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {lead.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lead.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lead.phone}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${STATUS_COLORS[lead.status]}`}>
                        {STATUS_LABELS[lead.status]}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <span className="sr-only">Ouvrir les options</span>
                            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => handleDetailsClick(lead)}
                                    className={`
                                      ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                                      block w-full px-4 py-2 text-left text-sm
                                    `}
                                  >
                                    Fiche client
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => handleActionClick(lead)}
                                    className={`
                                      ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                                      block w-full px-4 py-2 text-left text-sm
                                    `}
                                  >
                                    Gérer le statut
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedLead && (
        <>
          <LeadActionModal
            isOpen={isActionModalOpen}
            onClose={handleModalClose}
            lead={selectedLead}
            onActionComplete={() => {
              handleModalClose();
              onLeadUpdate();
            }}
          />
          <LeadDetailsModal
            isOpen={isDetailsModalOpen}
            onClose={handleModalClose}
            lead={selectedLead}
          />
        </>
      )}
    </div>
  );
}
