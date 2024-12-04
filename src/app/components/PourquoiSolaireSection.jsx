"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import evolutionPrixElectricite from "../../../public/images/evolution-prix-electrite-entre-2010-et-2040.png";
import energieVerteEtRenouvelable from "../../../public/images/energie-verte-et-renouvelable.png";

const reasons = [
  {
    id: 1,
    image: evolutionPrixElectricite,
    alt: "Évolution du tarif de l'électricité",
    title: "Économies sur vos factures",
    description: "L'énergie solaire vous permet de réduire considérablement vos dépenses en électricité en produisant votre propre énergie gratuitement à partir du soleil."
  },
  {
    id: 2,
    image: energieVerteEtRenouvelable,
    alt: "Énergie verte et renouvelable",
    title: "Énergie verte et renouvelable",
    description: "En utilisant le solaire, vous réduisez votre empreinte carbone et contribuez à la protection de l'environnement en optant pour une énergie propre."
  }
];

export default function PourquoiSolaireSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <span className="text-lg md:text-xl text-[#6C8D2F] font-medium block mb-3">
            Pourquoi le solaire
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#232323] relative inline-block">
            Pourquoi passer à l&apos;énergie solaire
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-[#6C8D2F]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#232323] mb-4 group-hover:text-[#6C8D2F] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>

              <div className="relative h-64 md:h-80 overflow-hidden rounded-xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image 
                    src={reason.image} 
                    alt={reason.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
