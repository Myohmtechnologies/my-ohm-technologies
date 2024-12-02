import Image from "next/image";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Prise de contact",
      icon: "/images/icone-telephone.svg",
      color: "yellow"
    },
    {
      number: "02",
      title: "Visite technique",
      icon: "/images/Visite-technique.svg",
      color: "green"
    },
    {
      number: "03",
      title: "Dossier administratif",
      icon: "/images/dossier-administratif.svg",
      color: "yellow"
    },
    {
      number: "04",
      title: "Installation",
      icon: "/images/installation.svg",
      color: "green"
    },
    {
      number: "05",
      title: "Autoconsommation et économies",
      icon: "/images/Frame (8).svg",
      color: "yellow"
    }
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-[#FFFFFF] lg:bg-[#F7F7EC]">
      <div className="block">
        <div className="flex flex-col justify-center items-center mb-10 ">
          <p className="text-xl uppercase underline text-center text-[#6C8D2F] ">
            L&apos;ÉNERGIE SOLAIRE À VOTRE PORTÉE.
          </p>
          <h2 className=" text-3xl lg:text-6xl text-[#232323] text-center">
            Les étapes clés d&apos;une installation
          </h2>
        </div>
        <div className="steps relative w-full z-10">
          <div className="hidden lg:block w-[80%] justify-end absolute border-dotted border-[1px] border-[#6C8D2F] md:top-1/3 lg:top-1/4"></div>
          {steps.map((step, index) => (
            <div key={index} className="step z-10">
              <div className={`icon-circle ${step.color}`}>
                <Image 
                  src={step.icon}
                  alt={step.title}
                  width={150}
                  height={150}
                />
              </div>
              <p className="step-title">ÉTAPE {step.number}</p>
              <p className="step-desc">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
