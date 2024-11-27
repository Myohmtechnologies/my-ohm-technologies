// pages/simulation.js
"use client"; // Ajoutez cette ligne en haut


import { useState } from 'react';
import '../../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Simulation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Informations de contact :', formData);
    alert("Merci ! Nous avons reçu vos informations. Un commercial vous contactera bientôt.");
    // Réinitialiser le formulaire après soumission
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <><Header /><div>
<<<<<<< HEAD
          <h1>Simulation d'Énergie</h1>
=======
          <h1>Simulation d&apos;Énergie</h1>
>>>>>>> 642d8a2 (Réinitialisation du dépôt)
          <p>Merci de renseigner vos informations pour être contacté par un commercial.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
              <label>Nom :</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Email :</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>Téléphone :</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

              <button type="submit" style={{ marginTop: '10px', padding: '10px', background: '#4CAF50', color: 'white' }}>
                  Envoyer
              </button>
          </form>
      </div>
      <Footer/>
      </>
  );
}
