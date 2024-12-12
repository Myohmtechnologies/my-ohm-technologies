'use client';

import Image from 'next/image';
import Head from 'next/head';
import { SunIcon, HomeIcon, BanknotesIcon, StarIcon, BoltIcon, ChatBubbleLeftIcon, XMarkIcon, MapPinIcon, ShareIcon, MapIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import SimulationSection from '@/components/sections/ProjectSimulationSection';
import Link from 'next/link';
import { useState } from 'react';

type Review = {
  author: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
};

type CityData = {
  name: string;
  code: string;
  population: number;
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  solarAdvantages: string[];
  keyPoints: string[];
  reviews: Review[];
  solarInstallation: {
    installationCostsTable: {
      title: string;
      headers: string[];
      rows: {
        power: string;
        price: string;
        type: string;
        badge?: string;
        description?: string;
        highlight?: boolean;
      }[];
      notes: string[];
      ctaText: string;
    };
    installers: {
      name: string;
      certifications: string[];
      description: string;
      experience: string;
    }[];
  };
};

export default function ClientPage({ 
  city, 
  params 
}: { 
  city: CityData; 
  params: { city: string; }; 
}) {
  const [showContactModal, setShowContactModal] = useState(false);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      index < rating 
        ? <StarIconSolid key={index} className="w-5 h-5 text-yellow-400" />
        : <StarIcon key={index} className="w-5 h-5 text-gray-300" />
    ));
  };

  return (
    <>
      <Head>
        <title>{`Installation Panneaux Solaires ${city.name} (${city.code}) | MyOhm Technologies`}</title>
        <meta
          name="description"
          content={city.seo.metaDescription}
        />
        <meta property="og:title" content={`Installation Panneaux Solaires ${city.name} (${city.code})`} />
        <meta property="og:description" content={city.seo.metaDescription} />
        <meta property="og:image" content={`https://www.myohm-technologies.fr/images/cities/${params.city}.jpg`} />
      </Head>

      <div className="bg-white">
        {/* Couverture commune */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/regions/alpes-de-haute-provence-hero.webp"
            alt={`Paysage des Alpes-de-Haute-Provence - Contexte pour installations solaires à ${city.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAMYAAAAAAIAAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwZJjItJjBHPDJCR0FRRFdtcm9dUUFuaWNtcW9yPT9CZkJxbXVtUWJGUGhTbv/bAEMBFRcXHhoeMyEhMFBzUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUP/AABEIAAYACgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k="
            aria-label={`Paysage des Alpes-de-Haute-Provence représentant le contexte des installations solaires à ${city.name}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                aria-label={`Installation de panneaux solaires à ${city.name}`}
              >
                Installation Panneaux Solaires à {city.name}
              </h1>
              <div 
                className="flex items-center justify-center gap-2 text-lg"
                aria-label={`Population de ${city.name}`}
              >
                <HomeIcon className="w-6 h-6" />
                <span>{formatNumber(city.population)} habitants</span>
              </div>
            </div>
          </div>
        </div>

        <main className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Description Section */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-xl text-gray-600">
                {city.seo.metaDescription}
              </p>
            </div>

            {/* Avantages Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                aria-labelledby="solar-advantages-title"
              >
                <h2 
                  id="solar-advantages-title"
                  className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
                >
                  <SunIcon 
                    className="w-6 h-6 text-blue-600" 
                    aria-hidden="true"
                  />
                  Avantages solaires à {city.name}
                </h2>
                <ul className="space-y-4">
                  {city.solarAdvantages.map((advantage, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3"
                      aria-label={`Avantage ${index + 1}: ${advantage}`}
                    >
                      <span 
                        className="text-blue-600 font-bold" 
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {city.keyPoints.slice(0, 4).map((point, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                    aria-label={`Point clé ${index + 1}: ${point}`}
                  >
                    <BanknotesIcon 
                      className="w-6 h-6 text-blue-600 mb-3" 
                      aria-hidden="true"
                    />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notre Engagement Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Notre Engagement pour Manosque</h2>

              {/* Notre Engagement Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Pourquoi choisir MyOhm Technologies à {city.name} ?
                </h2>
                
                {/* Certifications */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-blue-600">Q</span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">QualiPV</h3>
                      <div className="h-0.5 w-12 bg-blue-400 mb-4"></div>
                      <p className="text-gray-700 text-center leading-relaxed">
                        Certification attestant notre expertise dans l'installation photovoltaïque
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-green-600">Q</span>
                      </div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">Qualibat</h3>
                      <div className="h-0.5 w-12 bg-green-400 mb-4"></div>
                      <p className="text-gray-700 text-center leading-relaxed">
                        Garantie de qualité et de professionnalisme dans le bâtiment
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-purple-600">R</span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-900 mb-3">RGE</h3>
                      <div className="h-0.5 w-12 bg-purple-400 mb-4"></div>
                      <p className="text-gray-700 text-center leading-relaxed">
                        Reconnu Garant de l'Environnement pour vos aides financières
                      </p>
                    </div>
                  </div>
                </div>

                {/* Points Forts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg  text-black mb-2">Expertise Locale</h3>
                      <p className="text-gray-600">Des installations réussies dans la ville de {city.name} et ses environs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Service Rapide</h3>
                      <p className="text-gray-600">Prise en charge complète avec un suivi personnalisé</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Qualité Garantie</h3>
                      <p className="text-gray-600">Garantie décennale et suivi technique complet de votre installation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Matériel Premium</h3>
                      <p className="text-gray-600">Utilisation exclusive de panneaux Photovoltaïque  Les Meilleur du marché</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nos Installations Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Nos installations à {city.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <span>Chez {city.reviews[0].author}</span>
                    <span className="text-sm text-gray-500">• {city.reviews[0].location}</span>
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg inline-block">
                    103 € d'économies mensuelles
                  </div>

                  {/* Détails techniques */}
                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <BoltIcon className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold text-gray-900">Installation 3kWh</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-6 h-6">
                          <Image
                            src="/images/icons/solar-panel.svg"
                            alt="Icône panneau solaire"
                            width={24}
                            height={24}
                            className="text-blue-600"
                          />
                        </div>
                        <div className="relative w-6 h-4">
                          <Image
                            src="/images/flags/fr.svg"
                            alt="Drapeau France"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <span className="text-gray-700">
                          6 panneaux solaires 500W
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative w-6 h-6">
                          <Image
                            src="/images/icons/micro-inverter.svg"
                            alt="Icône micro-onduleur"
                            width={24}
                            height={24}
                            className="text-blue-600"
                          />
                        </div>
                        <div className="relative w-6 h-4">
                          <Image
                            src="/images/flags/us.svg"
                            alt="Drapeau USA"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <span className="text-gray-700">
                          6 micro-onduleurs
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 italic">
                    "{city.reviews[0].comment}"
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: city.reviews[0].rating }).map((_, i) => (
                      <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/installations/installation-1.jpg"
                    alt={`Installation panneaux solaires à ${city.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-[#FFDF64] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-black mb-6">
                Passez au solaire avec My Ohm Technologies
              </h2>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link 
                  href="/simulator"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  <HomeIcon className="w-5 h-5" />
                  Mon habitat
                </Link>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  <ChatBubbleLeftIcon className="w-5 h-5" />
                  Un spécialiste
                </button>
              </div>
              <p className="text-sm text-black/70 mt-4">
                Demande sans frais • Conseil personnalisé gratuit
              </p>
            </div>

            {/* Contact Modal */}
            {showContactModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl p-6 max-w-sm w-full relative">
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                  
                  <div className="text-center mb-6">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image
                        src="/images/team/rudy.jpg"
                        alt="Rudy - Technico-commercial"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Rudy</h3>
                    <p className="text-gray-600">Technico-commercial</p>
                  </div>

                  <a
                    href="tel:+33652632145"
                    className="flex items-center justify-center gap-2 bg-[#FFDF64] text-black w-full py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all mb-4"
                  >
                    <span className="text-lg">06 52 63 21 45</span>
                  </a>

                  <p className="text-sm text-center text-gray-500">
                    Disponible du lundi au samedi<br />de 8h à 19h
                  </p>
                </div>
              </div>
            )}

            {/* Avis Clients Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Ce que pensent nos clients à {city.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {city.reviews?.map((review, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">
                          {review.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.author}</h3>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coûts d'installation */}
            <section className="bg-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{city.solarInstallation.installationCostsTable.title}</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          {city.solarInstallation.installationCostsTable.headers.map((header, index) => (
                            <th
                              key={index}
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {header}
                            </th>
                          ))}
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type de propriété
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {city.solarInstallation.installationCostsTable.rows.map((row, index) => (
                          <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${row.highlight ? 'border-l-4 border-green-500' : ''}`}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex flex-col">
                                <div className="flex items-center">
                                  <span className="text-sm font-medium text-gray-900">{row.power}</span>
                                  {row.badge && (
                                    <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      row.badge === 'Populaire' ? 'bg-green-100 text-green-800' :
                                      row.badge === 'Économique' ? 'bg-blue-100 text-blue-800' :
                                      'bg-yellow-100 text-yellow-800'
                                    }`}>
                                      {row.badge}
                                    </span>
                                  )}
                                </div>
                                {row.description && (
                                  <span className="text-xs text-gray-500 mt-1">{row.description}</span>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-lg font-bold text-gray-900">{row.price}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.type}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 space-y-2">
                    {city.solarInstallation.installationCostsTable.notes.map((note, index) => (
                      <p key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">•</span>
                        {note}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                    >
                      {city.solarInstallation.installationCostsTable.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Simulation Section - Full Width */}
            <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
              <SimulationSection />
            </div>

            {/* Social Media and Neighboring Cities Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-xl">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Neighboring Cities */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 transform transition-all hover:scale-[1.02]">
                  <div className="flex items-center mb-6">
                    <MapPinIcon className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                      Nos Interventions Locales
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    Découvrez nos services dans les villes voisines de {city.name}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Digne-les-Bains', code: '04000', distance: '45 km' },
                      { name: 'Sisteron', code: '04200', distance: '35 km' },
                      { name: 'Forcalquier', code: '04300', distance: '20 km' },
                      { name: 'Castellane', code: '04120', distance: '55 km' }
                    ].map((neighborCity) => (
                      <Link 
                        key={neighborCity.code} 
                        href={`/region/04-alpes-de-haute-provence/${neighborCity.name.toLowerCase()}`} 
                        className="block bg-blue-50 hover:bg-blue-100 rounded-xl p-4 text-center transition-all transform hover:scale-105 group"
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-blue-800 font-bold text-lg group-hover:text-blue-900">
                            {neighborCity.name}
                          </span>
                          <span className="text-sm text-gray-500 mt-1 flex items-center">
                            <MapIcon className="w-4 h-4 mr-1 text-blue-500" />
                            {neighborCity.distance}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transform transition-all hover:scale-[1.02]">
                  <div className="flex items-center mb-6">
                    <ShareIcon className="w-8 h-8 text-purple-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                      Rejoignez-nous
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    Suivez notre aventure solaire et restez connecté
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { 
                        name: 'Facebook', 
                        url: 'https://www.facebook.com/myohm.technologies', 
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        ),
                        color: 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                      },
                      { 
                        name: 'LinkedIn', 
                        url: 'https://www.linkedin.com/company/myohm-technologies', 
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ),
                        color: 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                      },
                      { 
                        name: 'Instagram', 
                        url: 'https://www.instagram.com/myohm.technologies', 
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        ),
                        color: 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                      },
                      { 
                        name: 'Twitter/X', 
                        url: 'https://www.twitter.com/myohm_tech', 
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg {...props} fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.901 1.153h3.68l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.474l8.659-9.928L0 1.153h7.594l5.243 6.932L18.901 1.153zm-2.101 19.694h2.039L7.233 3.259H5.065L16.8 20.847z" />
                          </svg>
                        ),
                        color: 'bg-gray-50 text-black hover:bg-gray-100'
                      }
                    ].map((social) => (
                      <Link 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center rounded-xl p-4 transition-all transform hover:scale-105 group ${social.color}`}
                      >
                        <social.icon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold group-hover:text-opacity-80">
                          {social.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>

      </div>
    </>
  );
}
