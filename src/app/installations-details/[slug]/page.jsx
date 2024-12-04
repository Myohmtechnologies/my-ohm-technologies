// src/app/installations-details/[slug]/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Importation de useParams pour récupérer les paramètres d'URL
import Header from '@/app/components/Header';
import CustomSolutions from '@/app/components/CustomSolutions';
import SolarProjectImages from '@/app/components/SolarProjectImages';
import Footer from '@/app/components/Footer';

const InstallationDetails = () => {
  const { slug } = useParams(); // Utilisation de useParams() pour obtenir les paramètres d'URL
  const [installation, setInstallation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchInstallationDetails = async () => {
      try {
        const response = await fetch(`/api/installations-details/${slug}`);

        if (!response.ok) {
          setError('Installation non trouvée');
          return;
        }

        const data = await response.json();
        setInstallation(data);
      } catch (error) {
        setError('Erreur lors de la récupération des données');
        console.error('Erreur:', error);
      }
    };

    fetchInstallationDetails();
  }, [slug]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!installation) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Header />
      <CustomSolutions installation={installation} />
      {/* Passer les images du tableau detailImages à SolarProjectImages */}
      <SolarProjectImages images={installation.detailImages} />
      <Footer />
    </div>
  );
};

export default InstallationDetails;
