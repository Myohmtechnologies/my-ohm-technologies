import { Metadata } from 'next';
import { City } from '@/data/cities';

export function generateCityMetadata(city: City): Metadata {
  return {
    title: city.seo.title,
    description: city.seo.metaDescription,
    keywords: city.seo.keywords.join(', '),
    openGraph: {
      title: city.seo.title,
      description: city.seo.metaDescription,
      images: city.seo.images.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    },
    alternates: {
      canonical: `/region/04-alpes-de-haute-provence/${city.name.toLowerCase().replace(/\s+/g, '-')}`,
    },
  };
}
