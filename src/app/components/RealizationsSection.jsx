// src/app/components/RealizationsSection.jsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RealizationsSection = ({ blogs }) => {
  const truncateText = (text, wordLimit = 300) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    
    const truncated = words.slice(0, wordLimit).join(' ');
    return `${truncated}...`;
  };

  return (
    <section className="realizations-section">
      <div className="container-blog">
        <div className="realizations-grid">
          {blogs.map((blog) => (
            <div className="realization-item" key={blog._id}>
              {blog.slug ? (
                <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <Link href={`/blogs/${blog.slug}`}>
                    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                      {blog.imageUrl ? (
                        <Image
                          src={blog.imageUrl}
                          alt={blog.title}
                          width={800}
                          height={600}
                          className="realization-image object-cover"
                          style={{ width: '100%', height: '100%' }}
                          onError={(e) => {
                            e.target.src = "/images/blog-header.png";
                          }}
                        />
                      ) : (
                        <Image
                          src="/images/blog-header.png"
                          alt="Image par défaut"
                          width={800}
                          height={600}
                          className="realization-image object-cover"
                          style={{ width: '100%', height: '100%' }}
                        />
                      )}
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="category-label inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Énergie Solaire
                      </span>
                    </div>

                    <Link href={`/blogs/${blog.slug}`}>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 hover:text-yellow-600 transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 mb-4 line-clamp-4">
                      {truncateText(blog.content)}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="author font-medium">by My OHM</span>
                        <span className="date">
                          {new Date(blog.createdAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <Link 
                        href={`/blogs/${blog.slug}`}
                        className="inline-block mt-4 text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                      >
                        Lire la suite →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-gray-100 rounded-lg">
                  Slug non défini
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealizationsSection;
