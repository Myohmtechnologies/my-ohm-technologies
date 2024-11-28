"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Utilisation de Link pour la navigation Next.js
import "../../styles/simulateur.css";

const MerciPage = () => {
  return (
    <div className="merci-container">
      {/* Header */}
      <header className="merci-header">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo My ohm technologies"
            className="logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="header-actions">
          <Link href="#" className="print-link">
            Imprimer votre simulation
          </Link>
          <span className="phone-number">
            <Image
              src="/images/svg/material-symbols_call.svg"
              alt="Phone Icon"
              width={20}
              height={20}
            />
            09 75 66 68 58
          </span>
        </div>
      </header>

      {/* Notification Section */}
      <section className="notification">
        {/* Stepper */}
        <div className="stepper">
          <div className="step completed">
            <span className="step-icon">✔️</span>
            <span className="none">Simulation réalisée</span>
          </div>
          <hr />
          <div className="step active">
            <span className="step-number">2</span>
            <span>RDV téléphonique</span>
          </div>
          <hr />
          <div className="step">
            <span className="step-number">3</span>
            <span className="none">RDV chez vous</span>
          </div>
        </div>
        <h3>Notre conseiller expert va vous contacter dans les 24h</h3>
        <p>
          My ohm technologies vous confirme que votre demande a bien été reçue.
          Un conseiller expert va vous contacter dans les plus brefs délais
          pour discuter de votre projet et répondre à toutes vos questions.
        </p>
      </section>

      {/* Address Section */}
      <section className="address">
        <span>📍 544 Av. Frédéric Mistral 04100 Manosque, France</span>
      </section>

      {/* User Info Section */}
      <section className="user-info">
        <h1>Youcef Mahieddine</h1>
        <h2>Voici votre potentiel solaire</h2>
        <p>Après analyse de votre profil de consommation énergétique</p>
      </section>

      {/* Solar Recommendation Section */}
      <section className="merci-info">
        <div className="solar-recommendation">
          <div className="recommendation-header">
            <h2>Recommandé</h2>
            <span className="power">3 kWc</span>
          </div>

          <div className="recommendation-details">
            <div className="recommendation-stat">
              <span>Quantité</span>
              <strong>6 panneaux</strong>
            </div>
            <div className="recommendation-stat">
              <span>Type d&apos;onduleur</span>
              <strong>Micro-onduleur</strong>
            </div>
            <div className="recommendation-stat">
              <span>Production annuelle</span>
              <strong>4 380 kWh</strong>
            </div>
            <hr />
            <div className="recommendation-stat">
              <span>Prix de votre électricité solaire</span>
              <strong>0,07 € / kWh</strong>
            </div>
            <div className="recommendation-stat">
              <span>Réduction de votre facture</span>
              <strong>74%</strong>
            </div>
            <div className="recommendation-stat">
              <span>Empreinte carbone (Émissions CO2)</span>
              <strong>16 grammes par kWh</strong>
            </div>
          </div>
        </div>
        <div className="recommendation-map">
          <Image
            src="/images/simulation-google-maps.png"
            alt="Localisation de l'installation"
            width={500}
            height={300}
          />
        </div>
      </section>

      {/* Autoconsommation Section */}
      <section className="autoconsommation-section">
        <div className="autoconsommation-text">
          <h3>Réduisez votre facture grâce à l&apos;autoconsommation solaire.</h3>
          <p>
            L&apos;autoconsommation représente la part de l&apos;électricité
            produite par vos panneaux solaires que vous consommez directement.
            Utiliser votre électricité solaire en journée augmente sensiblement
            la rentabilité de votre projet !
          </p>
        </div>
        <div className="autoconsommation-graph">
          <Image
            src="/images/courbe-autoconsomation.png"
            alt="Courbe de consommation et de production"
            className="graph-image"
            width={500}
            height={300}
          />
        </div>
      </section>
    </div>
  );
};

export default MerciPage;
