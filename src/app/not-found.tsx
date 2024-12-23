'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Page Non Trouvée</h2>
        <p className="text-gray-700 mb-6">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
