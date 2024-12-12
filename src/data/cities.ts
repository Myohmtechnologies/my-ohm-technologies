export type City = {
  name: string;
  code: string;
  population: number;
  solarAdvantages: string[];
  keyPoints: string[];
  reviews: {
    author: string;
    rating: number;
    date: string;
    comment: string;
    location: string;
  }[];
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
  solarInstallation: {
    installationCostsTable: {
      title: string;
      headers: string[];
      rows: {
        power: string;
        price: string;
        type: string;
        badge: string;
        highlight: boolean;
        description: string;
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

export const cities: { [key: string]: City } = {
  manosque: {
    name: "Manosque",
    code: "04112",
    population: 21834,
    solarAdvantages: [
      "Plus de 300 jours d'ensoleillement par an",
      "Conditions climatiques optimales pour le solaire",
      "Engagement fort dans la transition énergétique",
      "Accompagnement local pour les démarches administratives",
      "Réseau d'installateurs qualifiés"
    ],
    keyPoints: [
      "Installation rapide en 1-2 jours",
      "Garantie décennale sur l'installation",
      "Maintenance préventive incluse",
      "Monitoring de production en temps réel",
      "Optimisation de l'autoconsommation"
    ],
    reviews: [
      {
        author: "Jean-Marc P.",
        rating: 5,
        date: "2023-11-15",
        comment: "Installation impeccable, équipe professionnelle et réactive. Production solaire au-delà de nos attentes.",
        location: "Manosque"
      },
      {
        author: "Sophie L.",
        rating: 4.5,
        date: "2023-10-20",
        comment: "Très satisfaite de mon installation solaire. Économies réelles sur ma facture d'électricité.",
        location: "Manosque"
      }
    ],
    seo: {
      title: "Manosque : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Manosque. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Manosque", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/manosque-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Manosque"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "6 kWc", amount: 380 },
            { power: "9 kWc", amount: 290 },
            { power: "12 kWc", amount: 190 }
          ]
        },
        buyback: {
          description: "Tarif de rachat subventionné",
          details: [
            "Vente du surplus d'électricité à un tarif avantageux",
            "Contrat de rachat sur 20 ans",
            "Prix fixe garanti par l'État"
          ]
        },
        vat: {
          description: "TVA réduite sur l'installation",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération d'impôts sur les revenus de la vente",
          details: [
            "Revenus de la vente d'électricité exonérés jusqu'à 3000€/an",
            "Applicable pendant toute la durée du contrat de rachat"
          ]
        }
      }
    }
  },
  castellane: {
    name: "Castellane",
    code: "04120",
    population: 1500,
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
    ],
    seo: {
      title: "Castellane : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Castellane. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Castellane", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/castellane-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Castellane"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  valensole: {
    name: "Valensole",
    code: "04210",
    population: 3300,
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
    ],
    seo: {
      title: "Valensole : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Valensole. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Valensole", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/valensole-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Valensole"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  saintLaurentDuVerdon: {
    name: "Saint-Laurent-du-Verdon",
    code: "04500",
    population: 100,
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
    ],
    seo: {
      title: "Saint-Laurent-du-Verdon : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Saint-Laurent-du-Verdon. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Saint-Laurent-du-Verdon", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/saint-laurent-du-verdon-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Saint-Laurent-du-Verdon"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  greouxLesBains: {
    name: "Gréoux-les-Bains",
    code: "04800",
    population: 2600,
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
    ],
    seo: {
      title: "Gréoux-les-Bains : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Gréoux-les-Bains. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Gréoux-les-Bains", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/greoux-les-bains-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Gréoux-les-Bains"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  esparronDeVerdon: {
    name: "Esparron-de-Verdon",
    code: "04550",
    population: 450,
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
    ],
    seo: {
      title: "Esparron-de-Verdon : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Esparron-de-Verdon. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Esparron-de-Verdon", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/esparron-de-verdon-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Esparron-de-Verdon"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  saintEtienneLesOrgues: {
    name: "Saint-Étienne-les-Orgues",
    code: "04230",
    population: 1200,
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
    ],
    seo: {
      title: "Saint-Étienne-les-Orgues : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Saint-Étienne-les-Orgues. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Saint-Étienne-les-Orgues", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/saint-etienne-les-orgues-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Saint-Étienne-les-Orgues"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  banon: {
    name: "Banon",
    code: "04150",
    population: 1000,
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
    ],
    seo: {
      title: "Banon : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Banon. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Banon", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/banon-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Banon"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  simianelarotonde: {
    name: "Simiane-la-Rotonde",
    code: "04150",
    population: 600,
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
    ],
    seo: {
      title: "Simiane-la-Rotonde : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Simiane-la-Rotonde. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Simiane-la-Rotonde", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/simiane-la-rotonde-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Simiane-la-Rotonde"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "La prime à l'autoconsommation est une aide financière directe accordée par l'État pour encourager l'installation de panneaux solaires en autoconsommation. Cette prime est calculée en fonction de la puissance installée.",
          rates: [
            { power: "6 kWc", amount: 1140 },
            { power: "9 kWc", amount: 1710 },
            { power: "12 kWc", amount: 2280 }
          ]
        },
        buyback: {
          description: "Le tarif de rachat subventionné permet de vendre votre surplus d'électricité à un tarif avantageux garanti sur 20 ans",
          details: [
            "Contrat d'achat garanti sur 20 ans",
            "Tarif préférentiel fixé par l'État",
            "Revenus complémentaires garantis",
            "Rachat du surplus de production"
          ]
        },
        vat: {
          description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'installation de vos panneaux solaires, une économie substantielle qui rend votre projet encore plus rentable",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Les revenus générés par la revente de votre électricité solaire sont exonérés d'impôts, rendant votre installation encore plus avantageuse financièrement",
          details: [
            "Exonération totale sur les revenus de la revente",
            "Aucune déclaration nécessaire",
            "Avantage fiscal garanti",
            "Applicable dès la première année"
          ]
        }
      }
    }
  },
  saintMichelObservatoire: {
    name: "Saint-Michel-l'Observatoire",
    code: "04870",
    population: 1100,
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
    ],
    seo: {
      title: "Saint-Michel-l'Observatoire : installation solaire pour particuliers et professionnels",
      metaDescription: "Découvrez les avantages de l'installation solaire à Saint-Michel-l'Observatoire. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["installation solaire", "Saint-Michel-l'Observatoire", "énergie renouvelable", "économies d'énergie"],
      images: [
        {
          url: "https://example.com/saint-michel-observatoire-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Saint-Michel-l'Observatoire"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation de panneaux solaires",
        headers: ["Puissance de l'installation", "Prix de l'installation"],
        rows: [
          { 
            power: "Installation de 3 kWc", 
            price: "8 350 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "12 780 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "17 210 €", 
            type: "Grande propriété",
            badge: "Meilleur rapport qualité/prix",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix TTC après déduction de la prime à l'autoconsommation",
          "Installation complète clé en main",
          "Garantie 20 ans sur les panneaux"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8350 },
        { power: "6 kWc", price: 12780 },
        { power: "9 kWc", price: 17210 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires depuis plus de 10 ans. Notre équipe de techniciens qualifiés assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        },
        {
          name: "Éco-Solaire Solutions",
          certifications: ["RGE", "QualiPV"],
          description: "Expert en solutions photovoltaïques, notre équipe de professionnels vous accompagne dans votre projet d'installation solaire avec un service clé en main.",
          experience: "15 ans d'expertise"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["RGE", "Qualibat", "QualiPV"],
          description: "Top installateur de la région, notre entreprise combine expertise technique et service client premium. Nos techniciens qualifiés garantissent une installation optimale.",
          experience: "Plus de 1000 installations réussies"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "6 kWc", amount: 380 },
            { power: "9 kWc", amount: 290 },
            { power: "12 kWc", amount: 190 }
          ]
        },
        buyback: {
          description: "Tarif de rachat subventionné",
          details: [
            "Vente du surplus d'électricité à un tarif avantageux",
            "Contrat de rachat sur 20 ans",
            "Prix fixe garanti par l'État"
          ]
        },
        vat: {
          description: "TVA réduite sur l'installation",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération d'impôts sur les revenus de la vente",
          details: [
            "Revenus de la vente d'électricité exonérés jusqu'à 3000€/an",
            "Applicable pendant toute la durée du contrat de rachat"
          ]
        }
      }
    }
  }
};