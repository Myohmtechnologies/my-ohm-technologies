// src/app/components/PourquoiSolaireSection.jsx
export default function PourquoiSolaireSection() {
    return (
      <section className="container-pv">
        <div className="div-text">
          <p>Pourquoi le solaire</p>
          <h2>Pourquoi passer à l&apos;énergie solaire :</h2>
        </div>
        <div className="why-div">
          <div>
            <img src="images/évolution-du-tarif-délectricité.png" alt="Évolution du tarif de l'électricité" />
            <h3 style={{ marginBottom: '10px' }}>Économies sur vos factures:</h3>
            <p>
              L&apos;énergie solaire vous permet de réduire considérablement vos dépenses en électricité en produisant votre propre énergie
              gratuitement à partir du soleil.
            </p>
          </div>
          <div>
            <img src="images/energie-verte-et-renouvelable.png" alt="Énergie verte et renouvelable" />
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
  
