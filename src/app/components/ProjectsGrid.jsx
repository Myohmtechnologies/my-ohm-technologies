import Image from 'next/image';

const ProjectsGrid = () => {
  return (
    <section className="projects-grid">
      <div className="card-project">
        <Image
          src="/images/realisation/installation-de-panneaux-solaire-les-mées.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">3 kWc</div>
          <span className="date">19 JUI 2024</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>

      <div className="card-project">
        <Image
          src="/images/realisation/installation-panneaux-photovoltaique-chateaux-arno.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">6 kWc</div>
          <span className="date">9 AOUT 2024</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>

      <div className="card-project">
        <Image
          src="/images/realisation/installation-panneaux-solaire-Sisteron.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">6 kWc</div>
          <span className="date">2 SEPT 2024</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>

      <div className="card-project">
        <Image
          src="/images/realisation/installation-de-panneaux-solaire-les-mées.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">6 kWc</div>
          <span className="date">4 NOV 2022</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>

      <div className="card-project">
        <Image
          src="/images/realisation/installation-panneaux-photovoltaique-chateaux-arno.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">6 kWc</div>
          <span className="date">1 DEC 2022</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>

      <div className="card-project">
        <Image
          src="/images/realisation/installation-panneaux-solaire-Sisteron.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">6 kWc</div>
          <span className="date">19 JAN 2025</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>

      <div className="card-project">
        <Image
          src="/images/realisation/installation-panneaux-photovoltaique-chateaux-arno.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">6 kWc</div>
          <span className="date">1 DEC 2022</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>

      <div className="card-project">
        <Image
          src="/images/realisation/installation-de-panneaux-solaire-les-mées.jpg"
          alt="Installation panneaux solaires"
          width={500} // Remplace par la largeur appropriée
          height={300} // Remplace par la hauteur appropriée
        />
        <div className="card-content">
          <div className="badge">6 kWc</div>
          <span className="date">19 JAN 2025</span>
          <h3>Solutions Personnalisées pour Chaque Projet</h3>
          <a href="#" className="details-link">AFFICHER LES DÉTAILS</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
