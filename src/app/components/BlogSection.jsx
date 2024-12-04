// src/app/components/BlogSection.jsx

import Image from "next/image";

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
                {section.image && (
                  <Image 
                    src={section.image} 
                    alt={`Image de la section ${index + 1}`}
                    width={800}
                    height={500}
                    className="w-full max-w-[400px] h-auto object-cover"
                  />
                )}
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
            <Image 
              src="/images/svg/mingcute_ceiling-lamp-fill.svg" 
              alt="Lamp Icon" 
              width={30} 
              height={30}
            />
            <h3>Prêt à passer à l&apos;énergie solaire ?</h3>
            <div className="details">
              <span>✔ Estimation en 2 min</span>
              <span>✔ Gratuit et sans engagement</span>
            </div>
  
            <button className="button-yellow">
              <a href="#">
                VOUS AVEZ UN PROJET
              </a>
              <Image 
                src="/images/svg/lets-icons_arrow-right.svg" 
                alt="Arrow Right" 
                width={30} 
                height={30}
              />
            </button>
          </div>

          <div className="newsletter">
            <h3>Abonnez-vous à notre newsletter</h3>
            <input type="email" placeholder="Entrez votre email" />
            <button className="button-green">
              <a href="#">
                MON ÉTUDE GRATUITE
              </a>
              <Image 
                src="/images/svg/lets-icons_arrow-right.svg" 
                alt="Arrow Right" 
                width={30} 
                height={30}
              />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogSection;
