export const defaultMetadata = {
  title: {
    default: 'MY OHM Technologies | Installation de Panneaux Solaires',
    template: '%s | MY OHM Technologies'
  },
  description: 'Expert en installation de panneaux solaires en France. Solutions photovoltaïques sur-mesure, devis gratuit et accompagnement personnalisé.',
  keywords: ['panneaux solaires', 'installation photovoltaïque', 'énergie solaire', 'MY OHM Technologies', 'énergie renouvelable'],
  authors: [{ name: 'MY OHM Technologies' }],
  creator: 'MY OHM Technologies',
  publisher: 'MY OHM Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://myohm-technologies.fr',
    siteName: 'MY OHM Technologies',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MY OHM Technologies - Installation de Panneaux Solaires',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MY OHM Technologies | Installation de Panneaux Solaires',
    description: 'Expert en installation de panneaux solaires en France. Solutions photovoltaïques sur-mesure.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface RegionData {
  name: string;
  slug: string;
  department: string;
  cities: string[];
  meta: {
    title: string;
    description: string;
  };
  statistics: {
    sunshineHours: number; // Heures d'ensoleillement annuel
    averageProduction: number; // kWh/kWc/an
    savingsEstimate: number; // Estimation des économies annuelles en %
  };
  aids: {
    name: string;
    description: string;
    amount: string;
  }[];
  testimonials: {
    name: string;
    city: string;
    rating: number;
    comment: string;
    installationType: string;
    date: string;
  }[];
}

export const regions: RegionData[] = [
  {
    name: 'Bouches-du-Rhône',
    slug: 'bouches-du-rhone',
    department: '13',
    cities: ['Marseille', 'Aix-en-Provence', 'Martigues', 'Aubagne', 'La Ciotat'],
    meta: {
      title: 'Installation Panneaux Solaires Bouches-du-Rhône (13) | MY OHM Technologies',
      description: 'Expert en installation de panneaux solaires dans les Bouches-du-Rhône. Profitez de 2800h d\'ensoleillement par an. Devis gratuit et aides régionales disponibles.',
    },
    statistics: {
      sunshineHours: 2800,
      averageProduction: 1450,
      savingsEstimate: 70
    },
    aids: [
      {
        name: 'Prime Régionale Sud',
        description: 'Aide spécifique à la région Sud pour l\'installation de panneaux solaires',
        amount: 'Jusqu\'à 4000€'
      },
      {
        name: 'Aide départementale 13',
        description: 'Bonus écologique des Bouches-du-Rhône',
        amount: 'Jusqu\'à 2500€'
      }
    ],
    testimonials: [
      {
        name: 'Laurent M.',
        city: 'Aix-en-Provence',
        rating: 5,
        comment: 'Installation impeccable, production dépassant les estimations grâce à l\'excellent ensoleillement local.',
        installationType: '9kWc avec batteries',
        date: '2023-11-15'
      },
      {
        name: 'Sophie D.',
        city: 'Marseille',
        rating: 5,
        comment: 'Équipe professionnelle, installation rapide. Très satisfaite des économies réalisées.',
        installationType: '6kWc en autoconsommation',
        date: '2023-10-20'
      }
    ]
  },
  {
    name: 'Alpes-de-Haute-Provence',
    slug: 'alpes-de-haute-provence',
    department: '04',
    cities: ['Digne-les-Bains', 'Manosque', 'Sisteron', 'Forcalquier'],
    meta: {
      title: 'Installation Panneaux Solaires Alpes-de-Haute-Provence (04) | MY OHM Technologies',
      description: 'Installation de panneaux solaires dans les Alpes-de-Haute-Provence. Profitez d\'un ensoleillement exceptionnel en altitude. Solutions adaptées au climat montagnard.',
    },
    statistics: {
      sunshineHours: 2750,
      averageProduction: 1400,
      savingsEstimate: 65
    },
    aids: [
      {
        name: 'Prime Régionale Montagne',
        description: 'Aide spécifique aux zones montagneuses',
        amount: 'Jusqu\'à 3500€'
      },
      {
        name: 'Bonus Altitude',
        description: 'Aide supplémentaire pour les installations en altitude',
        amount: 'Jusqu\'à 1500€'
      }
    ],
    testimonials: [
      {
        name: 'Pierre L.',
        city: 'Manosque',
        rating: 5,
        comment: 'Installation parfaitement adaptée aux conditions climatiques locales.',
        installationType: '8kWc avec optimiseurs',
        date: '2023-09-15'
      }
    ]
  },
  {
    name: 'Var',
    slug: 'var',
    department: '83',
    cities: ['Toulon', 'Draguignan', 'Fréjus', 'Saint-Raphaël', 'Hyères'],
    meta: {
      title: 'Installation Panneaux Solaires Var (83) | MY OHM Technologies',
      description: 'Expert en installation de panneaux solaires dans le Var. Profitez du climat méditerranéen idéal pour le photovoltaïque. Installation professionnelle et service premium.',
    },
    statistics: {
      sunshineHours: 2700,
      averageProduction: 1430,
      savingsEstimate: 68
    },
    aids: [
      {
        name: 'Éco-Prime Var',
        description: 'Aide départementale du Var pour la transition énergétique',
        amount: 'Jusqu\'à 3000€'
      },
      {
        name: 'Bonus Littoral',
        description: 'Aide spécifique aux communes littorales',
        amount: 'Jusqu\'à 2000€'
      }
    ],
    testimonials: [
      {
        name: 'Marie C.',
        city: 'Toulon',
        rating: 5,
        comment: 'Excellent retour sur investissement grâce à l\'ensoleillement optimal.',
        installationType: '6kWc avec batteries',
        date: '2023-12-01'
      }
    ]
  },
  {
    name: 'Vaucluse',
    slug: 'vaucluse',
    department: '84',
    cities: ['Avignon', 'Orange', 'Carpentras', 'Cavaillon', 'Pertuis'],
    meta: {
      title: 'Installation Panneaux Solaires Vaucluse (84) | MY OHM Technologies',
      description: 'Installation de panneaux solaires dans le Vaucluse. Bénéficiez du climat provençal idéal pour maximiser votre production solaire. Expertise locale et accompagnement personnalisé.',
    },
    statistics: {
      sunshineHours: 2650,
      averageProduction: 1420,
      savingsEstimate: 67
    },
    aids: [
      {
        name: 'Prime Solaire 84',
        description: 'Aide départementale du Vaucluse pour le solaire',
        amount: 'Jusqu\'à 3500€'
      },
      {
        name: 'Bonus Provence',
        description: 'Aide complémentaire régionale',
        amount: 'Jusqu\'à 2000€'
      }
    ],
    testimonials: [
      {
        name: 'Jean-Paul R.',
        city: 'Avignon',
        rating: 5,
        comment: 'Installation soignée et production optimale grâce au climat local.',
        installationType: '7kWc en autoconsommation',
        date: '2023-11-28'
      }
    ]
  }
];
