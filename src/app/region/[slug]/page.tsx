import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { regions } from '@/config/seo';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionAids from '@/components/sections/RegionAids';
import LocalReviews from '@/components/sections/LocalReviews';
import RegionFAQ from '@/components/sections/RegionFAQ';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import RegionNavigation from '@/components/navigation/RegionNavigation';
import ShareButtons from '@/components/social/ShareButtons';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Générer les chemins statiques pour toutes les régions
export async function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const region = regions.find((r) => r.slug === resolvedParams.slug);

  if (!region) {
    return {
      title: 'Région non trouvée',
      description: 'Cette région n\'existe pas dans notre base de données.',
    };
  }

  const url = `https://myohmtechnologies.com/region/${resolvedParams.slug}`;

  return {
    title: region.meta.title,
    description: region.meta.description,
    openGraph: {
      title: region.meta.title,
      description: region.meta.description,
      url,
      type: 'website',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: region.meta.title,
      description: region.meta.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function RegionPage({ params }: Props) {
  const resolvedParams = await params;
  const currentRegionIndex = regions.findIndex((r) => r.slug === resolvedParams.slug);
  
  if (currentRegionIndex === -1) {
    notFound();
  }

  const currentRegion = regions[currentRegionIndex];
  const previousRegion = currentRegionIndex > 0 ? regions[currentRegionIndex - 1] : undefined;
  const nextRegion = currentRegionIndex < regions.length - 1 ? regions[currentRegionIndex + 1] : undefined;

  // Données structurées Schema.org
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Installation Panneaux Solaires ${currentRegion.name}`,
    description: currentRegion.meta.description,
    provider: {
      '@type': 'Organization',
      name: 'MY OHM Technologies',
      url: 'https://myohmtechnologies.com'
    },
    areaServed: {
      '@type': 'State',
      name: currentRegion.name
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services d\'installation de panneaux solaires',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation de panneaux solaires photovoltaïques'
          }
        }
      ]
    }
  };

  const breadcrumbItems = [
    { name: 'Régions', href: '/region' },
    { name: currentRegion.name, href: `/region/${currentRegion.slug}` }
  ];

  return (
    <>
      <Script
        id="region-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        <RegionHero region={currentRegion} />
        
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <ShareButtons
              url={`https://myohmtechnologies.com/region/${currentRegion.slug}`}
              title={`Installation Panneaux Solaires ${currentRegion.name}`}
            />
          </div>
        </div>

        <RegionStats region={currentRegion} />
        <RegionSolarInstallationSection region={currentRegion} />
        <RegionAids region={currentRegion} />
        <LocalReviews region={currentRegion} />
        <RegionFAQ region={currentRegion} />

        <RegionNavigation
          currentRegion={currentRegion}
          previousRegion={previousRegion}
          nextRegion={nextRegion}
        />
      </main>
    </>
  );
}
