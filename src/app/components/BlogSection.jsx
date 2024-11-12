// src/app/components/BlogSection.jsx

const BlogSection = ({ sections = [] }) => {
  return (
    <section className="blog-section">
      <div className="content-wrapper">
        <div className="main-content">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                {section.image && <img src={section.image} alt={`Image de la section ${index + 1}`} style={{ maxWidth: "400px" }} />}
              </div>
            ))
          ) : (
            <p>Aucune section disponible.</p>
          )}
        </div>
        
        <aside className="sidebar">
          <div className="summary">
            <h3>Sommaire</h3>
            <ul>
              {sections.map((section, index) => (
                <li key={index}>{section.title}</li>
              ))}
            </ul>
          </div>

          <div className="call-to-action">
            <img src="/images/svg/mingcute_ceiling-lamp-fill.svg" alt="Lamp Icon" />
            <h3>Prêt à passer à l'énergie solaire ?</h3>
            <div className="details">
              <span>✔ Estimation en 2 min</span>
              <span>✔ Gratuit et sans engagement</span>
            </div>
  
            <button className="button-yellow">
              <a href="#">
                VOUS AVEZ UN PROJET
              </a>
              <img src="/images/svg/lets-icons_arrow-right.svg" alt="Arrow Right" />
            </button>
          </div>

          <div className="newsletter">
            <h3>Abonnez-vous à notre newsletter</h3>
            <input type="email" placeholder="Entrez votre email" />
            <button className="button-green">
              <a href="#">
                MON ÉTUDE GRATUITE
              </a>
              <img src="/images/svg/lets-icons_arrow-right.svg" alt="Arrow Right" />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogSection;
