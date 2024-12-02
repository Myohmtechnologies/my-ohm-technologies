"use client"
import { useState } from 'react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#AFC97E] text-black py-3 px-4 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-base flex-grow text-center">
            <span className="hidden sm:inline"> </span>
            Profitez de -15% sur l&apos;installation 
            <span className="hidden sm:inline"> de vos panneaux solaires</span> jusqu&apos;au 31 janvier ! 
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-[#9DB96E] rounded-full transition-colors"
            aria-label="Fermer la bannière promotionnelle"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
