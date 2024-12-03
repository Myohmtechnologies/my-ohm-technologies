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
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="solar-project-images py-8">
      <div className="container-blog mx-auto">
        <div className="image-grid flex flex-col md:flex-row gap-4">
          {/* Image principale */}
          <div className="main-image w-full md:w-1/2">
            <div className="relative aspect-[4/3]">
              <Image
                src={images[0]}
                alt="Installation principale"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-full"
                priority
                onError={(e) => {
                  e.target.src = "/images/default-installation.jpg";
                }}
              />
            </div>
          </div>

          {/* Images secondaires */}
          <div className="secondary-images w-full md:w-1/2 grid grid-cols-2 gap-4">
            {[1, 2, 3].map((index) => (
              images[index] && (
                <div key={index} className="relative aspect-[4/3]">
                  <Image
                    src={images[index]}
                    alt={`Vue ${index + 1} de l'installation`}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                    onError={(e) => {
                      e.target.src = "/images/default-installation.jpg";
                    }}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarProjectImages;
