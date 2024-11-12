const CardsSection = () => {
    return (
      <section className="cards">
        <div className="card-top-text">
          <div className="left-text">
            <h3 className="small-h3">ÉCONOMISEZ AUJOURD'HUI, PROTÉGEZ DEMAIN.</h3>
          </div>
          <div className="right-content">
            <h2 className="title">Économique et écologique: votre avenir est solaire.</h2>
            <p>
              Équiper votre maison de panneaux solaires vous permet de réduire
              votre facture d'électricité, et d'agir positivement pour la
              transition écologique.
            </p>
          </div>
        </div>
  
        <div className="cards-container">
          <div className="card">
            <img
              src="/images/svg/icone-soleil.svg"
              alt="Icone Ensoleillement"
              className="card-image"
            />
            <p className="card-text">Avec + 300 jours d'ensoleillements</p>
          </div>
          <div className="card">
            <img
              src="/images/svg/icone-portefeuille.svg"
              data-color="special"
              alt="Icone Economie"
              className="card-image"
            />
            <p className="card-text">
              Jusqu'à 80% d'économie sur vos factures d'électricité
            </p>
          </div>
          <div className="card">
            <img
              src="/images/svg/icone-valorisation.svg"
              alt="Icone Patrimoine"
              className="card-image"
            />
            <p className="card-text">Valorisation de votre Patrimoine</p>
          </div>
          <div className="card">
            <img
              src="/images/svg/icone-energie.svg"
              data-color="special"
              alt="Icone Energie"
              className="card-image"
            />
            <p className="card-text">Une énergie verte et renouvelable</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default CardsSection;
  