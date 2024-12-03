import Image from "next/image";

const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (error) {
    return dateString;
  }
};

const ClientReviews = ({ realizations, limit }) => {
  const displayedRealizations = limit ? realizations.slice(0, limit) : realizations;

  return (
    <section className="w-full overflow-hidden mt-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="btn-nos-instal flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl">Voir plus d&apos;installations</h2>
          <button className="flex items-center gap-2 bg-[#AFC97E] text-white px-6 py-3 rounded-lg hover:bg-[#9DB96E] transition-colors">
            <a href="/nos-realisations" className="whitespace-nowrap">Vous avez un projet ?</a>
            <Image
              src="/images/svg/icons8-right-arrow-32.png"
              alt="Icône flèche droite"
              width={24}
              height={24}
              className="object-contain"
            />
          </button>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRealizations.length > 0 ? (
            displayedRealizations.map((realisation) => (
              <div key={realisation._id} className="card-project bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={realisation.mainImage || "/images/placeholder-image.png"}
                    alt={`Installation panneaux solaires - ${realisation.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="card-content p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="badge bg-[#AFC97E] text-white px-3 py-1 rounded-full text-sm">
                      {realisation.puissanceMax} kWc
                    </div>
                    <span className="date text-sm text-gray-600">
                      {formatDate(realisation.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{realisation.title}</h3>
                  <a
                    href={`/installations-details/${realisation.slug}`}
                    className="details-link inline-flex items-center text-[#AFC97E] hover:text-[#9DB96E] transition-colors"
                  >
                    Afficher les détails
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full py-8 text-gray-500">
              Aucune réalisation disponible pour le moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
