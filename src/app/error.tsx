'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unexpected Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Erreur Inattendue</h2>
        <p className="text-gray-700 mb-6">
          Une erreur est survenue. Veuillez réessayer ou contacter le support.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => reset()}
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
          >
            Réessayer
          </button>
          <Link 
            href="/" 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
