import Image from "next/image";

const RegionSection = () => {
  return (
    <section className="region-section py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="map-container relative">
            <Image
              src="/images/region-section.png"
              alt="Carte région PACA"
              width={600}
              height={600}
             
            />
          </div>

          <div className="content-container">
            <p className="text-lg mb-8">
              Avec 2 855 heures d&apos;ensoleillement par an, la Provence-Alpes-Côtes d&apos;Azur
              est la deuxième région la plus ensoleillée de France ! Y installer des
              panneaux solaires est donc à la fois une démarche écologique et un
              investissement rentable.
            </p>

            <h2 className="text-2xl md:text-3xl mb-8">
              Pour vous aider à profiter au mieux du soleil, demandez conseils à un :
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="region-card w-full sm:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Bouches-du-Rhône</h3>
                <p>Installateur de panneaux solaires dans les</p>
              </div>

              <div className="region-card w-full sm:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Alpes-de-Haute-Provence</h3>
                <p>Installateur de panneaux solaires dans les</p>
              </div>

              <div className="region-card w-full sm:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Var</h3>
                <p>Installateur de panneaux solaires dans les</p>
              </div>

              <div className="region-card w-full sm:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Vaucluse</h3>
                <p>Installateur de panneaux solaires dans les</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionSection;
