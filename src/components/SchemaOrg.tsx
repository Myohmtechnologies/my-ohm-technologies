import { City } from '@/data/cities';

type SchemaOrgProps = {
  city: City;
};

export default function SchemaOrg({ city }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `MyOhm Technologies - Installation Panneaux Solaires ${city.name}`,
    description: city.description,
    url: `https://myohmtechnologies.fr/region/04-alpes-de-haute-provence/${city.name.toLowerCase()}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      postalCode: city.code,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Vous pouvez ajouter les coordonnées exactes si vous les avez
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: city.reviews.length.toString(),
    },
    review: city.reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
      },
      datePublished: review.date,
      reviewBody: review.comment,
    })),
    areaServed: {
      '@type': 'City',
      name: city.name,
      '@id': `https://www.wikidata.org/wiki/${city.name}`,
    },
    priceRange: '€€€',
    image: [
      'https://myohmtechnologies.fr/images/installation-panneaux-solaires.jpg',
    ],
    telephone: '+33 4 XX XX XX XX', // Remplacez par votre vrai numéro
    openingHours: 'Mo-Fr 08:00-18:00',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'EUR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
