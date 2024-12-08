'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, BoltIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline';
import { RegionData } from '@/config/seo';

interface Props {
  region: RegionData;
}

const RegionStats = ({ region }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('region-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: SunIcon,
      value: region.statistics.sunshineHours,
      unit: 'h/an',
      label: 'd\'ensoleillement',
      color: 'text-[#FFDF64]'
    },
    {
      icon: BoltIcon,
      value: region.statistics.averageProduction,
      unit: 'kWh/kWc/an',
      label: 'de production moyenne',
      color: 'text-[#AFC97E]'
    },
    {
      icon: CurrencyEuroIcon,
      value: region.statistics.savingsEstimate,
      unit: '%',
      label: 'd\'économies estimées',
      color: 'text-[#AFC97E]'
    }
  ];

  return (
    <section id="region-stats" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Statistiques Solaires {region.name}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon className={`w-12 h-12 ${stat.color}`} />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                    <span className="text-gray-800">{stat.unit}</span>
                  </div>
                  <p className="text-gray-800 font-medium mt-2">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RegionStats;
