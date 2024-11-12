// src/app/components/SolarProjectImages.jsx

const SolarProjectImages = ({ images }) => {
  return (
    <section className="solar-project-images">
      <div className="image-grid">
        <div className="image-large">
          {/* Afficher la première image comme grande */}
          <img src={images[0]} alt="Installation de panneaux solaires" />
        </div>
        <div className="image-small">
          {/* Afficher les deux autres images comme petites */}
          <img src={images[1]} alt="Maison avec panneaux solaires" />
          <img src={images[2]} alt="Ferme de panneaux solaires" />
        </div>
      </div>
    </section>
  );
};

export default SolarProjectImages;
