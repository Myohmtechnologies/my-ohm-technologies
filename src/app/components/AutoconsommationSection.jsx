// src/app/components/AutoconsommationSection.jsx
export default function AutoconsommationSection() {
    return (
      <section className="autoconso-section">
        <div>
          <img src="images/courbe-autoconsomation.png" alt="Courbe d'autoconsommation" />
        </div>
        <div className="autoconso-div">
          <h2>Autoconsommation: en route vers l'autonomie énergétique.</h2>
          <p>L'autoconsommation consiste à utiliser l'électricité produite par vos propres panneaux solaires pour alimenter votre maison.</p>
          <p>
            Cela vous permet de réduire votre dépendance au réseau électrique et de faire des économies sur vos factures. En produisant votre propre
            énergie, vous contribuez aussi à la protection de l'environnement.
          </p>
          <p>
            L'excédent d'énergie peut être stocké dans des batteries virtuelles ou physiques ou revendu au réseau. C'est une étape simple vers
            l'autonomie énergétique et une solution durable pour l'avenir.
          </p>
        </div>
      </section>
    );
  }
  