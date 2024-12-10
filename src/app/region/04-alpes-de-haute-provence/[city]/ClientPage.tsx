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
  description: string;
  solarAdvantages: string[];
  keyPoints: string[];
  reviews: Review[];
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
          content={`Expert en installation de panneaux solaires à ${city.name}. Profitez d'un ensoleillement exceptionnel et réduisez vos factures d'électricité. Devis gratuit personnalisé.`}
        />
        <meta property="og:title" content={`Installation Panneaux Solaires ${city.name} (${city.code})`} />
        <meta property="og:description" content={`Installation de panneaux solaires à ${city.name}. Profitez d'un ensoleillement exceptionnel.`} />
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
                {city.description}
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
          </div>
        </main>

        {/* Simulation Section - Full Width */}
        <div className="mt-16">
          <SimulationSection />
        </div>
      </div>
    </>
  );
}
