'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  TagIcon,
  ClockIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import type { BlogPost } from '@/types';

export default function BlogDashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/test-blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        console.log('Fetched blog data:', data);
        setPosts(data.blogs || []); 
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Une erreur est survenue lors du chargement des articles');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Extraire tous les tags uniques
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags || []))
  );

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags?.includes(selectedTag))
    : posts;

  const handleDelete = async (slug: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      try {
        await fetch(`/api/test-blog/${slug}`, {
          method: 'DELETE',
        });
        setPosts(posts.filter(post => post.slug !== slug));
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Erreur lors de la suppression de l\'article');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C8D2F]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-[#6C8D2F] text-white rounded hover:bg-[#5a7526]"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Articles du Blog ({posts.length})
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Gérez votre contenu éditorial
          </p>
        </div>
        <Link
          href="/dashboard/blog/create"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6C8D2F] hover:bg-[#5a7526]"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
          Nouvel Article
        </Link>
      </div>

      {/* Filtres par tag */}
      {allTags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              !selectedTag
                ? 'bg-[#6C8D2F] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tous
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === tag
                  ? 'bg-[#6C8D2F] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Liste des articles */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun article trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <div key={post._id || post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {post.mainImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {post.description}
                </p>

                {/* Meta informations */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  {post.author && (
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  )}
                  {post.status && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published' ? 'bg-green-100 text-green-800' :
                      post.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status === 'published' ? 'Publié' :
                       post.status === 'draft' ? 'Brouillon' :
                       'Archivé'}
                    </span>
                  )}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-2 mt-4">
                  <Link
                    href={`/dashboard/blog/edit/${post.slug}`}
                    className="inline-flex items-center p-2 text-gray-500 hover:text-[#6C8D2F]"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="inline-flex items-center p-2 text-gray-500 hover:text-red-600"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
