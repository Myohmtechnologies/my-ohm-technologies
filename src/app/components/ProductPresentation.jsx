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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col justify-center items-center mb-16 px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-[#6C8D2F] font-medium mb-4 max-w-3xl text-center"
        >
          Nous avons minutieusement analysé tous les produits du marché pour vous proposer les meilleures solutions en termes de qualité, performance et durabilité.
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-[#232323] text-center relative"
        >
          <span className="relative">
            Nos Produits Sélectionnés
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-[#6C8D2F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </motion.h2>
      </div>

      <div className="w-full container mx-auto px-4">
        <div className="w-full space-y-12 md:space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="w-full flex flex-col md:flex-row md:items-center p-6 md:p-10">
                <div className="w-full md:w-1/2 relative h-72 md:h-[500px] mb-8 md:mb-0 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
                
                <div className="w-full md:w-1/2 space-y-6 md:pl-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#232323] group-hover:text-[#6C8D2F] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="w-full space-y-4">
                    {product.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="w-full flex items-start space-x-4 group"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6C8D2F]/10 flex items-center justify-center group-hover:bg-[#6C8D2F]/20 transition-colors duration-300">
                          <svg
                            className="h-4 w-4 text-[#6C8D2F]"
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
                        </span>
                        <span className="flex-1 text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
