'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ImageUpload from '@/components/ImageUpload';
import type { BlogSection } from '@/services/blogService';

interface BlogSectionInput extends Omit<BlogSection, 'order'> {
  id: string;
}

export default function CreateBlog() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [sections, setSections] = useState<BlogSectionInput[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.url;
  };

  // Fonction d'adaptation pour l'upload d'image principale
  const handleMainImageUpload = async (file: File): Promise<void> => {
    const url = await handleImageUpload(file);
    setMainImage(url);
  };

  // Fonction d'adaptation pour l'upload d'image de section
  const handleSectionImageUpload = (sectionId: string) => async (file: File): Promise<void> => {
    const url = await handleImageUpload(file);
    setSections(sections.map(section =>
      section.id === sectionId ? { ...section, imageUrl: url } : section
    ));
  };

  const addSection = () => {
    const newSection: BlogSectionInput = {
      id: Date.now().toString(),
      title: '',
      description: '',
    };
    setSections([...sections, newSection]);
  };

  const updateSection = (id: string, field: keyof BlogSectionInput, value: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ));
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formattedSections = sections.map((section, index) => ({
        ...section,
        order: index,
      }));

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          mainImage,
          sections: formattedSections,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }

      router.push('/blog');
    } catch (err) {
      setError('Failed to create blog post. Please try again.');
      console.error('Error creating blog post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Créer un nouvel article</h1>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Blog Details */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md h-32"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image Principale</label>
          <ImageUpload
            onUpload={handleMainImageUpload}
            value={mainImage}
          />
        </div>
      </div>

      {/* Blog Sections */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Sections</h2>
        
        {sections.map((section) => (
          <div key={section.id} className="border p-4 rounded-lg space-y-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeSection(section.id)}
                className="text-red-600 hover:text-red-800"
              >
                Supprimer
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Titre de la section</label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description de la section</label>
              <textarea
                value={section.description}
                onChange={(e) => updateSection(section.id, 'description', e.target.value)}
                className="w-full p-2 border rounded-md h-32"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Image de la section (facultative)</label>
              <ImageUpload
                onUpload={handleSectionImageUpload(section.id)}
                value={section.imageUrl}
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addSection}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-800"
        >
          + Ajouter une section
        </button>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-[#6C8D2F] text-white rounded-md hover:bg-[#5a7526] disabled:opacity-50"
        >
          {isSubmitting ? 'Création...' : 'Créer l\'article'}
        </button>
      </div>
    </form>
  );
}
