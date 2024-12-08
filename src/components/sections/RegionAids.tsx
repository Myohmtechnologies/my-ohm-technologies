'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { RegionData } from '@/config/seo';
import { DocumentCheckIcon } from '@heroicons/react/24/outline';

interface Props {
  region: RegionData;
}

const RegionAids = ({ region }: Props) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Aides Financières dans le {region.name}
            </h2>
            <p className="text-gray-800 text-lg mb-8">
              Découvrez les aides disponibles dans votre département pour 
              l&apos;installation de panneaux solaires.
            </p>
            
            <div className="space-y-6">
              {region.aids.map((aid, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFDF64]">
                        <DocumentCheckIcon className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{aid.name}</h3>
                      <p className="text-gray-800 mb-3">{aid.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-[#AFC97E] text-white rounded-full text-sm font-medium">
                        {aid.amount}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <Image
              src="/images/regions/solar-aids.webp"
              alt={`Aides panneaux solaires ${region.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl"
              priority={false}
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionAids;
