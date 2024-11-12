// src/app/components/CustomSolutions.jsx
import '../../styles/globals.css'
const CustomSolutions = ({ installation }) => {
  return (
    <section className="custom-solutions">
      <div>
        <div className="section-header">
          <h1>Solutions Personnalisées pour Chaque Projet</h1>
          <p className="description">
            Chez [Nom de l’Entreprise], nous concevons et installons des systèmes énergétiques sur mesure
            qui répondent aux besoins spécifiques de nos clients.
          </p>
        </div>

        <div className="characteristics">
          <h2>Les caractéristiques</h2>
          <div className="details">
            <p className="detail-p">
              <img src="images/icone-nos-realisation/iconamoon_home-fill.svg" alt="Maison icon" />
              Maison: {installation.surfaceMaison}m², consommation de {installation.surfaceMaison * 100} kWh/an
            </p>
            <p className="detail-p">
              <img src="/images/icone-nos-realisation/mdi_thunder.svg" alt="Puissance icon" />
              Puissance: {installation.puissanceMax} kWc
            </p>
            <p className="detail-p">
              <img src="/images/icone-nos-realisation/mingcute_solar-panel-fill.svg" alt="Panneaux icon" />
              Panneaux: {installation.nombrePanneaux} panneaux {installation.marquePanneaux}
            </p>
            <p className="detail-p">
              <img src="/images/icone-nos-realisation/simple-icons_wire.svg" alt="Onduleur icon" />
              Onduleur: {installation.marqueMicroOnduleur}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
