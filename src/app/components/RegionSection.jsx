import Image from "next/image";

const RegionSection = () => {
    return (
      <section className="region-section">
        <div className="container">
          <div className="map-info">
            <div>
              <Image
                src="/images/Capture_d_écran_2024-10-07_à_19.08.43-removebg-preview.png"
                alt="Carte région PACA"
                width={600}
                height={600}
              />
            </div>
  
            <div className="map-description">
              <p>
                Avec 2 855 heures d&apos;ensoleillement par an, la Provence-Alpes-Côtes
                d&apos;Azur est la deuxième région la plus ensoleillée de France ! Y
                installer des panneaux solaires est donc à la fois une démarche
                écologique et un investissement rentable.
              </p>
              <h2>Pour vous aider à profiter au mieux du soleil, demandez conseils à un :</h2>
              <div className="regions">
                <div className="region-card">
                  <h3>Bouches-du-Rhône</h3>
                  <p>Installateur de panneaux solaires dans les</p>
                </div>
                <div className="region-card">
                  <h3>Alpes-de-Haute-Provence</h3>
                  <p>Installateur de panneaux solaires dans les</p>
                </div>
                <div className="region-card">
                  <h3>Var</h3>
                  <p>Installateur de panneaux solaires dans les</p>
                </div>
                <div className="region-card">
                  <h3>Vaucluse</h3>
                  <p>Installateur de panneaux solaires dans les</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RegionSection;
  
