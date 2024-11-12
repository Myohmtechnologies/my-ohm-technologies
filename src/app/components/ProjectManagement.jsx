// src/app/components/ProjectManagement.jsx
const ProjectManagement = () => {
    return (
      <section className="project-management">
        <h2>Gestion des Projets de Construction</h2>
        <div className="content-wrapper">
          <div className="article-list">
            <article className="small-article">
              <img src="/images/blog/Image (1).png" alt="Matériaux Innovants" />
              <div className="article-content">
                <span className="tag">Écologique</span>
                <h3>Matériaux Innovants pour une Construction Moderne</h3>
                <p>
                  Le secteur de la construction connaît une révolution grâce à
                  l'utilisation de matériaux...
                </p>
                <span className="author-date">PHOENIX BAKER • 19 JAN 2022</span>
              </div>
            </article>
            <article className="small-article">
              <img
                src="/images/blog/Image.png"
                alt="Importance de la Construction Éco Responsable"
              />
              <div className="article-content">
                <span className="tag">Écologique</span>
                <h3>L'Importance de la Construction Éco Responsable</h3>
                <p>
                  Construire de manière durable n'est plus une option, c'est une
                  nécessité...
                </p>
                <span className="author-date">PHOENIX BAKER • 19 JAN 2022</span>
              </div>
            </article>
            <article className="small-article">
              <img
                src="/images/blog/Image.png"
                alt="Importance de la Construction Éco Responsable"
              />
              <div className="article-content">
                <span className="tag">Écologique</span>
                <h3>L'Importance de la Construction Éco Responsable</h3>
                <p>
                  Construire de manière durable n'est plus une option, c'est une
                  nécessité...
                </p>
                <span className="author-date">PHOENIX BAKER • 19 JAN 2022</span>
              </div>
            </article>
          </div>
          <div className="featured-article">
            <img
              src="/images/blog/Rectangle 13.png"
              alt="Construction Éco Responsable"
            />
            <div className="article-content">
              <span className="tag">Écologique</span>
              <h3>L'Importance de la Construction Éco-Responsable</h3>
              <p>
                Construire de manière durable n'est plus une option, c'est une
                nécessité. Nous adoptons une approche éco-responsable à chaque
                étape du processus...
              </p>
              <span className="author-date">PHOENIX BAKER • 19 JAN 2022</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectManagement;
  