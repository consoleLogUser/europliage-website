import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Devis Gratuit Metallerie Saint-Laurent-du-Var (06)',
  description: 'Contactez Europliage pour votre projet metallerie. Devis gratuit sous 48h. Tel: 04 93 19 40 90. Email: commande@europliage.com. Atelier: ZI Saint-Laurent-du-Var (06). Livraison Alpes-Maritimes et Var.',
  keywords: [
    'contact metallerie',
    'devis metallerie Nice',
    'devis gratuit tolerie',
    'metallerie Saint-Laurent-du-Var',
    'telephone metallier 06',
    'email Europliage',
    'adresse atelier metallerie',
    'horaires metallerie',
    'livraison metallerie 06 83',
    'demande devis metal',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/contact',
  },
  openGraph: {
    title: 'Contactez Europliage - Devis Gratuit sous 48h',
    description: 'Demandez votre devis gratuit. Tel: 04 93 19 40 90. Reponse garantie sous 48h.',
    url: 'https://www.europliage.com/contact',
    images: [
      {
        url: '/images-europliage/atelier-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Europliage - Atelier metallerie',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
