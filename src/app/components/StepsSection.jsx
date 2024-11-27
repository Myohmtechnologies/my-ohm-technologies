import Image from "next/image";

const StepsSection = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#FFFFFF] lg:bg-[#F7F7EC]">
      <div className="hidden lg:block">
        <div className="flex flex-col justify-center items-center mb-10 ">
          <p className="text-xl uppercase underline text-center text-[#6C8D2F] ">
            L'ÉNERGIE SOLAIRE À VOTRE PORTÉE.
          </p>
          <h2 className=" text-3xl lg:text-6xl text-[#232323] text-center">
            Les étapes clés d'une installation
          </h2>
        </div>
        <div className="steps relative w-full z-10">
          <div className="hidden lg:block w-[80%] justify-end absolute border-dotted border-[1px] border-[#6C8D2F] md:top-1/3 lg:top-1/4"></div>
          <div className="step z-10">
            <div className="icon-circle yellow">
              <Image 
              src="/images/icone-telephone.svg" 
              alt="Prise de contact" 
              width={150}
              height={150}
              />
            </div>
            <p className="step-title">STEP 01</p>
            <p className="step-desc">Prise de contact</p>
          </div>

          <div className="step z-10">
            <div className="icon-circle green">
              <Image 
              src="/images/Visite-technique.svg"
              alt="Visite technique" 
              width={150}
              height={150}
              />
            </div>
            <p className="step-title">STEP 02</p>
            <p className="step-desc">Visite technique</p>
          </div>

          <div className="step z-10">
            <div className="icon-circle yellow">
              <Image
                src="/images/dossier-administratif.svg"
                alt="Dossier administratif"
                width={150}
                height={150}
              />
            </div>
            <p className="step-title">STEP 03</p>
            <p className="step-desc">
              Gestion du dossier administratif par nos soins, de A à Z
            </p>
          </div>

          <div className="step z-10">
            <div className="icon-circle green">
              <Image
                src="/images/installation.svg"
                alt="Installation des panneaux"
                width={150}
                height={150}
              />
            </div>
            <p className="step-title">STEP 04</p>
            <p className="step-desc">
              Installation des panneaux photovoltaïques
            </p>
          </div>

          <div className="step z-10">
            <div className="icon-circle yellow">
              <Image
                src="/images/Frame (8).svg"
                alt="Autoconsommation et économies"
                width={150}
                height={150}
              />
            </div>
            <p className="step-title">STEP 05</p>
            <p className="step-desc">Autoconsommation et économies !</p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="w-full flex items-center justify-center my-10 ">
          <Image
            src="/images/Group_mobaile.png"
            alt=""
            className="object-cover"
            width={150}
            height={150}
          />
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
