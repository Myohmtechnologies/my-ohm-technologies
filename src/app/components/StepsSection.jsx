<<<<<<< HEAD
const StepsSection = () => {
    return (
      <section className="steps-container">
        <p className="small-h3">L'ÉNERGIE SOLAIRE À VOTRE PORTÉE.</p>
        <h2 className="title">Les étapes clés d'une installation</h2>
        <div className="steps">
          <div className="step">
            <div className="icon-circle yellow">
              <img
                src="/images/icone-telephone.svg"
                alt="Prise de contact"
              />
            </div>
            <p className="step-title">STEP 01</p>
            <p className="step-desc">Prise de contact</p>
          </div>
  
          <div className="step">
            <div className="icon-circle green">
              <img
                src="/images/Visite-technique.svg"
                alt="Visite technique"
              />
            </div>
            <p className="step-title">STEP 02</p>
            <p className="step-desc">Visite technique</p>
          </div>
  
          <div className="step">
            <div className="icon-circle yellow">
              <img
                src="/images/dossier-administratif.svg"
                alt="Dossier administratif"
              />
            </div>
            <p className="step-title">STEP 03</p>
            <p className="step-desc">Gestion du dossier administratif par nos soins, de A à Z</p>
          </div>
  
          <div className="step">
            <div className="icon-circle green">
              <img
                src="/images/installation.svg"
                alt="Installation des panneaux"
              />
            </div>
            <p className="step-title">STEP 04</p>
            <p className="step-desc">Installation des panneaux photovoltaïques</p>
          </div>
  
          <div className="step">
            <div className="icon-circle yellow">
              <img
                src="/images/Frame (8).svg"
                alt="Autoconsommation et économies"
              />
            </div>
            <p className="step-title">STEP 05</p>
            <p className="step-desc">Autoconsommation et économies !</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default StepsSection;
  
=======
import Image from "next/image";

const StepsSection = () => {
  return (
    <section className="steps-container">
      <p className="small-h3">L&apos;ÉNERGIE SOLAIRE À VOTRE PORTÉE.</p>
      <h2 className="title">Les étapes clés d&apos;une installation</h2>
      <div className="steps">
        <div className="step">
          <div className="icon-circle yellow">
            <Image
              src="/images/icone-telephone.svg"
              alt="Prise de contact"
              width={64} // Spécifiez la largeur
              height={64} // Spécifiez la hauteur
            />
          </div>
          <p className="step-title">STEP 01</p>
          <p className="step-desc">Prise de contact</p>
        </div>

        <div className="step">
          <div className="icon-circle green">
            <Image
              src="/images/Visite-technique.svg"
              alt="Visite technique"
              width={64}
              height={64}
            />
          </div>
          <p className="step-title">STEP 02</p>
          <p className="step-desc">Visite technique</p>
        </div>

        <div className="step">
          <div className="icon-circle yellow">
            <Image
              src="/images/dossier-administratif.svg"
              alt="Dossier administratif"
              width={64}
              height={64}
            />
          </div>
          <p className="step-title">STEP 03</p>
          <p className="step-desc">Gestion du dossier administratif par nos soins, de A à Z</p>
        </div>

        <div className="step">
          <div className="icon-circle green">
            <Image
              src="/images/installation.svg"
              alt="Installation des panneaux"
              width={64}
              height={64}
            />
          </div>
          <p className="step-title">STEP 04</p>
          <p className="step-desc">Installation des panneaux photovoltaïques</p>
        </div>

        <div className="step">
          <div className="icon-circle yellow">
            <Image
              src="/images/Frame (8).svg"
              alt="Autoconsommation et économies"
              width={64}
              height={64}
            />
          </div>
          <p className="step-title">STEP 05</p>
          <p className="step-desc">Autoconsommation et économies !</p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
>>>>>>> 642d8a2 (Réinitialisation du dépôt)
