// src/app/panneaux-photovoltaiques/page.jsx
import '../../styles/globals.css'; // Importation du fichier CSS global


import Header from '../components/Header';
import TopCover from '../components/TopCover';
import HowItWorks from '../components/HowItWorks';
import ProductPresentation from '../components/ProductPresentation'; 
import AutoconsommationSection from '../components/AutoconsommationSection';
import PourquoiSolaireSection from '../components/PourquoiSolaireSection'; 
import SimulationSection from '../components/SimulationSection';
import Footer from '../components/Footer';


export default function PanneauxPhotovoltaiquesPage() {
    return (
      <div>
      
        <Header />
        <TopCover />
        <HowItWorks />
        <ProductPresentation />
        <AutoconsommationSection />
        <PourquoiSolaireSection />
        <SimulationSection />
        <Footer />
      </div>
    );
  }
  