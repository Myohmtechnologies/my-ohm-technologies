'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

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

const ReviewsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      if (mounted) {
        handleNextReview();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      setMounted(false);
    };
  }, [currentIndex]);

  const handleNextReview = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const handlePrevReview = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="reviews-title">
            <h2>Avis clients</h2>
            <p>Ce que nos clients disent de nous</p>
          </div>
          <div className="rating-badges">
            <div className="rating-badge">
              <GoogleIcon />
              <div className="rating-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <span>5/5 sur Google</span>
              </div>
            </div>
            <div className="rating-badge">
              <PagesJaunesIcon />
              <div className="rating-info">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <span>5/5 sur Pages Jaunes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-slider">
          <div className={`review-card ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="review-content">
              <p>{reviews[currentIndex].content}</p>
            </div>
            <div className="review-author">
              <div className="stars">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <p className="author-name">{reviews[currentIndex].author}</p>
              <p className="review-date">{reviews[currentIndex].date}</p>
            </div>
          </div>

          <div className="review-navigation">
            <button onClick={handlePrevReview} className="nav-button prev">
              ←
            </button>
            <div className="review-dots">
              {reviews.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    if (!isTransitioning) {
                      setCurrentIndex(index);
                    }
                  }}
                />
              ))}
            </div>
            <button onClick={handleNextReview} className="nav-button next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(ReviewsComponent), {
  ssr: false
});
