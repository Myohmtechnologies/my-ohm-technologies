'use client';

import { useState } from 'react';
import { RegionData } from '@/config/seo';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Props {
  region: RegionData;
}

const RegionFAQ = ({ region }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `Quel est le temps d'installation moyen dans le ${region.name} ?`,
      answer: 'L\'installation complète prend généralement entre 1 et 2 jours, selon la complexité du projet et les conditions météorologiques.'
    },
    {
      question: `Quelles sont les aides disponibles dans le ${region.name} ?`,
      answer: `Plusieurs aides sont disponibles : ${region.aids.map(aid => aid.name).join(', ')}. Contactez-nous pour une estimation personnalisée.`
    },
    {
      question: `Quelle production puis-je espérer dans le ${region.name} ?`,
      answer: `Avec ${region.statistics.sunshineHours}h d'ensoleillement par an, vous pouvez espérer une production moyenne de ${region.statistics.averageProduction} kWh/kWc/an.`
    },
    {
      question: 'Quelles sont les garanties proposées ?',
      answer: 'Nous offrons une garantie de 20 ans sur les panneaux, 10 ans sur l\'installation, et un suivi de production pendant 2 ans.'
    },
    {
      question: 'Comment se déroule le processus d\'installation ?',
      answer: 'Le processus comprend une étude technique, une proposition personnalisée, les démarches administratives, l\'installation, et la mise en service avec formation.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Questions Fréquentes - {region.name}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-700 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 bg-gray-50 text-gray-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionFAQ;
