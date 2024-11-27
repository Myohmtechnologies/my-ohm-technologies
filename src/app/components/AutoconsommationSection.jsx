// src/app/components/AutoconsommationSection.jsx
import Image from "next/image";
export default function AutoconsommationSection() {
    return (
      <section className="autoconso-section">
        <div>
          <Image 
          src="images/courbe-autoconsomation.png" 
          alt="Courbe d&apos;autoconsommation"
          />

        </div>
        <div className="autoconso-div">
          <h2>Autoconsommation: en route vers l&apos;autonomie énergétique.</h2>
          <p>L&apos;autoconsommation consiste à utiliser l&apos;électricité produite par vos propres panneaux solaires pour alimenter votre maison.</p>
          <p>
            Cela vous permet de réduire votre dépendance au réseau électrique et de faire des économies sur vos factures. En produisant votre propre
            énergie, vous contribuez aussi à la protection de l&apos;environnement.
          </p>
          <p>
            L&apos;excédent d&apos;énergie peut être stocké dans des batteries virtuelles ou physiques ou revendu au réseau. C&apos;est une étape simple vers
            l&apos;autonomie énergétique et une solution durable pour l&apos;avenir.
          </p>
        </div>
      </section>
    );
  }
  
