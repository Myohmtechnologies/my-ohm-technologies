'use client';

import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center border-2 border-blue-200">
        <div className="flex justify-center mb-6">
          <MagnifyingGlassIcon className="w-16 h-16 text-blue-500" />
        </div>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Page Non Trouvée</h2>
        <p className="text-gray-700 mb-6">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link 
            href="/" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
          >
            <span>Retour Accueil</span>
          </Link>
          <Link 
            href="/panneaux-solaire" 
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2"
          >
            <span>Nos Services</span>
          </Link>
        </div>
        
        <div className="mt-6 text-xs text-gray-500">
          <p>Besoin d&apos;aide ? Contactez notre support.</p>
          <p>support@myohmtechnologies.com</p>
        </div>
      </div>
    </div>
  );
}
