<<<<<<< HEAD
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SimulationSection = () => {
  return (
    <section className="bg-[#FFDF64] py-16 px-4" aria-label="Simulation de projet solaire">
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-center leading-tight">
            Simuler votre projet en 2 minute et obtenez votre devis sous 24h
          </h2>
          <p className="text-xl md:text-2xl font-bold uppercase">
            Étude gratuite avis d&apos;experts
          </p>
        </div>
        <motion.div 
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/simulateur"
            className="bg-[#15171A] text-white px-4 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-opacity-90 transition-all uppercase text-sm md:text-base w-full md:w-auto inline-block mx-4"
            role="button"
            aria-label="Accéder au simulateur d'économie"
          >
            Accédez à votre simulateur d&apos;économie
          </Link>
        </motion.div>
      </motion.div>
=======
const SimulationSection = () => {
  return (
    <section className="simulation-section">
      <div>
        <p>Simulez votre projet en 2 minutes et obtenez votre</p>
        <p>
          devis sous 24h &ndash; Étude gratuite &ndash; Avis d&apos;experts
        </p>
      </div>
      <div>
        <a href="/simulateur">Accédez à votre simulateur d&apos;économie</a>
      </div>
>>>>>>> origin/main
    </section>
  );
};

export default SimulationSection;
