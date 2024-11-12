"use client"; // Indique que ce composant utilise des hooks

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EditBlogForm = ({ blogId }) => {
  const [blog, setBlog] = useState({ title: '', content: '', imageUrl: '' });
  const router = useRouter();

  useEffect(() => {
    // Charger les données du blog à éditer au chargement de la page
    const fetchBlog = async () => {
      const res = await fetch(`/api/blogs?id=${blogId}`);
      if (res.ok) {
        const data = await res.json();
        setBlog(data);
      }
    };

    fetchBlog();
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/blogs?id=${blogId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });

    if (res.ok) {
      router.push('/dashboard/blogs'); // Rediriger vers la liste des blogs après édition
    } else {
      alert('Erreur lors de la modification du blog');
    }
  };

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Contenu :</label>
        <textarea
          name="content"
          value={blog.content}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL :</label>
        <input
          type="text"
          name="imageUrl"
          value={blog.imageUrl || ''}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Modifier le blog</button>
    </form>
  );
};

export default EditBlogForm;
