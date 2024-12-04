"use client";

import React from "react";
import Image from "next/image";

const ProjectManagement = () => {
  return (
    <section className="project-management">
      <h2 className="section-title">Gestion des Projets de Construction</h2>
      <div className="content-wrapper">
        {/* Liste des articles */}
        <div className="article-list">
          {[
            {
              src: "/images/blog/Image (1).png",
              alt: "Matériaux Innovants",
              tag: "Écologique",
              title: "Matériaux Innovants pour une Construction Moderne",
              description:
                "Le secteur de la construction connaît une révolution grâce à l'utilisation de matériaux...",
              authorDate: "PHOENIX BAKER • 19 JAN 2022",
            },
            {
              src: "/images/blog/Image.png",
              alt: "Importance de la Construction Éco Responsable",
              tag: "Écologique",
              title: "L'Importance de la Construction Éco Responsable",
              description:
                "Construire de manière durable n'est plus une option, c'est une nécessité...",
              authorDate: "PHOENIX BAKER • 19 JAN 2022",
            },
            {
              src: "/images/blog/Image.png",
              alt: "Importance de la Construction Éco Responsable",
              tag: "Écologique",
              title: "L'Importance de la Construction Éco Responsable",
              description:
                "Construire de manière durable n'est plus une option, c'est une nécessité...",
              authorDate: "PHOENIX BAKER • 19 JAN 2022",
            },
          ].map((article, index) => (
            <article key={index} className="small-article">
              <Image
                src={article.src}
                alt={article.alt}
                width={500}
                height={300}
                className="article-image"
              />
              <div className="article-content">
                <span className="tag">{article.tag}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <span className="author-date">{article.authorDate}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Article en vedette */}
        <div className="featured-article">
          <Image
            src="/images/blog/Rectangle 13.png"
            alt="Construction Éco Responsable"
            width={500}
            height={300}
            className="article-image"
          />
          <div className="article-content">
            <span className="tag">Écologique</span>
            <h3 className="article-title">
              L&apos;Importance de la Construction Éco-Responsable
            </h3>
            <p className="article-description">
              Construire de manière durable n&apos;est plus une option, c&apos;est une
              nécessité. Nous adoptons une approche éco-responsable à chaque
              étape du processus...
            </p>
            <span className="author-date">PHOENIX BAKER • 19 JAN 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
