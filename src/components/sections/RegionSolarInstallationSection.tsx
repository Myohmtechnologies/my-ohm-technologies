import Image from 'next/image';
import type { RegionData } from '@/config/seo';

interface RegionSolarInstallationSectionProps {
  region: RegionData;
}

const RegionSolarInstallationSection = ({ region }: RegionSolarInstallationSectionProps) => {
  return (
    <div className="relative bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-8">
          {/* Map Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={region.mapImage || '/images/map-default.png'}
              alt={`Carte de ${region.name}`}
              width={600}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-700 mb-4">
              Avec <span className="font-bold">{region.sunshineHours} heures d'ensoleillement par an</span>, la
              région {region.name} est {region.sunshineRank} région la plus ensoleillée de France ! Y
              installer des panneaux solaires est donc à la fois une démarche écologique et un
              investissement rentable.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Pour vous aider à profiter au mieux du soleil, demandez conseils à un :
            </h3>

            {/* Regions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {region.departments.map((department) => (
                <div 
                  key={department.name}
                  className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900">{department.name}</h4>
                  <p className="text-gray-600">Installateur de panneaux solaires dans le {department.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionSolarInstallationSection;
