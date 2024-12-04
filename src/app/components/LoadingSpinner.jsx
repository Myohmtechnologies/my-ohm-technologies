import React from 'react';
import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-white to-gray-50">
      {/* Logo OHM */}
      <div className="mb-8">
        <Image
          src="/images/logo.png"
          alt="OHM Technologies Logo"
          width={100}
          height={100}
          className="animate-pulse"
        />
      </div>

      {/* Cercle de chargement principal */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-4 border-yellow-400 opacity-20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-spin" 
             style={{ 
               borderRightColor: 'transparent',
               borderTopColor: 'transparent'
             }}>
        </div>
      </div>

      {/* Texte de chargement */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Chargement de vos articles
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" 
               style={{ animationDelay: '0.2s' }}>
          </div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
               style={{ animationDelay: '0.4s' }}>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Merci de patienter un instant...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
