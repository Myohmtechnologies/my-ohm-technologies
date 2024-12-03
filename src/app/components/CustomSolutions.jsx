// src/app/components/CustomSolutions.jsx
import Image from 'next/image';
import '../../styles/globals.css';

const CustomSolutions = ({ installation }) => {
  if (!installation) return null;

  return (
    <section className="custom-solutions relative min-h-[600px] w-full">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/installation-detail/bg-installation-detail.jpeg"
          alt="Installation solaire"
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container-blog mx-auto px-4 py-16 text-white">
        {/* En-tête avec date et lieu */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="inline-flex items-center bg-yellow-300 rounded-full px-4 py-2 text-black">
            <Image
              src="/images/installation-detail/date.png"
              alt="Calendrier"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>Date: {new Date(installation.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="inline-flex items-center bg-yellow-300 rounded-full px-4 py-2 text-black">
            <Image
              src="/images/installation-detail/position.png"
              alt="Localisation"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>Lieu: {installation.lieu || 'Non spécifié'}</span>
          </div>
        </div>

        {/* Titre et description */}
        <h1 className="text-5xl font-bold mb-6 text-white">
          Solutions Personnalisées<br />
          pour Chaque Projet
        </h1>
        <p className="text-lg max-w-2xl mb-12 text-white">
          Chez OHM Technologies, nous concevons et installons des systèmes énergétiques sur mesure qui
          répondent aux besoins spécifiques de nos clients. De la conception initiale à la mise en service finale,
          chaque projet est géré avec un engagement total envers la qualité et l'innovation.
        </p>

        {/* Caractéristiques */}
        <div className="characteristics">
          <h2 className="text-2xl font-semibold mb-6">Les caractéristiques</h2>
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center bg-yellow-300 backdrop-blur-sm rounded-full px-6 py-3">
              <Image
                src="/images/installation-detail/maison.png"
                alt="Maison"
                width={24}
                height={24}
                className="mr-3"
              />
              <span>Maison: {installation.surfaceMaison}m², consommation de {installation.surfaceMaison * 100} kWh/an</span>
            </div>
            <div className="inline-flex items-center bg-yellow-300 backdrop-blur-sm rounded-full px-6 py-3">
              <Image
                src="/images/installation-detail/eclaire.png"
                alt="Puissance"
                width={24}
                height={24}
                className="mr-3"
              />
              <span>Puissance: {installation.puissanceMax} kWc</span>
            </div>
            <div className="inline-flex items-center bg-yellow-300 backdrop-blur-sm rounded-full px-6 py-3">
              <Image
                src="/images/installation-detail/pv-icone.png"
                alt="Panneaux"
                width={24}
                height={24}
                className="mr-3"
              />
              <span>Panneaux: {installation.nombrePanneaux} panneaux {installation.marquePanneaux}</span>
            </div>
            <div className="inline-flex items-center bg-yellow-300 backdrop-blur-sm rounded-full px-6 py-3">
              <Image
                src="/images/installation-detail/micro-onduleur-icone.png"
                alt="Onduleur"
                width={24}
                height={24}
                className="mr-3"
              />
              <span>Onduleur: {installation.marqueMicroOnduleur}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
