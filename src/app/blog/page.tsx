'use client';

import Header from '@/components/layout/Header';
import BlogHeader from '@/components/sections/BlogHeader';
import BlogCard from '@/components/sections/BlogCard';
import { useEffect, useState } from 'react';
import SolarChoiceSection from '@/components/sections/SolarChoiceSection';
import type { BlogPost } from '@/services/blogService';

interface BlogWithId extends BlogPost {
  _id: string;
  slug: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setBlogs(data.blogs || []); // Accéder au tableau blogs dans la réponse
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <div className="-mt-4">
          <BlogHeader />
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C8D2F]"></div>
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.mainImage || '/placeholder-blog.jpg'}
                  category={blog.category}
                  slug={blog.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600">Aucun article disponible pour le moment</h2>
              <p className="mt-2 text-gray-500">Revenez bientôt pour découvrir nos nouveaux articles !</p>
            </div>
          )}
        </div>
        
        <SolarChoiceSection />
      </main>
    </div>
  );
}