import { Metadata } from 'next';
import QuoteSimulator from '@/components/QuoteSimulator';

export const metadata: Metadata = {
  title: 'Simulateur de Devis Gratuit | Estimation Métallerie en Ligne',
  description: 'Obtenez une estimation instantanée pour vos projets de métallerie : découpe laser, pliage, soudure, thermolaquage. Simulateur en ligne gratuit et sans engagement.',
  keywords: [
    'devis metallerie en ligne',
    'estimation decoupe laser',
    'prix pliage metal',
    'simulateur devis tolerie',
    'tarif thermolaquage',
    'devis gratuit metallerie',
    'calcul prix metal',
    'estimation travaux metal',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/devis',
  },
  openGraph: {
    title: 'Simulateur de Devis Métallerie | Europliage',
    description: 'Estimez le coût de votre projet métallerie en quelques clics. Gratuit et sans engagement.',
    url: 'https://www.europliage.com/devis',
    images: [
      {
        url: '/images-europliage/atelier-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Simulateur de devis Europliage',
      },
    ],
  },
};

export default function DevisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              Estimation Instantanée
            </div>
            <h1 className="heading-xl text-white mb-6">
              Simulateur de <span className="text-gradient">Devis</span>
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto">
              Obtenez une estimation indicative pour votre projet de métallerie en quelques clics.
              Notre équipe vous recontactera avec un devis détaillé personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <QuoteSimulator />
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="section-padding relative bg-metal-900/50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Gratuit</h3>
              <p className="text-sm text-metal-400">Estimation sans frais ni engagement de votre part</p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Réponse en 48h</h3>
              <p className="text-sm text-metal-400">Devis détaillé envoyé sous 48 heures ouvrées</p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accompagnement</h3>
              <p className="text-sm text-metal-400">Conseils techniques par notre bureau d'études</p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Livraison 06/83</h3>
              <p className="text-sm text-metal-400">Livraison dans les Alpes-Maritimes et le Var</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
