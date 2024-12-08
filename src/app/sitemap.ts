import { regions } from '@/config/seo';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myohm-technologies.fr';

  // Pages statiques principales
  const mainPages = [
    '',
    '/panneaux-solaire',
    '/qui-sommes-nous',
    '/contact',
    '/simulateur',
    '/nos-realisation',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Pages régionales
  const regionPages = regions.map((region) => ({
    url: `${baseUrl}/region/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Pages légales
  const legalPages = [
    '/mentions-legales',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  return [...mainPages, ...regionPages, ...legalPages];
}
