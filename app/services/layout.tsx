import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Metallerie - Decoupe Laser, Pliage CNC, Soudure, Thermolaquage',
  description: 'Decouvrez nos services de metallerie et tolerie industrielle: decoupe laser haute precision, pliage CNC jusqu\'a 4m, soudure TIG/MIG, thermolaquage 150+ RAL. Production 100% interne a Saint-Laurent-du-Var (06).',
  keywords: [
    'decoupe laser acier',
    'decoupe laser inox',
    'decoupe laser aluminium',
    'pliage CNC',
    'pliage metal',
    'pliage tole',
    'soudure TIG',
    'soudure MIG',
    'soudure MAG',
    'thermolaquage',
    'peinture poudre',
    'metallerie Nice',
    'tolerie Alpes-Maritimes',
    'bureau etudes metallerie',
    'CAO 2D 3D',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/services',
  },
  openGraph: {
    title: 'Services de Metallerie et Tolerie | Europliage',
    description: 'Decoupe laser, pliage CNC, soudure et thermolaquage. Tous nos services de metallerie industrielle.',
    url: 'https://www.europliage.com/services',
    images: [
      {
        url: '/images-europliage/decoupe-laser-acier.jpg',
        width: 1200,
        height: 630,
        alt: 'Services de metallerie Europliage - Decoupe laser',
      },
    ],
  },
};

// Schema detaille pour les services
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        '@id': 'https://www.europliage.com/services#decoupe-laser',
        name: 'Decoupe Laser',
        description: 'Service de decoupe laser haute precision pour acier, inox et aluminium. Precision au dixieme de millimetre, epaisseur max 25mm, plus de 3000 motifs disponibles.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Europliage',
          '@id': 'https://www.europliage.com/#organization',
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.7025, longitude: 7.1823 },
          geoRadius: '100000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Options de decoupe laser',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Decoupe acier jusqu\'a 25mm' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Decoupe inox jusqu\'a 20mm' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Decoupe aluminium jusqu\'a 12mm' } },
          ],
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        '@id': 'https://www.europliage.com/services#pliage',
        name: 'Pliage CNC',
        description: 'Pliage CNC de precision avec presses plieuses derniere generation. Capacite jusqu\'a 4 metres de longueur, precision angulaire de 0.5 degre, force de 320 tonnes.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Europliage',
          '@id': 'https://www.europliage.com/#organization',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        '@id': 'https://www.europliage.com/services#soudure',
        name: 'Soudure Expert',
        description: 'Soudure professionnelle par soudeurs certifies. Techniques TIG, MIG/MAG et par points pour assemblages solides et esthetiques sur tous types de metaux.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Europliage',
          '@id': 'https://www.europliage.com/#organization',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        '@id': 'https://www.europliage.com/services#thermolaquage',
        name: 'Thermolaquage',
        description: 'Finition thermolaquage premium avec plus de 150 coloris RAL. Dimensions max 3800x1700mm, finitions brillantes, mates ou texturees. Garantie 10 ans.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Europliage',
          '@id': 'https://www.europliage.com/#organization',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        '@id': 'https://www.europliage.com/services#bureau-etudes',
        name: 'Bureau d\'Etudes',
        description: 'Bureau d\'etudes integre pour conception 2D/3D. Traitement de plans DXF, PDF ou gabarits physiques. Optimisation des chutes et conseils techniques.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Europliage',
          '@id': 'https://www.europliage.com/#organization',
        },
      },
    },
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}
