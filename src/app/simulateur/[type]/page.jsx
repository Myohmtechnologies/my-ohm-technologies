// src/app/simulateur/[type]/page.jsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation'; // Utilisez useSearchParams
import { useEffect, useState } from 'react';
import '../../../styles/simulateur.css';

const SimulateurPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Récupérer les paramètres de recherche
  const residential_status = searchParams.get('residential_status'); // Récupérer le statut résidentiel

  const [selectedOwnership, setSelectedOwnership] = useState('');
  const [energyBill, setEnergyBill] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Vérifie si le statut résidentiel est défini
  useEffect(() => {
    if (!residential_status) {
      router.push('/'); // Redirige vers la page d'accueil si le statut n'est pas défini
    }
  }, [residential_status, router]);

  return (
    <div className="simulateur-container">
      {residential_status && (
        <h1>{residential_status === 'OWNER' ? 'Vous êtes Propriétaire' : 'Vous êtes Locataire'}</h1>
      )}

      {/* Afficher le montant de la facture d'énergie si le statut est défini */}
      {residential_status && (
        <div>
          <h2>Quel est le montant de votre facture d'énergie ?</h2>
          <button onClick={() => setEnergyBill('100')}>100€</button>
          <button onClick={() => setEnergyBill('200')}>200€</button>
          <button onClick={() => setEnergyBill('300')}>300€</button>
        </div>
      )}

      {/* Affichage du montant de la facture d'énergie sélectionné */}
      {energyBill && (
        <div>
          <h3>Montant sélectionné : {energyBill}€</h3>
          {/* Ici, vous pouvez ajouter d'autres options ou des formulaires basés sur le montant */}
        </div>
      )}

      {/* Formulaire pour les coordonnées */}
      <div>
        <h2>Vos coordonnées</h2>
        <form onSubmit={(e) => { e.preventDefault(); console.log(formData); }}>
          <input 
            type="text" 
            placeholder="Nom" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            required 
          />
          <input 
            type="tel" 
            placeholder="Téléphone" 
            value={formData.phone} 
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
            required 
          />
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

export default SimulateurPage;
