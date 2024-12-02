"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Panneaux Photovoltaïques Premium",
    description: "Après une analyse approfondie du marché, nous avons sélectionné les panneaux solaires les plus performants et durables pour votre installation.",
    features: [
      "Rendement supérieur : jusqu'à 21.7% d'efficacité",
      "Garantie de 25 ans sur la production",
      "Résistance exceptionnelle aux conditions climatiques",
      "Fabrication européenne de haute qualité",
      "Certification internationale",
    ],
    image: "/images/pv.png",
    backgroundColor: "bg-[#f8f8ee]",
  },
  {
    id: 2,
    name: "Micro-onduleurs Haute Performance",
    description: "Notre sélection de micro-onduleurs représente le meilleur compromis entre performance, fiabilité et rapport qualité-prix sur le marché actuel.",
    features: [
      "Optimisation individuelle de chaque panneau",
      "Garantie étendue de 25 ans",
      "Surveillance en temps réel",
      "Installation simple et sécurisée",
      "Rendement optimal même par faible luminosité",
    ],
    image: "/images/micro-onduleur-enphase.png",
    backgroundColor: "bg-[#f8f8ee]",
  },
];

export default function ProductPresentation() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Produits Sélectionnés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous avons minutieusement analysé tous les produits du marché pour vous 
            proposer les meilleures solutions en termes de qualité, performance et durabilité.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${product.backgroundColor} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {product.description}
                  </p>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <svg
                          className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
