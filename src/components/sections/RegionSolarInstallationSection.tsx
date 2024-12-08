'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { RegionData } from '@/config/seo';

interface RegionSolarInstallationSectionProps {
  region: RegionData;
}

const RegionSolarInstallationSection = ({ region }: RegionSolarInstallationSectionProps) => {
  return (
    <div className="relative bg-gray-50 py-16">
      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#AFC97E] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFDF64] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:flex lg:items-center lg:justify-between gap-8">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={region.mapImage || '/images/regions/map-default.jpg'}
                alt={`Carte de ${region.name}`}
                width={600}
                height={500}
                className="object-contain w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <svg className="w-6 h-6 text-[#FFDF64]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"/>
                </svg>
                <p className="text-gray-700 font-medium">
                  <span className="font-bold">{region.sunshineHours} heures d'ensoleillement par an</span>
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                La région {region.name} est {region.sunshineRank} région la plus ensoleillée de France ! Y
                installer des panneaux solaires est donc à la fois une démarche écologique et un
                investissement rentable.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Pour vous aider à profiter au mieux du soleil, demandez conseils à un :
              </h3>

              {/* Regions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {region.departments.map((department, index) => (
                  <motion.div 
                    key={department.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#AFC97E]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-light-yellow rounded-lg">
                        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-[#AFC97E] transition-colors">
                          {department.name}
                        </h4>
                        <p className="text-gray-600">
                          Installateur de panneaux solaires dans le {department.code}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegionSolarInstallationSection;
