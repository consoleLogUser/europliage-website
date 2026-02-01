import { Metadata } from 'next';
import ColorChart from '@/components/ColorChart';

export const metadata: Metadata = {
  title: 'Nuancier RAL Thermolaquage | 150+ Couleurs Disponibles',
  description: 'Découvrez notre nuancier interactif de plus de 150 couleurs RAL pour le thermolaquage. Finitions brillantes, mates ou texturées. Visualisez et choisissez votre couleur en ligne.',
  keywords: [
    'nuancier RAL',
    'couleurs thermolaquage',
    'RAL 7016',
    'RAL 9010',
    'RAL 9005',
    'peinture poudre couleurs',
    'finition metal couleur',
    'RAL classique',
    'RAL design',
    'couleur metallerie',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/nuancier',
  },
  openGraph: {
    title: 'Nuancier RAL Interactif | Europliage',
    description: 'Plus de 150 couleurs RAL disponibles pour le thermolaquage de vos pièces métalliques.',
    url: 'https://www.europliage.com/nuancier',
    images: [
      {
        url: '/images-europliage/atelier-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuancier couleurs Europliage',
      },
    ],
  },
};

export default function NuancierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              Thermolaquage
            </div>
            <h1 className="heading-xl text-white mb-6">
              Nuancier <span className="text-gradient">RAL</span> Interactif
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto">
              Explorez notre palette de plus de 150 couleurs RAL disponibles pour le thermolaquage
              de vos pièces métalliques. Finitions brillantes, mates ou texturées.
            </p>
          </div>
        </div>
      </section>

      {/* Color Chart Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ColorChart />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding relative bg-metal-900/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Finitions Variées</h3>
              <p className="text-sm text-metal-400">
                Choisissez entre brillant, satiné, mat ou texturé (finition fine, structurée).
                Chaque finition offre un rendu unique.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Garantie 10 Ans</h3>
              <p className="text-sm text-metal-400">
                Notre thermolaquage est garanti 10 ans contre la décoloration et l'écaillage.
                Résistance UV et anti-corrosion certifiée Qualicoat.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dimensions Max</h3>
              <p className="text-sm text-metal-400">
                Notre cabine de thermolaquage accepte des pièces jusqu'à 3800 x 1700 mm.
                Pour des dimensions supérieures, contactez-nous.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-metal-400 mb-4">
              Couleur non disponible dans le nuancier ? Nous pouvons commander toute référence RAL.
            </p>
            <a href="/contact" className="btn-primary inline-flex">
              <span>Demander une couleur spéciale</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
