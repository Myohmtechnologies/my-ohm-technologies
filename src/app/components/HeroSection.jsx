// src/app/components/HeroSection.jsx

import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
    <div className='hero-page-section'>
      <img src="/images/hero/4.webp" alt="" />
    </div>
    <div className="hero">
        <div className="solar-offer-home">
          <div className="solar-content">
            <h2>Passez au solaire avec OHM Technologies</h2>
            <p>Sélectionnez votre situation pour voir vos économies:</p>
            <div className="options">

              <div className="option-item">
                <img
                  className="icon"
                  src="/images/svg/Group 2085663187.svg"
                  alt="Maison Icon" />
                <div className="option-props">
                  <Link href="/simulateur?residential_status=RENTER" passHref>
                    <span className="option-text">Locataire</span>
                  </Link>
                  <span>suivant</span>
                </div>
              </div>


              <div className="option-item">
                <img
                  className="icon"
                  src="/images/svg/Group 2085663187 (1).svg"
                  alt="Appartement Icon" />
                <div className="option-props">
                  <Link href="/simulateur?residential_status=OWNER" passHref>
                    <span className="option-text">Propriétaire</span>
                  </Link>
                  <span>suivant</span>
                </div>
              </div>
            </div>
            <div className="details">
              <span>✔ Estimation en 2 min</span>
              <span>✔ Gratuit et sans engagement</span>
            </div>
          </div>
        </div>



        <div className="bottom-cordonner">
          <div className="left-half">
            <p>Coordonnées</p>
          </div>

          <div className="right-half">
            <div className="top-quarter">
              <img src="images/svg/Location.svg" alt="" />
              <p>544 Av. Frédéric Mistral 04100 Manosque</p>
            </div>
            <div className="bottom-quarter">
              <img src="images/svg/material-symbols_call.svg" alt="" />
              <p>04 92 92 04 04</p>
            </div>
          </div>
        </div>

      </div></>
  );
};

export default HeroSection;
