"use client";

import Image from "next/image";
import courbeAutoconsommation from "../../../public/images/courbe-autoconsomation.png";

export default function AutoconsommationSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video">
            <Image
              src={courbeAutoconsommation}
              alt="Courbe d'autoconsommation"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Autoconsommation: en route vers l&apos;autonomie énergétique
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                L&apos;autoconsommation consiste à utiliser l&apos;électricité produite 
                par vos propres panneaux solaires pour alimenter votre maison.
              </p>
              
              <p className="text-gray-600">
                Cela vous permet de réduire votre dépendance au réseau électrique 
                et de faire des économies sur vos factures. En produisant votre propre
                énergie, vous contribuez aussi à la protection de l&apos;environnement.
              </p>
              
              <p className="text-gray-600">
                L&apos;excédent d&apos;énergie peut être stocké dans des batteries 
                virtuelles ou physiques ou revendu au réseau. C&apos;est une étape 
                simple vers l&apos;autonomie énergétique et une solution durable 
                pour l&apos;avenir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
