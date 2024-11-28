"use client";

import React from "react";
import Image from "next/image";

const MaterialSection = () => {
  return (
    <section className="section-material">
      <div className="container-material">
        {/* Texte à gauche */}
        <div className="text-content">
          <h3 className="small-h3">SÉCURITÉ ET RENDEMENT AU SOMMET.</h3>
          <h2 className="title">
            Le matériel le plus sûr et le plus performant du marché
          </h2>
          <p className="paragraph">
            Nous travaillons exclusivement avec les marques de panneaux solaires et d’onduleurs les plus fiables du monde.
          </p>
          <p className="paragraph">
            Pour cela, nous nous basons sur le classement Bloomberg New Energy Finance, et les retours des investisseurs professionnels qui évaluent les risques et profits de chaque marque.
          </p>
          <p className="paragraph">
            Nous sommes ainsi sûrs de vous offrir une installation performante et durable.
          </p>
          <button className="button-yellow">
            Avez-vous un projet ?
            <Image
              className="arrow-icon"
              alt="Arrow Icon"
              src="/images/svg/lets-icons_arrow-right.svg"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Image à droite avec logos et label */}
        <div className="image-content">
          <Image
            src="/images/installation-panneaux-solaire-Sisteron.jpg"
            alt="Panneaux solaires et logos"
            width={600}
            height={600}
            className="solar-image"
          />
        </div>
      </div>
    </section>
  );
};

export default MaterialSection;
