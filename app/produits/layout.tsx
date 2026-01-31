import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produits Metallerie - Couvertines, Precadres, Habillages Facade, Tolerie',
  description: 'Catalogue produits metallerie: couvertines aluminium, precadres acier ITE, habillages facade, decoupe laser decorative, garde-corps, brise-vue. Fabrication sur mesure a Saint-Laurent-du-Var (06).',
  keywords: [
    'couvertines aluminium',
    'precadres acier',
    'precadres ITE',
    'precadres ITI',
    'habillage facade metal',
    'decoupe laser decorative',
    'garde-corps inox',
    'brise-vue metal',
    'claustras metal',
    'enseignes metalliques',
    'lettrages metal',
    'pliages sur mesure',
    'tolerie industrielle',
    'produits metallerie Nice',
    'fabrication metal Alpes-Maritimes',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/produits',
  },
  openGraph: {
    title: 'Produits Metallerie et Tolerie Sur Mesure | Europliage',
    description: 'Couvertines, precadres, habillages facade et plus. Tous nos produits metallerie fabriques sur mesure.',
    url: 'https://www.europliage.com/produits',
    images: [
      {
        url: '/images-europliage/precadre-acier.jpg',
        width: 1200,
        height: 630,
        alt: 'Produits metallerie Europliage - Precadres acier',
      },
    ],
  },
};

// Schema Product pour chaque categorie de produit
const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        '@id': 'https://www.europliage.com/produits#decoupe-laser',
        name: 'Decoupe Laser Decorative',
        description: 'Pieces industrielles et decoratives de haute precision. Plus de 3000 motifs disponibles pour remplissages portails, habillages facades, credences design et logos.',
        image: 'https://www.europliage.com/images-europliage/decoupe-laser-acier.jpg',
        brand: { '@type': 'Brand', name: 'Europliage' },
        manufacturer: { '@type': 'Organization', name: 'Europliage' },
        material: ['Acier', 'Inox', 'Aluminium'],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR' },
          seller: { '@type': 'Organization', name: 'Europliage' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        '@id': 'https://www.europliage.com/produits#pliages',
        name: 'Pliages et Habillages',
        description: 'Solutions d\'habillage pour menuiserie et agencement. Caissons, profiles, cornieres, plats d\'habillage. Pliage CNC jusqu\'a 4 metres.',
        image: 'https://www.europliage.com/images-europliage/pliage-metal.jpg',
        brand: { '@type': 'Brand', name: 'Europliage' },
        material: ['Acier', 'Aluminium', 'Galvanise'],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        '@id': 'https://www.europliage.com/produits#precadres',
        name: 'Precadres Acier',
        description: 'Precadres en acier soude et galvanise pour isolation thermique ITE/ITI. Dimensions sur mesure, montage usine, reduction des ponts thermiques.',
        image: 'https://www.europliage.com/images-europliage/precadre-acier.jpg',
        brand: { '@type': 'Brand', name: 'Europliage' },
        material: ['Acier 15/10', 'Galvanise a froid'],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        '@id': 'https://www.europliage.com/produits#facades',
        name: 'Habillages Facades',
        description: 'Habillages metalliques pour facades de batiments. Solutions architecturales modernes, thermolaquees, grande dimension avec plus de 250 coloris.',
        image: 'https://www.europliage.com/images-europliage/habillage-facade.jpg',
        brand: { '@type': 'Brand', name: 'Europliage' },
        material: ['Aluminium', 'Acier', 'Composite'],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Product',
        '@id': 'https://www.europliage.com/produits#couvertines',
        name: 'Couvertines',
        description: 'Protection des murets et acroteres. Couvertines symetriques, asymetriques ou plates en aluminium. Appuis fenetres et chaperons muraux.',
        image: 'https://www.europliage.com/images-europliage/atelier-1.jpg',
        brand: { '@type': 'Brand', name: 'Europliage' },
        material: ['Aluminium', 'Acier laque'],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Product',
        '@id': 'https://www.europliage.com/produits#tolerie',
        name: 'Tolerie Industrielle',
        description: 'Fabrication sur mesure pour batiment et industrie. Grilles ventilation, garde-corps, verrieres, trappes staff. Production unitaire ou serie.',
        image: 'https://www.europliage.com/images-europliage/sol-metal.jpg',
        brand: { '@type': 'Brand', name: 'Europliage' },
        material: ['Tous metaux'],
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'EUR',
        },
      },
    },
  ],
};

export default function ProduitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      {children}
    </>
  );
}
