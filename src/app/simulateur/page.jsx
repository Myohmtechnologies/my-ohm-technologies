"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import "../../styles/simulateur.css";

// Constantes pour les étapes et les factures d'énergie
const STEPS = {
  PROPERTY_TYPE: 1,
  ENERGY_BILL: 2,
  CONTACT_INFO: 3
};

const ENERGY_BILL_RANGES = [
  { label: "moins de 80€ par mois", value: "<80€", annual: "960€ par an" },
  { label: "de 85€ à 165€ par mois", value: "85€-165€", annual: "1020€ - 1980€ par an" },
  { label: "plus de 165€ par mois", value: ">165€", annual: "1980€+ par an" },
];

const SimulateurPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(STEPS.PROPERTY_TYPE);
  const [formState, setFormState] = useState({
    residentialStatus: "",
    ownershipType: "",
    energyBill: "",
    name: "",
    email: "",
    phone: "",
    isSubmitting: false,
    error: null
  });

  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get("residential_status");
    if (status) {
      setFormState(prev => ({ ...prev, residentialStatus: status }));
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          residentialStatus: formState.residentialStatus,
          ownershipType: formState.ownershipType,
          energyBill: formState.energyBill,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      router.push("/merci");
    } catch (error) {
      console.error("Erreur:", error);
      setFormState(prev => ({
        ...prev,
        error: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer."
      }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  const handleNextStep = () => setCurrentStep(prev => prev + 1);

  const updateFormState = (key, value) => {
    setFormState(prev => ({ ...prev, [key]: value }));
  };

  const renderProgressBar = () => (
    <div className="progress-container">
      <p className="step-indicator">Étape {currentStep}/3</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(currentStep / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  const renderPropertyTypeStep = () => (
    <div className="step-container property-type">
      <h2>S&apos;agissant de votre logement, vous êtes ?</h2>
      <div className="buttons-container">
        {[
          { type: "Propriétaire", icon: "/images/svg/Group 2085663187.svg" },
          { type: "Locataire", icon: "/images/svg/Group 2085663187 (1).svg" }
        ].map(({ type, icon }) => (
          <button
            key={type}
            onClick={() => {
              updateFormState("ownershipType", type);
              handleNextStep();
            }}
            className="property-button"
          >
            <Image src={icon} alt={type} width={50} height={50} />
            <span>{type}</span>
            <Image
              src="/images/svg/icons8-flèche-50.png"
              alt="Flèche"
              width={20}
              height={20}
              className="arrow-icon"
            />
          </button>
        ))}
      </div>
    </div>
  );

  const renderEnergyBillStep = () => (
    <div className="step-container energy-bill">
      <h2>Quel est le montant de votre facture d&apos;énergie ?</h2>
      <div className="energy-buttons-container">
        {ENERGY_BILL_RANGES.map((range) => (
          <button
            key={range.value}
            onClick={() => {
              updateFormState("energyBill", range.value);
              handleNextStep();
            }}
            className="energy-button"
          >
            <span className="monthly-amount">{range.label}</span>
            <span className="annual-price">{range.annual}</span>
            <Image
              src="/images/svg/icons8-flèche-50.png"
              alt="Flèche"
              width={20}
              height={20}
              className="arrow-icon"
            />
          </button>
        ))}
      </div>
    </div>
  );

  const renderContactForm = () => (
    <div className="step-container contact-form">
      <h2>À qui devons-nous envoyer la simulation ?</h2>
      <form onSubmit={handleFormSubmit}>
        {formState.error && (
          <div className="error-message">{formState.error}</div>
        )}
        {["name", "email", "phone"].map((field) => (
          <div key={field} className="form-group">
            <label htmlFor={field}>
              {field === "name" ? "Nom" : field === "email" ? "Email" : "Téléphone"}
            </label>
            <input
              id={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              value={formState[field]}
              onChange={(e) => updateFormState(field, e.target.value)}
              required
              disabled={formState.isSubmitting}
            />
          </div>
        ))}
        <button
          type="submit"
          className="submit-button"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case STEPS.PROPERTY_TYPE:
        return renderPropertyTypeStep();
      case STEPS.ENERGY_BILL:
        return renderEnergyBillStep();
      case STEPS.CONTACT_INFO:
        return renderContactForm();
      default:
        return null;
    }
  };

  return (
    <><div className="simulateur-page">
      <header className="hero-header">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo-ohm.png"
              alt="Logo OHM Technologies"
              width={150}
              height={50} 
            />
          </Link>
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
                  setFormState(prev => ({ ...prev, ownershipType: "Propriétaire" }));
                  handleNextStep();
                } }
              >
                <Image
                  src="/images/svg/Group 2085663187.svg"
                  alt="Propriétaire"
                  width={50}
                  height={50} 
                />
                Propriétaire
                <Image
                  src="/images/svg/icons8-flèche-50.png"
                  alt="Flèche"
                  width={20}
                  height={20} 
                />
              </button>
              <button
                onClick={() => {
                  setFormState(prev => ({ ...prev, ownershipType: "Locataire" }));
                  handleNextStep();
                } }
              >
                <Image
                  src="/images/svg/Group 2085663187 (1).svg"
                  alt="Locataire"
                  width={50}
                  height={50} 
                />
                Locataire
                <Image
                  src="/images/svg/icons8-flèche-50.png"
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
                    setFormState(prev => ({ ...prev, energyBill: range.value }));
                    handleNextStep();
                  } }
                  className="energy-button"
                >
                  <span className="monthly-amount">{range.label}</span>
                  <span className="annual-price">{range.annual}</span>
                  <Image
                    src="/images/svg/icons8-flèche-50.png"
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
              <h3>Montant sélectionné : {formState.energyBill}</h3>
              <h2>À qui devons-nous envoyer la simulation ?</h2>
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <label>Nom</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Numéro de téléphone</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                    required 
                  />
                </div>

                <button type="submit" className="submit-btn">
                  j&apos;obtiens ma simulation personnalisée
                </button>
              </form>
            </div>
          )}

          <div className="phone-number">
            <Image
              src="/images/svg/material-symbols_call.svg"
              alt="Téléphone"
              width={24}
              height={24} 
            />
            <Link href="tel:0184606125">01 84 60 61 25</Link>
          </div>
        </div>
      </div>
      <main className="simulateur-container">
        <div className="form-section">
          <h1>Estimation de votre projet solaire en 1 minute</h1>
          {renderProgressBar()}
          {renderCurrentStep()}
        </div>
        <div className="image-section">
          <Image
            src="/images/right-simulation.png"
            alt="Simulation d'énergie solaire"
            width={600}
            height={400}
            priority
          />
        </div>
      </main>
    </div>
  );
};

export default SimulateurPage;
