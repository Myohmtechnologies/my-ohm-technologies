import React, { useState } from "react";

const AddLeadModal = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    residentialStatus: "",
    energyBill: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Ajouter un nouveau lead</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nom" required className="w-full mb-2 p-2 border rounded" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full mb-2 p-2 border rounded" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Téléphone" required className="w-full mb-2 p-2 border rounded" />
          <input name="residentialStatus" value={form.residentialStatus} onChange={handleChange} placeholder="Statut Résidentiel" required className="w-full mb-2 p-2 border rounded" />
          <input name="energyBill" value={form.energyBill} onChange={handleChange} placeholder="Facture Énergie (€)" required className="w-full mb-2 p-2 border rounded" />
          <input name="source" value={form.source} onChange={handleChange} placeholder="Source" required className="w-full mb-4 p-2 border rounded" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Enregistrer</button>
          <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Annuler</button>
        </form>
      </div>
    </div>
  );
};

export default AddLeadModal;
