// src/app/components/SolarProjectImages.jsx

import Image from "next/image";

/**
 * A React component that displays a series of solar project images.
 * 
 * @param {Object} props - The properties object.
 * @param {string[]} props.images - An array of image URLs. The first image
 *   will be displayed in a larger format, and the next two images will be 
 *   displayed in a smaller format.
 */
const SolarProjectImages = ({ images }) => {
  return (
    <section className="solar-project-images">
      <div className="image-grid">
        <div className="image-large">
          {/* Afficher la première image comme grande */}
          <Image src={images[0]} alt="Installation de panneaux solaires" />
        </div>
        <div className="image-small">
          {/* Afficher les deux autres images comme petites */}
          <Image src={images[1]} alt="Maison avec panneaux solaires" />
          <Image src={images[2]} alt="Ferme de panneaux solaires" />
        </div>
      </div>
    </section>
  );
};

export default SolarProjectImages;
