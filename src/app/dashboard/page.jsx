"use client"; 
import '../../styles/simulateur.css'; 
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'; // Importer le composant Sidebar
import LeadList from '../components/LeadList';
import BlogForm from '../components/BlogForm'; 
import BlogList from '../components/BlogList';

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [currentSection, setCurrentSection] = useState('leads'); // Gérer la section active

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/get-submissions');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des soumissions');
        }
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Erreur de récupération des données:', error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Erreur de récupération des blogs:', error);
      }
    };

    fetchSubmissions();
    fetchBlogs();
  }, []);

  const handleBlogCreated = (newBlog) => {
    setBlogs([newBlog, ...blogs]); // Ajouter le nouveau blog en haut de la liste
  };

  return (
    <div className="dashboard-container">

      
      <div className="main-content">
        <h1>Tableau de Bord</h1>

        {/* Afficher la section actuelle */}
        {currentSection === 'leads' && (
          <>
            <h2>Leads</h2>
            <LeadList submissions={submissions} />
          </>
        )}

        {currentSection === 'blogs' && (
          <>
            <h2>Créer un Nouvel Article de Blog</h2>
            <BlogForm onBlogCreated={handleBlogCreated} />
            <h2>Articles de Blog</h2>
            <BlogList blogs={blogs} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
