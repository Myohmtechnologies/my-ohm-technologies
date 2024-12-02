"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../../styles/globals.css';
export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section avec style similaire aux autres pages */}
        <section className="relative h-[50vh] min-h-[400px] bg-[#AFC97E] flex items-center">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="/images/solar-panels-hero.jpg"
            alt="Panneaux solaires"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Qui Sommes-Nous
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light">
                Experts en solutions d&apos;énergie solaire, engagés pour un avenir durable dans la région PACA
              </p>
            </div>
          </div>
        </section>

        {/* Notre Mission avec style Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mission-image.jpg"
                  alt="Installation de panneaux solaires"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#1a1a1a]">
                  Notre Mission
                </h2>
                <div className="w-20 h-1 bg-[#AFC97E]"></div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Chez My Ohm Technologies, nous nous engageons à rendre l&apos;énergie solaire accessible à tous. Notre expertise technique et notre approche personnalisée nous permettent de proposer des solutions adaptées à chaque foyer.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Notre objectif est de vous accompagner dans votre transition énergétique, en vous proposant des installations solaires performantes et durables.
                </p>
                <Link 
                  href="/panneaux-photovoltaiques"
                  className="inline-block mt-8 bg-[#AFC97E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#9DB56E] transition-colors"
                >
                  Découvrir nos solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs avec style similaire aux cards existantes */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
                Nos Valeurs
              </h2>
              <div className="w-20 h-1 bg-[#AFC97E] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expertise",
                  description: "Une équipe qualifiée et expérimentée dans l'installation de solutions solaires",
                  icon: "/images/svg/expertise-icon.svg"
                },
                {
                  title: "Innovation",
                  description: "Utilisation des dernières technologies pour optimiser votre production d'énergie",
                  icon: "/images/svg/innovation-icon.svg"
                },
                {
                  title: "Engagement",
                  description: "Un accompagnement personnalisé tout au long de votre projet",
                  icon: "/images/svg/engagement-icon.svg"
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
                >
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
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

        {/* Call to Action avec style cohérent */}
        <section className="py-20 bg-[#AFC97E] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">
                Prêt à Passer au Solaire ?
              </h2>
              <p className="text-xl text-white mb-12 font-light">
                Découvrez comment nous pouvons vous aider à réduire votre facture d&apos;électricité tout en contribuant à un avenir plus vert.
              </p>
              <Link 
                href="/"
                className="inline-block bg-white text-[#1a1a1a] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Faire une simulation gratuite
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
