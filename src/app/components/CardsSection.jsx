import Image from "next/image";

const CardsSection = () => {
  return (
    <section className="cards">
      <div className="card-top-text">
        <div className="left-text">
          <h3 className="small-h3">ÉCONOMISEZ AUJOURD&apos;HUI, PROTÉGEZ DEMAIN.</h3>
        </div>
        <div className="right-content">
          <h2 className="title">Économique et écologique : votre avenir est solaire.</h2>
          <p>
            Équiper votre maison de panneaux solaires vous permet de réduire
            votre facture d&apos;électricité, et d&apos;agir positivement pour la
            transition écologique.
          </p>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <Image
            src="/images/svg/icone-soleil.svg"
            alt="Icône Ensoleillement"
            width={130} // Remplacez par les dimensions réelles
            height={130} // Remplacez par les dimensions réelles
            className="card-image"
          />
          <p className="card-text">Avec + 300 jours d&apos;ensoleillements</p>
        </div>
        <div className="card">
          <Image
            src="/images/svg/icone-portefeuille.svg"
            data-color="special"
            alt="Icône Économie"
            width={130} // Remplacez par les dimensions réelles
            height={130} // Remplacez par les dimensions réelles
            className="card-image"
          />
          <p className="card-text">
            Jusqu&apos;à 80% d&apos;économie sur vos factures d&apos;électricité
          </p>
        </div>
        <div className="card">
          <Image
            src="/images/svg/icone-valorisation.svg"
            alt="Icône Patrimoine"
            width={130} // Remplacez par les dimensions réelles
            height={130} // Remplacez par les dimensions réelles
            className="card-image"
          />
          <p className="card-text">Valorisation de votre Patrimoine</p>
        </div>
        <div className="card">
          <Image
            src="/images/svg/icone-energie.svg"
            data-color="special"
            alt="Icône Énergie"
            width={130} // Remplacez par les dimensions réelles
            height={130} // Remplacez par les dimensions réelles
            className="card-image"
          />
          <p className="card-text">Une énergie verte et renouvelable</p>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
