import Image from "next/image";

const ImageSection = () => {
  return (
    <section className="container-img">
      <Image
        src="/images/IMG_5056.jpg"
        alt="Famille heureuse après une installation de panneaux solaires"
        width={600} // Remplacez par les dimensions réelles
        height={400} // Remplacez par les dimensions réelles
      />

      <div className="text-section">
        <p className="small-h3">L&apos;ÉNERGIE SOLAIRE À VOTRE PORTÉE.</p>
        <h2 className="title">
          Profitez d&apos;une installation de panneaux solaires à prix accessible
          partout en France
        </h2>
        <p className="description">
          Nous proposons des solutions solaires abordables avec des panneaux et
          des batteries de haute qualité. Nous guidons nos clients et assurons
          une installation de première qualité.
        </p>
        <div className="certifications">
          <p>Nos certifications :</p>
          <button className="button-yellow">
            TÉLÉCHARGEZ L&apos;ATTESTATION D&apos;ASSURANCE
            <Image
              className="frame-child"
              alt="Icône Flèche"
              src="/images/svg/lets-icons_arrow-right.svg"
              width={20} // Remplacez par les dimensions réelles
              height={20} // Remplacez par les dimensions réelles
            />
          </button>
        </div>
        <div className="certif">
          <Image
            src="/images/qualipv.png"
            alt="Certification QualiPV"
            width={100} // Remplacez par les dimensions réelles
            height={100} // Remplacez par les dimensions réelles
          />
          <Image
            src="/images/decinal.png"
            alt="Garantie Décennale"
            width={100} // Remplacez par les dimensions réelles
            height={100} // Remplacez par les dimensions réelles
          />
          <Image
            src="/images/syndicat.png"
            alt="Certification RGE"
            width={100} // Remplacez par les dimensions réelles
            height={100} // Remplacez par les dimensions réelles
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
