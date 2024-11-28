"use client";

import { useState, useEffect } from "react";
import "../styles/globals.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import MaterialSection from "./components/MaterialSection";
import ImageSection from "./components/ImageSection";
import StepsSection from "./components/StepsSection";
import ClientReviews from "./components/ClientReviews";
import RegionSection from "./components/RegionSection";
import SimulationSection from "./components/SimulationSection";
import Footer from "./components/Footer";

// Fonction pour récupérer les données
async function fetchRealizations() {
  try {
    const response = await fetch("http://localhost:3000/api/dashboard/get-realizations");
    if (!response.ok) throw new Error("Erreur lors de la récupération des réalisations");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
}

export default function HomePage() {
  const [realizations, setRealizations] = useState([]);

  // Utilisez useEffect pour récupérer les données après le rendu
  useEffect(() => {
    const loadRealizations = async () => {
      const data = await fetchRealizations();
      setRealizations(data);
    };
    loadRealizations();
  }, []); // Le tableau vide [] garantit que l'effet ne s'exécute qu'une fois

  return (
    <div>
      <Header />
      <HeroSection />
      <CardsSection />
      <MaterialSection />
      <ImageSection />
      <StepsSection />
       <Reviews />
      <ClientReviews realizations={realizations} limit={3} /> {/* Limite à 3 réalisations */}
      <RegionSection />
      <SimulationSection />
      <Footer />
    </div>
  );
}
