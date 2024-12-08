'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { RegionData } from '@/config/seo';

interface Props {
  region: RegionData;
}

const RegionHero = ({ region }: Props) => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Image de fond optimisée */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/images/regions/${region.slug}-hero.webp`}
          alt={`Installation panneaux solaires ${region.name}`}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge département */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
            <MapPinIcon className="w-5 h-5 mr-2" />
            <span>Département {region.department}</span>
          </div>

          {/* Titre */}
          <div className="relative z-10 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Installation Panneaux Solaires {region.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Profitez des {region.statistics.sunshineHours}h d&apos;ensoleillement par an pour réduire votre facture d&apos;électricité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/simulateur"
                className="inline-flex items-center px-6 py-3 bg-[#AFC97E] hover:bg-[#AFC97E]/90 text-white font-medium rounded-lg transition-colors"
              >
                Simulation gratuite
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#AFC97E] hover:bg-[#AFC97E]/90 text-white font-medium rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>

          {/* Villes principales */}
          <div className="mb-8">
            <h2 className="text-white text-lg mb-3">Nos zones d&apos;intervention :</h2>
            <div className="flex flex-wrap gap-2">
              {region.cities.map((city, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionHero;
