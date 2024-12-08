'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

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
    logementType: "",
    energyBill: "",
    name: "",
    email: "",
    phone: "",
    isSubmitting: false,
    error: ""
  });

  const handlePropertyTypeSelect = (type: string) => {
    setFormState(prev => ({ ...prev, logementType: type }));
    setCurrentStep(STEPS.ENERGY_BILL);
  };

  const handleEnergyBillSelect = (range: string) => {
    setFormState(prev => ({ ...prev, energyBill: range }));
    setCurrentStep(STEPS.CONTACT_INFO);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true, error: "" }));

    const formData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      residentialStatus: formState.residentialStatus || 'OWNER',
      logementType: formState.logementType,
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

      // Stockage des informations dans le sessionStorage
      const leadInfo = {
        name: formState.name,
        logementType: formState.logementType,
        energyBill: formState.energyBill,
      };
      
      sessionStorage.setItem('leadInfo', JSON.stringify(leadInfo));

      // Utilisation de window.location pour une redirection plus forcée
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
      {/* Header fixe */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-sm z-50 px-[10%] py-4 flex justify-between items-center">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="w-auto h-auto"
          />
        </Link>
       
      </header>

      {/* Conteneur principal */}
      <div className="flex flex-col lg:flex-row justify-between px-4 md:px-[10%] gap-8 lg:gap-16 pt-20">
        {/* Section formulaire */}
        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-semibold leading-snug mb-6">
            Découvrez combien vous pouvez économiser avec l&apos;énergie solaire
          </h1>

          {/* Barre de progression */}
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

          {/* Contenu dynamique selon l'étape */}
          {currentStep === STEPS.PROPERTY_TYPE && (
            <div className="space-y-4">
              <button
                onClick={() => handlePropertyTypeSelect("HOUSE")}
                className="w-full flex items-center px-6 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:border-[#AFC97E] transition-all duration-300 gap-6 group"
              >
                <div className="w-12 h-12 relative flex-shrink-0 bg-gray-50 rounded-xl p-2 group-hover:bg-[#AFC97E]/10 transition-colors">
                  <Image
                    src="/images/maison.svg"
                    alt="Maison"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="flex-1 text-left text-lg font-medium">Maison individuelle</span>
                <svg className="w-6 h-6 text-[#AFC97E] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => handlePropertyTypeSelect("APARTMENT")}
                className="w-full flex items-center px-6 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:border-[#AFC97E] transition-all duration-300 gap-6 group"
              >
                <div className="w-12 h-12 relative flex-shrink-0 bg-gray-50 rounded-xl p-2 group-hover:bg-[#AFC97E]/10 transition-colors">
                  <Image
                    src="/images/appart.svg"
                    alt="Appartement"
                    fill
                    className="object-contain p-1"
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
                  className="w-full flex items-center justify-between px-6 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:border-[#AFC97E] transition-all duration-300 group"
                >
                  <div className="flex-1">
                    <p className="text-lg font-medium text-left">{range.label}</p>
                    <p className="text-sm text-gray-500 mt-1">{range.annual}</p>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#AFC97E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {range.savings}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#AFC97E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {range.co2}
                      </span>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-[#AFC97E] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          )}

          {currentStep === STEPS.CONTACT_INFO && (
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-2 border-gray-100">
              {formState.error && (
                <div className="bg-red-50 text-red-800 p-4 rounded-xl mb-6 text-sm border border-red-100">
                  {formState.error}
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-100 text-gray-900 rounded-xl focus:ring-2 focus:ring-[#AFC97E] focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-100 text-gray-900 rounded-xl focus:ring-2 focus:ring-[#AFC97E] focus:border-transparent transition-all"
                    placeholder="exemple@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-100 text-gray-900 rounded-xl focus:ring-2 focus:ring-[#AFC97E] focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full bg-[#AFC97E] text-white py-4 px-6 rounded-xl text-lg font-medium hover:bg-[#9DB56E] disabled:bg-[#C5D9A1] disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {formState.isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : "Voir mes économies"}
                </button>
              </div>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulateurPage;
