// src/app/dashboard/blogs/page.jsx
"use client"; // Assurez-vous que cette ligne est présente en haut

import { useEffect, useState } from 'react';
import BlogList from '../../components/BlogList'; // Chemin correct vers BlogList

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]); // État pour stocker les blogs

  // Récupérer les blogs depuis l'API lors du premier rendu
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Erreur de récupération des blogs:', error);
      }
    };

    fetchBlogs();
  }, []); // La dépendance vide signifie que cela ne s'exécutera qu'au premier rendu

  // Fonction pour supprimer un blog
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce blog ?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog._id !== id)); // Mettre à jour la liste des blogs après suppression
      } else {
        throw new Error('Erreur lors de la suppression du blog');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  return (
    <div>
      <h2>Liste des blogs</h2>
      <BlogList blogs={blogs} onDelete={handleDelete} /> {/* Passer la fonction de suppression à BlogList */}
      <button onClick={() => window.location.href = '/dashboard/blogs/create'}>Créer un nouveau blog</button> {/* Bouton pour créer un nouveau blog */}
    </div>
  );
};

export default BlogsPage;
