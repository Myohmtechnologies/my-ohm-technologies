'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '1500+',
    label: 'Installations réalisées',
    icon: '🏠'
  },
  {
    value: '98%',
    label: 'Clients satisfaits',
    icon: '⭐'
  },
  {
    value: '15+',
    label: "Années d'expérience",
    icon: '📅'
  }
];

const SolarInstallationSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#AFC97E] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFDF64] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Section Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Image principale */}
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/solar-worker.jpg"
                  alt="Technicien en installation solaire"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FFDF64] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Garantie Décennale</p>
                    <p className="text-sm text-gray-600">Installation certifiée</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-[#AFC97E] font-medium mb-4 tracking-wider">
              L'ÉNERGIE SOLAIRE À VOTRE PORTÉE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une installation solaire professionnelle partout en France
            </h2>

            <p className="text-gray-600 mb-8">
              Nous proposons des solutions solaires abordables avec des équipements de haute qualité. 
              Notre équipe d'experts vous accompagne à chaque étape, de l'étude personnalisée à 
              l'installation finale, en passant par toutes les démarches administratives.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-4 bg-white rounded-xl shadow-md"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-xl text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <p className="text-gray-800 font-semibold mb-4">Nos certifications :</p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-3 rounded-lg shadow-md"
              >
                <Image
                  src="/images/qualipv.png"
                  alt="Certification QualiPv"
                  width={100}
                  height={40}
                  className="h-auto"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-3 rounded-lg shadow-md"
              >
                <Image
                  src="/images/decinal.png"
                  alt="Garantie Décennale"
                  width={100}
                  height={40}
                  className="h-auto"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-3 rounded-lg shadow-md"
              >
                <Image
                  src="/images/syndicat.png"
                  alt="Syndicat des énergies renouvelables"
                  width={100}
                  height={40}
                  className="h-auto"
                />
              </motion.div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Link
                href="/certifications"
                className="group inline-flex items-center bg-[#FFDF64] text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
              >
                VOIR NOS CERTIFICATIONS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="group inline-flex items-center bg-white text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
              >
                NOUS CONTACTER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarInstallationSection;
