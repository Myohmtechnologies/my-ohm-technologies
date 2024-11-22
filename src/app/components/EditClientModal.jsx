import { useState } from 'react';

export default function EditClientModal({ client, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState(client || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Modifier le client</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="nom"
            value={formData.nom || ''}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="telephone"
            value={formData.telephone || ''}
            onChange={handleChange}
            placeholder="Téléphone"
            className="w-full p-2 border rounded"
          />
          <select
            name="status"
            value={formData.status || 'Nouveau contact'}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Nouveau contact">Nouveau contact</option>
            <option value="RDV fixé">RDV fixé</option>
            <option value="Devis signé">Devis signé</option>
            <option value="Visite technique">Visite technique</option>
          </select>
        </div>
        <div className="mt-4 flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
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
