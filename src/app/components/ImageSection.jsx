'use client';

import Image from 'next/image';
import Link from 'next/link';

const certifications = [
  {
    id: 1,
    name: 'QualiPV',
    image: '/images/qualipv.png',
    alt: 'Certification QualiPV'
  },
  {
    id: 2,
    name: 'Garantie Décennale',
    image: '/images/decinal.png',
    alt: 'Garantie Décennale'
  },
  {
    id: 3,
    name: 'Syndicat des Energies Renouvelables',
    image: '/images/syndicat.png',
    alt: 'Syndicat des Energies Renouvelables'
  }
];

export default function ImageSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image à gauche */}
          <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/installation-panneaux-solaire-Sisteron.jpg"
              alt="Technicien en installation solaire"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Contenu à droite */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[#AFC97E] font-medium mb-4">
                L'ÉNERGIE SOLAIRE À VOTRE PORTÉE.
              </h2>
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Profitez d'une installation de panneaux solaires à prix accessible partout en France
              </h3>
              <p className="text-gray-600">
                Nous proposons des solutions solaires abordables avec des panneaux et des batteries de haute qualité. 
                Nous guidons nos clients et assurons une installation de première qualité.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Nos certification :
              </h4>
              <div className="flex flex-wrap gap-6 mb-8">
                {certifications.map((cert) => (
                  <div key={cert.id} className="relative w-24 h-16">
                    <Image
                      src={cert.image}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/attestation.pdf"
                className="inline-flex items-center px-6 py-3 bg-[#fef9c3] text-gray-900 rounded-full hover:bg-[#fef08a] transition-colors duration-200"
              >
                TÉLÉCHARGEZ L'ATTESTATION D'ASSURANCE
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
