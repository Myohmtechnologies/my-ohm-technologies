import Image from "next/image";

// src/app/components/HowItWorks.jsx
export default function HowItWorks() {
    return (
      <section className="container-pv">
        <div className="div-text">
          <p>Comment ça marche</p>
          <h2>Comment ça marche</h2>
        </div>
        <div className="pv-ccm">
          <Image
            src="images/panneaux-photovoltaique-comment-ca-marche.png"
            alt="Comment ça marche"
            width={600}
          />
        </div>
  
        <div className="comment-ca-marche-cards">
          <div className="comment-ca-marche-card">
            <div className="comment-ca-marche-circle">1</div>
            <p>
              Le fonctionnement d&apos;un panneau solaire est assuré par les cellules
              photovoltaïques contenues dans les panneaux, chargées de capter
              cette lumière pour la transformer en énergie : le courant continu.
            </p>
          </div>
  
          <div className="comment-ca-marche-card">
            <div className="comment-ca-marche-circle second">2</div>
            <p>
              L&apos;onduleur central, ou les micro-onduleurs, convertissent ce courant
              continu en courant alternatif, envoyé directement aux appareils
              électriques de votre logement.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
