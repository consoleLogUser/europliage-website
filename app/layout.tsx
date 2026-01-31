import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SkipToMain from '@/components/SkipToMain';
import Breadcrumbs from '@/components/Breadcrumbs';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.europliage.com'),
  title: {
    default: 'Europliage - Metallerie et Tolerie Industrielle depuis 1990 | Saint-Laurent-du-Var',
    template: '%s | Europliage - Expert Metallerie 06',
  },
  description: 'Expert en metallerie et tolerie industrielle depuis 1990 a Saint-Laurent-du-Var (06). Decoupe laser haute precision, pliage CNC, soudure professionnelle et thermolaquage. Fabrication 100% interne. Livraison Alpes-Maritimes (06) et Var (83). Devis gratuit sous 48h.',
  keywords: [
    'metallerie',
    'tolerie industrielle',
    'decoupe laser',
    'pliage CNC',
    'soudure',
    'thermolaquage',
    'couvertines',
    'precadres acier',
    'enseignes metalliques',
    'brise-vue metal',
    'garde-corps',
    'habillage facade',
    'Saint-Laurent-du-Var',
    'Alpes-Maritimes',
    'Nice',
    'Cannes',
    'Antibes',
    '06',
    'Var',
    '83',
    'PACA',
    'Cote d Azur',
  ],
  authors: [{ name: 'Europliage', url: 'https://www.europliage.com' }],
  creator: 'Europliage',
  publisher: 'Europliage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.europliage.com',
    languages: {
      'fr-FR': 'https://www.europliage.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.europliage.com',
    siteName: 'Europliage',
    title: 'Europliage - Metallerie et Tolerie Industrielle depuis 1990',
    description: 'Expert en metallerie depuis 1990. Decoupe laser, pliage CNC, soudure et thermolaquage. Fabrication 100% interne a Saint-Laurent-du-Var. Livraison 06 et 83.',
    images: [
      {
        url: '/images-europliage/decoupe-laser-acier.jpg',
        width: 1200,
        height: 630,
        alt: 'Europliage - Atelier de metallerie et tolerie industrielle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Europliage - Metallerie et Tolerie Industrielle depuis 1990',
    description: 'Expert en metallerie depuis 1990. Decoupe laser, pliage CNC, soudure et thermolaquage. Fabrication 100% interne.',
    images: ['/images-europliage/decoupe-laser-acier.jpg'],
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
  verification: {
    // Ajouter les codes de verification une fois configures
    // google: 'votre-code-google',
    // yandex: 'votre-code-yandex',
  },
  category: 'business',
};

// Schema.org JSON-LD pour LocalBusiness (enrichi)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.europliage.com/#organization',
  name: 'Europliage',
  alternateName: 'Europliage SAS',
  description: 'Expert en metallerie et tolerie industrielle depuis 1990. Decoupe laser, pliage CNC, soudure et thermolaquage.',
  url: 'https://www.europliage.com',
  logo: 'https://www.europliage.com/images-europliage/logo-europliage.png',
  image: [
    'https://www.europliage.com/images-europliage/decoupe-laser-acier.jpg',
    'https://www.europliage.com/images-europliage/atelier-1.jpg',
    'https://www.europliage.com/images-europliage/pliage-metal.jpg',
  ],
  telephone: '+33493194090',
  email: 'commande@europliage.com',
  foundingDate: '1990',
  priceRange: '$$',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cheque, Virement bancaire, Carte bancaire',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ZI secteur D12, Allee des Santonniers',
    addressLocality: 'Saint-Laurent-du-Var',
    postalCode: '06700',
    addressRegion: 'Provence-Alpes-Cote d\'Azur',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.70251167804127,
    longitude: 7.1822976871426665,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33493194090',
    contactType: 'customer service',
    email: 'commande@europliage.com',
    availableLanguage: ['French'],
    areaServed: 'FR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/europliage',
    'https://www.facebook.com/europliage',
    'https://www.instagram.com/europliage',
  ],
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.70251167804127,
        longitude: 7.1822976871426665,
      },
      geoRadius: '100000',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Alpes-Maritimes',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Var',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de metallerie',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Decoupe Laser',
          description: 'Decoupe laser haute precision sur acier, inox et aluminium jusqu\'a 25mm d\'epaisseur',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Europliage',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pliage CNC',
          description: 'Pliage CNC jusqu\'a 4 metres de longueur avec precision de 0.5 degre',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Europliage',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Soudure',
          description: 'Soudure TIG, MIG/MAG et par points par soudeurs certifies',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Europliage',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Thermolaquage',
          description: 'Thermolaquage avec plus de 150 coloris RAL, dimensions max 3800x1700mm',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Europliage',
          },
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'M. Dubois',
      },
      reviewBody: 'Travail impeccable sur notre garde-corps. Equipe professionnelle et delais respectes.',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Mme Bernard',
      },
      reviewBody: 'Excellent partenaire pour nos besoins industriels. Qualite constante et reactivite exemplaire.',
    },
  ],
};

// Schema WebSite pour la recherche
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.europliage.com/#website',
  url: 'https://www.europliage.com',
  name: 'Europliage',
  description: 'Expert en metallerie et tolerie industrielle depuis 1990',
  publisher: {
    '@id': 'https://www.europliage.com/#organization',
  },
  inLanguage: 'fr-FR',
};

// Schema Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.europliage.com/#company',
  name: 'Europliage SAS',
  url: 'https://www.europliage.com',
  logo: 'https://www.europliage.com/images-europliage/logo-europliage.png',
  foundingDate: '1990',
  founders: [
    {
      '@type': 'Person',
      name: 'Fondateur Europliage',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ZI secteur D12, Allee des Santonniers',
    addressLocality: 'Saint-Laurent-du-Var',
    postalCode: '06700',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33493194090',
    contactType: 'sales',
    areaServed: 'FR',
    availableLanguage: 'French',
  },
  sameAs: [
    'https://www.linkedin.com/company/europliage',
    'https://www.facebook.com/europliage',
    'https://www.instagram.com/europliage',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <SkipToMain />
        <Navigation />
        <div className="container-custom pt-20">
          <Breadcrumbs />
        </div>
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
