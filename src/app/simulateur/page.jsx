"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../../styles/simulateur.css";

const SimulateurPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [residentialStatus, setResidentialStatus] = useState("");
  const [ownershipType, setOwnershipType] = useState(null);
  const [energyBill, setEnergyBill] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get(
      "residential_status"
    );
    if (status) {
      setResidentialStatus(status); // Si le statut est présent, on le sauvegarde
    }
    // Si le statut est absent, aucune redirection n'a lieu
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      residentialStatus,
      ownershipType,
      energyBill,
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/merci");
      } else {
        console.error("Erreur lors de l'enregistrement des données");
      }
    } catch (error) {
      console.error("Erreur de requête :", error);
    }
  };

  const ENERGY_BILL_RANGES = [
    { label: "moins de 80€ par mois", value: "<80€", annual: "960€ par an" },
    { label: "de 85€ à 165€ par mois", value: "85€-165€", annual: "1020€ - 1980€ par an" },
    { label: "plus de 165€ par mois", value: ">165€", annual: "1980€+ par an" },
  ];

  // Avancer à l'étape suivante
  const handleNextStep = () => setCurrentStep(currentStep + 1);

  return (
    <>
      {/* Header */}
      <header className="hero-header">
        <div className="logo">
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Logo MY OHM"
              width={150}
              height={50}
            />
          </a>
        </div>
      </header>

      <div className="simulateur-container">
        <div className="form-section">
          <h3>Estimation de votre projet solaire en 1 minute</h3>
          <p>Étape {currentStep}/3</p>

          {/* Barre de progression */}
          <div className="progress-bar">
            <div
              style={{ width: `${(currentStep / 3) * 100}%` }}
              className="progress"
            ></div>
          </div>

          {/* Étape 1 : Sélection du type de propriété */}
          {currentStep === 1 && (
            <div>
              <h2>S&apos;agissant de votre logement, vous êtes ?</h2>
              <button
                onClick={() => {
                  setOwnershipType("Propriétaire");
                  handleNextStep();
                }}
              >
                <Image
                  src="/images/svg/Group 2085663187.svg"
                  alt="Propriétaire"
                  width={50}
                  height={50}
                />
                Propriétaire
                <Image
                  src="/images/svg/icons8-flèche-50.png"
                  alt="Flèche"
                  width={20}
                  height={20}
                />
              </button>
              <button
                onClick={() => {
                  setOwnershipType("Locataire");
                  handleNextStep();
                }}
              >
                <Image
                  src="/images/svg/Group 2085663187 (1).svg"
                  alt="Locataire"
                  width={50}
                  height={50}
                />
                Locataire
                <Image
                  src="/images/svg/icons8-flèche-50.png"
                  alt="Flèche"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}

          {/* Étape 2 : Sélection du montant de la facture d'énergie */}
          {currentStep === 2 && (
            <div>
              <h3>Quel est le montant de votre facture d&apos;énergie ?</h3>
              {ENERGY_BILL_RANGES.map((range) => (
                <button
                  key={range.value}
                  onClick={() => {
                    setEnergyBill(range.value);
                    handleNextStep();
                  }}
                  className="energy-button"
                >
                  <span className="monthly-amount">{range.label}</span>
                  <span className="annual-price">{range.annual}</span>
                  <Image
                    src="/images/svg/icons8-flèche-50.png"
                    alt="Flèche"
                    width={20}
                    height={20}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Étape 3 : Formulaire de contact */}
          {currentStep === 3 && (
            <div>
              <h3>Montant sélectionné : {energyBill}</h3>
              <h2>À qui devons-nous envoyer la simulation ?</h2>
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <label>Nom</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Numéro de téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  j&apos;obtiens ma simulation personnalisée
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="image-section">
          <Image
            src="/images/right-simulation.png"
            alt="Simulation d&apos;énergie solaire"
            width={600}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default SimulateurPage;
