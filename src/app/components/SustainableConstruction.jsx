// src/app/components/SustainableConstruction.jsx
const SustainableConstruction = ({ title, content, imageUrl, datTime }) => {
  return (
    <section className="sustainable-construction">
      <div className="content">
        <div className="label">
          <span>Innovations</span>
        </div>
        <h1>{title || "L&apos;Art de construire pour un avenir durable"}</h1>
        <p>{content || "Dans le monde en constante évolution de la construction, il est essentiel de s'adapter aux nouvelles technologies, aux matériaux innovants et aux pratiques durables. Chez [Nom de l’Entreprise], nous croyons que bâtir pour l’avenir signifie non seulement créer des structures solides, mais aussi des solutions durables qui respectent l'environnement."}</p>
        <p className="author">Admin • {datTime}</p>
      </div>
      <div className="image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title || "Image de construction"} />
        ) : (
          <img src="/images/blog-header.png" alt="Panneaux solaires" />
        )}
      </div>
    </section>
  );
};

export default SustainableConstruction;
