import React, { useState } from "react";

const ActionsModal = ({ lead, onClose, onSave }) => {
  const [selectedAction, setSelectedAction] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [ setFile] = useState(null);

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
      { value: "Démarche en cours", label: "Marquer comme en cours", requires: ["file", "notes"] },
      { value: "Démarche réussie", label: "Démarche réussie", requires: ["notes"] },
      { value: "Démarche échouée", label: "Démarche échouée", requires: ["notes"] },
    ],
    Pose: [
      { value: "Pose à faire", label: "Planifier une pose", requires: ["date"] },
      { value: "Pose réalisée", label: "Marquer la pose comme réalisée", requires: ["notes"] },
    ],
    Consuel: [
      { value: "Demande consuel", label: "Demande consuel", requires: ["notes"] },
      { value: "Consuel validé", label: "Consuel validé", requires: ["file", "notes"] },
      { value: "Consuel échoué", label: "Consuel échoué", requires: ["notes"] },
    ],
    "Raccordement EDF": [
      { value: "Demande raccordement", label: "Faire une demande de raccordement", requires: ["notes"] },
      { value: "Raccordement réalisé", label: "Raccordement réalisé", requires: ["notes"] },
    ],
  };

  const availableActions = actionsByStatus[lead.status] || [];

  const handleActionChange = (e) => {
    setSelectedAction(e.target.value);
    setDate("");
    setNotes("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSaveClick = () => {
    if (!selectedAction) {
      alert("Veuillez sélectionner une action.");
      return;
    }

    const requiredFields = availableActions.find((action) => action.value === selectedAction)?.requires || [];

    if (requiredFields.includes("date") && !date) {
      alert("Veuillez renseigner une date.");
      return;
    }

    if (requiredFields.includes("notes") && !notes) {
      alert("Veuillez renseigner un compte rendu.");
      return;
    }

    const updatedLead = {
      id: lead.id,
      status: selectedAction,
      notes: {
        content: notes,
        date: date,
      },
    };

    console.log("Données envoyées au backend :", updatedLead); // LOG ICI
    onSave(updatedLead);
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
                <option key={action.value} value={action.value}>
                  {action.label}
                </option>
              ))}
            </select>

            {selectedAction &&
              availableActions.find((action) => action.value === selectedAction)?.requires.includes("date") && (
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

            {selectedAction &&
              availableActions.find((action) => action.value === selectedAction)?.requires.includes("notes") && (
                <div className="mb-4">
                  <label htmlFor="notes" className="block mb-2">
                    Compte rendu :
                  </label>
                  <textarea
                    id="notes"
                    className="border p-2 rounded w-full"
                    value={notes} // Assurez-vous que cet état est correctement mis à jour
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />

                </div>
              )}

            {selectedAction &&
              availableActions.find((action) => action.value === selectedAction)?.requires.includes("file") && (
                <div className="mb-4">
                  <label htmlFor="file" className="block mb-2">
                    Fichier :
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="border p-2 rounded w-full"
                    onChange={handleFileChange}
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
