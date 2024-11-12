// src/app/components/HeroSection.jsx

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero">
      

      <div className="hero-text">
        <h1>Illuminer votre quotidien avec de l'énergie solaire</h1>
      </div>
      
      <div className="trustpilot-section">
        <img
          src="/images/images-removebg-preview.png"
          className="trustpilot-section-img"
          alt="Trustpilot Logo"
        />
      </div>

      <div className="hero-text-h2">
        <h2>Votre projet concerne ?</h2>
      </div>

      <div className="options">
        {/* Option 1 - Locataire */}
        <div className="option-item">
          <img
            className="icon"
            src="/images/svg/Group 2085663187.svg"
            alt="Maison Icon"
          />
          <div className="option-props">
            <Link href="/simulateur?residential_status=RENTER" passHref>
              <span className="option-text">Locataire</span>
            </Link>
            <span>suivant</span>
          </div>
        </div>

        {/* Option 2 - Propriétaire */}
        <div className="option-item">
          <img
            className="icon"
            src="/images/svg/Group 2085663187 (1).svg"
            alt="Appartement Icon"
          />
          <div className="option-props">
            <Link href="/simulateur?residential_status=OWNER" passHref>
              <span className="option-text">Propriétaire</span>
            </Link>
            <span>suivant</span>
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

    </section>
  );
};

export default HeroSection;
