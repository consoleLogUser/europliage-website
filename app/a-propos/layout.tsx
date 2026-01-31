import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Propos - Entreprise Metallerie depuis 1990 Saint-Laurent-du-Var',
  description: 'Europliage, entreprise familiale de metallerie depuis 1990. 34+ ans d\'expertise, 800m2 d\'atelier, production 100% interne. Decouvrez notre histoire, nos valeurs et notre savoir-faire a Saint-Laurent-du-Var (06).',
  keywords: [
    'entreprise metallerie',
    'metallerie familiale',
    'histoire Europliage',
    'atelier metallerie Nice',
    'metallier Saint-Laurent-du-Var',
    'expert tolerie 06',
    'fabrication interne',
    'metallerie depuis 1990',
    'entreprise PACA',
    'artisan metallier',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/a-propos',
  },
  openGraph: {
    title: 'A Propos d\'Europliage - Expert Metallerie depuis 1990',
    description: 'Decouvrez notre entreprise familiale, nos valeurs et notre atelier de 800m2. Plus de 34 ans d\'expertise.',
    url: 'https://www.europliage.com/a-propos',
    images: [
      {
        url: '/images-europliage/atelier-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Europliage - Metallerie depuis 1990',
      },
    ],
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
