import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const BlogHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Recherche:', searchQuery);
  };

  return (
    <section className="blog-header relative py-16 md:py-24">
      <div className="container-blog w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header-content flex flex-col items-center space-y-8 md:space-y-12">
          {/* Texte d'en-tête */}
          <div className="text-section text-center w-full max-w-3xl">
            <p className="small-title text-sm md:text-base uppercase tracking-wider mb-2 md:mb-4 font-semibold">
              NOTRE BLOG
            </p>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight md:leading-snug px-2 md:px-4 mx-auto max-w-[90%] md:max-w-full">
              Le Blog de l'énergie photovoltaïque
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Découvrez nos derniers articles sur l'énergie solaire, les innovations technologiques et les solutions durables.
            </p>
          </div>

          {/* Barre de recherche */}
          <form onSubmit={handleSearch} className="search-bar w-full max-w-2xl mx-auto px-4">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher des articles sur l'énergie solaire..."
                className="w-full px-6 py-4 pr-16 text-sm md:text-lg rounded-full border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
                         transition-all duration-300 ease-in-out
                         placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2
                         text-gray-400 hover:text-yellow-400 transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
                aria-label="Rechercher"
              >
                <FiSearch className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </form>

          {/* Tags populaires */}
          <div className="popular-tags flex flex-wrap justify-center gap-2 md:gap-3 px-4 w-full">
            {['Panneaux solaires', 'Économies d\'énergie', 'Installation', 'Guide'].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 text-xs md:text-base rounded-full bg-white border border-gray-200
                         hover:border-yellow-400 hover:text-yellow-400
                         transition-all duration-300 ease-in-out"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
