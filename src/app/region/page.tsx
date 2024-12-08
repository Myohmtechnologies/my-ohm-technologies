import { regions } from '@/config/seo';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, SunIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Nos Régions d\'Installation | MY OHM Technologies',
  description: 'Découvrez nos zones d\'intervention pour l\'installation de panneaux solaires. Expertise locale et service personnalisé dans toute la région PACA.'
};

export default function RegionsPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Régions d&apos;Installation
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez nos services d&apos;installation de panneaux solaires dans votre région
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/region/${region.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={`/images/regions/${region.slug}-card.jpg`}
                  alt={`Région ${region.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPinIcon className="w-5 h-5" />
                    <span>Département {region.department}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {region.name}
                  </h2>
                  
                  <div className="flex items-center gap-2 text-white/90">
                    <SunIcon className="w-5 h-5" />
                    <span>{region.statistics.sunshineHours}h d&apos;ensoleillement/an</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-blue-600">
                {region.cities.length} villes couvertes
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
