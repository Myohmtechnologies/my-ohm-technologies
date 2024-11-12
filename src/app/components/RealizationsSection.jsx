// src/app/components/RealizationsSection.jsx

import React from 'react';
import Link from 'next/link';

const RealizationsSection = ({ blogs }) => {
  return (
    <section className="realizations-section">

      <div className="container-blog">
        <div className="realizations-grid">
          {blogs.map((blog) => (
            <div className="realization-item" key={blog._id}>
              {blog.slug ? ( // Vérifiez que le slug est présent avant de créer le lien
                <Link href={`/blogs/${blog.slug}`}>
                  {blog.imageUrl && (
                    <img
                      src={blog.imageUrl}
                      className="realization-image"
                      alt={blog.title}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                  <div className="realization-content">
                    <span className="category-label">Sécurité</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <div className="realization-info">
                      <span className="author">by My OHM</span>
                      <span className="date">{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div>Slug non défini</div> // Un fallback en cas de slug manquant
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RealizationsSection;
