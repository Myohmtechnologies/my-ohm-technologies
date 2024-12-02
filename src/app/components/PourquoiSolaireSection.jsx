// src/app/components/PourquoiSolaireSection.jsx
import Image from "next/image";
import evolutionPrixElectricite from "../../../public/images/evolution-prix-electrite-entre-2010-et-2040.png";
import energieVerteEtRenouvelable from "../../../public/images/energie-verte-et-renouvelable.png";

export default function PourquoiSolaireSection() {
    return (
      <section className="pourquoi-solaire-section">
        <div className="div-text">
          <p>Pourquoi le solaire</p>
          <h2>Pourquoi passer à l&apos;énergie solaire :</h2>
        </div>
        <div className="why-div">
          <div>
            <div className="image-container">
              <Image 
                src={evolutionPrixElectricite} 
                alt="Évolution du tarif de l'électricité" 
                width={500}
                height={350}
                priority
              />
            </div>
            <h3 style={{ marginBottom: '10px' }}>Économies sur vos factures:</h3>
            <p>
              L&apos;énergie solaire vous permet de réduire considérablement vos dépenses en électricité en produisant votre propre énergie
              gratuitement à partir du soleil.
            </p>
          </div>
          <div>
            <div className="image-container">
              <Image 
                src={energieVerteEtRenouvelable} 
                alt="Énergie verte et renouvelable" 
                width={500}
                height={350}
                priority
              />
            </div>
            <h3 style={{ marginBottom: '10px' }}>Énergie verte et renouvelable:</h3>
            <p>
              En utilisant le solaire, vous réduisez votre empreinte carbone et contribuez à la protection de l&apos;environnement en optant
              pour une énergie propre.
            </p>
          </div>
        </div>
      </section>
    );
  }
