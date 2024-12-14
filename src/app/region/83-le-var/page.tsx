import type { Metadata } from 'next';
import ClientPage from './[city]/ClientPage';
import { cities } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Var (83) | MyOhm Technologies',
  description: 'Expert en installation de panneaux solaires dans le Var. Profitez d\'un ensoleillement exceptionnel et réduisez vos factures d\'électricité. Devis gratuit.',
  keywords: 'panneaux solaires, Var, 83, installation solaire, énergie solaire, MyOhm Technologies',
};

export default function Page() {
  const varCities = cities.var || {};
  
  return (
    <div>
      {Object.entries(varCities).map(([slug, city]) => (
        <ClientPage key={slug} city={city} params={{ city: slug }} />
      ))}
    </div>
  );
}
