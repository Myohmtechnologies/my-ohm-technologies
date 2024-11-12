const RealisationSection = () => {
    return (
      <section className="realisation-section">
        <div style={{ textAlign: "center" }}>
          <h2>Nos réalisations</h2>
        </div>
  
        <div className="cards-container">
          <div className="realisation-cards">
            <div className="realisation-card">
              <img
                src="/images/PHOTO-2024-05-22-17-39-06.jpg"
                alt="Réalisation 1"
              />
              <h3 className="realisation-text">Installation de panneaux photovoltaïques</h3>
            </div>
            <div className="realisation-card">
              <img
                src="/images/PHOTO-2024-05-22-17-42-57.jpg"
                alt="Réalisation 2"
              />
              <p className="realisation-text">Installation de panneaux photovoltaïques</p>
            </div>
            <div className="realisation-card">
              <img
                src="/images/IMG_5056.jpg"
                alt="Réalisation 3"
              />
              <p className="realisation-text">Installation de panneaux photovoltaïques</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RealisationSection;
  