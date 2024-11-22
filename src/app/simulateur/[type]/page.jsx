// src/app/simulateur/[type]/page.jsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import '../../../styles/simulateur.css';

const SimulateurPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const residential_status = searchParams.get('residential_status');

  const [selectedOwnership, setSelectedOwnership] = useState('');
  const [energyBill, setEnergyBill] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // API Key pour Google Maps (assurez-vous de remplacer par votre propre clé)
  const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

  // Vérifie si le statut résidentiel est défini
  useEffect(() => {
    if (!residential_status) {
      router.push('/');
    }
  }, [residential_status, router]);

  // Fonction pour gérer la sélection d'adresse
  const handlePlaceSelected = (autocomplete) => {
    const place = autocomplete.getPlace();
    const location = place.geometry?.location;
    if (location) {
      setCoordinates({
        lat: location.lat(),
        lng: location.lng(),
      });
      setAddress(place.formatted_address);
    }
  };

  return (
    <div className="simulateur-container">
      {residential_status && (
        <h1>{residential_status === 'OWNER' ? 'Vous êtes Propriétaire' : 'Vous êtes Locataire'}</h1>
      )}

      {/* Étape de sélection du montant de la facture d'énergie */}
      {residential_status && (
        <div>
          <h2>Quel est le montant de votre facture d'énergie ?</h2>
          <button onClick={() => setEnergyBill('100')}>100€</button>
          <button onClick={() => setEnergyBill('200')}>200€</button>
          <button onClick={() => setEnergyBill('300')}>300€</button>
        </div>
      )}

      {/* Affichage du montant sélectionné */}
      {energyBill && (
        <div>
          <h3>Montant sélectionné : {energyBill}€</h3>
        </div>
      )}

      {/* Nouvelle étape : Saisie de l'adresse avec autosaisie */}
      {energyBill && (
        <div>
          <h2>Entrez votre adresse pour la simulation</h2>
          <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={['places']}>
            <Autocomplete onLoad={(autocomplete) => setMapLoaded(true)} onPlaceChanged={() => handlePlaceSelected(autocomplete)}>
              <input
                type="text"
                placeholder="Entrez votre adresse"
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </Autocomplete>
          </LoadScript>
        </div>
      )}

      {/* Affichage de l'image du toit avec une flèche */}
      {coordinates && (
        <div>
          <h3>Voici votre toit :</h3>
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=20&size=600x400&markers=color:red|${coordinates.lat},${coordinates.lng}&key=${googleMapsApiKey}`}
            alt="Toit de votre maison"
            style={{ border: '1px solid #ddd', borderRadius: '8px', marginTop: '10px' }}
          />
        </div>
      )}

      {/* Formulaire pour les coordonnées */}
      <div>
        <h2>Vos coordonnées</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
          }}
        >
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
