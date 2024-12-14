import type { Metadata } from 'next';
import { cities, type City } from '@/data/cities';
import ClientPage from './ClientPage';
import SchemaOrg from '@/components/SchemaOrg';

type Props = {
  params: { city: string };
};

export async function generateStaticParams() {
  return Object.keys(cities)
    .filter(key => key.startsWith('var_'))
    .map((city) => ({
      city: city.replace('var_', ''),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityKey = `var_${params.city}`;
  const city = cities[cityKey] as City | undefined;
  if (!city) return {};

  const title = `Installation Panneaux Solaires ${city.name} (${city.code}) | MyOhm Technologies`;
  const description = `Expert en installation de panneaux solaires à ${city.name}. ${city.seo.metaDescription} Profitez d'une énergie propre et économique avec nos solutions photovoltaïques sur mesure.`;

  return {
    title,
    description,
    keywords: `panneaux solaires ${city.name}, installation solaire ${city.code}, énergie solaire ${city.name}, photovoltaïque ${city.name}, MyOhm Technologies, installation panneaux solaires ${city.name}`,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.myohmtech.fr/region/83-le-var/${params.city}`,
      images: city.seo.images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/solar-panels-og.jpg'],
    },
    alternates: {
      canonical: `https://myohmtechnologies.fr/region/83-le-var/${params.city}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function Page({ params }: Props) {
  const cityKey = `var_${params.city}`;
  const city = cities[cityKey] as City;
  
  if (!city) {
    return null;
  }

  return <ClientPage city={city} />;
}
