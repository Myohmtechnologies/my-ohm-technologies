import type { Metadata } from 'next';
import ClientPage from './[city]/ClientPage';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-de-Haute-Provence (04) | MyOhm Technologies',
  description: 'Expert en installation de panneaux solaires dans les Alpes-de-Haute-Provence. Profitez d\'un ensoleillement exceptionnel et réduisez vos factures d\'électricité. Devis gratuit.',
  keywords: 'panneaux solaires, Alpes-de-Haute-Provence, 04, installation solaire, énergie solaire, MyOhm Technologies',
};

export const cities = [
  {
    name: "Manosque",
    code: "04100",
    population: 21834,
    description: "Manosque, ville ensoleillée des Alpes-de-Haute-Provence, offre des conditions idéales pour l'installation de panneaux solaires. Avec plus de 300 jours de soleil par an, les habitants peuvent maximiser leur production d'énergie solaire.",
    solarAdvantages: [
      "Ensoleillement exceptionnel avec plus de 2800 heures par an",
      "Climat méditerranéen favorable à la production solaire",
      "Réduction significative des factures d'électricité",
      "Valorisation immobilière importante",
      "Contribution à la transition énergétique locale"
    ],
    keyPoints: [
      "Économies moyennes de 60% sur la facture d'électricité",
      "Installation en 2-3 jours",
      "Garantie 25 ans sur les panneaux",
      "Production optimale toute l'année"
    ],
    reviews: [
      {
        author: "Laurent D.",
        rating: 5,
        comment: "Installation impeccable sur notre villa. L'équipe a été très professionnelle et l'installation a été réalisée en 2 jours seulement. Nous sommes ravis des économies réalisées !",
        date: "Novembre 2023",
        location: "Quartier Les Oliviers"
      },
      {
        author: "Marie P.",
        rating: 5,
        comment: "Excellent accompagnement de A à Z. Les panneaux s'intègrent parfaitement sur notre toit et la production est au rendez-vous.",
        date: "Octobre 2023",
        location: "Zone Pavillonnaire Sud"
      },
      {
        author: "Thomas R.",
        rating: 5,
        comment: "Très satisfait de mon installation. Le suivi de production via l'application est un vrai plus. Je recommande vivement !",
        date: "Septembre 2023",
        location: "Lotissement Les Pins"
      }
    ]
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

export default function Page() {
  return (
    <div>
      {cities.map((city, index) => (
        <ClientPage key={index} city={city} params={{ city: city.name.toLowerCase() }} />
      ))}
    </div>
  );
}
