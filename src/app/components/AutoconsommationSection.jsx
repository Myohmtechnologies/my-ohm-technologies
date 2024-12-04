"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import courbeAutoconsommation from "../../../public/images/courbe-autoconsomation.png";

export default function AutoconsommationSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full relative aspect-video"
          >
            <Image
              src={courbeAutoconsommation}
              alt="Courbe d'autoconsommation"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg"
              priority
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#232323]">
              Autoconsommation: en route vers l&apos;autonomie énergétique
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                L&apos;autoconsommation consiste à utiliser l&apos;électricité produite 
                par vos propres panneaux solaires pour alimenter votre maison.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Cela vous permet de réduire votre dépendance au réseau électrique 
                et de faire des économies sur vos factures. En produisant votre propre
                énergie, vous contribuez aussi à la protection de l&apos;environnement.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                L&apos;excédent d&apos;énergie peut être stocké dans des batteries 
                virtuelles ou physiques ou revendu au réseau. C&apos;est une étape 
                simple vers l&apos;autonomie énergétique et une solution durable 
                pour l&apos;avenir.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
