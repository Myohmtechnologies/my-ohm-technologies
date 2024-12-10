export type City = {
  name: string;
  code: string;
  population: number;
  description: string;
  solarAdvantages: string[];
  keyPoints: string[];
  reviews: {
    author: string;
    rating: number;
    comment: string;
    date: string;
    location: string;
  }[];
};

export const cities: Record<string, City> = {
  manosque: {
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
  // ... autres villes ...
};
