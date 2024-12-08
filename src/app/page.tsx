import HeroSection from '@/components/sections/HeroSection';
import StepsSection from '@/components/sections/StepsSection';
import EconomicSection from '@/components/sections/EconomicSection';
import PremiumMaterialSection from '@/components/sections/PremiumMaterialSection';
import SolarInstallationSection from '@/components/sections/SolarInstallationSection';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import ProjectSimulationSection from '@/components/sections/ProjectSimulationSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EconomicSection />
      <PremiumMaterialSection />
      <StepsSection />
      <SolarInstallationSection />
      <RegionSolarInstallationSection />
      <ReviewsSection />
      <ProjectSimulationSection />
    </main>
  );
}