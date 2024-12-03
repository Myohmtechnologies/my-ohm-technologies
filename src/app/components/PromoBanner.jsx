"use client"
import { useState } from 'react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#AFC97E] text-black py-2 sm:py-3">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm md:text-base flex-1 text-center">
            <span className="hidden sm:inline"> </span>
            Profitez de -15% sur l&apos;installation 
            <span className="hidden sm:inline"> de vos panneaux solaires</span> jusqu&apos;au 31 janvier ! 
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-2 p-1 hover:bg-[#9DB96E] rounded-full transition-colors flex-shrink-0"
            aria-label="Fermer la bannière promotionnelle"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
