"use client"; // Assurez-vous d'importer ce module en tant que composant client

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image); // Ajoutez l'image si elle existe
    }

    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data);
      router.push('/dashboard/blogs'); // Redirigez vers la liste des blogs après la création
    } else {
      console.error('Error creating blog:', data.error);
    }
  };

  return (
    <div>
      <h1>Créer un Nouveau Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contenu:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image (facultatif):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Créer le Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
