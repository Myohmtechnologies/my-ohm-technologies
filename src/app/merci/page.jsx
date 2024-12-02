"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/merci.css";

const MerciPage = () => {
  return (
    <div className="merci-container">
      <header className="merci-header">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo My ohm technologies"
            width={150}
            height={50}
            priority
          />
        </Link>
        <div className="header-actions">
          <Link href="#" className="print-link" onClick={() => window.print()}>
            <Image
              src="/images/svg/print.svg"
              alt="Print Icon"
              width={20}
              height={20}
            />
            Imprimer votre simulation
          </Link>
          <Link href="tel:0184606125" className="phone-number">
            <Image
              src="/images/svg/phone-icon.svg"
              alt="Phone Icon"
              width={20}
              height={20}
            />
            01 84 60 61 25
          </Link>
        </div>
      </header>

      <section className="notification">
        <div className="stepper">
          <div className="step completed">
            <span className="step-icon">✓</span>
            <span>Simulation réalisée</span>
          </div>
          <hr />
          <div className="step active">
            <span className="step-number">2</span>
            <span>RDV téléphonique</span>
          </div>
          <hr />
          <div className="step">
            <span className="step-number">3</span>
            <span>RDV chez vous</span>
          </div>
        </div>
        <h3>Notre conseiller expert va vous contacter dans les 24h</h3>
        <p>
          My ohm technologies vous confirme que votre demande a bien été reçue.
          Un conseiller expert va vous contacter dans les plus brefs délais
          pour discuter de votre projet et répondre à toutes vos questions.
        </p>
      </section>

      <section className="address">
        <span>📍 544 Av. Frédéric Mistral 04100 Manosque, France</span>
      </section>

      <section className="user-info">
        <h1>Votre Simulation Solaire</h1>
        <h2>Voici votre potentiel solaire</h2>
        <p>Basé sur votre profil de consommation énergétique</p>
      </section>

      <section className="merci-info">
        <div className="solar-recommendation">
          <div className="recommendation-header">
            <h2>Solution Recommandée</h2>
            <span className="power">3 kWc</span>
          </div>

          <div className="recommendation-details">
            <div className="recommendation-stat">
              <span>Installation</span>
              <strong>6 panneaux solaires</strong>
            </div>
            <div className="recommendation-stat">
              <span>Type d&apos;onduleur</span>
              <strong>Micro-onduleur</strong>
            </div>
            <div className="recommendation-stat">
              <span>Production annuelle</span>
              <strong>4 380 kWh</strong>
            </div>
            <div className="recommendation-stat">
              <span>Prix de l&apos;électricité solaire</span>
              <strong>0,07 € / kWh</strong>
            </div>
          </div>

          <div className="savings-info">
            <h3>Vos économies estimées</h3>
            <div className="savings-grid">
              <div className="savings-item">
                <span>Économies mensuelles</span>
                <strong>95 €</strong>
              </div>
              <div className="savings-item">
                <span>Économies annuelles</span>
                <strong>1 140 €</strong>
              </div>
              <div className="savings-item">
                <span>Réduction CO2</span>
                <strong>1 200 kg/an</strong>
              </div>
              <div className="savings-item">
                <span>Retour sur investissement</span>
                <strong>6-8 ans</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerciPage;
