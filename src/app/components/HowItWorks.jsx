// src/app/components/HowItWorks.jsx
export default function HowItWorks() {
    return (
      <section className="container-pv">
        <div className="div-text">
          <p>Comment ça marche</p>
          <h2>Comment ça marche</h2>
        </div>
        <div className="pv-ccm">
          <img
            src="images/panneaux-photovoltaique-comment-ca-marche.png"
            alt="Comment ça marche"
          />
        </div>
  
        <div className="comment-ca-marche-cards">
          <div className="comment-ca-marche-card">
            <div className="comment-ca-marche-circle">1</div>
            <p>
              Le fonctionnement d'un panneau solaire est assuré par les cellules
              photovoltaïques contenues dans les panneaux, chargées de capter
              cette lumière pour la transformer en énergie : le courant continu.
            </p>
          </div>
  
          <div className="comment-ca-marche-card">
            <div className="comment-ca-marche-circle second">2</div>
            <p>
              L'onduleur central, ou les micro-onduleurs, convertissent ce courant
              continu en courant alternatif, envoyé directement aux appareils
              électriques de votre logement.
            </p>
          </div>
        </div>
      </section>
    );
  }
  