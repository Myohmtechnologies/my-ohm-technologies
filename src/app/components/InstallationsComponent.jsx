import React from 'react';
import Link from 'next/link';

const InstallationsComponent = () => {
  return (
    <section className="container-pv">
      <h2>Nos Installations de panneaux photovoltaïques</h2>

      <div className="custom-solution-section">
        <div className="solution-image">
          <div className="solution-details">
            <div className="badge">
              <span className="puissance">6 kWc</span>
              <span className="date">13 JAN 2022</span>
            </div>
            <h2>Solutions Personnalisées pour Chaque Projet</h2>
          </div>
          <div>
            <Link href="#" className="details-button">
              Afficher les détails
              <img src="images/svg/lets-icons_arrow-right.svg" alt="Flèche vers la droite" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationsComponent;
