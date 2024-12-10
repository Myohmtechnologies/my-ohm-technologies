'use client';

import { Metadata } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const cities = [
  {
    name: 'Manosque',
    code: '04100',
    slug: 'manosque',
    population: 21800,
    description: 'Ville principale des Alpes-de-Haute-Provence, située au cœur de la région PACA',
    solarAdvantages: ['Ensoleillement optimal', 'Nombreuses maisons individuelles', 'Proximité avec le CEA Cadarache']
  },
  {
    name: 'Forcalquier',
    code: '04300',
    slug: 'forcalquier',
    population: 5000,
    description: 'Cité historique provençale avec un patrimoine architectural remarquable',
    solarAdvantages: ['Territoire engagé dans la transition énergétique', 'Zone d\'ensoleillement privilégiée']
  },
  {
    name: 'Céreste',
    code: '04280',
    slug: 'cereste',
    population: 1200,
    description: 'Village provençal authentique situé dans le Parc naturel régional du Luberon',
    solarAdvantages: ['Situation géographique privilégiée', 'Habitat individuel dominant']
  },
  {
    name: 'Pierrevert',
    code: '04860',
    slug: 'pierrevert',
    population: 3800,
    description: 'Commune résidentielle proche de Manosque, réputée pour son cadre de vie',
    solarAdvantages: ['Majorité de maisons individuelles', 'Politique locale favorable']
  },
  {
    name: 'Reillanne',
    code: '04110',
    slug: 'reillanne',
    population: 1600,
    description: 'Village perché typiquement provençal avec une exposition solaire exceptionnelle',
    solarAdvantages: ['Position géographique avantageuse', 'Ensoleillement optimal']
  },
  {
    name: 'Sainte-Tulle',
    code: '04220',
    slug: 'sainte-tulle',
    population: 3300,
    description: 'Commune dynamique de la vallée de la Durance, pionnière dans les énergies renouvelables',
    solarAdvantages: ['Expertise énergétique historique', 'Territoire propice']
  },
  {
    name: 'Villeneuve',
    code: '04180',
    slug: 'villeneuve',
    population: 4100,
    description: 'Commune en plein développement dans la vallée de la Durance',
    solarAdvantages: ['Nouvelles constructions adaptées', 'Excellent potentiel solaire']
  },
  {
    name: 'Volx',
    code: '04130',
    slug: 'volx',
    population: 3100,
    description: 'Village dynamique entre Luberon et Durance',
    solarAdvantages: ['Position géographique optimale', 'Forte proportion de maisons individuelles']
  },
  {
    name: 'Mane',
    code: '04300',
    slug: 'mane',
    population: 1400,
    description: 'Charmant village aux portes de Forcalquier',
    solarAdvantages: ['Cadre rural préservé', 'Excellent potentiel solaire']
  },
  {
    name: 'Saint-Michel-l\'Observatoire',
    code: '04870',
    slug: 'saint-michel-observatoire',
    population: 1200,
    description: 'Village réputé pour son observatoire astronomique',
    solarAdvantages: ['Ciel dégagé toute l\'année', 'Expertise scientifique locale']
  },
  {
    name: 'Simiane-la-Rotonde',
    code: '04150',
    slug: 'simiane-la-rotonde',
    population: 600,
    description: 'Village médiéval perché avec des conditions idéales',
    solarAdvantages: ['Position dominante favorable', 'Ensoleillement maximal']
  },
  {
    name: 'Banon',
    code: '04150',
    slug: 'banon',
    population: 1000,
    description: 'Village de caractère des Alpes-de-Haute-Provence',
    solarAdvantages: ['Situation en altitude favorable', 'Habitat traditionnel adaptable']
  },
  {
    name: 'Saint-Étienne-les-Orgues',
    code: '04230',
    slug: 'saint-etienne-les-orgues',
    population: 1200,
    description: 'Village au pied de la montagne de Lure',
    solarAdvantages: ['Exposition sud privilégiée', 'Climat favorable toute l\'année']
  }
];

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-de-Haute-Provence (04) | MyOhm Technologies',
  description: 'Expert en installation de panneaux solaires dans les Alpes-de-Haute-Provence. Profitez d\'un ensoleillement exceptionnel et réduisez vos factures d\'électricité. Devis gratuit.',
  keywords: 'panneaux solaires, Alpes-de-Haute-Provence, 04, installation solaire, énergie solaire, MyOhm Technologies',
};

export default function AlpesDeHauteProvence() {
  return (
    <>
      <NextSeo
        title={metadata.title as string}
        description={metadata.description as string}
        canonical="https://www.myohm-technologies.fr/region/04-alpes-de-haute-provence"
        openGraph={{
          url: 'https://www.myohm-technologies.fr/region/04-alpes-de-haute-provence',
          title: metadata.title as string,
          description: metadata.description as string,
          images: [
            {
              url: 'https://www.myohm-technologies.fr/images/regions/04-alpes-de-haute-provence.jpg',
              width: 1200,
              height: 630,
              alt: 'Panneaux solaires dans les Alpes-de-Haute-Provence',
            },
          ],
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'MyOhm Technologies - Alpes-de-Haute-Provence',
            description: metadata.description,
            url: 'https://www.myohm-technologies.fr/region/04-alpes-de-haute-provence',
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Alpes-de-Haute-Provence',
              containsPlace: cities.map(city => ({
                '@type': 'City',
                name: city.name,
                postalCode: city.code,
              })),
            },
            serviceType: 'Installation de panneaux solaires',
          }),
        }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Installation Panneaux Solaires dans les Alpes-de-Haute-Provence (04)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profitez d'un ensoleillement exceptionnel de plus de 300 jours par an pour votre installation solaire
            dans les Alpes-de-Haute-Provence.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Nos zones d'intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/region/04-alpes-de-haute-provence/${city.slug}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {city.name} ({city.code})
                </h3>
                <p className="text-gray-600 mb-4">{city.description}</p>
                <ul className="text-sm text-gray-500">
                  {city.solarAdvantages.map((advantage, index) => (
                    <li key={index} className="mb-1">• {advantage}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </section>

        <section className="prose prose-lg max-w-none">
          <h2>Pourquoi choisir l'énergie solaire dans les Alpes-de-Haute-Provence ?</h2>
          <p>
            Les Alpes-de-Haute-Provence bénéficient d'un ensoleillement exceptionnel avec plus de 300 jours
            de soleil par an, ce qui en fait un territoire idéal pour l'installation de panneaux solaires.
            Que vous soyez à Manosque, Forcalquier ou dans l'une des nombreuses communes du département,
            vous pouvez profiter de conditions optimales pour votre installation photovoltaïque.
          </p>
          
          <h3>Des avantages spécifiques à notre région</h3>
          <ul>
            <li>Un des meilleurs taux d'ensoleillement de France</li>
            <li>Des aides régionales spécifiques pour la transition énergétique</li>
            <li>Un habitat principalement constitué de maisons individuelles</li>
            <li>Une expertise locale avec MyOhm Technologies</li>
          </ul>
        </section>
      </main>
    </>
  );
}
