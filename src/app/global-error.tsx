'use client';

import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-50 to-red-100 p-4">
          <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center border-2 border-red-200">
            <div className="flex justify-center mb-6">
              <ExclamationTriangleIcon className="w-16 h-16 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-red-600 mb-4">Erreur Système</h2>
            <p className="text-gray-700 mb-6">
              Un problème technique majeur est survenu. Veuillez réessayer plus tard.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Link 
                href="/" 
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
              >
                <span>Retour Accueil</span>
              </Link>
              <Link 
                href="/contact" 
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2"
              >
                <span>Contactez Support</span>
              </Link>
            </div>
            
            <div className="mt-6 text-xs text-gray-500">
              <p>Notre équipe technique a été notifiée.</p>
              <p>support@myohmtechnologies.com</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
