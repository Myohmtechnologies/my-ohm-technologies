// src/app/components/SolarProjectImages.jsx

<<<<<<< HEAD
=======
import Image from "next/image";

>>>>>>> 642d8a2 (Réinitialisation du dépôt)
const SolarProjectImages = ({ images }) => {
  return (
    <section className="solar-project-images">
      <div className="image-grid">
        <div className="image-large">
          {/* Afficher la première image comme grande */}
<<<<<<< HEAD
          <img src={images[0]} alt="Installation de panneaux solaires" />
        </div>
        <div className="image-small">
          {/* Afficher les deux autres images comme petites */}
          <img src={images[1]} alt="Maison avec panneaux solaires" />
          <img src={images[2]} alt="Ferme de panneaux solaires" />
=======
          <Image src={images[0]} alt="Installation de panneaux solaires" />
        </div>
        <div className="image-small">
          {/* Afficher les deux autres images comme petites */}
          <Image src={images[1]} alt="Maison avec panneaux solaires" />
          <Image src={images[2]} alt="Ferme de panneaux solaires" />
>>>>>>> 642d8a2 (Réinitialisation du dépôt)
        </div>
      </div>
    </section>
  );
};

export default SolarProjectImages;
