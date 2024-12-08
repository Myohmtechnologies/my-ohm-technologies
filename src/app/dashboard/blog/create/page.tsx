'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useImageUpload } from '@/hooks/useImageUpload';
import ImageUpload from '@/components/ImageUpload';
import { 
  PhotoIcon, 
  PlusIcon,
  XMarkIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

interface BlogSection {
  title: string;
  description: string;
  imageUrl?: string;
  order: number;
}

const categories = [
  'solaire',
  'energie',
  'environnement',
  'technologie',
  'actualites'
];

const commonTags = [
  'Énergie solaire',
  'Panneaux solaires',
  'Environnement',
  'Économies',
  'Installation',
  'Maintenance',
  'Technologie',
  'Autoconsommation'
];

export default function CreateBlogPostPage() {
  const router = useRouter();
  const { uploadImage: uploadImageToCloud, isUploading, error: uploadError } = useImageUpload();
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'actualites',
    sections: [
      {
        title: '',
        description: '',
        imageUrl: '',
        order: 0
      }
    ] as BlogSection[]
  });

  const handleMainImageUpload = async (file: File) => {
    try {
      const imagePath = await uploadImageToCloud(file);
      setMainImage(imagePath);
    } catch (err) {
      console.error('Error uploading main image:', err);
      setError('Erreur lors du téléchargement de l\'image principale');
    }
  };

  const handleSectionImageUpload = async (file: File, sectionIndex: number) => {
    try {
      const imagePath = await uploadImageToCloud(file);
      const newSections = [...formData.sections];
      newSections[sectionIndex].imageUrl = imagePath;
      setFormData({ ...formData, sections: newSections });
    } catch (err) {
      console.error('Error uploading section image:', err);
      setError('Erreur lors du téléchargement de l\'image de section');
    }
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        {
          title: '',
          description: '',
          imageUrl: '',
          order: formData.sections.length
        }
      ]
    });
  };

  const removeSection = (index: number) => {
    const newSections = formData.sections.filter((_, i) => i !== index);
    newSections.forEach((section, i) => {
      section.order = i;
    });
    setFormData({ ...formData, sections: newSections });
  };

  const handleTagAdd = (tag: string) => {
    if (!selectedTags.includes(tag) && selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    }
    setNewTag('');
  };

  const handleTagRemove = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  const updateSection = (index: number, field: keyof BlogSection, value: string) => {
    const newSections = [...formData.sections];
    newSections[index] = {
      ...newSections[index],
      [field]: value
    };
    setFormData({ ...formData, sections: newSections });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mainImage) {
      setError('L\'image principale est requise');
      return;
    }

    if (formData.sections.some(section => !section.title || !section.description)) {
      setError('Tous les champs des sections sont requis');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const blogPost = {
        title: formData.title,
        description: formData.description,
        mainImage,
        category: formData.category,
        tags: selectedTags,
        sections: formData.sections,
        status: 'draft'
      };

      const response = await fetch('/api/test-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogPost),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error creating blog post');
      }

      router.push('/dashboard/blog');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200 max-w-5xl mx-auto px-4 py-8">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-2xl font-semibold leading-6 text-gray-900">
              Nouvel Article
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Créez un nouvel article pour votre blog
            </p>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label 
                htmlFor="title" 
                className="block text-sm font-medium text-gray-700"
              >
                Titre
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    title: e.target.value
                  })}
                  className="shadow-sm focus:ring-[#6C8D2F] focus:border-[#6C8D2F] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label 
                htmlFor="description" 
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({
                    ...formData,
                    description: e.target.value
                  })}
                  className="shadow-sm focus:ring-[#6C8D2F] focus:border-[#6C8D2F] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label 
                htmlFor="category" 
                className="block text-sm font-medium text-gray-700"
              >
                Catégorie
              </label>
              <div className="mt-1">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={(e) => setFormData({
                    ...formData,
                    category: e.target.value
                  })}
                  className="shadow-sm focus:ring-[#6C8D2F] focus:border-[#6C8D2F] block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Image Principale
              </label>
              <div className="mt-1">
                <ImageUpload
                  onUpload={handleMainImageUpload}
                  value={mainImage}
                  loading={isUploading}
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="mt-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#6C8D2F] text-white"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="ml-2 inline-flex items-center"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Ajouter un tag"
                    className="shadow-sm focus:ring-[#6C8D2F] focus:border-[#6C8D2F] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleTagAdd(newTag)}
                    disabled={selectedTags.length >= 5}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6C8D2F] hover:bg-[#5A7427] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C8D2F]"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Ajouter
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Tags suggérés:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {commonTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagAdd(tag)}
                        disabled={selectedTags.includes(tag) || selectedTags.length >= 5}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Sections
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Ajoutez des sections à votre article
            </p>
          </div>

          <div className="mt-6 space-y-6">
            {formData.sections.map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">Section {index + 1}</h4>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="inline-flex items-center text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="h-5 w-5 mr-1" />
                      Supprimer
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Titre de la section
                    </label>
                    <input
                      type="text"
                      required
                      value={section.title}
                      onChange={(e) => updateSection(index, 'title', e.target.value)}
                      className="mt-1 shadow-sm focus:ring-[#6C8D2F] focus:border-[#6C8D2F] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description de la section
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={section.description}
                      onChange={(e) => updateSection(index, 'description', e.target.value)}
                      className="mt-1 shadow-sm focus:ring-[#6C8D2F] focus:border-[#6C8D2F] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Image de la section (optionnelle)
                    </label>
                    <ImageUpload
                      onUpload={(file) => handleSectionImageUpload(file, index)}
                      value={section.imageUrl}
                      loading={isUploading}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4">
              <button
                type="button"
                onClick={addSection}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6C8D2F] hover:bg-[#5A7427] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C8D2F]"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Ajouter une section
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => router.push('/dashboard/blog')}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C8D2F]"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6C8D2F] hover:bg-[#5A7427] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C8D2F] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Création...' : 'Créer l\'article'}
          </button>
        </div>
      </div>
    </form>
  );
}
