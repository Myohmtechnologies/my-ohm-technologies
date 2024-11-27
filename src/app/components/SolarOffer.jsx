<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 642d8a2 (Réinitialisation du dépôt)
import Link from "next/link";

// src/app/components/SolarOffer.jsx
const SolarOffer = () => {
    return (
      <section className="solar-offer">
        <div className="solar-content">
          <h2>Passez au solaire avec OHM Technologies</h2>
          <p>Sélectionnez votre situation pour voir vos économies:</p>
          <div className="options">
         
          <div className="option-item">
<<<<<<< HEAD
          <img
=======
          <Image
>>>>>>> 642d8a2 (Réinitialisation du dépôt)
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
         
  
        <div className="option-item">
<<<<<<< HEAD
          <img
=======
          <Image
>>>>>>> 642d8a2 (Réinitialisation du dépôt)
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
          <div className="details">
            <span>✔ Estimation en 2 min</span>
            <span>✔ Gratuit et sans engagement</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default SolarOffer;
  