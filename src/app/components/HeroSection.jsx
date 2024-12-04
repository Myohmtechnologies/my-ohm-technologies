// src/app/components/HeroSection.jsx

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
    <div className='hero-page-section'>
      <Image src="/images/hero/4.webp" alt="" width={800}
                  height={550} priority/>
    </div>
    <div className="hero">
        <div className="solar-offer-home">
          <div className="solar-content">
            <h2>Passez au solaire avec My Ohm Technologies</h2>
            <p>Sélectionnez votre situation pour voir vos économies:</p>
            <div className="options">

              <div className="option-item">
                <Image
                  className="icon"
                  src="/images/svg/Group 2085663187.svg"
                  alt="Maison Icon" 
                  width={80}
                  height={80}
                  />
                <div className="option-props">
                  <Link href="/simulateur?residential_status=RENTER" passHref>
                    <span className="option-text">Locataire</span>
                  </Link>
                  <span>suivant</span>
                </div>
              </div>


              <div className="option-item">
                <Image
                  className="icon"
                  src="/images/svg/Group 2085663187 (1).svg"
                  alt="Appartement Icon" 
                  width={80}
                  height={80}
                  />
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
          
          </div>
        </div>

      </div></>
  );
};

export default HeroSection;
