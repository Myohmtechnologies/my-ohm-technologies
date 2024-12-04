import React, { useState } from 'react';

export default function UpdateStatusModal({ client, isOpen, onClose, onSave, getActionsForStatus }) {
  const [selectedStatus, setSelectedStatus] = useState(client?.status || '');
  const [appointment, setAppointment] = useState(client?.appointment || {});
  const [reminderDate, setReminderDate] = useState(client?.reminderDate || '');
  const [notes, setNotes] = useState(client?.notes || []);

  const actions = getActionsForStatus(client?.status); // Récupère les actions pour le statut actuel

  const handleSubmit = () => {
    const updatedClientData = {
      status: selectedStatus,
      appointment,
      reminderDate,
      notes,
    };
    onSave(updatedClientData);
  };

  if (!isOpen || !client) {
    return null; // Ne rend rien si la modale est fermée ou si aucun client n'est sélectionné
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
        <h2 className="text-xl font-bold mb-4">Modifier le Statut de {client.name}</h2>

        {/* Sélection du Nouveau Statut */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Statut</label>
          <select
            className="border border-gray-300 rounded p-2 w-full"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Sélectionner une action</option>
            {actions.map((action) => (
              <option key={action.value} value={action.value}>
                {action.label}
              </option>
            ))}
          </select>
        </div>

        {/* Ajout d'un Rendez-vous */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Rendez-vous</label>
          <input
            type="datetime-local"
            className="border border-gray-300 rounded p-2 w-full"
            value={appointment.date || ''}
            onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
          />
          <textarea
            className="border border-gray-300 rounded p-2 w-full mt-2"
            placeholder="Notes du rendez-vous"
            value={appointment.notes || ''}
            onChange={(e) => setAppointment({ ...appointment, notes: e.target.value })}
          />
        </div>

        {/* Ajout d'une Date de Rappel */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date de Rappel</label>
          <input
            type="datetime-local"
            className="border border-gray-300 rounded p-2 w-full"
            value={reminderDate || ''}
            onChange={(e) => setReminderDate(e.target.value)}
          />
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Notes</label>
          <textarea
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Ajouter des notes"
            value={notes.join('\n')}
            onChange={(e) => setNotes(e.target.value.split('\n'))}
          />
        </div>

        {/* Boutons */}
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClose}>
            Annuler
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
