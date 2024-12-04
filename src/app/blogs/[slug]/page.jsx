// src/app/api/blogs/[slug]/page.jsx
"use client";
import '../../../styles/globals.css'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SustainableConstruction from "../../components/SustainableConstruction";
import BlogSection from "../../components/BlogSection"; // Importez le composant ici
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const BlogDetail = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.slug) return;

      try {
        const res = await fetch(`/api/blogs/${params.slug}`);
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération du blog");
        }
        const data = await res.json();
        console.log("Blog data:", data);
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [params.slug]);

  if (!blog) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <Header />
      <SustainableConstruction 
        title={blog.title} 
        content={blog.content} 
        imageUrl={blog.imageUrl} 
        datTime={new Date(blog.createdAt).toLocaleString()}
      />
      
      <p>Publié le : {new Date(blog.createdAt).toLocaleString()}</p>

   
      <BlogSection sections={blog.sections} /> {/* Utilisez le composant ici */}
      
      <Footer />
    </div>
  );
};

export default BlogDetail; 
