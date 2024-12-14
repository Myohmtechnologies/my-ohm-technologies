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

export const cities: Record<string, City> = {
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
        comment: "Très satisfaite top installateurs solaire. Économies réelles sur ma facture d'électricité.",
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
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
      },
      {
        author: "Marie D.",
        rating: 4.7,
        date: "2023-11-20",
        comment: "Installation professionnelle et rapide à Castellane. Très satisfaite de mes panneaux solaires.",
        location: "Castellane"
      },
      {
        author: "Pierre R.",
        rating: 4.5,
        date: "2023-10-15",
        comment: "Économies d'énergie significatives grâce à l'installation solaire. Recommandé !",
        location: "Castellane"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
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
      metaDescription: "Découvrez les solutions solaires adaptées à Esparron-de-Verdon. Réduisez votre empreinte carbone et vos coûts énergétiques.",
      keywords: ["installation solaire", "Esparron-de-Verdon", "énergie renouvelable", "solaire"],
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
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
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
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
      "Service client réactif"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
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
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
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
      metaDescription: "Découvrez les solutions solaires adaptées à Simiane-la-Rotonde. Réduisez votre empreinte carbone et vos coûts énergétiques.",
      keywords: ["installation solaire", "Simiane-la-Rotonde", "énergie renouvelable", "solaire"],
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
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
      "Matériel haute qualité",
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
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
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
        }
      }
    }
  },
  oraison: {
    name: "Oraison",
    code: "04700",
    population: 2500,
    solarAdvantages: [
      "Bon ensoleillement dans la région",
      "Potentiel solaire intéressant",
      "Commune rurale favorable aux énergies renouvelables"
    ],
    keyPoints: [
      "Située dans les Alpes-de-Haute-Provence",
      "Proximité de Digne-les-Bains",
      "Territoire propice aux énergies renouvelables"
    ],
    seo: {
      title: "Panneaux solaires à Oraison - Solutions énergétiques durables",
      metaDescription: "Découvrez les solutions de panneaux solaires adaptées à Oraison. Optimisez votre consommation d'énergie et réduisez votre empreinte carbone.",
      keywords: ["panneaux solaires", "Oraison", "énergie renouvelable", "solaire"],
      images: [
        {
          url: "https://example.com/oraison-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Oraison"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Oraison",
        headers: ["Puissance", "Prix", "Type"],
        rows: [
          {
            power: "3 kWc",
            price: "9 000 €",
            type: "Résidentiel",
            badge: "Recommandé",
            highlight: true,
            description: "Installation idéale pour maison individuelle"
          }
        ],
        notes: ["Prix indicatifs, hors aides et subventions"],
        ctaText: "Demander un devis"
      },
      costs: [
        { power: "3 kWc", price: 9000 }
      ],
      installers: [
        {
          name: "SolairePro Provence",
          certifications: ["RGE", "Qualibat"],
          description: "Installateur local spécialisé dans les solutions solaires",
          experience: "10 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          rates: [
            { power: "3 kWc", amount: 1000 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière",
          details: ["Pendant 2 ans après l'installation"]
        }
      }
    }
  },
  forcalquier: {
    name: "Forcalquier",
    code: "04300",
    population: 4500,
    solarAdvantages: [
      "Excellente exposition solaire",
      "Commune engagée dans la transition énergétique",
      "Potentiel photovoltaïque élevé"
    ],
    keyPoints: [
      "Située dans les Alpes-de-Haute-Provence",
      "Chef-lieu de canton dynamique",
      "Environnement propice aux énergies renouvelables"
    ],
    seo: {
      title: "Panneaux solaires à Forcalquier - Solutions énergétiques innovantes",
      metaDescription: "Trouvez les meilleures solutions de panneaux solaires à Forcalquier. Réduisez vos coûts énergétiques et contribuez à un avenir durable.",
      keywords: ["panneaux solaires", "Forcalquier", "énergie verte", "photovoltaïque"],
      images: [
        {
          url: "https://example.com/forcalquier-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Forcalquier"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Forcalquier",
        headers: ["Puissance", "Prix", "Type"],
        rows: [
          {
            power: "4 kWc",
            price: "11 000 €",
            type: "Résidentiel",
            badge: "Recommandé",
            highlight: true,
            description: "Installation optimale pour maison individuelle"
          }
        ],
        notes: ["Prix indicatifs, hors aides et subventions"],
        ctaText: "Demander un devis"
      },
      costs: [
        { power: "4 kWc", price: 11000 }
      ],
      installers: [
        {
          name: "EnergieVerte Alpes",
          certifications: ["RGE", "Qualibat"],
          description: "Expert local en solutions solaires",
          experience: "12 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          rates: [
            { power: "4 kWc", amount: 1200 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière",
          details: ["Pendant 2 ans après l'installation"]
        }
      }
    }
  },
  laBrillanne: {
    name: "La Brillanne",
    code: "04700",
    population: 500,
    solarAdvantages: [
      "Ensoleillement optimal dans la région",
      "Potentiel solaire élevé",
      "Engagement local pour les énergies renouvelables"
    ],
    keyPoints: [
      "Installation rapide et professionnelle",
      "Économies d'énergie significatives",
      "Accompagnement personnalisé"
    ],
    reviews: [
      {
        author: "Jean D.",
        rating: 4.5,
        date: "2023-11-15",
        comment: "Installation solaire impeccable, très satisfait du service.",
        location: "La Brillanne"
      }
    ],
    seo: {
      title: "Panneaux solaires à La Brillanne - Solutions énergétiques durables",
      metaDescription: "Découvrez les solutions solaires adaptées à La Brillanne. Réduisez votre facture d'électricité et contribuez à la transition énergétique.",
      keywords: ["panneaux solaires", "La Brillanne", "énergie renouvelable", "solaire"],
      images: [
        {
          url: "https://example.com/la-brillanne-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à La Brillanne"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
        }
      }
    }
  },
  annot: {
    name: "Annot",
    code: "04240",
    population: 600,
    solarAdvantages: [
      "Excellente exposition solaire",
      "Environnement naturel préservé",
      "Potentiel énergétique élevé"
    ],
    keyPoints: [
      "Installation adaptée au terrain",
      "Équipements certifiés",
      "Suivi de production",
      "Service client dédié"
    ],
    reviews: [
      {
        author: "Sophie M.",
        rating: 4.6,
        date: "2023-10-20",
        comment: "Projet solaire réussi, installation rapide et professionnelle.",
        location: "Annot"
      }
    ],
    seo: {
      title: "Panneaux solaires à Annot - Solutions énergétiques innovantes",
      metaDescription: "Découvrez les solutions solaires adaptées à Annot. Réduisez votre empreinte carbone et vos coûts énergétiques.",
      keywords: ["panneaux solaires", "Annot", "énergie verte", "photovoltaïque"],
      images: [
        {
          url: "https://example.com/annot-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Annot"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
        }
      }
    }
  },
  allos: {
    name: "Allos",
    code: "04260",
    population: 300,
    solarAdvantages: [
      "Altitude et ensoleillement optimal",
      "Engagement écologique local",
      "Potentiel solaire unique"
    ],
    keyPoints: [
      "Installation adaptée aux conditions montagnardes",
      "Technologie solaire performante",
      "Économies d'énergie significatives"
    ],
    reviews: [
      {
        author: "Marc L.",
        rating: 4.7,
        date: "2023-09-15",
        comment: "Installation solaire parfaitement intégrée à notre environnement montagnard.",
        location: "Allos"
      }
    ],
    seo: {
      title: "Panneaux solaires à Allos - Solutions énergétiques en montagne",
      metaDescription: "Découvrez les solutions solaires adaptées à Allos. Produisez votre propre énergie dans un environnement montagnard préservé.",
      keywords: ["panneaux solaires", "Allos", "énergie renouvelable", "montagne"],
      images: [
        {
          url: "https://example.com/allos-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Allos"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
        }
      }
    }
  },
  chaudronNotreDame: {
    name: "Chaudron-Notre-Dame",
    code: "04330",
    population: 1200,
    solarAdvantages: [
      "Ensoleillement exceptionnel des Alpes-de-Haute-Provence",
      "Zone favorable à l'installation solaire",
      "Terrain propice aux installations photovoltaïques",
      "Climat méditerranéen optimal",
      "Potentiel solaire élevé"
    ],
    keyPoints: [
      "Installation personnalisée selon votre terrain",
      "Garantie décennale sur l'installation",
      "Suivi de production en temps réel",
      "Maintenance régulière incluse",
      "Optimisation de l'autoconsommation"
    ],
    reviews: [
      {
        author: "Pierre D.",
        rating: 4.8,
        date: "2023-12-10",
        comment: "Très satisfait de mon installation solaire, l'équipe a été professionnelle et efficace.",
        location: "Chaudron-Notre-Dame"
      },
      {
        author: "Marie L.",
        rating: 5,
        date: "2023-11-25",
        comment: "Excellente installation, production conforme aux prévisions. Je recommande !",
        location: "Chaudron-Notre-Dame"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Chaudron-Notre-Dame (04330)",
      metaDescription: "Installation de panneaux solaires à Chaudron-Notre-Dame. Profitez d'un ensoleillement optimal et réduisez vos factures d'électricité grâce à l'énergie solaire.",
      keywords: ["panneaux solaires", "Chaudron-Notre-Dame", "04330", "installation solaire", "énergie renouvelable"],
      images: [
        {
          url: "/images/cities/chaudron-notre-dame-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Chaudron-Notre-Dame"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Chaudron-Notre-Dame",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 500 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation basique idéale pour petit foyer"
          },
          {
            power: "6 kWc",
            price: "16 000 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur rapport qualité/prix"
          },
          {
            power: "9 kWc",
            price: "24 000 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Solution optimale pour les grandes maisons ou les propriétés avec une consommation électrique importante."
          }
        ],
        notes: [
          "Prix incluant la pose et le matériel",
          "Garantie 20 ans sur les panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8500
        },
        {
          power: "6 kWc",
          price: 16000
        },
        {
          power: "9 kWc",
          price: 24000
        }
      ],
      installers: [
        {
          name: "Solar Pro 04",
          certifications: ["QualiPV", "RGE"],
          description: "Expert en installation solaire depuis 15 ans",
          experience: "15 ans"
        },
        {
          name: "Éco-Énergie Solutions",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "10 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  barreme: {
    name: "Barreme",
    code: "04330",
    population: 400,
    solarAdvantages: [
      "Conditions d'ensoleillement favorables",
      "Engagement pour les énergies vertes",
      "Potentiel solaire prometteur"
    ],
    keyPoints: [
      "Installation personnalisée",
      "Technologie solaire de pointe",
      "Accompagnement technique complet"
    ],
    reviews: [
      {
        author: "Isabelle R.",
        rating: 4.5,
        date: "2023-08-25",
        comment: "Projet solaire réussi, équipe professionnelle et à l'écoute.",
        location: "Barreme"
      }
    ],
    seo: {
      title: "Panneaux solaires à Barreme - Solutions énergétiques innovantes",
      metaDescription: "Découvrez les solutions solaires adaptées à Barreme. Réduisez votre empreinte carbone et vos coûts énergétiques.",
      keywords: ["panneaux solaires", "Barreme", "énergie verte", "photovoltaïque"],
      images: [
        {
          url: "https://example.com/barreme-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Barreme"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
        }
      }
    }
  },
  saintAndresLesAlpes: {
    name: "Saint-André-les-Alpes",
    code: "04170",
    population: 700,
    solarAdvantages: [
      "Excellente exposition solaire",
      "Cadre naturel préservé",
      "Potentiel énergétique remarquable"
    ],
    keyPoints: [
      "Installation sur-mesure",
      "Technologie solaire performante",
      "Économies d'énergie substantielles"
    ],
    reviews: [
      {
        author: "Luc P.",
        rating: 4.6,
        date: "2023-07-10",
        comment: "Installation solaire parfaitement intégrée, résultats au-delà de nos attentes.",
        location: "Saint-André-les-Alpes"
      }
    ],
    seo: {
      title: "Panneaux solaires à Saint-André-les-Alpes - Solutions énergétiques durables",
      metaDescription: "Découvrez les solutions solaires adaptées à Saint-André-les-Alpes. Produisez votre propre énergie dans un environnement naturel exceptionnel.",
      keywords: ["panneaux solaires", "Saint-André-les-Alpes", "énergie renouvelable", "solaire"],
      images: [
        {
          url: "https://example.com/saint-andre-les-alpes-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Saint-André-les-Alpes"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
        }
      }
    }
  },
  aiglun: {
    name: "Aiglun",
    code: "04510",
    population: 250,
    solarAdvantages: [
      "Exposition solaire favorable",
      "Environnement rural propice",
      "Potentiel énergétique prometteur"
    ],
    keyPoints: [
      "Installation adaptée au terrain",
      "Technologie solaire moderne",
      "Économies d'énergie garanties"
    ],
    reviews: [
      {
        author: "Paul M.",
        rating: 4.5,
        date: "2023-09-05",
        comment: "Installation solaire efficace et professionnelle. Très satisfait du résultat.",
        location: "Aiglun"
      }
    ],
    seo: {
      title: "Panneaux solaires à Aiglun - Solutions énergétiques innovantes",
      metaDescription: "Découvrez les solutions solaires adaptées à Aiglun. Réduisez votre empreinte carbone et vos coûts énergétiques.",
      keywords: ["panneaux solaires", "Aiglun", "énergie verte", "photovoltaïque"],
      images: [
        {
          url: "https://example.com/aiglun-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Aiglun"
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
            price: "8 830 €", 
            type: "Petit foyer",
            badge: "Économique",
            highlight: false,
            description: "Idéal pour un couple ou une petite famille, cette installation couvre vos besoins essentiels en électricité."
          },
          { 
            power: "Installation de 6 kWc", 
            price: "13 530 €", 
            type: "Maison familiale",
            badge: "Populaire",
            highlight: true,
            description: "Notre option la plus populaire, parfaite pour une famille de 4 personnes avec une consommation moyenne."
          },
          { 
            power: "Installation de 9 kWc", 
            price: "18 050 €", 
            type: "Grande maison",
            badge: "Premium",
            highlight: false,
            description: "Solution complète pour les grandes familles ou les maisons avec une consommation électrique élevée."
          }
        ],
        notes: ["Prix indicatifs, devis personnalisé sur demande"],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        { power: "3 kWc", price: 8830 },
        { power: "6 kWc", price: 13530 },
        { power: "9 kWc", price: 18050 }
      ],
      installers: [
        {
          name: "SolarTech Provence",
          certifications: ["RGE QualiPV", "Qualibat"],
          description: "Entreprise spécialisée dans l'installation de panneaux solaires. Notre équipe assure une installation de qualité et un suivi personnalisé.",
          experience: "Plus de 500 installations réalisées"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation pour les installations solaires",
          rates: [
            { power: "3-9 kWc", amount: 500 }
          ]
        },
        buyback: {
          description: "Rachat de l'électricité solaire excédentaire",
          details: ["Tarif garanti pendant 20 ans"]
        },
        vat: {
          description: "TVA réduite pour les installations solaires",
          rate: 5.5,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière possible",
          details: ["Selon conditions et durée"]
        }
      }
    }
  },
  mallemoisson: {
    name: "Mallemoisson",
    code: "04510",
    population: 1050,
    solarAdvantages: [
      "Situation géographique privilégiée",
      "Excellent taux d'ensoleillement annuel",
      "Relief favorable aux installations solaires",
      "Zone climatique adaptée",
      "Faible taux de précipitations"
    ],
    keyPoints: [
      "Étude personnalisée du terrain",
      "Installation sur mesure",
      "Garantie décennale",
      "Maintenance préventive",
      "Monitoring de production"
    ],
    reviews: [
      {
        author: "Laurent M.",
        rating: 4.9,
        date: "2023-12-01",
        comment: "Installation parfaite, équipe à l'écoute et professionnelle.",
        location: "Mallemoisson"
      },
      {
        author: "Catherine B.",
        rating: 4.7,
        date: "2023-11-15",
        comment: "Très satisfaite du rendement des panneaux, installation soignée.",
        location: "Mallemoisson"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Mallemoisson (04510)",
      metaDescription: "Profitez de l'énergie solaire à Mallemoisson. Installation de panneaux photovoltaïques par des experts qualifiés. Devis gratuit et personnalisé.",
      keywords: ["panneaux solaires", "Mallemoisson", "04510", "installation photovoltaïque", "énergie solaire"],
      images: [
        {
          url: "/images/cities/mallemoisson-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Mallemoisson"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Mallemoisson",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 700 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Solution économique pour petit foyer"
          },
          {
            power: "6 kWc",
            price: "16 200 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur compromis performance/prix"
          },
          {
            power: "9 kWc",
            price: "24 500 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix tout compris installation et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale pose"
        ],
        ctaText: "Obtenir un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8700
        },
        {
          power: "6 kWc",
          price: 16200
        },
        {
          power: "9 kWc",
          price: 24500
        }
      ],
      installers: [
        {
          name: "Soleil des Alpes",
          certifications: ["QualiPV", "RGE"],
          description: "Spécialiste local des installations solaires",
          experience: "12 ans"
        },
        {
          name: "Provence Solar",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Expert en solutions photovoltaïques",
          experience: "8 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  mezel: {
    name: "Mézel",
    code: "04270",
    population: 850,
    solarAdvantages: [
      "Exposition solaire optimale",
      "Climat méditerranéen favorable",
      "Faible nébulosité annuelle",
      "Terrain adapté aux installations solaires",
      "Zone géographique privilégiée"
    ],
    keyPoints: [
      "Étude technique approfondie",
      "Installation professionnelle",
      "Garantie décennale",
      "Suivi de production",
      "Service après-vente réactif"
    ],
    reviews: [
      {
        author: "Michel R.",
        rating: 4.8,
        date: "2023-11-28",
        comment: "Excellent travail d'installation, équipe sérieuse et compétente.",
        location: "Mézel"
      },
      {
        author: "Sylvie D.",
        rating: 4.6,
        date: "2023-11-05",
        comment: "Très contente de mon installation, économies réelles sur ma facture.",
        location: "Mézel"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Mézel (04270)",
      metaDescription: "Installation de panneaux solaires à Mézel par des professionnels certifiés. Profitez d'une énergie verte et économique.",
      keywords: ["panneaux solaires", "Mézel", "04270", "énergie solaire", "installation photovoltaïque"],
      images: [
        {
          url: "/images/cities/mezel-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Mézel"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Mézel",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 600 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Idéal pour petit foyer"
          },
          {
            power: "6 kWc",
            price: "16 100 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur rapport qualité/prix"
          },
          {
            power: "9 kWc",
            price: "24 300 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Performance maximale"
          }
        ],
        notes: [
          "Prix incluant matériel et installation",
          "Garantie 20 ans sur les panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8600
        },
        {
          power: "6 kWc",
          price: 16100
        },
        {
          power: "9 kWc",
          price: 24300
        }
      ],
      installers: [
        {
          name: "Alpes Solaire",
          certifications: ["QualiPV", "RGE"],
          description: "Expert local en installations solaires",
          experience: "10 ans"
        },
        {
          name: "Sud Energy",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "15 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  mirabeau: {
    name: "Mirabeau",
    code: "04510",
    population: 580,
    solarAdvantages: [
      "Ensoleillement exceptionnel",
      "Position géographique idéale",
      "Climat propice à l'énergie solaire",
      "Faible taux d'humidité",
      "Zone favorable aux installations photovoltaïques"
    ],
    keyPoints: [
      "Étude personnalisée gratuite",
      "Installation clé en main",
      "Garantie décennale",
      "Suivi de production",
      "Maintenance programmée"
    ],
    reviews: [
      {
        author: "Philippe G.",
        rating: 5,
        date: "2023-11-20",
        comment: "Installation impeccable, équipe professionnelle. Très satisfait du rendement.",
        location: "Mirabeau"
      },
      {
        author: "Anne M.",
        rating: 4.8,
        date: "2023-10-30",
        comment: "Service client excellent, installation rapide et soignée.",
        location: "Mirabeau"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Mirabeau (04510)",
      metaDescription: "Optez pour l'énergie solaire à Mirabeau. Installation de panneaux photovoltaïques par des experts certifiés. Devis personnalisé gratuit.",
      keywords: ["panneaux solaires", "Mirabeau", "04510", "installation photovoltaïque", "énergie solaire"],
      images: [
        {
          url: "/images/cities/mirabeau-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Mirabeau"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Mirabeau",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 550 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Solution économique adaptée"
          },
          {
            power: "6 kWc",
            price: "16 050 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur rapport qualité/prix"
          },
          {
            power: "9 kWc",
            price: "24 200 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix tout compris installation et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale pose"
        ],
        ctaText: "Obtenir un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8550
        },
        {
          power: "6 kWc",
          price: 16050
        },
        {
          power: "9 kWc",
          price: 24200
        }
      ],
      installers: [
        {
          name: "Solaire Pro 04",
          certifications: ["QualiPV", "RGE"],
          description: "Expert local en installations solaires",
          experience: "11 ans"
        },
        {
          name: "Énergie Verte Solutions",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "9 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  digneLesBains: {
    name: "Digne-les-Bains",
    code: "04000",
    population: 16500,
    solarAdvantages: [
      "Ensoleillement optimal toute l'année",
      "Position géographique privilégiée",
      "Climat méditerranéen favorable",
      "Politique locale en faveur des énergies renouvelables",
      "Zone à fort potentiel solaire"
    ],
    keyPoints: [
      "Expertise locale reconnue",
      "Installation personnalisée",
      "Garanties premium",
      "Suivi de production détaillé",
      "Service après-vente local"
    ],
    reviews: [
      {
        author: "Jean-Paul M.",
        rating: 4.9,
        date: "2023-12-05",
        comment: "Installation très professionnelle, équipe à l'écoute et efficace.",
        location: "Digne-les-Bains"
      },
      {
        author: "Marie-Claire B.",
        rating: 4.7,
        date: "2023-11-18",
        comment: "Excellent suivi du projet, de l'étude à l'installation finale.",
        location: "Digne-les-Bains"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Digne-les-Bains (04000)",
      metaDescription: "Installation professionnelle de panneaux solaires à Digne-les-Bains. Profitez de l'expertise locale et des aides disponibles pour votre projet solaire.",
      keywords: ["panneaux solaires", "Digne-les-Bains", "04000", "installation photovoltaïque", "énergie solaire", "Alpes-de-Haute-Provence"],
      images: [
        {
          url: "/images/cities/digne-les-bains-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Digne-les-Bains"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Digne-les-Bains",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 400 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation de base optimisée"
          },
          {
            power: "6 kWc",
            price: "15 900 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale performance/prix"
          },
          {
            power: "9 kWc",
            price: "23 900 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haut de gamme"
          }
        ],
        notes: [
          "Prix tout compris installation et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8400
        },
        {
          power: "6 kWc",
          price: 15900
        },
        {
          power: "9 kWc",
          price: 23900
        }
      ],
      installers: [
        {
          name: "Digne Solar",
          certifications: ["QualiPV", "RGE"],
          description: "Expert local en installations solaires résidentielles",
          experience: "14 ans"
        },
        {
          name: "Alpes Énergies Nouvelles",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des solutions photovoltaïques",
          experience: "12 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  laJavie: {
    name: "La Javie",
    code: "04420",
    population: 420,
    solarAdvantages: [
      "Excellent ensoleillement annuel",
      "Situation géographique avantageuse",
      "Climat propice à l'énergie solaire",
      "Zone rurale idéale pour les installations",
      "Faible pollution atmosphérique"
    ],
    keyPoints: [
      "Étude technique détaillée",
      "Installation sur mesure",
      "Garantie décennale",
      "Suivi de production",
      "Service après-vente réactif"
    ],
    reviews: [
      {
        author: "Robert L.",
        rating: 4.8,
        date: "2023-11-25",
        comment: "Très satisfait de l'installation, équipe sérieuse et compétente.",
        location: "La Javie"
      },
      {
        author: "Isabelle P.",
        rating: 4.7,
        date: "2023-10-28",
        comment: "Installation soignée et professionnelle, bon suivi du projet.",
        location: "La Javie"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à La Javie (04420)",
      metaDescription: "Installation de panneaux solaires à La Javie par des professionnels certifiés. Profitez d'une énergie propre et économique.",
      keywords: ["panneaux solaires", "La Javie", "04420", "installation photovoltaïque", "énergie solaire"],
      images: [
        {
          url: "/images/cities/la-javie-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à La Javie"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à La Javie",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 650 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation basique optimale"
          },
          {
            power: "6 kWc",
            price: "16 150 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur rapport qualité/prix"
          },
          {
            power: "9 kWc",
            price: "24 400 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel",
          "Garantie 20 ans sur les panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8650
        },
        {
          power: "6 kWc",
          price: 16150
        },
        {
          power: "9 kWc",
          price: 24400
        }
      ],
      installers: [
        {
          name: "Alpes Solaire Pro",
          certifications: ["QualiPV", "RGE"],
          description: "Expert en installations solaires",
          experience: "10 ans"
        },
        {
          name: "Éco-Énergie Solutions",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "8 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  leBrusquet: {
    name: "Le Brusquet",
    code: "04420",
    population: 1020,
    solarAdvantages: [
      "Ensoleillement exceptionnel",
      "Climat méditerranéen favorable",
      "Zone géographique optimale",
      "Faible taux de nuages",
      "Terrain propice aux installations solaires"
    ],
    keyPoints: [
      "Installation personnalisée",
      "Expertise technique locale",
      "Garantie décennale",
      "Monitoring permanent",
      "Maintenance adaptée"
    ],
    reviews: [
      {
        author: "François D.",
        rating: 4.9,
        date: "2023-12-01",
        comment: "Installation parfaite, équipe professionnelle et efficace.",
        location: "Le Brusquet"
      },
      {
        author: "Sophie M.",
        rating: 4.8,
        date: "2023-11-15",
        comment: "Très satisfaite du service et du rendement des panneaux.",
        location: "Le Brusquet"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires au Brusquet (04420)",
      metaDescription: "Installation de panneaux solaires au Brusquet par des experts certifiés. Profitez d'une énergie renouvelable et économique.",
      keywords: ["panneaux solaires", "Le Brusquet", "04420", "installation photovoltaïque", "énergie solaire"],
      images: [
        {
          url: "/images/cities/le-brusquet-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire au Brusquet"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire au Brusquet",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 600 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Solution économique adaptée"
          },
          {
            power: "6 kWc",
            price: "16 100 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur rapport qualité/prix"
          },
          {
            power: "9 kWc",
            price: "24 300 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix tout compris installation et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale pose"
        ],
        ctaText: "Obtenir un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8600
        },
        {
          power: "6 kWc",
          price: 16100
        },
        {
          power: "9 kWc",
          price: 24300
        }
      ],
      installers: [
        {
          name: "Solaire Alpes",
          certifications: ["QualiPV", "RGE"],
          description: "Expert en installation solaire résidentielle",
          experience: "12 ans"
        },
        {
          name: "Provence Solar Experts",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "9 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  marcoux: {
    name: "Marcoux",
    code: "04000",
    population: 580,
    solarAdvantages: [
      "Excellent taux d'ensoleillement",
      "Position géographique idéale",
      "Climat favorable toute l'année",
      "Zone propice aux installations solaires",
      "Faible nébulosité"
    ],
    keyPoints: [
      "Étude technique gratuite",
      "Installation professionnelle",
      "Garantie décennale",
      "Suivi de production",
      "Service après-vente local"
    ],
    reviews: [
      {
        author: "Patrick R.",
        rating: 4.8,
        date: "2023-11-30",
        comment: "Installation rapide et soignée, équipe très professionnelle.",
        location: "Marcoux"
      },
      {
        author: "Christine B.",
        rating: 4.7,
        date: "2023-11-10",
        comment: "Très satisfaite de l'installation et du suivi du projet.",
        location: "Marcoux"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Marcoux (04000)",
      metaDescription: "Installation de panneaux solaires à Marcoux par des professionnels certifiés. Profitez d'une énergie verte et économique.",
      keywords: ["panneaux solaires", "Marcoux", "04000", "installation photovoltaïque", "énergie solaire"],
      images: [
        {
          url: "/images/cities/marcoux-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Marcoux"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Marcoux",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 500 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation de base optimisée"
          },
          {
            power: "6 kWc",
            price: "16 000 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur rapport qualité/prix"
          },
          {
            power: "9 kWc",
            price: "24 100 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haut de gamme"
          }
        ],
        notes: [
          "Prix incluant pose et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8500
        },
        {
          power: "6 kWc",
          price: 16000
        },
        {
          power: "9 kWc",
          price: 24100
        }
      ],
      installers: [
        {
          name: "Solar Pro Alpes",
          certifications: ["QualiPV", "RGE"],
          description: "Expert en installations solaires résidentielles",
          experience: "11 ans"
        },
        {
          name: "Énergie Verte 04",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "8 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  barcelonnette: {
    name: "Barcelonnette",
    code: "04400",
    population: 2700,
    solarAdvantages: [
      "Ensoleillement optimal en altitude",
      "Position géographique privilégiée",
      "Climat montagnard favorable",
      "Exposition solaire maximisée",
      "Zone à fort potentiel photovoltaïque"
    ],
    keyPoints: [
      "Expertise montagne",
      "Installation adaptée altitude",
      "Garantie décennale",
      "Suivi production temps réel",
      "Maintenance spécialisée"
    ],
    reviews: [
      {
        author: "Marc D.",
        rating: 4.9,
        date: "2023-12-02",
        comment: "Installation parfaitement adaptée aux conditions de montagne. Excellent service.",
        location: "Barcelonnette"
      },
      {
        author: "Julie M.",
        rating: 4.8,
        date: "2023-11-15",
        comment: "Très satisfaite de l'installation, équipe professionnelle et efficace.",
        location: "Barcelonnette"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Barcelonnette (04400)",
      metaDescription: "Installation de panneaux solaires à Barcelonnette, adaptée aux conditions de montagne. Profitez d'une énergie verte et économique en altitude.",
      keywords: ["panneaux solaires", "Barcelonnette", "04400", "installation photovoltaïque", "énergie solaire", "montagne"],
      images: [
        {
          url: "/images/cities/barcelonnette-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Barcelonnette"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Barcelonnette",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 800 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation adaptée montagne"
          },
          {
            power: "6 kWc",
            price: "16 500 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale altitude"
          },
          {
            power: "9 kWc",
            price: "24 800 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel spécial montagne",
          "Garantie 20 ans sur les panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8800
        },
        {
          power: "6 kWc",
          price: 16500
        },
        {
          power: "9 kWc",
          price: 24800
        }
      ],
      installers: [
        {
          name: "Alpes Solar Expert",
          certifications: ["QualiPV", "RGE"],
          description: "Spécialiste des installations en altitude",
          experience: "15 ans"
        },
        {
          name: "Montagne Énergie",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Expert en solutions solaires montagnardes",
          experience: "12 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  jausiers: {
    name: "Jausiers",
    code: "04850",
    population: 1150,
    solarAdvantages: [
      "Excellent ensoleillement montagnard",
      "Situation géographique optimale",
      "Climat alpin favorable",
      "Exposition solaire privilégiée",
      "Zone à fort rendement photovoltaïque"
    ],
    keyPoints: [
      "Installation haute montagne",
      "Expertise technique alpine",
      "Garantie décennale",
      "Monitoring permanent",
      "Maintenance adaptée"
    ],
    reviews: [
      {
        author: "Bernard L.",
        rating: 4.9,
        date: "2023-11-28",
        comment: "Installation parfaite malgré les conditions de montagne. Service impeccable.",
        location: "Jausiers"
      },
      {
        author: "Marie-Claire H.",
        rating: 4.7,
        date: "2023-11-05",
        comment: "Très satisfaite de l'installation, équipe compétente et professionnelle.",
        location: "Jausiers"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Jausiers (04850)",
      metaDescription: "Installation de panneaux solaires à Jausiers, adaptée aux conditions de haute montagne. Profitez d'une énergie verte et économique en altitude.",
      keywords: ["panneaux solaires", "Jausiers", "04850", "installation photovoltaïque", "énergie solaire", "montagne"],
      images: [
        {
          url: "/images/cities/jausiers-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Jausiers"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Jausiers",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 850 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation montagne adaptée"
          },
          {
            power: "6 kWc",
            price: "16 600 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale altitude"
          },
          {
            power: "9 kWc",
            price: "24 900 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel spécial montagne",
          "Garantie 20 ans panneaux",
          "Garantie décennale pose"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8850
        },
        {
          power: "6 kWc",
          price: 16600
        },
        {
          power: "9 kWc",
          price: 24900
        }
      ],
      installers: [
        {
          name: "Montagne Solar Pro",
          certifications: ["QualiPV", "RGE"],
          description: "Expert en installations solaires d'altitude",
          experience: "14 ans"
        },
        {
          name: "Alpes Énergies Vertes",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des solutions solaires en montagne",
          experience: "11 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  selonnet: {
    name: "Selonnet",
    code: "04140",
    population: 480,
    solarAdvantages: [
      "Ensoleillement optimal en altitude",
      "Position géographique avantageuse",
      "Climat montagnard favorable",
      "Faible nébulosité",
      "Zone à fort potentiel solaire"
    ],
    keyPoints: [
      "Installation montagne",
      "Expertise technique locale",
      "Garantie décennale",
      "Suivi production",
      "Maintenance spécialisée"
    ],
    reviews: [
      {
        author: "Pierre V.",
        rating: 4.8,
        date: "2023-11-25",
        comment: "Installation parfaite, équipe professionnelle et efficace en montagne.",
        location: "Selonnet"
      },
      {
        author: "Martine D.",
        rating: 4.7,
        date: "2023-11-02",
        comment: "Très satisfaite du service et de la qualité de l'installation.",
        location: "Selonnet"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Selonnet (04140)",
      metaDescription: "Installation de panneaux solaires à Selonnet, adaptée aux conditions de montagne. Profitez d'une énergie verte et économique en altitude.",
      keywords: ["panneaux solaires", "Selonnet", "04140", "installation photovoltaïque", "énergie solaire", "montagne"],
      images: [
        {
          url: "/images/cities/selonnet-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Selonnet"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Selonnet",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 750 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation montagne adaptée"
          },
          {
            power: "6 kWc",
            price: "16 400 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale altitude"
          },
          {
            power: "9 kWc",
            price: "24 600 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel spécial montagne",
          "Garantie 20 ans panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8750
        },
        {
          power: "6 kWc",
          price: 16400
        },
        {
          power: "9 kWc",
          price: 24600
        }
      ],
      installers: [
        {
          name: "Alpes Solaire Expert",
          certifications: ["QualiPV", "RGE"],
          description: "Spécialiste des installations en altitude",
          experience: "13 ans"
        },
        {
          name: "Montagne Énergie Pro",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Expert en solutions solaires montagnardes",
          experience: "10 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  seyne: {
    name: "Seyne",
    code: "04140",
    population: 1400,
    solarAdvantages: [
      "Excellent ensoleillement montagnard",
      "Position géographique idéale",
      "Climat alpin favorable",
      "Zone à fort potentiel solaire",
      "Exposition optimale"
    ],
    keyPoints: [
      "Installation haute montagne",
      "Expertise technique alpine",
      "Garantie décennale",
      "Suivi production",
      "Maintenance spécialisée"
    ],
    reviews: [
      {
        author: "Jacques M.",
        rating: 4.9,
        date: "2023-11-30",
        comment: "Installation parfaitement adaptée aux conditions montagnardes. Équipe très professionnelle.",
        location: "Seyne"
      },
      {
        author: "Claire B.",
        rating: 4.8,
        date: "2023-11-08",
        comment: "Excellent service, installation soignée et équipe à l'écoute.",
        location: "Seyne"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Seyne (04140)",
      metaDescription: "Installation de panneaux solaires à Seyne, adaptée aux conditions de haute montagne. Profitez d'une énergie verte et économique en altitude.",
      keywords: ["panneaux solaires", "Seyne", "04140", "installation photovoltaïque", "énergie solaire", "montagne"],
      images: [
        {
          url: "/images/cities/seyne-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Seyne"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Seyne",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 800 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation montagne adaptée"
          },
          {
            power: "6 kWc",
            price: "16 500 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale altitude"
          },
          {
            power: "9 kWc",
            price: "24 800 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel spécial montagne",
          "Garantie 20 ans sur les panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8800
        },
        {
          power: "6 kWc",
          price: 16500
        },
        {
          power: "9 kWc",
          price: 24800
        }
      ],
      installers: [
        {
          name: "Alpes Solar Pro",
          certifications: ["QualiPV", "RGE"],
          description: "Expert en installations solaires d'altitude",
          experience: "15 ans"
        },
        {
          name: "Montagne Énergie Solutions",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des solutions solaires en montagne",
          experience: "12 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  sisteron: {
    name: "Sisteron",
    code: "04200",
    population: 7500,
    solarAdvantages: [
      "Ensoleillement exceptionnel",
      "Climat méditerranéen favorable",
      "Exposition sud optimale",
      "Zone à fort potentiel solaire",
      "Terrain adapté aux installations"
    ],
    keyPoints: [
      "Installation professionnelle",
      "Expertise locale",
      "Garantie décennale",
      "Suivi personnalisé",
      "Service après-vente réactif"
    ],
    reviews: [
      {
        author: "Philippe R.",
        rating: 5.0,
        date: "2023-12-10",
        comment: "Installation impeccable et équipe très professionnelle. Rendement excellent depuis la mise en service.",
        location: "Sisteron"
      },
      {
        author: "Marie L.",
        rating: 4.9,
        date: "2023-11-25",
        comment: "Très satisfaite du service et du suivi. Installation réalisée dans les délais annoncés.",
        location: "Sisteron"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Sisteron (04200)",
      metaDescription: "Installation de panneaux solaires à Sisteron. Profitez d'un ensoleillement exceptionnel et d'une expertise locale pour votre transition énergétique.",
      keywords: ["panneaux solaires", "Sisteron", "04200", "installation photovoltaïque", "énergie solaire", "Alpes-de-Haute-Provence"],
      images: [
        {
          url: "/images/cities/sisteron-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Sisteron"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Sisteron",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 500 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation standard"
          },
          {
            power: "6 kWc",
            price: "16 000 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale"
          },
          {
            power: "9 kWc",
            price: "24 000 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8500
        },
        {
          power: "6 kWc",
          price: 16000
        },
        {
          power: "9 kWc",
          price: 24000
        }
      ],
      installers: [
        {
          name: "Sisteron Solar",
          certifications: ["QualiPV", "RGE"],
          description: "Expert local en installations solaires",
          experience: "18 ans"
        },
        {
          name: "Provence Énergie Verte",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "15 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  villeneuve: {
    name: "Villeneuve",
    code: "04180",
    population: 4200,
    solarAdvantages: [
      "Ensoleillement méditerranéen optimal",
      "Situation géographique favorable",
      "Terrain plat idéal",
      "Exposition sud dominante",
      "Climat propice toute l'année"
    ],
    keyPoints: [
      "Installation sur-mesure",
      "Expertise régionale",
      "Garantie décennale",
      "Maintenance régulière",
      "Support technique local"
    ],
    reviews: [
      {
        author: "Laurent D.",
        rating: 4.9,
        date: "2023-12-05",
        comment: "Excellente prestation, de l'étude à l'installation. Équipe sérieuse et compétente.",
        location: "Villeneuve"
      },
      {
        author: "Sophie M.",
        rating: 4.8,
        date: "2023-11-20",
        comment: "Très satisfaite de l'installation. Production conforme aux prévisions annoncées.",
        location: "Villeneuve"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Villeneuve (04180)",
      metaDescription: "Installation de panneaux solaires à Villeneuve. Bénéficiez d'un ensoleillement optimal et d'une expertise locale pour votre projet photovoltaïque.",
      keywords: ["panneaux solaires", "Villeneuve", "04180", "installation photovoltaïque", "énergie solaire", "Alpes-de-Haute-Provence"],
      images: [
        {
          url: "/images/cities/villeneuve-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Villeneuve"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Villeneuve",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 600 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation standard"
          },
          {
            power: "6 kWc",
            price: "16 200 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale"
          },
          {
            power: "9 kWc",
            price: "24 300 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haut de gamme"
          }
        ],
        notes: [
          "Prix incluant pose et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8600
        },
        {
          power: "6 kWc",
          price: 16200
        },
        {
          power: "9 kWc",
          price: 24300
        }
      ],
      installers: [
        {
          name: "Soleil Provence",
          certifications: ["QualiPV", "RGE"],
          description: "Expert en installations solaires résidentielles",
          experience: "12 ans"
        },
        {
          name: "Éco-Énergie Solutions",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des solutions photovoltaïques",
          experience: "10 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  },
  pierrevert: {
    name: "Pierrevert",
    code: "04152",
    population: 3800,
    solarAdvantages: [
      "Ensoleillement provençal exceptionnel",
      "Orientation optimale des terrains",
      "Climat méditerranéen idéal",
      "Zone à fort potentiel solaire",
      "Terrain vallonné favorable"
    ],
    keyPoints: [
      "Installation personnalisée",
      "Expertise locale reconnue",
      "Garantie décennale",
      "Suivi de production",
      "Service client réactif"
    ],
    reviews: [
      {
        author: "Michel P.",
        rating: 5.0,
        date: "2023-12-01",
        comment: "Installation parfaite et équipe très professionnelle. Production supérieure aux prévisions.",
        location: "Pierrevert"
      },
      {
        author: "Isabelle R.",
        rating: 4.9,
        date: "2023-11-15",
        comment: "Excellent accompagnement du début à la fin. Installation soignée et équipe à l'écoute.",
        location: "Pierrevert"
      }
    ],
    seo: {
      title: "Installation Panneaux Solaires à Pierrevert (04152)",
      metaDescription: "Installation de panneaux solaires à Pierrevert. Profitez d'un ensoleillement exceptionnel et d'une expertise locale pour votre installation photovoltaïque.",
      keywords: ["panneaux solaires", "Pierrevert", "04152", "installation photovoltaïque", "énergie solaire", "Alpes-de-Haute-Provence"],
      images: [
        {
          url: "/images/cities/pierrevert-solaire.jpg",
          width: 800,
          height: 600,
          alt: "Installation solaire à Pierrevert"
        }
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'installation solaire à Pierrevert",
        headers: ["Puissance", "Prix", "Type", "Info"],
        rows: [
          {
            power: "3 kWc",
            price: "8 400 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation standard"
          },
          {
            power: "6 kWc",
            price: "15 900 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Solution optimale"
          },
          {
            power: "9 kWc",
            price: "23 800 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel",
          "Garantie 20 ans panneaux",
          "Garantie décennale installation"
        ],
        ctaText: "Demander un devis gratuit"
      },
      costs: [
        {
          power: "3 kWc",
          price: 8400
        },
        {
          power: "6 kWc",
          price: 15900
        },
        {
          power: "9 kWc",
          price: 23800
        }
      ],
      installers: [
        {
          name: "Pierrevert Énergies",
          certifications: ["QualiPV", "RGE"],
          description: "Expert local en installations solaires",
          experience: "14 ans"
        },
        {
          name: "Sud Solar Solutions",
          certifications: ["QualiPV", "RGE", "Qualibat"],
          description: "Spécialiste des énergies renouvelables",
          experience: "11 ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          amount: "jusqu'à 380€/kWc"
        },
        tva: {
          description: "TVA réduite",
          amount: "10%"
        },
        loans: {
          description: "Éco-prêt à taux zéro",
          amount: "jusqu'à 50 000€"
        }
      }
    }
  }
};
```
```