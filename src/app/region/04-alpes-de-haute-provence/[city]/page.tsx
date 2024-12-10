import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const cityData = {
  'manosque': {
    name: 'Manosque',
    code: '04100',
    population: 21800,
    description: 'Ville principale des Alpes-de-Haute-Provence, située au cœur de la région PACA, Manosque bénéficie d\'un cadre idéal pour les installations solaires',
    solarAdvantages: [
      'Ensoleillement optimal avec plus de 300 jours de soleil par an',
      'Nombreuses maisons individuelles idéales pour le solaire',
      'Proximité avec le CEA Cadarache',
      'Zone climatique H2d favorable aux installations solaires'
    ],
    keyPoints: [
      'Économies moyennes de 60% sur la facture d\'électricité',
      'Rentabilité moyenne sur 6-8 ans',
      'Production solaire annuelle moyenne de 1450 kWh/kWc',
      'Aides locales spécifiques disponibles'
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
  'cereste': {
    name: 'Céreste',
    code: '04280',
    population: 1200,
    description: 'Village provençal authentique situé dans le Parc naturel régional du Luberon, idéal pour les installations solaires résidentielles',
    solarAdvantages: [
      'Situation géographique privilégiée dans le Luberon',
      'Habitat principalement constitué de maisons individuelles',
      'Zone rurale avec peu de contraintes architecturales',
      'Excellent taux d\'ensoleillement annuel'
    ],
    keyPoints: [
      'Économies moyennes de 65% sur la facture d\'électricité',
      'Rentabilité moyenne sur 7 ans',
      'Production solaire optimale',
      'Accompagnement personnalisé pour les démarches'
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
  'pierrevert': {
    name: 'Pierrevert',
    code: '04860',
    population: 3800,
    description: 'Commune résidentielle proche de Manosque, réputée pour son cadre de vie et son engagement environnemental',
    solarAdvantages: [
      'Territoire engagé dans la transition énergétique',
      'Majorité de maisons individuelles avec grandes toitures',
      'Exposition sud optimale pour de nombreuses habitations',
      'Politique locale favorable aux énergies renouvelables'
    ],
    keyPoints: [
      'Économies significatives sur la facture énergétique',
      'Installation rapide et professionnelle',
      'Suivi personnalisé de votre production',
      'Valorisation immobilière importante'
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
  'reillanne': {
    name: 'Reillanne',
    code: '04110',
    population: 1600,
    description: 'Village perché typiquement provençal, bénéficiant d\'une exposition solaire exceptionnelle',
    solarAdvantages: [
      'Position géographique avantageuse en hauteur',
      'Ensoleillement optimal toute l\'année',
      'Habitat traditionnel adapté au solaire',
      'Communauté engagée dans l\'écologie'
    ],
    keyPoints: [
      'Réduction importante des factures d\'énergie',
      'Solutions adaptées au patrimoine local',
      'Accompagnement dans les démarches administratives',
      'Maintenance et suivi garantis'
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
  'sainte-tulle': {
    name: 'Sainte-Tulle',
    code: '04220',
    population: 3300,
    description: 'Commune dynamique de la vallée de la Durance, pionnière dans les énergies renouvelables',
    solarAdvantages: [
      'Commune historiquement liée à l\'énergie',
      'Territoire propice aux installations solaires',
      'Forte sensibilité environnementale',
      'Proximité avec les centres de formation énergétique'
    ],
    keyPoints: [
      'Expertise locale reconnue',
      'Installations sur mesure',
      'Économies substantielles garanties',
      'Service après-vente réactif'
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
  'villeneuve': {
    name: 'Villeneuve',
    code: '04180',
    population: 4100,
    description: 'Commune en plein développement dans la vallée de la Durance, idéale pour les installations solaires',
    solarAdvantages: [
      'Territoire en pleine expansion',
      'Nouvelles constructions adaptées au solaire',
      'Excellent potentiel solaire',
      'Facilités administratives pour les installations'
    ],
    keyPoints: [
      'Solutions clé en main',
      'Optimisation fiscale maximale',
      'Garantie décennale',
      'Suivi de production en temps réel'
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
  'volx': {
    name: 'Volx',
    code: '04130',
    population: 3100,
    description: 'Village dynamique entre Luberon et Durance, parfaitement situé pour l\'énergie solaire',
    solarAdvantages: [
      'Position géographique optimale',
      'Forte proportion de maisons individuelles',
      'Ensoleillement exceptionnel',
      'Communauté favorable aux énergies vertes'
    ],
    keyPoints: [
      'Devis personnalisé gratuit',
      'Installation professionnelle rapide',
      'Économies immédiates',
      'Service client premium'
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
  'forcalquier': {
    name: 'Forcalquier',
    code: '04300',
    population: 5000,
    description: 'Cité historique provençale, alliant patrimoine et modernité dans sa transition énergétique',
    solarAdvantages: [
      'Territoire engagé dans la transition énergétique',
      'Zone d\'ensoleillement privilégiée',
      'Patrimoine architectural adapté',
      'Forte sensibilisation écologique'
    ],
    keyPoints: [
      'Respect du patrimoine local',
      'Solutions esthétiques sur mesure',
      'Économies d\'énergie optimales',
      'Accompagnement personnalisé'
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
  'mane': {
    name: 'Mane',
    code: '04300',
    population: 1400,
    description: 'Charmant village aux portes de Forcalquier, idéal pour les installations solaires résidentielles',
    solarAdvantages: [
      'Cadre rural préservé',
      'Excellent potentiel solaire',
      'Habitat traditionnel adapté',
      'Proximité des services techniques'
    ],
    keyPoints: [
      'Installation sur mesure',
      'Intégration paysagère soignée',
      'Rentabilité optimisée',
      'Support technique local'
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
  'saint-michel-observatoire': {
    name: 'Saint-Michel-l\'Observatoire',
    code: '04870',
    population: 1200,
    description: 'Village réputé pour son observatoire astronomique, parfaitement situé pour l\'énergie solaire',
    solarAdvantages: [
      'Situation géographique exceptionnelle',
      'Expertise scientifique locale',
      'Ciel dégagé toute l\'année',
      'Engagement environnemental fort'
    ],
    keyPoints: [
      'Études techniques précises',
      'Solutions haute performance',
      'Suivi production détaillé',
      'Maintenance experte'
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
  'simiane-la-rotonde': {
    name: 'Simiane-la-Rotonde',
    code: '04150',
    population: 600,
    description: 'Village médiéval perché offrant des conditions idéales pour l\'énergie solaire',
    solarAdvantages: [
      'Position dominante favorable',
      'Ensoleillement maximal',
      'Patrimoine architectural compatible',
      'Zone rurale préservée'
    ],
    keyPoints: [
      'Intégration architecturale soignée',
      'Performance énergétique optimale',
      'Conseils personnalisés',
      'Suivi à long terme'
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
  'banon': {
    name: 'Banon',
    code: '04150',
    population: 1000,
    description: 'Village de caractère des Alpes-de-Haute-Provence, propice aux installations solaires',
    solarAdvantages: [
      'Situation en altitude favorable',
      'Ensoleillement optimal',
      'Habitat traditionnel adaptable',
      'Communauté éco-responsable'
    ],
    keyPoints: [
      'Solutions personnalisées',
      'Installation professionnelle',
      'Rendement optimal garanti',
      'Service après-vente local'
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
  'saint-etienne-les-orgues': {
    name: 'Saint-Étienne-les-Orgues',
    code: '04230',
    population: 1200,
    description: 'Village au pied de la montagne de Lure, bénéficiant d\'un ensoleillement exceptionnel',
    solarAdvantages: [
      'Exposition sud privilégiée',
      'Climat favorable toute l\'année',
      'Habitat individuel dominant',
      'Zone rurale sans contraintes'
    ],
    keyPoints: [
      'Étude personnalisée gratuite',
      'Installation rapide',
      'Économies garanties',
      'Maintenance préventive incluse'
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
  }
};

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = cityData[params.city];
  if (!city) return {};

  return {
    title: `Installation Panneaux Solaires ${city.name} (${city.code}) | MyOhm Technologies`,
    description: `Expert en installation de panneaux solaires à ${city.name}. Profitez d'un ensoleillement exceptionnel et réduisez vos factures d'électricité. Devis gratuit personnalisé.`,
    keywords: `panneaux solaires, ${city.name}, ${city.code}, installation solaire, énergie solaire, MyOhm Technologies`,
  };
}

// Composant client dans un fichier séparé
import ClientPage from './ClientPage';

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cityData[params.city];
  if (!city) notFound();

  return <ClientPage city={city} params={params} />;
}
