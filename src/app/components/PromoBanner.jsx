"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#AFC97E] w-full">
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-center text-center w-full relative">
          <p className="text-black text-xs sm:text-sm md:text-base font-medium pr-8 md:pr-10">
            <span className="hidden sm:inline">🌟 </span>
            Profitez de -15% sur l&apos;installation 
            <span className="hidden sm:inline"> de vos panneaux solaires</span> jusqu&apos;au 31 janvier ! 
            
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1.5 hover:bg-black/10 rounded-full transition-colors"
            aria-label="Fermer la bannière promotionnelle"
          >
            <X size={16} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
