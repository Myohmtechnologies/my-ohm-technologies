"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const SimulateurPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const residential_status = searchParams.get("residential_status");

  const [energyBill, setEnergyBill] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [coordinates, setCoordinates] = useState(null);

  // API Key pour Google Maps (remplacez par votre clé réelle)
  const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY";

  // Vérifie si le statut résidentiel est défini
  useEffect(() => {
    if (!residential_status) {
      router.push("/");
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
    }
  };

  return (
    <div className="simulateur-container">
      {residential_status && (
        <h1>
          {residential_status === "OWNER"
            ? "Vous êtes Propriétaire"
            : "Vous êtes Locataire"}
        </h1>
      )}

      {/* Étape de sélection du montant de la facture d'énergie */}
      {residential_status && (
        <div>
          <h2>Quel est le montant de votre facture d&apos;énergie ?</h2>
          <button onClick={() => setEnergyBill("100")}>100€</button>
          <button onClick={() => setEnergyBill("200")}>200€</button>
          <button onClick={() => setEnergyBill("300")}>300€</button>
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
          <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
            <Autocomplete
              onPlaceChanged={() =>
                handlePlaceSelected(window.google.maps.places.Autocomplete)
              }
            >
              <input
                type="text"
                placeholder="Entrez votre adresse"
                style={{ width: "100%", padding: "10px", fontSize: "16px" }}
              />
            </Autocomplete>
          </LoadScript>
        </div>
      )}

      {/* Affichage de l'image du toit avec une flèche */}
      {coordinates && (
        <div>
          <h3>Voici votre toit :</h3>
          <Image
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=20&size=600x400&markers=color:red|${coordinates.lat},${coordinates.lng}&key=${googleMapsApiKey}`}
            alt="Toit de votre maison"
            width={600}
            height={400}
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