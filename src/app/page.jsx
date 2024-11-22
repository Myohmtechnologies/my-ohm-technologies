"use client";

// src/app/page.jsx
import '../styles/globals.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import MaterialSection from './components/MaterialSection';
import ImageSection from './components/ImageSection';
import StepsSection from './components/StepsSection';
import ClientReviews from './components/ClientReviews';
import RegionSection from './components/RegionSection';
import SimulationSection from './components/SimulationSection';
import Footer from './components/Footer';

// Simulation de la fonction pour récupérer les données
async function fetchRealizations() {
  const response = await fetch('http://localhost:3000/api/dashboard/get-realizations'); // Remplace par ton API réelle
  const data = await response.json();
  return data;
}

// Composant principal qui récupère les données directement
export default async function HomePage() {
  const realizations = await fetchRealizations(); // Récupérer les données avant de rendre la page

  return (
    <div>
      <Header />
      <HeroSection />
      <CardsSection />
      <MaterialSection />
      <ImageSection />
      <StepsSection />
      <ClientReviews realizations={realizations} limit={3} /> {/* Limite à 3 réalisations */}
      <RegionSection />
      <SimulationSection />
      <Footer />
    </div>
  );
}
