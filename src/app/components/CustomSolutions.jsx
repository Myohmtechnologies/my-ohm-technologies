// src/app/components/CustomSolutions.jsx
import Image from 'next/image';
import '../../styles/globals.css'
const CustomSolutions = ({ installation }) => {
  return (
    <section className="custom-solutions">
      <div>
        <div className="section-header">
          <h1>Solutions Personnalisées pour Chaque Projet</h1>
          <p className="description">
            Chez , nous concevons et installons des systèmes énergétiques sur mesure
            qui répondent aux besoins spécifiques de nos clients.
          </p>
        </div>

        <div className="characteristics">
          <h2>Les caractéristiques</h2>
          <div className="details">
            <p className="detail-p">
              <Image src="images/icone-nos-realisation/iconamoon_home-fill.svg" alt="Maison icon" width={30} height={30}/>
              Maison: {installation.surfaceMaison}m², consommation de {installation.surfaceMaison * 100} kWh/an
            </p>
            <p className="detail-p">
              <Image src="/images/icone-nos-realisation/mdi_thunder.svg" alt="Puissance icon" width={30} height={30}/>
              Puissance: {installation.puissanceMax} kWc
            </p>
            <p className="detail-p">
              <Image src="/images/icone-nos-realisation/mingcute_solar-panel-fill.svg" alt="Panneaux icon" width={30} height={30}/>
              Panneaux: {installation.nombrePanneaux} panneaux {installation.marquePanneaux}
            </p>
            <p className="detail-p">
              <Image src="/images/icone-nos-realisation/simple-icons_wire.svg" alt="Onduleur icon"width={30} height={30} />
              Onduleur: {installation.marqueMicroOnduleur}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
