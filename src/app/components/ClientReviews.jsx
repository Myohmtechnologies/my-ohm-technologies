import Image from "next/image";

const ClientReviews = ({ realizations, limit }) => {
  // Limiter le nombre d'éléments si la prop limit est définie
  const displayedRealizations = limit ? realizations.slice(0, limit) : realizations;

  return (
    <section className="avis-du-client">
      <div className="btn-nos-instal">
        <h2>Voir plus d&apos;installations</h2>
        <button>
          <a href="/nos-realisations">Vous avez un projet ?</a>
          <Image
            src="/images/svg/icons8-right-arrow-32.png"
            alt="Icône flèche droite"
            width={32}
            height={32}
          />
        </button>
      </div>

      <section className="projects-grid">
        {displayedRealizations.length > 0 ? (
          displayedRealizations.map((realisation) => (
            <div key={realisation._id} className="card-project">
              <Image
                src={
                  realisation.mainImage
                    ? realisation.mainImage
                    : "/images/placeholder-image.png"
                }
                alt={`Installation panneaux solaires - ${realisation.title}`}
                width={400} // Remplacez par les dimensions réelles
                height={300} // Remplacez par les dimensions réelles
              />
              <div className="card-content">
                <div className="badge">{realisation.puissanceMax} kWc</div>
                <span className="date">
                  {new Date(realisation.date).toLocaleDateString("fr-FR")}
                </span>
                <h3>{realisation.title}</h3>
                <a
                  href={`/installations-details/${realisation.slug}`}
                  className="details-link"
                >
                  Afficher les détails
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune réalisation disponible pour le moment.</p>
        )}
      </section>
    </section>
  );
};

export default ClientReviews;
