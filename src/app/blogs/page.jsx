"use client";

import { useEffect, useState } from 'react';
import "../../styles/globals.css"
import BlogHeader from '../components/BlogHeader'
import Header from '../components/Header';
import RealizationsSection from '../components/RealizationsSection';
import SolarOffer from '../components/SolarOffer';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        console.log('Début de la récupération des blogs...');
        const res = await fetch('/api/blogs');
        console.log('Réponse reçue:', res.status);
        
        const data = await res.json();
        console.log('Données reçues:', data);

        if (res.ok) {
          if (Array.isArray(data)) {
            console.log('Nombre de blogs récupérés:', data.length);
            setBlogs(data);
          } else {
            console.error('Les données reçues ne sont pas un tableau:', data);
            setError('Format de données incorrect');
          }
        } else {
          console.error('Erreur de l\'API:', data.error);
          setError(data.error || 'Erreur lors de la récupération des blogs');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des blogs:', error);
        setError('Erreur de connexion au serveur');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div>
        <Header/>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-white to-gray-50">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-red-600">Une erreur est survenue</h2>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <BlogHeader/>
      <RealizationsSection blogs={blogs} />
      <SolarOffer/>
      <Footer/>
    </div>
  );
};

export default BlogsPage;
