const ImageSection = () => {
    return (
      <section className="container-img">
        <img
          src="/images/instal.jpg"
          alt="famille heureuse après une installation de panneaux solaires"
        />
  
        <div className="text-section">
          <p className="small-h3">L'ÉNERGIE SOLAIRE À VOTRE PORTÉE.</p>
          <h2 className="title">
            Profitez d'une installation de panneaux solaires à prix accessible
            partout en France
          </h2>
          <p className="description">
            Nous proposons des solutions solaires abordables avec des panneaux et
            des batteries de haute qualité. Nous guidons nos clients et assurons
            une installation de première qualité.
          </p>
          <div className="certifications">
            <p>Nos certifications :</p>
            <button className="button-yellow">
              TÉLÉCHARGEZ L'ATTESTATION D'ASSURANCE
              <img
                className="frame-child"
                alt="Arrow Icon"
                src="/images/svg/lets-icons_arrow-right.svg"
              />
            </button>
          </div>
          <div className="certif">
            <img src="/images/qualipv.png" alt="Certification QualiPV" />
            <img src="/images/décinal.png" alt="Garantie Décennale" />
            <img src="/images/syndicat.png" alt="Certification RGE" />
          </div>
        </div>
      </section>
    );
  };
  
  export default ImageSection;
  