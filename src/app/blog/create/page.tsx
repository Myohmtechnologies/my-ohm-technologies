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
    
    try {
      setIsSubmitting(true);
      setError(null);

      // Validation
      if (!title || !description || !mainImage) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      }

      // Préparer les sections pour l'API
      const formattedSections = sections.map(({ id, ...section }) => ({
        ...section,
        order: 0, // L'ordre sera géré par le backend
      }));

      // Envoyer les données au backend
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
        throw new Error('Erreur lors de la création du blog');
      }

      // Rediriger vers la liste des blogs
      router.push('/dashboard/blog');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Créer un nouveau blog</h1>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Blog Info */}
        <div className="space-y-4">
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
              onImageUpload={handleImageUpload}
              currentImage={mainImage}
            />
          </div>
        </div>

        {/* Blog Sections */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Sections</h2>
          
          {sections.map((section) => (
            <div key={section.id} className="p-4 border rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Section</h3>
                <button
                  type="button"
                  onClick={() => removeSection(section.id)}
                  className="text-red-500 hover:text-red-700"
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
                  onImageUpload={handleImageUpload}
                  currentImage={section.imageUrl}
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addSection}
            className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors"
          >
            + Ajouter une section
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg text-white transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isSubmitting ? 'Publication en cours...' : 'Publier le blog'}
        </button>
      </form>
    </div>
  );
}
