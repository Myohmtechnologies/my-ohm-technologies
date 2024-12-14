// Copié du fichier ClientPage de 04-alpes-de-haute-provence
'use client';

import Image from 'next/image';
import Head from 'next/head';
import { SunIcon, HomeIcon, BanknotesIcon, StarIcon, BoltIcon, ChatBubbleLeftIcon, XMarkIcon, MapPinIcon, ShareIcon, MapIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';
import SimulationSection from '@/components/sections/ProjectSimulationSection';

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
  reviews?: Review[];
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
    costs: {
      power: string;
      price: number;
    }[];
    installers: {
      name: string;
      certifications: string[];
      description: string;
      experience: string;
    }[];
    subsidies: {
      autoconsumption: {
        description: string;
        rates: {
          power: string;
          amount: number;
        }[];
      };
      buyback: {
        description: string;
        details: string[];
      };
      vat: {
        description: string;
        rate: number;
        normalRate: number;
      };
      taxExemption: {
        description: string;
        details: string[];
      };
    };
  };
};

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quels sont les avantages des panneaux solaires dans le Var ?",
      answer: "Le Var bénéficie d'un ensoleillement exceptionnel, ce qui en fait une région idéale pour l'installation de panneaux solaires. Les avantages incluent des économies significatives sur les factures d'électricité, une réduction de l'empreinte carbone et des aides financières attractives."
    },
    {
      question: "Combien coûte une installation solaire dans le Var ?",
      answer: "Le coût varie selon la taille et le type d'installation. En moyenne, pour une maison individuelle dans le Var, comptez entre 9 000 € et 13 000 € avant subventions. Les aides gouvernementales peuvent réduire considérablement ce coût."
    },
    {
      question: "Quels sont les meilleurs emplacements pour les panneaux solaires ?",
      answer: "Dans le Var, les toitures orientées sud avec peu d'ombrage sont idéales. Les villes comme Toulon, Hyères et Brignoles offrent d'excellentes conditions pour les installations solaires."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Questions Fréquentes sur le Solaire dans le Var</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openFAQ === index ? <XMarkIcon className="h-6 w-6 text-gray-500" /> : <ChatBubbleLeftIcon className="h-6 w-6 text-gray-500" />}
              </button>
              {openFAQ === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ClientPage({ 
  city, 
  params 
}: { 
  city: CityData; 
  params: { city: string; }; 
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-green-400 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Panneaux Solaires à {city.name}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {city.seo.metaDescription}
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link href="#simulation" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition">
              Simuler mon projet
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* City Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Pourquoi le Solaire à {city.name} ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {city.solarAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <SunIcon className="h-12 w-12 text-blue-500 mb-4" />
                <p className="text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Points Clés de {city.name}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {city.keyPoints.map((point, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <MapPinIcon className="h-12 w-12 text-blue-500 mb-4" />
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Costs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Coûts d'Installation à {city.name}</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-500 text-white">
                <tr>
                  {city.solarInstallation.installationCostsTable.headers.map((header, index) => (
                    <th key={index} className="px-6 py-3 text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {city.solarInstallation.installationCostsTable.rows.map((row, index) => (
                  <tr key={index} className={row.highlight ? 'bg-blue-50' : ''}>
                    <td className="px-6 py-4">{row.power}</td>
                    <td className="px-6 py-4">{row.price}</td>
                    <td className="px-6 py-4">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-gray-600">
            {city.solarInstallation.installationCostsTable.notes[0]}
          </p>
        </div>
      </section>

      {/* Simulation Section */}
      <SimulationSection cityName={city.name} />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
