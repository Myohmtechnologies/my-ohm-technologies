"use client";
import React, { useEffect, useState } from 'react';
import '@/styles/globals.css'; // Importation du fichier CSS global
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstallationsSection from '../components/InstallationsSection';
import InstallationsComponent from '../components/InstallationsComponent';
import ClientReviews from '../components/ClientReviews';

const NosInstallations = () => {
  const [realizations, setRealizations] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchRealizations = async () => {
      try {
        const response = await fetch('/api/dashboard/get-realizations'); // Assurez-vous que ce chemin est correct
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des réalisations");
        }
        const data = await response.json();
        console.log("Données récupérées :", data);
        setRealizations(data); // Mettre à jour l'état avec les réalisations récupérées
      } catch (error) {
        console.error("Erreur :", error);
        setErrorMessage("Une erreur est survenue lors de la récupération des réalisations.");
      }
    };

    fetchRealizations(); // Appeler la fonction pour récupérer les réalisations au chargement du composant
  }, []);

  return (
    <>
      <Header />
      <main>
        <InstallationsSection />
        <ClientReviews realizations={realizations} /> {/* Passer les réalisations ici */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <InstallationsComponent />
      </main>
      <Footer />
    </>
  );
};

export default NosInstallations;
