// src/app/dashboard/blogs/edit/[slug]/page.jsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const EditBlogPage = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();

  const fetchBlog = async () => {
    try {
      // Utilisez le slug pour récupérer le blog
      const res = await fetch(`/api/blogs/${params.slug}`);
      if (!res.ok) {
        throw new Error('Erreur lors de la récupération du blog');
      }
      const data = await res.json();
      setBlog(data);
    } catch (error) {
      console.error("Erreur lors de la récupération du blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [params.slug]); // Utilisez `params.slug` dans le tableau de dépendances

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('content', e.target.content.value);

    const image = e.target.image.files[0];
    if (image) {
      formData.append('image', image);
    }

    try {
      // Utilisez le slug pour l'URL de mise à jour
      const res = await fetch(`/api/blogs/${params.slug}`, {
        method: 'PUT',
        body: formData,
      });

      if (res.ok) {
        router.push('/dashboard/blogs'); // Redirigez après la mise à jour
      } else {
        alert('Erreur lors de la mise à jour du blog');
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du blog:", error);
    }
  };

  if (!blog) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Modifier le Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre:</label>
          <input type="text" name="title" defaultValue={blog.title} required />
        </div>
        <div>
          <label>Contenu:</label>
          <textarea name="content" defaultValue={blog.content} required />
        </div>
        <div>
          <label>Image (facultatif):</label>
          <input type="file" name="image" accept="image/*" />
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditBlogPage;
