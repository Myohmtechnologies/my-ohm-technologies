'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import "../styles/simulateur.css";

// Constantes pour les étapes et les factures d'énergie
const STEPS = {
  PROPERTY_TYPE: 1,
  ENERGY_BILL: 2,
  CONTACT_INFO: 3
};

const ENERGY_BILL_RANGES = [
  { 
    label: "moins de 80€ par mois",
    value: "<80€",
    annual: "960€ par an",
    savings: "~380€ par an",
    co2: "~750kg par an"
  },
  { 
    label: "de 85€ à 165€ par mois",
    value: "85€-165€",
    annual: "1020€ - 1980€ par an",
    savings: "~720€ par an",
    co2: "~1200kg par an"
  },
  { 
    label: "plus de 165€ par mois",
    value: ">165€",
    annual: "1980€+ par an",
    savings: "~1100€ par an",
    co2: "~1800kg par an"
  },
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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get("residential_status");
    if (status) {
      setFormState(prev => ({ ...prev, residentialStatus: status }));
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
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

  const validateForm = () => {
    const errors = [];
    if (!formState.name.trim()) errors.push("Le nom est requis");
    if (!formState.email.trim()) errors.push("L'email est requis");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.push("L'email n'est pas valide");
    }
    if (!formState.phone.trim()) errors.push("Le téléphone est requis");
    if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(formState.phone)) {
      errors.push("Le numéro de téléphone n'est pas valide");
    }

    if (errors.length > 0) {
      setFormState(prev => ({
        ...prev,
        error: errors.join(", ")
      }));
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

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
      <div className="step-titles">
        <span className={currentStep >= 1 ? 'active' : ''}>Type de logement</span>
        <span className={currentStep >= 2 ? 'active' : ''}>Consommation</span>
        <span className={currentStep >= 3 ? 'active' : ''}>Contact</span>
      </div>
    </div>
  );

  const renderPropertyTypeStep = () => (
    <div className={`step-container property-type ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      <h2>S&apos;agissant de votre logement, vous êtes ?</h2>
      <div className="buttons-container">
        {[
          { type: "Propriétaire", icon: "/images/svg/Group 2085663187.svg", description: "Propriétaire de votre logement" },
          { type: "Locataire", icon: "/images/svg/Group 2085663187 (1).svg", description: "Locataire de votre logement" }
        ].map(({ type, icon, description }) => (
          <button
            key={type}
            onClick={() => {
              updateFormState("ownershipType", type);
              handleNextStep();
            }}
            className="property-button"
          >
            <div className="button-content">
              <Image src={icon} alt={type} width={50} height={50} />
              <div className="button-text">
                <span className="button-title">{type}</span>
                <span className="button-description">{description}</span>
              </div>
            </div>
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
    <div className={`step-container energy-bill ${isAnimating ? 'fade-out' : 'fade-in'}`}>
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
            <div className="energy-info">
              <span className="monthly-amount">{range.label}</span>
              <span className="annual-price">{range.annual}</span>
              <div className="savings-info">
                <div className="savings-item">
                  <Image src="/images/svg/savings.svg" alt="Économies" width={20} height={20} />
                  <span>Économies potentielles: {range.savings}</span>
                </div>
                <div className="savings-item">
                  <Image src="/images/svg/eco.svg" alt="CO2" width={20} height={20} />
                  <span>Réduction CO2: {range.co2}</span>
                </div>
              </div>
            </div>
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
      <button onClick={handlePreviousStep} className="back-button">
        <Image
          src="/images/svg/arrow-left.svg"
          alt="Retour"
          width={20}
          height={20}
        />
        Retour
      </button>
    </div>
  );

  const renderContactForm = () => (
    <div className={`step-container contact-form ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      <h2>À qui devons-nous envoyer la simulation ?</h2>
      <form onSubmit={handleFormSubmit}>
        {formState.error && (
          <div className="error-message">{formState.error}</div>
        )}
        {[
          { field: "name", label: "Nom", type: "text", placeholder: "Votre nom complet" },
          { field: "email", label: "Email", type: "email", placeholder: "exemple@email.com" },
          { field: "phone", label: "Téléphone", type: "tel", placeholder: "06 12 34 56 78" }
        ].map(({ field, label, type, placeholder }) => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{label}</label>
            <input
              id={field}
              type={type}
              value={formState[field]}
              onChange={(e) => updateFormState(field, e.target.value)}
              placeholder={placeholder}
              required
              disabled={formState.isSubmitting}
              className={formState[field] ? 'filled' : ''}
            />
          </div>
        ))}
        <div className="form-actions">
          <button
            type="button"
            onClick={handlePreviousStep}
            className="back-button"
            disabled={formState.isSubmitting}
          >
            <Image
              src="/images/svg/arrow-left.svg"
              alt="Retour"
              width={20}
              height={20}
            />
            Retour
          </button>
          <button
            type="submit"
            className="submit-button"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <>
                <span className="spinner"></span>
                Envoi en cours...
              </>
            ) : (
              'Obtenir ma simulation'
            )}
          </button>
        </div>
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
      <div className="sim-header">
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
      <div className="simulateur-container">
        {renderProgressBar()}
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default SimulateurPage;
