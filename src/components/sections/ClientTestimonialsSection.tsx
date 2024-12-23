'use client';

import { 
  ChatBubbleLeftRightIcon, 
  PlayIcon, 
  StarIcon 
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

const ClientTestimonialsSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Nos clients l&apos;ont dit
            </h2>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Découvrez les expériences réelles de nos clients qui ont transformé leur consommation énergétique grâce à MY OHM.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Témoignage Gauche */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group md:col-span-1">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 text-sm">
                &quot;MY OHM a complètement transformé ma consommation énergétique. Les économies sont significatives et l&apos;installation s&apos;est faite en toute simplicité.&quot;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-FFDF64/20 rounded-full flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-FFDF64" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sophie Martin</h4>
                  <p className="text-gray-600 text-xs">Marseille</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vidéo Témoignage */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group md:col-span-1 relative">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {!isVideoPlaying ? (
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Image
                    width={500} 
                    height={500}
                    src="/images/testimonial-video-thumbnail.jpg" 
                    alt="Témoignage Vidéo" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/50 p-4 rounded-full">
                      <PlayIcon className="w-12 h-12 text-black" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                  title="Témoignage MY OHM"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              )}
                
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-bold text-gray-900">Témoignage Vidéo</h4>
              <p className="text-gray-600 text-sm">Un client partage son expérience</p>
            </div>
          </div>

          {/* Témoignage Droite */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group md:col-span-1">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 text-sm">
                &quot;L&apos;équipe MY OHM a été exceptionnelle. Leur expertise et leur accompagnement ont rendu mon projet solaire vraiment simple et efficace.&quot;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-FFDF64/20 rounded-full flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-FFDF64" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jean Dupont</h4>
                  <p className="text-gray-600 text-xs">Nice</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-12 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-black mb-4" />
            <h4 className="font-bold text-black text-xl mb-2">Votre Satisfaction, Notre Motivation</h4>
            <p className="text-black/80 max-w-xl">
              Chaque témoignage nous pousse à améliorer constamment nos services et à vous offrir la meilleure expérience solaire possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;