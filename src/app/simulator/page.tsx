'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { simulatorEvents } from '@/utils/analytics';

// Constantes pour les étapes et les factures d'énergie
const STEPS = {
  PROPERTY_TYPE: 1,
  ENERGY_BILL: 2,
  EQUIPMENT: 3,
  CONTACT_INFO: 4
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

const EQUIPMENT_OPTIONS = [
  {
    id: 'heatpump',
    label: 'Pompe à chaleur',
    icon: '🌡️',
    description: 'Chauffage et eau chaude'
  },
  {
    id: 'ac',
    label: 'Climatisation',
    icon: '❄️',
    description: 'Rafraîchissement en été'
  },
  {
    id: 'airconditioner',
    label: 'Air conditionné',
    icon: '🌪️',
    description: 'Climatisation fixe'
  },
  {
    id: 'evcharger',
    label: 'Borne de recharge',
    icon: '🔌',
    description: 'Pour véhicule électrique'
  },
  {
    id: 'pool',
    label: 'Piscine',
    icon: '🏊‍♂️',
    description: 'Filtration et chauffage'
  },
  {
    id: 'electricheater',
    label: 'Radiateurs électriques',
    icon: '♨️',
    description: 'Chauffage électrique'
  }
];

// Validation des données
const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone: string): boolean => {
  const re = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return re.test(phone);
};

const validateName = (name: string): boolean => {
  return name.length >= 2;
};

const SimulateurPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(STEPS.PROPERTY_TYPE);
  const [formState, setFormState] = useState({
    residentialStatus: "",
    ownershipType: "",
    logementType: "",
    equipment: [] as string[],
    energyBill: "",
    name: "",
    email: "",
    phone: "",
    isSubmitting: false,
    error: "",
    validationErrors: {
      name: "",
      email: "",
      phone: ""
    }
  });

  // Préchargement des images
  useEffect(() => {
    simulatorEvents.simulatorStart('direct');
    simulatorEvents.stepView('property_type');
    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    [
      '/images/maison.svg',
      '/images/appart.svg',
      '/images/logo.png'
    ].forEach(preloadImage);
  }, []);

  const handlePropertyTypeSelect = (type: string) => {
    setFormState(prev => ({ ...prev, logementType: type }));
    simulatorEvents.stepComplete('property_type', { property_type: type });
    setCurrentStep(STEPS.ENERGY_BILL);
    simulatorEvents.stepView('energy_bill');
  };

  const toggleEquipment = (equipmentId: string) => {
    setFormState(prev => {
      const equipment = [...prev.equipment];
      const index = equipment.indexOf(equipmentId);
      if (index === -1) {
        equipment.push(equipmentId);
      } else {
        equipment.splice(index, 1);
      }
      simulatorEvents.equipmentSelected(equipment);
      return { ...prev, equipment };
    });
  };

  const handleEquipmentNext = () => {
    simulatorEvents.stepComplete('equipment', { equipment: formState.equipment });
    setCurrentStep(STEPS.CONTACT_INFO);
    simulatorEvents.stepView('contact');
  };

  const handleEnergyBillSelect = (range: string) => {
    setFormState(prev => ({ ...prev, energyBill: range }));
    simulatorEvents.stepComplete('energy_bill', { energy_bill: range });
    setCurrentStep(STEPS.EQUIPMENT);
    simulatorEvents.stepView('equipment');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => {
      const newState = { ...prev, [name]: value };
      
      // Validation en temps réel
      const validationErrors = { ...prev.validationErrors };
      
      switch (name) {
        case 'email':
          validationErrors.email = validateEmail(value) ? "" : "Email invalide";
          break;
        case 'phone':
          validationErrors.phone = validatePhone(value) ? "" : "Numéro de téléphone invalide";
          break;
        case 'name':
          validationErrors.name = validateName(value) ? "" : "Nom trop court";
          break;
      }

      return { ...newState, validationErrors };
    });
  };

  const handleBack = () => {
    if (currentStep > STEPS.PROPERTY_TYPE) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const validateForm = (): boolean => {
    const validationErrors = {
      name: !validateName(formState.name) ? "Nom requis" : "",
      email: !validateEmail(formState.email) ? "Email invalide" : "",
      phone: !validatePhone(formState.phone) ? "Numéro de téléphone invalide" : ""
    };

    setFormState(prev => ({
      ...prev,
      validationErrors
    }));

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, error: "" }));

    const formData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      residentialStatus: formState.residentialStatus || 'OWNER',
      logementType: formState.logementType,
      equipment: formState.equipment,
      energyBill: formState.energyBill,
    };

    try {
      const apiUrl = `${window.location.origin}/api/leads`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la soumission');
      }

      const leadInfo = {
        name: formState.name,
        logementType: formState.logementType,
        energyBill: formState.energyBill,
      };
      
      sessionStorage.setItem('leadInfo', JSON.stringify(leadInfo));
      window.location.href = '/merci';
      
    } catch (error: any) {
      console.log('Erreur lors de la soumission:', error.message);
      setFormState(prev => ({
        ...prev,
        error: error.message || "Une erreur est survenue lors de l'envoi du formulaire.",
        isSubmitting: false
      }));
    }
  };

  const progress = ((currentStep - 1) / (Object.keys(STEPS).length - 1)) * 100;

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-sm z-50 px-[10%] py-4 flex justify-between items-center">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="w-auto h-auto"
            priority
          />
        </Link>
      </header>

      <div className="flex flex-col lg:flex-row justify-between px-4 md:px-[10%] gap-8 lg:gap-16 pt-20">
        <div className="flex-1 max-w-2xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl text-gray-900 font-semibold leading-snug">
              Découvrez combien vous pouvez économiser avec l&apos;énergie solaire
            </h1>
            {currentStep > STEPS.PROPERTY_TYPE && (
              <button
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Retour à l'étape précédente"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
          </div>

          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Étape {currentStep} sur {Object.keys(STEPS).length}
            </p>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#AFC97E] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {currentStep === STEPS.PROPERTY_TYPE && (
            <div className="space-y-4">
              <button
                onClick={() => handlePropertyTypeSelect("HOUSE")}
                className="w-full flex items-center px-6 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:border-[#AFC97E] transition-all duration-300 group"
              >
                <div className="w-12 h-12 relative flex-shrink-0 bg-gray-50 rounded-xl p-2 group-hover:bg-[#AFC97E]/10 transition-colors">
                  <Image
                    src="/images/maison.svg"
                    alt="Maison"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <span className="flex-1 text-left text-lg font-medium">Maison individuelle</span>
                <svg className="w-6 h-6 text-[#AFC97E] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => handlePropertyTypeSelect("APARTMENT")}
                className="w-full flex items-center px-6 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:border-[#AFC97E] transition-all duration-300 group"
              >
                <div className="w-12 h-12 relative flex-shrink-0 bg-gray-50 rounded-xl p-2 group-hover:bg-[#AFC97E]/10 transition-colors">
                  <Image
                    src="/images/appart.svg"
                    alt="Appartement"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <span className="flex-1 text-left text-lg font-medium">Appartement</span>
                <svg className="w-6 h-6 text-[#AFC97E] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {currentStep === STEPS.ENERGY_BILL && (
            <div className="space-y-4">
              {ENERGY_BILL_RANGES.map((range, index) => (
                <button
                  key={index}
                  onClick={() => handleEnergyBillSelect(range.value)}
                  className="w-full flex flex-col px-6 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:border-[#AFC97E] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex-1 text-left text-lg font-medium">{range.label}</span>
                    <svg className="w-6 h-6 text-[#AFC97E] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <p className="font-medium text-[#AFC97E]">{range.annual}</p>
                      <p>Facture annuelle</p>
                    </div>
                    <div>
                      <p className="font-medium text-[#AFC97E]">{range.savings}</p>
                      <p>Économies potentielles</p>
                    </div>
                    <div>
                      <p className="font-medium text-[#AFC97E]">{range.co2}</p>
                      <p>Réduction CO2</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentStep === STEPS.EQUIPMENT && (
            <div className="space-y-6">
              <p className="text-gray-600">
                Sélectionnez les équipements présents dans votre logement :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EQUIPMENT_OPTIONS.map((equipment) => (
                  <button
                    key={equipment.id}
                    onClick={() => toggleEquipment(equipment.id)}
                    className={`flex items-center px-4 py-3 bg-white border-2 ${
                      formState.equipment.includes(equipment.id)
                        ? 'border-[#AFC97E] bg-[#AFC97E]/5'
                        : 'border-gray-100'
                    } text-gray-900 rounded-xl hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-gray-50 rounded-lg group-hover:bg-[#AFC97E]/10 transition-colors">
                      <span className="text-xl">{equipment.icon}</span>
                    </div>
                    <div className="ml-3 flex-1 text-left">
                      <h3 className="text-base font-medium">{equipment.label}</h3>
                      <p className="text-xs text-gray-500">{equipment.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ml-2 flex items-center justify-center ${
                      formState.equipment.includes(equipment.id)
                        ? 'border-[#AFC97E] bg-[#AFC97E]'
                        : 'border-gray-300'
                    }`}>
                      {formState.equipment.includes(equipment.id) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={handleEquipmentNext}
                className="w-full bg-[#AFC97E] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#9DB56E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AFC97E] transition-colors mt-6"
              >
                Continuer
              </button>
            </div>
          )}

          {currentStep === STEPS.CONTACT_INFO && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    formState.validationErrors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#AFC97E] focus:border-[#AFC97E] transition-colors`}
                  required
                />
                {formState.validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{formState.validationErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    formState.validationErrors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#AFC97E] focus:border-[#AFC97E] transition-colors`}
                  required
                />
                {formState.validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{formState.validationErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    formState.validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#AFC97E] focus:border-[#AFC97E] transition-colors`}
                  required
                />
                {formState.validationErrors.phone && (
                  <p className="mt-1 text-sm text-red-600">{formState.validationErrors.phone}</p>
                )}
              </div>

              {formState.error && (
                <div className="p-4 bg-red-50 rounded-xl">
                  <p className="text-sm text-red-600">{formState.error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full bg-[#AFC97E] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#9DB56E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AFC97E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.isSubmitting ? 'Envoi en cours...' : 'Obtenir mon étude personnalisée'}
              </button>
            </form>
          )}
        </div>

        {/* Section image */}
        <div className="flex-1 sticky top-[100px] hidden lg:flex items-start justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-1 bg-[#AFC97E]/20 rounded-3xl blur"></div>
            <Image
              src="/images/right-simulation.png"
              alt="Maison avec panneaux solaires"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-lg object-cover w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulateurPage;
