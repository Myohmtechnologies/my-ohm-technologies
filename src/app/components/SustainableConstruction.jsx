import Image from "next/image";

// src/app/components/SustainableConstruction.jsx
const SustainableConstruction = ({ title, content, imageUrl, datTime }) => {
  // Vérifier si l'URL de l'image est valide
  const isValidImageUrl = imageUrl && (
    imageUrl.startsWith('https://res.cloudinary.com') || 
    imageUrl.startsWith('/images/')
  );

  return (
    <section className="sustainable-construction">
      <div className="content">
        <div className="label">
          <span>Innovations</span>
        </div>
        <h1 className="sustainable-construction-h1">{title || "L'Art de construire pour un avenir durable"}</h1>
        <p>{content || "Dans le monde en constante évolution de la construction, il est essentiel de s'adapter aux nouvelles technologies, aux matériaux innovants et aux pratiques durables. Chez [Nom de l’Entreprise], nous croyons que bâtir pour l’avenir signifie non seulement créer des structures solides, mais aussi des solutions durables qui respectent l'environnement."}</p>
        <p className="author">Admin • {datTime}</p>
      </div>
      <div className="image-container">
        <Image 
          src={isValidImageUrl ? imageUrl : "/images/blog-header.png"}
          alt={title || "Image de construction"}
          width={800}
          height={500}
          className="w-full h-auto object-cover"
          priority={true}
          quality={90}
          onError={(e) => {
            e.target.src = "/images/blog-header.png";
          }}
        />
      </div>
    </section>
  );
};

export default SustainableConstruction;
