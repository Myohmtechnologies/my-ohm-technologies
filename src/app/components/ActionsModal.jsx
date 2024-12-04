import React, { useState } from "react";

const ActionsModal = ({ lead, onClose, onSave }) => {
  const [selectedAction, setSelectedAction] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  // Étapes et actions possibles
  const actionsByStatus = {
    Nouveau: [
      { value: "RDV fixé", label: "Fixer un RDV", requires: ["date", "notes"] },
      { value: "Replanifier un RDV", label: "Replanifier un RDV", requires: ["date", "notes"] },
      { value: "Non intéressé", label: "Non intéressé", requires: ["notes"] },
    ],
    "RDV fixé": [
      { value: "Devis signé", label: "Devis signé", requires: ["notes"] },
      { value: "Deuxième RDV", label: "Deuxième RDV", requires: ["date", "notes"] },
      { value: "Client non intéressé", label: "Client non intéressé", requires: ["notes"] },
    ],
    "Devis signé": [
      { value: "Visite technique", label: "Planifier une visite technique", requires: ["date", "notes"] },
    ],
    "Visite technique": [
      { value: "Problème technique", label: "Problème technique", requires: ["notes"] },
      { value: "Démarches administratives", label: "Passer aux démarches administratives", requires: ["notes"] },
    ],
    "Démarches administratives": [
      { value: "Démarche en cours", label: "Marquer comme en cours", requires: ["notes"] },
      { value: "Démarche réussie", label: "Démarche réussie", requires: ["notes"] },
      { value: "Démarche échouée", label: "Démarche échouée", requires: ["notes"] },
    ],
    Pose: [
      { value: "Pose à faire", label: "Planifier une pose", requires: ["date"] },
      { value: "Pose réalisée", label: "Marquer la pose comme réalisée", requires: ["notes"] },
    ],
    Consuel: [
      { value: "Demande consuel", label: "Demande consuel", requires: ["notes"] },
      { value: "Consuel validé", label: "Consuel validé", requires: ["notes"] },
      { value: "Consuel échoué", label: "Consuel échoué", requires: ["notes"] },
    ],
    "Raccordement EDF": [
      { value: "Demande raccordement", label: "Faire une demande de raccordement", requires: ["notes"] },
      { value: "Raccordement réalisé", label: "Raccordement réalisé", requires: ["notes"] },
      { value: "RDV fixé", label: "Fixer un RDV", requires: ["date", "time", "notes"] },
      { value: "Archive", label: "Archiver (Non intéressé)", requires: ["notes"] },
    ],
    "RDV fixé": [
      { value: "Visite technique", label: "Planifier visite technique", requires: ["date", "time", "notes"] },
      { value: "Archive", label: "Archiver (Client non intéressé)", requires: ["notes"] },
    ],
    "Visite technique": [
      { value: "Démarche administrative", label: "Passer aux démarches administratives", requires: ["notes"] },
      { value: "Archive", label: "Archiver (Problème technique)", requires: ["notes"] },
    ],
    "Démarche administrative": [
      { value: "Pose", label: "Planifier la pose", requires: ["date", "time", "notes"] },
      { value: "Archive", label: "Archiver (Démarche échouée)", requires: ["notes"] },
    ],
    "Pose": [
      { value: "CONSUEL", label: "Passer au CONSUEL", requires: ["notes"] },
      { value: "Archive", label: "Archiver (Pose impossible)", requires: ["notes"] },
    ],
    "CONSUEL": [
      { value: "Raccordement EDF", label: "Passer au raccordement EDF", requires: ["notes"] },
      { value: "Archive", label: "Archiver (CONSUEL refusé)", requires: ["notes"] },
    ],
    "Raccordement EDF": [
      { value: "Suivis", label: "Passer en suivi", requires: ["notes"] },
      { value: "Archive", label: "Archiver (Raccordement impossible)", requires: ["notes"] },
    ],
    "Suivis": [
      { value: "Archive", label: "Archiver le dossier", requires: ["notes"] },
    ],
  };

  const availableActions = actionsByStatus[lead.status] || [];

  const handleActionChange = (e) => {
    setSelectedAction(e.target.value);
    setDate("");
    setTime("");
    setNotes("");
  };

  const handleSaveClick = async () => {
    try {
      if (!selectedAction) {
        alert("Veuillez sélectionner une action.");
        return;
      }

      const requiredFields = availableActions.find((action) => action.value === selectedAction)?.requires || [];

      if (requiredFields.includes("date") && !date) {
        alert("Veuillez renseigner une date.");
        return;
      }

      if (requiredFields.includes("time") && !time) {
        alert("Veuillez renseigner une heure.");
        return;
      }

      if (requiredFields.includes("notes") && !notes) {
        alert("Veuillez renseigner un compte rendu.");
        return;
      }

      const updatedLead = {
        id: lead._id,
        status: selectedAction,
        notes: {
          content: notes,
          date: date || new Date().toISOString(),
          type: selectedAction === "Archive" ? "archive" : "action"
        },
      };

      // Mettre à jour le lead
      const updateResponse = await fetch(`/api/leads/${lead._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLead),
      });

      if (!updateResponse.ok) {
        throw new Error('Erreur lors de la mise à jour du statut');
      }

      // Si c'est un RDV, créer un événement dans le calendrier
      if (requiredFields.includes("date") && requiredFields.includes("time")) {
        try {
          const [year, month, day] = date.split('-').map(Number);
          const [hours, minutes] = time.split(':').map(Number);
          
          // Créer les dates avec les heures locales
          const startDate = new Date(Date.UTC(year, month - 1, day, hours - 2, minutes));
          // Ajouter 3 heures pour la durée du RDV
          const endDate = new Date(startDate.getTime() + (3 * 60 * 60 * 1000));

          console.log('Création événement :', {
            date: date,
            time: time,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
          });

          const calendarEvent = {
            title: `RDV - ${lead.name}`,
            start: startDate.toISOString(),
            end: endDate.toISOString(),
            status: selectedAction,
            description: notes,
            leadId: lead._id,
            leadName: lead.name,
            leadPhone: lead.phone,
            leadEmail: lead.email
          };

          const eventResponse = await fetch('/api/calendar-events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(calendarEvent),
          });

          if (!eventResponse.ok) {
            const errorData = await eventResponse.text();
            console.error('Erreur création événement:', errorData);
            throw new Error('Erreur lors de la création du rendez-vous');
          }

          const eventResult = await eventResponse.json();
          console.log('Événement créé:', eventResult);
        } catch (error) {
          console.error('Erreur création événement:', error);
          throw new Error('Erreur lors de la création du rendez-vous : ' + error.message);
        }
      }

      // Tout s'est bien passé, mettre à jour l'interface
      onSave(updatedLead);
      onClose();
    } catch (error) {
      console.error('Erreur:', error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-lg font-bold mb-4">Actions pour {lead.name}</h2>
        {availableActions.length > 0 ? (
          <>
            <label htmlFor="action-select" className="block mb-2">
              Sélectionnez une action :
            </label>
            <select
              id="action-select"
              className="border p-2 rounded w-full mb-4"
              value={selectedAction}
              onChange={handleActionChange}
            >
              <option value="">-- Choisir une action --</option>
              {availableActions.map((action) => (
                <option key={action.value} value={action.value} className={action.value === "Archive" ? "text-red-600" : ""}>
                  {action.label}
                </option>
              ))}
            </select>

            {selectedAction && availableActions.find((action) => action.value === selectedAction)?.requires.includes("date") && (
              <div className="mb-4">
                <label htmlFor="date" className="block mb-2">
                  Date :
                </label>
                <input
                  type="date"
                  id="date"
                  className="border p-2 rounded w-full"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            )}

            {selectedAction && availableActions.find((action) => action.value === selectedAction)?.requires.includes("time") && (
              <div className="mb-4">
                <label htmlFor="time" className="block mb-2">
                  Heure :
                </label>
                <input
                  type="time"
                  id="time"
                  className="border p-2 rounded w-full"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            )}

            {selectedAction && availableActions.find((action) => action.value === selectedAction)?.requires.includes("notes") && (
              <div className="mb-4">
                <label htmlFor="notes" className="block mb-2">
                  {selectedAction === "Archive" ? "Raison de l'archivage :" : "Compte rendu :"}
                </label>
                <textarea
                  id="notes"
                  className="border p-2 rounded w-full"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  placeholder={selectedAction === "Archive" ? "Veuillez indiquer la raison de l'archivage..." : "Ajoutez vos notes..."}
                />
              </div>
            )}

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSaveClick}
            >
              Sauvegarder
            </button>
          </>
        ) : (
          <p className="text-gray-600">Aucune action disponible pour ce statut : {lead.status}.</p>
        )}
        <button
          className="mt-4 text-gray-500 underline"
          onClick={onClose}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default ActionsModal;
