import React, { useState } from "react";

const ActionsModal = ({ lead, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    date: "",
    notes: "",
    images: null, // Pour les images des étapes spécifiques
    additionalField: "", // Champs supplémentaires pour certaines étapes
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: lead.id });
    onClose();
  };

  const renderActions = () => {
    switch (lead.status) {
      case "Nouveau contact":
        return (
          <>
            <label className="block mb-2">Action :</label>
            <select
              name="additionalField"
              value={formData.additionalField}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">Sélectionnez une action</option>
              <option value="Rdv fixé">Rdv fixé</option>
              <option value="Replanifier">Replanifier</option>
              <option value="Non intéressé">Non intéressé</option>
            </select>
          </>
        );
      case "RDV Client":
        return (
          <>
            <label className="block mb-2">Action :</label>
            <select
              name="additionalField"
              value={formData.additionalField}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">Sélectionnez une action</option>
              <option value="Devis signé">Devis signé</option>
              <option value="Deuxième RDV">Deuxième RDV</option>
              <option value="Client pas intéressé">Client pas intéressé</option>
            </select>
          </>
        );
      case "Visite technique":
        return (
          <>
            <label className="block mb-2">Action :</label>
            <select
              name="additionalField"
              value={formData.additionalField}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">Sélectionnez une action</option>
              <option value="Visite technique OK">Visite technique OK</option>
              <option value="Échec visite technique">Échec visite technique</option>
            </select>
          </>
        );
      case "Démarche administrative":
        return (
          <>
            <label className="block mb-2">Action :</label>
            <select
              name="additionalField"
              value={formData.additionalField}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">Sélectionnez une action</option>
              <option value="En cours (Mairie)">En cours (Mairie)</option>
              <option value="Validé (Mairie)">Validé (Mairie)</option>
              <option value="Échec (Mairie)">Échec (Mairie)</option>
            </select>
          </>
        );
      case "Pose":
        return (
          <>
            <label className="block mb-2">Action :</label>
            <select
              name="additionalField"
              value={formData.additionalField}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">Sélectionnez une action</option>
            
              <option value="Définir date pose">Définir la date de la pose</option>
            </select>
          </>
        );
      case "CONSUEL":
        return (
          <>
            <label className="block mb-2">Action :</label>
            <select
              name="additionalField"
              value={formData.additionalField}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">Sélectionnez une action</option>
              <option value="Demande à faire">Demande à faire</option>
              <option value="En cours">En cours</option>
              <option value="Validé">Validé</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Actions sur le client</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderActions()}
          <div>
            <label className="block text-gray-700">Date :</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Notes :</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            ></textarea>
          </div>
          {lead.status === "Visite technique" &&
            formData.additionalField === "Visite technique OK" && (
              <div>
                <label className="block text-gray-700">
                  Charger des images (3 max) :
                </label>
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Sauvegarder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActionsModal;
