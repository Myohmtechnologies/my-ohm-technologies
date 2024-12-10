import type { Metadata } from 'next';
import ClientPage from './[city]/ClientPage';
import { cities } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-de-Haute-Provence (04) | MyOhm Technologies',
  description: 'Expert en installation de panneaux solaires dans les Alpes-de-Haute-Provence. Profitez d\'un ensoleillement exceptionnel et réduisez vos factures d\'électricité. Devis gratuit.',
  keywords: 'panneaux solaires, Alpes-de-Haute-Provence, 04, installation solaire, énergie solaire, MyOhm Technologies',
};

export default function Page() {
  return (
    <div>
      {cities.map((city, index) => (
        <ClientPage key={index} city={city} params={{ city: city.name.toLowerCase() }} />
      ))}
    </div>
  );
}
