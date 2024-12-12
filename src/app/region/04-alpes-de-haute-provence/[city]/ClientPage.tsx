'use client';

import Image from 'next/image';
import Head from 'next/head';
import { SunIcon, HomeIcon, BanknotesIcon, StarIcon, BoltIcon, ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
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
            alt="Alpes-de-Haute-Provence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Installation Panneaux Solaires à {city.name}
              </h1>
              <div className="flex items-center justify-center gap-2 text-lg">
                <HomeIcon className="w-6 h-6" />
                <span>{city.population.toLocaleString()} habitants</span>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <SunIcon className="w-6 h-6 text-blue-600" />
                  Avantages solaires à {city.name}
                </h2>
                <ul className="space-y-4">
                  {city.solarAdvantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {city.keyPoints.slice(0, 4).map((point, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <BanknotesIcon className="w-6 h-6 text-blue-600 mb-3" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notre Engagement Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Notre Engagement pour {city.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    En tant qu'expert local de l'installation de panneaux solaires à {city.name}, 
                    nous connaissons parfaitement les spécificités de votre région. Notre équipe 
                    vous accompagne dans toutes les étapes de votre projet.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">Étude personnalisée gratuite</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">Installation par des professionnels certifiés</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">Matériel de haute qualité garanti</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">Suivi et maintenance assurés</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">Accompagnement dans les démarches d'aides financières</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-w-4 aspect-h-3">
                  <Image
                    src="/images/solar-worker.jpg"
                    alt="Installation de panneaux solaires"
                    fill
                   
                    className="object-cover"
                  />
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

            {/* Installateurs Section */}
            <section className="bg-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Qui sont les installateurs à {city.name} ?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Découvrez notre réseau d'installateurs de panneaux solaires certifiés RGE à {city.name}. 
                    Des experts qualifiés pour votre projet photovoltaïque.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {city.solarInstallation.installers.map((installer, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{installer.name}</h3>
                          <div className="space-y-2">
                            {installer.certifications.map((cert, idx) => (
                              <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                                {cert}
                              </span>
                            ))}
                          </div>
                          <p className="mt-2 text-gray-600">{installer.description}</p>
                          <div className="mt-4 flex items-center text-sm text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {installer.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                  >
                    Contacter un installateur
                  </button>
                </div>
              </div>
            </section>

            {/* Aides et Subventions Section */}
            <section className="bg-gradient-to-b from-white to-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Aides et subventions d'installation à {city.name}
                  </h2>
                  <p className="text-lg text-gray-600">
                    Découvrez toutes les aides financières disponibles pour votre projet solaire
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Prime à l'autoconsommation */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Prime à l'autoconsommation</h3>
                    <p className="text-gray-600 mb-4">
                      Bénéficiez d'une prime gouvernementale pour votre installation en autoconsommation
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between">
                        <span className='text-black'>6 kWc</span>
                        <span className="font-bold text-green-600">1 140 €</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className='text-black'>9 kWc</span>
                        <span className="font-bold text-green-600">1 710 €</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className='text-black'>12 kWc</span>
                        <span className="font-bold text-green-600">2 280 €</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tarif de rachat */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tarif de rachat subventionné</h3>
                    <p className="text-gray-600">
                      Vendez votre surplus d'électricité à un tarif avantageux garanti par l'État pendant 20 ans. Un revenu complémentaire stable et prévisible.
                    </p>
                  </div>

                  {/* TVA Réduite */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">TVA à 10%</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Au lieu de</span>
                      <span className="line-through text-gray-400">20%</span>
                    </div>
                    <p className="text-gray-600">
                      Profitez d'une TVA réduite sur l'installation de vos panneaux solaires, une économie immédiate de 10% sur votre investissement.
                    </p>
                  </div>

                  {/* Exonération d'impôts */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Exonération d'impôts</h3>
                    <p className="text-gray-600">
                      Les revenus issus de la vente de votre électricité solaire sont exonérés d'impôts jusqu'à 3000€ par an. Un avantage fiscal significatif pour optimiser votre investissement.
                    </p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                  >
                    Calculer vos aides
                  </button>
                </div>
              </div>
            </section>

            {/* Simulation Section - Full Width */}
            <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
              <SimulationSection />
            </div>

          </div>
        </main>

      </div>
    </>
  );
}
