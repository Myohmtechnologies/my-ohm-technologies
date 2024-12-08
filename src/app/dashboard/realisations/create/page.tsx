'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CreateRealisationPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [secondaryImage, setSecondaryImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>('');
  const [secondaryImagePreviews, setSecondaryImagePreviews] = useState<string[]>([]);

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>, type: 'main' | 'secondary') => {
    const files = e.target.files;
    if (!files) return;

    if (type === 'main') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImagePreview(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSecondaryImagePreviews(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Upload des images
      const imageFormData = new FormData();
      
      const mainImageFile = formData.get('mainImage') as File;
      if (mainImageFile) {
        imageFormData.append('mainImage', mainImageFile);
      }

      // Ajouter les images secondaires
      const secondaryImageFiles = formData.getAll('secondaryImages');
      secondaryImageFiles.forEach((file) => {
        imageFormData.append('secondaryImages', file as File);
      });

      // Upload des images
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: imageFormData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Erreur lors de l\'upload des images');
      }

      const { mainImage, secondaryImages } = await uploadResponse.json();

      // Création du projet avec les chemins des images
      const title = formData.get('title') as string;
      const projectData = {
        title,
        slug: title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
        description: formData.get('description'),
        location: formData.get('location'),
        mainImage,
        secondaryImages,
        powerCapacity: Number(formData.get('puissance')),
        clientType: formData.get('clientType') || 'Particulier',
        completionDate: formData.get('completionDate'),
        specifications: {
          surface: formData.get('surface'),
          orientation: formData.get('orientation'),
          panneaux: formData.get('pannels'),
          production: formData.get('production'),
        }
      };

      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erreur lors de la création du projet');
      }

      router.push('/dashboard/realisations');
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      alert('Une erreur est survenue lors de la création de la réalisation');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/dashboard/realisations"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Retour aux réalisations
        </Link>
        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Nouvelle Réalisation
        </h1>
      </div>

      <div className="bg-white shadow rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Localisation
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={3}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="puissance" className="block text-sm font-medium text-gray-700">
                Puissance (kWc)
              </label>
              <input
                type="number"
                name="puissance"
                id="puissance"
                step="0.1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="clientType" className="block text-sm font-medium text-gray-700">
                Type de client
              </label>
              <select
                name="clientType"
                id="clientType"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              >
                <option value="Particulier">Particulier</option>
                <option value="Professionnel">Professionnel</option>
              </select>
            </div>

            <div>
              <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700">
                Date de réalisation
              </label>
              <input
                type="date"
                name="completionDate"
                id="completionDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="surface" className="block text-sm font-medium text-gray-700">
                Surface (m²)
              </label>
              <input
                type="number"
                name="surface"
                id="surface"
                step="0.1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="orientation" className="block text-sm font-medium text-gray-700">
                Orientation
              </label>
              <input
                type="text"
                name="orientation"
                id="orientation"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="pannels" className="block text-sm font-medium text-gray-700">
                Nombre de panneaux
              </label>
              <input
                type="number"
                name="pannels"
                id="pannels"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="production" className="block text-sm font-medium text-gray-700">
                Production (kWh/an)
              </label>
              <input
                type="number"
                name="production"
                id="production"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6C8D2F] focus:ring-[#6C8D2F] sm:text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Images
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image principale */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image principale
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="mainImage"
                          className="relative cursor-pointer rounded-md font-medium text-[#6C8D2F] hover:text-[#5a7526] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#6C8D2F]"
                        >
                          <span>Télécharger l'image principale</span>
                          <input
                            id="mainImage"
                            name="mainImage"
                            type="file"
                            accept="image/*"
                            required
                            className="sr-only"
                            onChange={(e) => {
                              if (e.target.files) {
                                setMainImage(e.target.files[0]);
                                handleImagePreview(e, 'main');
                              }
                            }}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF jusqu'à 10MB
                      </p>
                      {mainImagePreview && (
                        <img
                          src={mainImagePreview}
                          alt="Image principale"
                          className="mt-4 h-40 w-40 rounded-md object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Image secondaire */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Images secondaires
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="secondaryImages"
                          className="relative cursor-pointer rounded-md font-medium text-[#6C8D2F] hover:text-[#5a7526] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#6C8D2F]"
                        >
                          <span>Télécharger les images secondaires</span>
                          <input
                            id="secondaryImages"
                            name="secondaryImages"
                            type="file"
                            accept="image/*"
                            multiple
                            required
                            className="sr-only"
                            onChange={(e) => {
                              if (e.target.files) {
                                setSecondaryImage(e.target.files[0]);
                                handleImagePreview(e, 'secondary');
                              }
                            }}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF jusqu'à 10MB
                      </p>
                      {secondaryImagePreviews.map((preview, index) => (
                        <img
                          key={index}
                          src={preview}
                          alt={`Image secondaire ${index + 1}`}
                          className="mt-4 h-40 w-40 rounded-md object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Link
              href="/dashboard/realisations"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C8D2F]"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6C8D2F] hover:bg-[#5a7526] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C8D2F]"
            >
              {isSubmitting ? 'Création...' : 'Créer la réalisation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
