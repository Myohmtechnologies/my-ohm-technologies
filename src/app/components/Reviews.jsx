'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const PagesJaunesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <rect width="24" height="24" fill="#FFDE00"/>
    <path d="M5 7h14v2H5zm0 4h14v2H5zm0 4h14v2H5z" fill="#000"/>
  </svg>
);



const reviews = [
  {
    id: 1,
    content: "Entreprise sérieuse, bon boulot. J'ai envoyé des clients a cette entreprise, ils étaient enchantés du travail réalisé Bravo",
    author: "Christian Sanegre",
    date: "01 décembre 2024",
    rating: 5
  },
  {
    id: 2,
    content: "Une entreprise sérieuse qui a su répondre à mes attentes. Le commercial était très pédagogue et m'a bien expliqué les différentes options. L'installation s'est déroulée parfaitement et je vois déjà les économies sur ma facture.",
    author: "Remy Feraud",
    date: "3 Août 2024",
    rating: 5
  },
  {
    id: 3,
    content: "Une équipe attentive aux besoins du client, alliant professionnalisme et rigueur. Le chantier à été laissé propre, et nous avons reçu des explications claires sur la gestion des panneaux photovoltaique. Je recommande vivement My Ohm !",
    author: "Christelle Irénée",
    date: "28 décembre 2023",
    rating: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = () => {
    const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const indices = [];
    for (let i = 0; i < numVisible; i++) {
      indices.push((currentIndex + i) % reviews.length);
    }
    return indices.map(index => reviews[index]);
  };

  return (
    <div className="bg-white py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nos clients disent de nous
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez les avis de nos clients satisfaits
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <GoogleIcon />
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-semibold">5.0</span>
                </div>
                <span className="text-sm text-gray-600">sur Google</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <PagesJaunesIcon />
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-semibold">5.0</span>
                </div>
                <span className="text-sm text-gray-600">sur Pages Jaunes</span>
              </div>
            </div>

            
          </div>
        </div>
        
        <div className="relative mt-16">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {visibleReviews().map((review) => (
              <article key={review.id} className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 h-full">
                <div>
                  <div className="flex items-center gap-x-4 mb-8">
                    <div className="h-12 w-12 rounded-full bg-[#AFC97E] flex items-center justify-center text-white text-xl font-semibold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">{review.author}</h3>
                      <p className="text-sm leading-6 text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-x-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-6">{review.content}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#AFC97E] w-4' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 500);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
