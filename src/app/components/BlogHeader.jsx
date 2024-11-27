// src/app/components/BlogHeader.jsx
const BlogHeader = () => {
    return (
      <section className="blog-header">
        <div className="container-blog">
          <div className="header-content">
            <div className="text-section">
              <p className="small-title">NOTRE BLOG</p>
              <h1>Le Blog de l&apos;énergie photovoltaïque </h1>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Rechercher des blogs solaires" />
              <button>
                <i className="search-icon">→</i>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogHeader;
  
