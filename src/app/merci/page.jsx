"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/merci.css";

const MerciPage = () => {
  const [showMicroInverterInfo, setShowMicroInverterInfo] = useState(false);
  const [showPanelInfo, setShowPanelInfo] = useState(false);

  return (
    <div className="merci-container">
      <header className="merci-header">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo My ohm technologies"
            width={170}
            height={70}
            priority
          />
        </Link>
        <div className="header-actions">
          <button 
            className="print-button" 
            onClick={() => window.print()}
            title="Imprimer votre simulation"
          >
            <Image
              src="/images/svg/print-icon.svg"
              alt="Imprimer"
              width={24}
              height={24}
              priority
            />
            <span>Imprimer votre simulation</span>
          </button>
          <Link href="tel:+33 04 92 76 68 58" className="phone-number">
            <div className="phone-icon">
              <Image
                src="/images/svg/phone-icon.svg"
                alt="Phone Icon"
                width={20}
                height={20}
                priority
              />
            </div>
            04 92 76 68 58
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
        <div className="benefits-box">
          <h4>Lors de votre RDV téléphonique, notre expert vous présentera :</h4>
          <ul>
            <li>
              <div className="check-icon">
                <Image 
                  src="/images/svg/check-circle.svg" 
                  alt="Check" 
                  width={24} 
                  height={24}
                  priority 
                />
              </div>
              Les aides de l&apos;État disponibles pour votre projet
            </li>
            <li>
              <div className="check-icon">
                <Image 
                  src="/images/svg/check-circle.svg" 
                  alt="Check" 
                  width={24} 
                  height={24}
                  priority 
                />
              </div>
              Le détail de vos économies potentielles
            </li>
            <li>
              <div className="check-icon">
                <Image 
                  src="/images/svg/check-circle.svg" 
                  alt="Check" 
                  width={24} 
                  height={24}
                  priority 
                />
              </div>
              Les solutions de financement adaptées à votre situation
            </li>
          </ul>
        </div>
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
              <div className="stat-header">
                <span>Installation</span>
                <div className="info-icon">
                  <button 
                    className="info-button"
                    onClick={() => setShowPanelInfo(!showPanelInfo)}
                  >
                    <Image 
                      src="/images/svg/info-circle.svg" 
                      alt="Info" 
                      width={24} 
                      height={24}
                      priority 
                    />
                  </button>
                </div>
              </div>
              <strong>6 panneaux solaires</strong>
              {showPanelInfo && (
                <div className="info-popup">
                  <p>
                    <Image 
                      src="/images/svg/france-flag.svg" 
                      alt="Drapeau français" 
                      width={24} 
                      height={24}
                      className="flag"
                      priority 
                    />
                    Panneaux solaires fabriqués en France
                  </p>
                </div>
              )}
            </div>
            <div className="recommendation-stat">
              <div className="stat-header">
                <span>Type d&apos;onduleur</span>
                <div className="info-icon">
                  <button 
                    className="info-button"
                    onClick={() => setShowMicroInverterInfo(!showMicroInverterInfo)}
                  >
                    <Image 
                      src="/images/svg/info-circle.svg" 
                      alt="Info" 
                      width={24} 
                      height={24}
                      priority 
                    />
                  </button>
                </div>
              </div>
              <strong>Micro-onduleur</strong>
              {showMicroInverterInfo && (
                <div className="info-popup">
                  <p>
                    <Image 
                      src="/images/svg/usa-flag.svg" 
                      alt="Drapeau USA" 
                      width={24} 
                      height={24}
                      className="flag"
                      priority 
                    />
                    Micro-onduleurs Made in USA - Les meilleurs du marché
                  </p>
                </div>
              )}
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
