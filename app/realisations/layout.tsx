import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realisations Metallerie - Portfolio Projets Nice, Cannes, Antibes',
  description: 'Decouvrez nos realisations en metallerie et tolerie: garde-corps design, habillages facade, escaliers metalliques, portails, verriere atelier. Projets realises dans les Alpes-Maritimes (06) et le Var (83).',
  keywords: [
    'realisations metallerie',
    'portfolio metallerie',
    'garde-corps Nice',
    'habillage facade Cannes',
    'escalier metallique',
    'portail acier',
    'verriere atelier',
    'serrurerie Antibes',
    'metallerie Alpes-Maritimes',
    'projets metal PACA',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/realisations',
  },
  openGraph: {
    title: 'Portfolio Realisations Metallerie | Europliage',
    description: 'Plus de 850 projets realises depuis 1990. Decouvrez notre savoir-faire en metallerie.',
    url: 'https://www.europliage.com/realisations',
    images: [
      {
        url: '/images-europliage/realisation-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Realisations metallerie Europliage',
      },
    ],
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
