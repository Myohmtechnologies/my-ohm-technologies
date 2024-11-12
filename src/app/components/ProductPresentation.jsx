// src/app/components/ProductPresentation.jsx
export default function ProductPresentation() {
    return (
      <section className="container-pv">
        <div className="div-text">
          <p>Produit</p>
          <h2>Présentation de notre gamme de produits</h2>
        </div>
        <div className="produit-cards">
          <div className="produit-card">
            <img
              src="images/micro-onduleur-enphase.png"
              alt="Micro Onduleur"
            />
            <p>Le Micro Onduleur</p>
          </div>
          <div className="produit-card">
            <img src="images/pv.png" alt="Panneaux photovoltaïque" />
            <p>Le Panneaux photovoltaïque</p>
          </div>
        </div>
      </section>
    );
  }
  