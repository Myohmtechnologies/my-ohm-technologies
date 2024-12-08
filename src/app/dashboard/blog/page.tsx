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
import type { BlogPost } from '@/services/blogService';

interface BlogWithId extends BlogPost {
  _id: string;
}

export default function BlogDashboardPage() {
  const [posts, setPosts] = useState<BlogWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
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

  const handleDelete = async (postId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/blog/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPosts(posts.filter(post => post._id !== postId));
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Une erreur est survenue lors de la suppression de l\'article');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C8D2F]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Gestion des Articles</h1>
        <Link 
          href="/blog/create" 
          className="flex items-center gap-2 bg-[#6C8D2F] text-white px-4 py-2 rounded-lg hover:bg-[#5a7526] transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          Nouvel Article
        </Link>
      </div>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === null
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
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative h-48">
              <Image
                src={post.mainImage || '/placeholder-blog.jpg'}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {post.description.length > 100
                  ? `${post.description.substring(0, 100)}...`
                  : post.description}
              </p>

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-1">
                    <TagIcon className="h-4 w-4" />
                    <span>{post.tags.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <Link
                  href={`/blog/edit/${post.slug}`}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </Link>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun article trouvé</p>
        </div>
      )}
    </div>
  );
}
