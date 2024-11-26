"use client"; // Assurez-vous d'importer ce module en tant que composant client

import { useEffect, useState } from 'react';
import "../../styles/globals.css"
import BlogHeader from '../components/BlogHeader'
import Header from '../components/Header';
import RealizationsSection from '../components/RealizationsSection'; // Assurez-vous que le chemin est correct
import SolarOffer from '../components/SolarOffer';
import Footer from '../components/Footer';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        console.log(data); // Vérifiez si chaque blog contient un champ slug ici
        if (res.ok) {
          setBlogs(data);
        } else {
          console.error('Erreur lors de la récupération des blogs:', data.error);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des blogs:', error);
      }
    }
    

    fetchBlogs();
  }, []);

  return (
    <div>
        <Header/>
        <BlogHeader/>
        <RealizationsSection blogs={blogs} /> {/* Passer les blogs en tant que props */}
        <SolarOffer/>
        <Footer/>
    </div>
  );
};

export default BlogsPage;
