"use client";

import React from "react";
import Image from "next/image";

export default function ProductPresentation() {
  return (
    <section className="container-pv">
      <div className="div-text">
        <p className="product-label">Produit</p>
        <h2 className="product-title">Présentation de notre gamme de produits</h2>
      </div>
      <div className="produit-cards">
        {/* Carte : Micro Onduleur */}
        <div className="produit-card">
          <Image
            src="/images/micro-onduleur-enphase.png"
            alt="Micro Onduleur"
            width={300}
            height={300}
            className="product-image"
          />
          <p className="product-description">Le Micro Onduleur</p>
        </div>

        {/* Carte : Panneaux photovoltaïques */}
        <div className="produit-card">
          <Image
            src="/images/pv.png"
            alt="Panneaux photovoltaïques"
            width={300}
            height={300}
            className="product-image"
          />
          <p className="product-description">Le Panneaux photovoltaïque</p>
        </div>
      </div>
    </section>
  );
}
