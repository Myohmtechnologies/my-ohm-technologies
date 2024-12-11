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
      },
    ]
  },
  castellane: {
    name: "Castellane",
    code: "04120",
    population: 1500,
    description: "Castellane, charmante commune des Alpes-de-Haute-Provence, bénéficie d'un ensoleillement optimal pour l'installation de panneaux solaires.",
    solarAdvantages: [
      "Excellent taux d'ensoleillement annuel",
      "Position géographique favorable",
      "Économies substantielles sur la facture énergétique",
      "Impact environnemental positif"
    ],
    keyPoints: [
      "Installation rapide et professionnelle",
      "Garantie 25 ans sur les panneaux",
      "Suivi de production personnalisé",
      "Rentabilité assurée"
    ],
    reviews: [
      {
        author: "Sophie L.",
        rating: 5,
        comment: "Service impeccable et installation soignée. Les panneaux s'intègrent parfaitement au paysage de Castellane.",
        date: "Novembre 2023",
        location: "Quartier des Lavandes"
      },
      {
        author: "Marc D.",
        rating: 5,
        comment: "Très professionnel, installation rapide et efficace. Je recommande !",
        date: "Décembre 2023",
        location: "Centre Historique"
      }
    ]
  },
  valensole: {
    name: "Valensole",
    code: "04210",
    population: 3300,
    description: "Valensole, célèbre pour ses champs de lavande, profite d'un climat méditerranéen idéal pour l'énergie solaire.",
    solarAdvantages: [
      "Ensoleillement exceptionnel",
      "Terrain favorable aux installations solaires",
      "Réduction de l'empreinte carbone",
      "Autonomie énergétique accrue"
    ],
    keyPoints: [
      "Expertise technique reconnue",
      "Solutions personnalisées",
      "Accompagnement administratif complet",
      "Performance garantie"
    ],
    reviews: [
      {
        author: "Sophie L.",
        rating: 5,
        comment: "Service impeccable et installation soignée. Les panneaux s'intègrent parfaitement au paysage de Valensole.",
        date: "Novembre 2023",
        location: "Quartier des Lavandes"
      },
      {
        author: "Pierre B.",
        rating: 5,
        comment: "Installation de qualité, équipe sérieuse et professionnelle.",
        date: "Octobre 2023",
        location: "Route de Manosque"
      },
      {
        author: "Marie C.",
        rating: 5,
        comment: "Excellent suivi et résultats conformes aux attentes. Parfait !",
        date: "Décembre 2023",
        location: "Chemin des Lavandes"
      }
    ]
  },
  saintLaurentDuVerdon: {
    name: "Saint-Laurent-du-Verdon",
    code: "04500",
    population: 100,
    description: "Saint-Laurent-du-Verdon, petit village paisible, offre des conditions optimales pour l'exploitation de l'énergie solaire.",
    solarAdvantages: [
      "Exposition solaire privilégiée",
      "Cadre naturel préservé",
      "Engagement écologique",
      "Rentabilité attractive"
    ],
    keyPoints: [
      "Installation sur-mesure",
      "Maintenance simplifiée",
      "Durabilité des équipements",
      "Service client réactif"
    ],
    reviews: [
      {
        author: "Jean-Marc B.",
        rating: 5,
        comment: "Excellent travail, équipe à l'écoute. Production solaire au-delà de nos attentes.",
        date: "Octobre 2023",
        location: "Route du Verdon"
      }
    ]
  },
  greouxLesBains: {
    name: "Gréoux-les-Bains",
    code: "04800",
    population: 2600,
    description: "Gréoux-les-Bains, station thermale réputée, bénéficie d'un climat propice à l'exploitation de l'énergie solaire.",
    solarAdvantages: [
      "Fort potentiel solaire",
      "Économies d'énergie significatives",
      "Solutions écologiques adaptées",
      "Valorisation immobilière"
    ],
    keyPoints: [
      "Installation professionnelle",
      "Suivi personnalisé",
      "Garanties étendues",
      "Rendement optimal"
    ],
    reviews: [
      {
        author: "Claire D.",
        rating: 5,
        comment: "Installation rapide et propre. Le suivi de production est très pratique.",
        date: "Décembre 2023",
        location: "Avenue des Thermes"
      },
      {
        author: "Michel R.",
        rating: 5,
        comment: "Très satisfait du service et de la qualité de l'installation.",
        date: "Novembre 2023",
        location: "Quartier Thermal"
      }
    ]
  },
  esparronDeVerdon: {
    name: "Esparron-de-Verdon",
    code: "04550",
    population: 450,
    description: "Esparron-de-Verdon, situé près du lac, profite d'un ensoleillement remarquable pour les installations solaires.",
    solarAdvantages: [
      "Situation géographique avantageuse",
      "Production solaire optimisée",
      "Respect de l'environnement",
      "Rentabilité assurée"
    ],
    keyPoints: [
      "Installation clé en main",
      "Maintenance préventive",
      "Support technique continu",
      "Performance garantie"
    ],
    reviews: [
      {
        author: "Pierre M.",
        rating: 5,
        comment: "Très satisfait de l'installation. L'équipe a été professionnelle et efficace.",
        date: "Novembre 2023",
        location: "Vue sur le Lac"
      },
      {
        author: "Isabelle K.",
        rating: 5,
        comment: "Installation parfaite, équipe à l'écoute et professionnelle.",
        date: "Décembre 2023",
        location: "Bord du Lac"
      },
      {
        author: "François T.",
        rating: 5,
        comment: "Excellent travail, je recommande vivement !",
        date: "Octobre 2023",
        location: "Centre Village"
      }
    ]
  },
  saintEtienneLesOrgues: {
    name: "Saint-Étienne-les-Orgues",
    code: "04230",
    population: 1200,
    description: "Saint-Étienne-les-Orgues bénéficie d'une exposition solaire exceptionnelle pour la production d'énergie photovoltaïque.",
    solarAdvantages: [
      "Ensoleillement optimal",
      "Conditions climatiques favorables",
      "Économies durables",
      "Impact écologique positif"
    ],
    keyPoints: [
      "Installation rapide",
      "Équipements performants",
      "Suivi de production",
      "Service après-vente réactif"
    ],
    reviews: [
      {
        author: "Antoine R.",
        rating: 5,
        comment: "Installation parfaite et service client au top. Je recommande vivement !",
        date: "Décembre 2023",
        location: "Quartier des Orgues"
      },
      {
        author: "Sylvie M.",
        rating: 5,
        comment: "Très contente de mon installation, économies au rendez-vous.",
        date: "Novembre 2023",
        location: "Route de Lure"
      }
    ]
  },
  banon: {
    name: "Banon",
    code: "04150",
    population: 1000,
    description: "Banon, village provençal de caractère, offre un cadre idéal pour l'installation de panneaux solaires.",
    solarAdvantages: [
      "Excellent taux d'ensoleillement",
      "Orientation favorable",
      "Économies substantielles",
      "Démarche écologique"
    ],
    keyPoints: [
      "Installation professionnelle",
      "Matériel haute qualité",
      "Garanties constructeur",
      "Accompagnement personnalisé"
    ],
    reviews: [
      {
        author: "Marie F.",
        rating: 5,
        comment: "Excellente expérience avec l'équipe. Installation soignée et résultats au rendez-vous.",
        date: "Novembre 2023",
        location: "Vieille Ville"
      },
      {
        author: "Paul D.",
        rating: 5,
        comment: "Service impeccable, équipe professionnelle. Je recommande !",
        date: "Décembre 2023",
        location: "Route de Forcalquier"
      },
      {
        author: "Anne S.",
        rating: 5,
        comment: "Très satisfaite de l'installation et du suivi. Parfait !",
        date: "Octobre 2023",
        location: "Quartier du Château"
      }
    ]
  },
  simianelarotonde: {
    name: "Simiane-la-Rotonde",
    code: "04150",
    population: 600,
    description: "Simiane-la-Rotonde, village médiéval perché, bénéficie d'une exposition solaire optimale.",
    solarAdvantages: [
      "Position géographique avantageuse",
      "Fort potentiel solaire",
      "Réduction des coûts énergétiques",
      "Solution durable"
    ],
    keyPoints: [
      "Installation sur-mesure",
      "Équipements certifiés",
      "Suivi de production",
      "Service client dédié"
    ],
    reviews: [
      {
        author: "Laurent V.",
        rating: 5,
        comment: "Installation impeccable et équipe très professionnelle. Très content du résultat.",
        date: "Décembre 2023",
        location: "Place du Village"
      }
    ]
  },
  saintMichelObservatoire: {
    name: "Saint-Michel-l'Observatoire",
    code: "04870",
    population: 1100,
    description: "Saint-Michel-l'Observatoire, connu pour son ciel pur, offre des conditions idéales pour l'énergie solaire.",
    solarAdvantages: [
      "Ensoleillement exceptionnel",
      "Site privilégié",
      "Économies importantes",
      "Engagement environnemental"
    ],
    keyPoints: [
      "Installation experte",
      "Matériaux premium",
      "Garanties étendues",
      "Accompagnement complet"
    ],
    reviews: [
      {
        author: "Catherine B.",
        rating: 5,
        comment: "Service excellent et installation parfaite. Les économies sont déjà visibles.",
        date: "Novembre 2023",
        location: "Route de l'Observatoire"
      },
      {
        author: "Jean-Pierre L.",
        rating: 5,
        comment: "Installation rapide et soignée. Très satisfait du résultat.",
        date: "Décembre 2023",
        location: "Chemin des Étoiles"
      }
    ]
  },
  mane: {
    name: "Mane",
    code: "04300",
    population: 1400,
    description: "Mane, village provençal authentique, présente des conditions optimales pour l'énergie solaire.",
    solarAdvantages: [
      "Exposition solaire favorable",
      "Rentabilité attractive",
      "Impact écologique positif",
      "Valorisation du patrimoine"
    ],
    keyPoints: [
      "Installation rapide",
      "Équipements performants",
      "Maintenance simplifiée",
      "Suivi personnalisé"
    ],
    reviews: [
      {
        author: "Philippe D.",
        rating: 5,
        comment: "Très satisfait de l'installation. L'équipe a fait un travail remarquable.",
        date: "Décembre 2023",
        location: "Centre Village"
      },
      {
        author: "Christine M.",
        rating: 5,
        comment: "Excellent service, installation parfaite. Je recommande !",
        date: "Novembre 2023",
        location: "Route de Forcalquier"
      },
      {
        author: "Bernard P.",
        rating: 5,
        comment: "Travail soigné et équipe professionnelle. Très content !",
        date: "Octobre 2023",
        location: "Quartier du Château"
      }
    ]
  },
  forcalquier: {
    name: "Forcalquier",
    code: "04300",
    population: 4800,
    description: "Forcalquier, cité de caractère, bénéficie d'un ensoleillement remarquable pour les installations solaires.",
    solarAdvantages: [
      "Fort potentiel solaire",
      "Économies significatives",
      "Solution écologique",
      "Plus-value immobilière"
    ],
    keyPoints: [
      "Installation professionnelle",
      "Matériel haute qualité",
      "Garanties constructeur",
      "Service après-vente"
    ],
    reviews: [
      {
        author: "Isabelle M.",
        rating: 5,
        comment: "Installation rapide et soignée. Le rendement est excellent.",
        date: "Novembre 2023",
        location: "Citadelle"
      },
      {
        author: "Robert L.",
        rating: 5,
        comment: "Très satisfait du service et de l'installation. Je recommande !",
        date: "Décembre 2023",
        location: "Centre-ville"
      }
    ]
  },
  volx: {
    name: "Volx",
    code: "04130",
    population: 3100,
    description: "Volx, commune dynamique, offre un cadre propice à l'installation de panneaux solaires.",
    solarAdvantages: [
      "Ensoleillement optimal",
      "Rendement élevé",
      "Économies durables",
      "Impact environnemental positif"
    ],
    keyPoints: [
      "Installation clé en main",
      "Équipements certifiés",
      "Suivi de production",
      "Support technique"
    ],
    reviews: [
      {
        author: "Bernard L.",
        rating: 5,
        comment: "Équipe professionnelle et résultat impeccable. Je recommande !",
        date: "Décembre 2023",
        location: "Les Oliviers"
      },
      {
        author: "Martine P.",
        rating: 5,
        comment: "Installation parfaite, équipe sérieuse et efficace.",
        date: "Novembre 2023",
        location: "Route de Manosque"
      },
      {
        author: "Georges R.",
        rating: 5,
        comment: "Très content de mon installation. Service au top !",
        date: "Octobre 2023",
        location: "Quartier de la Gare"
      }
    ]
  },
  villeneuve: {
    name: "Villeneuve",
    code: "04180",
    population: 4000,
    description: "Villeneuve profite d'un climat méditerranéen idéal pour la production d'énergie solaire.",
    solarAdvantages: [
      "Position géographique favorable",
      "Excellent rendement",
      "Réduction des coûts",
      "Solution durable"
    ],
    keyPoints: [
      "Installation experte",
      "Matériaux premium",
      "Garanties étendues",
      "Accompagnement personnalisé"
    ],
    reviews: [
      {
        author: "Sylvie P.",
        rating: 5,
        comment: "Installation parfaite et service client très réactif. Très satisfaite.",
        date: "Novembre 2023",
        location: "Centre-ville"
      },
      {
        author: "Michel B.",
        rating: 5,
        comment: "Excellent travail, équipe professionnelle. Je recommande !",
        date: "Décembre 2023",
        location: "Route de Volx"
      }
    ]
  },
  sainteTulle: {
    name: "Sainte-Tulle",
    code: "04220",
    population: 3300,
    description: "Sainte-Tulle bénéficie d'une exposition solaire exceptionnelle pour les installations photovoltaïques.",
    solarAdvantages: [
      "Ensoleillement remarquable",
      "Économies importantes",
      "Démarche écologique",
      "Rentabilité assurée"
    ],
    keyPoints: [
      "Installation rapide",
      "Équipements performants",
      "Maintenance préventive",
      "Service client réactif"
    ],
    reviews: [
      {
        author: "Robert C.",
        rating: 5,
        comment: "Excellent travail, équipe sérieuse. Les panneaux fonctionnent parfaitement.",
        date: "Décembre 2023",
        location: "Quartier Sud"
      },
      {
        author: "Hélène M.",
        rating: 5,
        comment: "Installation soignée et équipe à l'écoute. Parfait !",
        date: "Novembre 2023",
        location: "Les Jardins"
      },
      {
        author: "Patrick D.",
        rating: 5,
        comment: "Très satisfait du service et des résultats. Je recommande.",
        date: "Octobre 2023",
        location: "Avenue Principale"
      }
    ]
  },
  reillanne: {
    name: "Reillanne",
    code: "04110",
    population: 1600,
    description: "Reillanne, village perché de caractère, présente des conditions optimales pour l'énergie solaire.",
    solarAdvantages: [
      "Exposition solaire privilégiée",
      "Fort potentiel énergétique",
      "Économies substantielles",
      "Impact écologique positif"
    ],
    keyPoints: [
      "Installation sur-mesure",
      "Matériel certifié",
      "Suivi de production",
      "Accompagnement complet"
    ],
    reviews: [
      {
        author: "Anne-Marie G.",
        rating: 5,
        comment: "Installation soignée et équipe à l'écoute. Très satisfaite du résultat.",
        date: "Novembre 2023",
        location: "Vieux Village"
      },
      {
        author: "Jean-Claude F.",
        rating: 5,
        comment: "Service impeccable, installation parfaite. Je recommande !",
        date: "Décembre 2023",
        location: "Route de Céreste"
      }
    ]
  },
  pierrevert: {
    name: "Pierrevert",
    code: "04860",
    population: 3800,
    description: "Pierrevert offre un cadre idéal pour l'exploitation de l'énergie solaire avec son climat méditerranéen.",
    solarAdvantages: [
      "Ensoleillement optimal",
      "Rendement élevé",
      "Économies durables",
      "Valorisation immobilière"
    ],
    keyPoints: [
      "Installation professionnelle",
      "Équipements premium",
      "Garanties constructeur",
      "Service après-vente dédié"
    ],
    reviews: [
      {
        author: "Jacques H.",
        rating: 5,
        comment: "Service impeccable et installation parfaite. Je recommande vivement.",
        date: "Décembre 2023",
        location: "Les Vignes"
      },
      {
        author: "Marie-Claire B.",
        rating: 5,
        comment: "Très satisfaite de l'installation. Équipe professionnelle.",
        date: "Novembre 2023",
        location: "Centre-ville"
      },
      {
        author: "Alain P.",
        rating: 5,
        comment: "Excellent travail et suivi parfait. Je recommande !",
        date: "Octobre 2023",
        location: "Route de Manosque"
      }
    ]
  },
  cereste: {
    name: "Céreste",
    code: "04280",
    population: 1300,
    description: "Céreste bénéficie d'un climat favorable pour maximiser la production d'énergie solaire.",
    solarAdvantages: [
      "Position géographique avantageuse",
      "Fort potentiel solaire",
      "Économies significatives",
      "Solution écologique"
    ],
    keyPoints: [
      "Installation clé en main",
      "Matériaux haute qualité",
      "Suivi personnalisé",
      "Support technique continu"
    ],
    reviews: [
      {
        author: "Martine N.",
        rating: 5,
        comment: "Très satisfaite de l'installation. L'équipe a été efficace et professionnelle.",
        date: "Novembre 2023",
        location: "Centre Historique"
      },
      {
        author: "Louis R.",
        rating: 5,
        comment: "Installation rapide et soignée. Excellent service !",
        date: "Décembre 2023",
        location: "Route d'Apt"
      }
    ]
  }
};
