'use client';

import Header from '@/components/layout/Header';
import ProjectSimulationSection from '@/components/sections/ProjectSimulationSection';
import HowItWorks from '@/components/sections/HowItWorks';
import ProductPresentation from '@/components/sections/ProductPresentation';
import PourquoiSolaireSection from '@/components/sections/PourquoiSolaireSection';
import AutoconsommationSection from '@/components/sections/AutoconsommationSection';

const PanneauxSolairePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
  
      <HowItWorks />
      <ProductPresentation />

      {/* Section de simulation de projet */}
      <AutoconsommationSection />
      <PourquoiSolaireSection />
      <ProjectSimulationSection />
    </main>
  );
};

export default PanneauxSolairePage;
