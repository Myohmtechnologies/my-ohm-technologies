'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import type { Realisation } from '@/types';

// Données de test (à remplacer par les données de l'API)
const mockRealisations: Realisation[] = [
  {
    id: '1',
    title: 'Installation Résidentielle - Marseille',
    description: 'Installation de panneaux solaires sur une maison individuelle',
    images: ['/images/realisations/real1.jpg'],
    date: new Date('2023-12-01'),
    location: 'Marseille',
    specifications: {
      puissance: 6,
      pannels: 16,
      surface: 32,
      economie: 800
    }
  },
  // Ajouter d'autres réalisations ici
];

export default function RealisationsPage() {
  const [realisations, setRealisations] = useState<Realisation[]>(mockRealisations);

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réalisation ?')) {
      // Appel API à implémenter
      setRealisations(realisations.filter(real => real.id !== id));
    }
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Réalisations
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Gérez vos projets réalisés
          </p>
        </div>
        <Link
          href="/dashboard/realisations/create"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6C8D2F] hover:bg-[#5a7526] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C8D2F]"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Nouvelle Réalisation
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realisations.map((realisation) => (
          <div
            key={realisation.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="relative h-48">
              <Image
                src={realisation.images[0]}
                alt={realisation.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                {realisation.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {realisation.description}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Puissance</dt>
                  <dd className="mt-1 text-sm text-gray-900">{realisation.specifications.puissance} kWc</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Panneaux</dt>
                  <dd className="mt-1 text-sm text-gray-900">{realisation.specifications.pannels}</dd>
                </div>
              </dl>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end space-x-3">
              <Link
                href={`/dashboard/realisations/edit/${realisation.id}`}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-[#6C8D2F] bg-[#6C8D2F]/10 hover:bg-[#6C8D2F]/20"
              >
                <PencilIcon className="-ml-0.5 mr-2 h-4 w-4" />
                Modifier
              </Link>
              <button
                onClick={() => handleDelete(realisation.id)}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
              >
                <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" />
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
