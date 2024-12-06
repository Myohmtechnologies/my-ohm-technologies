"use client";

import { useState, useEffect } from "react";
import "../styles/globals.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import MaterialSection from "./components/MaterialSection";
import ImageSection from "./components/ImageSection";
import StepsSection from "./components/StepsSection";
import PromoBanner from "./components/PromoBanner";
import ClientReviews from "./components/ClientReviews";
import Reviews from "./components/Reviews";
import RegionSection from "./components/RegionSection";
import SimulationSection from "./components/SimulationSection";
import Footer from "./components/Footer";

// Fonction pour récupérer les données avec gestion d'erreur améliorée
async function fetchRealizations() {
  try {
    console.log("Début de la récupération des réalisations...");
    const response = await fetch("/api/dashboard/get-realizations", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn("API non disponible, utilisation des données de test");
      // Retourner des données de test si l'API n'est pas disponible
      return [
        {
          id: 1,
          title: "Installation Résidentielle",
          description: "Installation de panneaux solaires pour une maison familiale",
          location: "Lyon",
          date: "2023"
        },
        {
          id: 2,
          title: "Projet Commercial",
          description: "Système solaire pour une entreprise locale",
          location: "Paris",
          date: "2023"
        },
        {
          id: 3,
          title: "Installation Agricole",
          description: "Solution énergétique pour une exploitation agricole",
          location: "Bordeaux",
          date: "2023"
        }
      ];
    }

    const data = await response.json();
    console.log("Données récupérées :", data);
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des réalisations:", error);
    return [];
  }
}

export default function HomePage() {
  const [realizations, setRealizations] = useState([]);

  useEffect(() => {
    const loadRealizations = async () => {
      try {
        console.log("Début de la récupération des réalisations...");
        const data = await fetchRealizations();
        console.log("Données récupérées dans HomePage:", data);
        setRealizations(data);
      } catch (error) {
        console.error("Erreur dans HomePage:", error);
        setRealizations([]);
      }
    };
    loadRealizations();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PromoBanner />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CardsSection />
        <MaterialSection />
        <ImageSection />
        <StepsSection />
        <Reviews/>
        <ClientReviews realizations={realizations} limit={3} />
        <RegionSection />
        <SimulationSection />
      </main>
      <Footer />
    </div>
  );
}
