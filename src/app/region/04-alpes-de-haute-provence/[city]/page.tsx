import type { Metadata } from 'next';
import { cities, type City } from '@/data/cities';
import ClientPage from './ClientPage';

type Props = {
  params: { city: string };
};

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities[params.city];
  if (!city) return {};

  return {
    title: `Installation Panneaux Solaires ${city.name} (${city.code}) | MyOhm Technologies`,
    description: `Expert en installation de panneaux solaires à ${city.name}. ${city.description}`,
    keywords: `panneaux solaires, ${city.name}, ${city.code}, installation solaire, énergie solaire, MyOhm Technologies`,
  };
}

export default function Page({ params }: Props) {
  const city = cities[params.city];
  if (!city) return null;

  return <ClientPage city={city} params={params} />;
}
