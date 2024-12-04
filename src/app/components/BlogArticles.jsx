import Image from "next/image";

const BlogArticles = () => {
  return (
    <section className="blog-articles">
      <div className="container-blog">
        <div className="article-grid">
          {/* Article Principal */}
          <div className="main-article">
            <Image
              src="/images/Placeholder Image 3.png"
              alt="Solar Panels"
              width={800} // Remplacez par les dimensions réelles
              height={500} // Remplacez par les dimensions réelles
              className="main-image"
            />
            <div className="article-text-blog">
              <span className="category-label">Innovations</span>
              <h2>L&apos;Art de Construire pour un Avenir Durable</h2>
              <p>
                Dans le monde en constante évolution de la construction, il est
                essentiel de s&apos;adapter aux nouvelles technologies, aux matériaux
                innovants et aux pratiques durables.
              </p>
              <div className="article-info">
                <span className="author">OLIVIA RHYE</span>
                <span className="date">20 JAN 2022</span>
              </div>
            </div>
          </div>

          <div className="second-article-grid">
            {/* Article Secondaire 1 */}
            <div className="secondary-article">
              <Image
                src="/images/blog-details.png"
                alt="Modern House"
                width={400} // Remplacez par les dimensions réelles
                height={300} // Remplacez par les dimensions réelles
                className="secondary-image"
              />
              <div className="article-content">
                <span className="category-label">Écologique</span>
                <h3>Matériaux Innovants pour une Construction Moderne</h3>
                <p>
                  Le secteur de la construction connaît une révolution grâce à
                  l&apos;utilisation de matériaux écologiques.
                </p>
                <div className="article-info">
                  <span className="author">PHOENIX BAKER</span>
                  <span className="date">19 JAN 2022</span>
                </div>
              </div>
            </div>

            {/* Article Secondaire 2 */}
            <div className="secondary-article">
              <Image
                src="/images/blog-details.png"
                alt="Solar Panels"
                width={400} // Remplacez par les dimensions réelles
                height={300} // Remplacez par les dimensions réelles
                className="secondary-image"
              />
              <div className="article-content">
                <span className="category-label">Écologique</span>
                <h3>L&apos;Importance de la Construction Éco Responsable</h3>
                <p>
                  Construire de manière durable n&apos;est plus une option, c&apos;est une
                  nécessité.
                </p>
                <div className="article-info">
                  <span className="author">PHOENIX BAKER</span>
                  <span className="date">19 JAN 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
