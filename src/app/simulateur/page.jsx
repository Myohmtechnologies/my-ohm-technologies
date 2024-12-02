'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import Header from "../components/Header";
import "../styles/simulateur.css";

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
    <div className="simulateur-page">
      <Header />
      <div className="simulateur-container">
        <div className="logo-container">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Logo MY OHM" 
              width={150} 
              height={150}
              priority 
            />
          </Link>
        </div>
        {renderProgressBar()}
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default SimulateurPage;
