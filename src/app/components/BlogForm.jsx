// src/app/components/BlogForm.jsx
import React, { useState } from 'react';


const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du blog');
      }

      const newBlog = await response.json();
      // Appel de la fonction onSubmit avec les données du formulaire
      onSubmit(newBlog); // Vérifiez si c'est `onSubmit` ou `onBlogCreated`
    } catch (error) {
      console.error('Erreur de création du blog:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Contenu:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} accept="image/*" />
      </div>
      <button type="submit">Créer le blog</button>
    </form>
  );
};

export default BlogForm;
