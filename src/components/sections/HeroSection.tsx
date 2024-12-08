'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const handleOptionClick = (status: 'OWNER' | 'RENTER') => {
    router.push(`/simulator?residential_status=${status}`);
  };

  return (
    <div className="relative">
      {/* Image de fond */}
      <div className='relative h-screen min-h-[600px] w-full'>
        <Image 
          src="/images/hero-bg.webp" 
          alt="Installation panneaux solaires"
          width={800}
          height={550}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenu principal */}
      <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
        <div className="bg-white/95 rounded-2xl p-6 md:p-8 max-w-xl backdrop-blur-sm ml-4 md:ml-[5%]">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Passez au solaire avec My Ohm Technologies
            </h2>
            <p className="text-gray-600 text-base">
              Sélectionnez votre situation pour voir vos économies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Option Locataire */}
            <button 
              onClick={() => handleOptionClick('RENTER')}
              className="group bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full text-left"
            >
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/images/maison.svg"
                    alt="Maison Icon"
                    width={64}
                    height={64}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-grow">
                  <span className="block text-lg font-semibold text-gray-900 mb-1">Locataire</span>
                  <span className="text-[#AFC97E] flex items-center">
                    suivant
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            {/* Option Propriétaire */}
            <button 
              onClick={() => handleOptionClick('OWNER')}
              className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full text-left"
            >
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/images/appart.svg"
                    alt="Appartement Icon"
                    width={64}
                    height={64}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-grow">
                  <span className="block text-lg font-semibold text-gray-900 mb-1">Propriétaire</span>
                  <span className="text-[#AFC97E] flex items-center">
                    suivant
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Détails */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 text-[#AFC97E] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Estimation en 2 min
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 text-[#AFC97E] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Gratuit et sans engagement
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
