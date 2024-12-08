"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <Image
          src="/images/region-sud.webp"
          alt="Installation panneaux solaires"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Qui Sommes-Nous
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto font-light">
              Votre partenaire de confiance pour une transition énergétique réussie dans la région PACA
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/about-hero.jpg"
                alt="Installation de panneaux solaires"
                fill
                style={{ objectFit: "cover" }}
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
                Notre Mission
              </h2>
              <div className="w-20 h-1 bg-[#AFC97E]"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Chez My Ohm Technologies, notre mission est de démocratiser l&apos;accès à l&apos;énergie solaire dans la région PACA. Nous croyons fermement que chaque foyer mérite une solution énergétique durable et économique.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Notre équipe d&apos;experts vous accompagne à chaque étape, de l&apos;étude personnalisée à l&apos;installation, en passant par l&apos;optimisation de votre système solaire.
              </p>
              <Link 
                href="/simulateur"
                className="inline-flex items-center justify-between bg-[#FFDF64] text-black px-8 py-4 rounded-full hover:bg-[#FFDF64]/90 transition-colors mt-4"
              >
                <span className="font-medium">Simuler votre projet</span>
                <Image
                  src="/images/right-arrox.png"
                  alt="Flèche"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
              Nos Valeurs
            </h2>
            <div className="w-20 h-1 bg-[#AFC97E] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description: "Notre équipe certifiée possède une expertise approfondie dans l'installation et la maintenance de systèmes solaires",
                icon: "/images/icone-soleil.svg"
              },
              {
                title: "Innovation",
                description: "Nous utilisons les technologies les plus récentes pour maximiser l'efficacité de votre installation solaire",
                icon: "/images/icone-energie.svg"
              },
              {
                title: "Engagement",
                description: "Un suivi personnalisé et un support continu pour garantir la performance optimale de votre installation",
                icon: "/images/icone-valorisation.svg"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-[#AFC97E] rounded-full p-5 flex items-center justify-center">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={96}
                      height={96}
                      className="mx-auto"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#AFC97E] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Prêt à Réduire Votre Facture d&apos;Électricité ?
            </h2>
            <p className="text-lg md:text-xl text-white mb-12 font-light">
              Découvrez combien vous pourriez économiser en passant à l&apos;énergie solaire.
            </p>
            <Link 
              href="/simulateur"
              className="inline-flex items-center justify-between bg-[#FFDF64] text-black px-8 py-4 rounded-full hover:bg-[#FFDF64]/90 transition-colors"
            >
              <span className="font-medium">Faire une simulation gratuite</span>
              <Image
                src="/images/right-arrox.png"
                alt="Flèche"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
