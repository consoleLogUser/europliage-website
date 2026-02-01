import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zones de Livraison - Alpes-Maritimes (06) et Var (83) | Europliage',
  description: 'Livraison metallerie dans les Alpes-Maritimes (06) et le Var (83). Nice, Cannes, Antibes, Grasse, Frejus, Toulon. Retrait gratuit a Saint-Laurent-du-Var.',
  keywords: [
    'livraison metallerie Nice',
    'livraison tolerie Cannes',
    'metallerie Antibes',
    'tolerie Grasse',
    'metallerie Frejus',
    'livraison metal Var',
    'livraison 06 83',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/zones-livraison',
  },
};

const zones = [
  {
    departement: 'Alpes-Maritimes (06)',
    description: 'Livraison dans tout le departement des Alpes-Maritimes',
    villes: [
      { nom: 'Nice', distance: '15 km', delai: 'J+1' },
      { nom: 'Cannes', distance: '30 km', delai: 'J+1' },
      { nom: 'Antibes', distance: '20 km', delai: 'J+1' },
      { nom: 'Grasse', distance: '35 km', delai: 'J+1' },
      { nom: 'Cagnes-sur-Mer', distance: '5 km', delai: 'J+1' },
      { nom: 'Le Cannet', distance: '28 km', delai: 'J+1' },
      { nom: 'Vallauris', distance: '22 km', delai: 'J+1' },
      { nom: 'Mandelieu', distance: '32 km', delai: 'J+1' },
      { nom: 'Mougins', distance: '25 km', delai: 'J+1' },
      { nom: 'Vence', distance: '20 km', delai: 'J+1' },
      { nom: 'Menton', distance: '40 km', delai: 'J+2' },
      { nom: 'Monaco', distance: '35 km', delai: 'J+2' },
    ],
    couleur: 'blue',
  },
  {
    departement: 'Var (83)',
    description: 'Livraison dans l\'ouest du departement du Var',
    villes: [
      { nom: 'Frejus', distance: '45 km', delai: 'J+2' },
      { nom: 'Saint-Raphael', distance: '50 km', delai: 'J+2' },
      { nom: 'Draguignan', distance: '60 km', delai: 'J+2' },
      { nom: 'Toulon', distance: '100 km', delai: 'Sur devis' },
      { nom: 'Hyeres', distance: '110 km', delai: 'Sur devis' },
      { nom: 'La Seyne-sur-Mer', distance: '105 km', delai: 'Sur devis' },
    ],
    couleur: 'purple',
  },
];

const modalites = [
  {
    titre: 'Retrait en atelier',
    description: 'Gratuit - Venez recuperer vos pieces directement a notre atelier de Saint-Laurent-du-Var',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    prix: 'Gratuit',
  },
  {
    titre: 'Livraison standard',
    description: 'Notre vehicule vous livre directement sur votre chantier ou a votre adresse',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h8M8 17v4h8v-4M8 17l-2-6h12l-2 6M3 11V5a2 2 0 012-2h14a2 2 0 012 2v6" />
      </svg>
    ),
    prix: 'Sur devis',
  },
  {
    titre: 'Livraison express',
    description: 'Besoin urgent ? Livraison prioritaire sous 24h (selon disponibilite)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    prix: 'Sur devis',
  },
];

export default function ZonesLivraisonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              Livraison
            </div>
            <h1 className="heading-xl text-white mb-6">
              Zones de <span className="text-gradient">Livraison</span>
            </h1>
            <p className="text-body-lg text-metal-300">
              Nous livrons vos pieces metalliques dans les departements des
              Alpes-Maritimes (06) et du Var (83). Retrait gratuit a l'atelier.
            </p>
          </div>
        </div>
      </section>

      {/* Adresse atelier */}
      <section className="py-8 bg-blue-500/10 border-y border-blue-500/30">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Notre atelier</p>
                <p className="text-metal-400">ZI secteur D12, Allee des Santonniers, 06700 Saint-Laurent-du-Var</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=43.70251167804127,7.1822976871426665"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary whitespace-nowrap"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Zones par departement */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {zones.map((zone) => (
              <div
                key={zone.departement}
                className="p-6 md:p-8 bg-metal-900/50 rounded-2xl border border-metal-800"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    zone.couleur === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{zone.departement}</h2>
                    <p className="text-metal-400 text-sm">{zone.description}</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-metal-800">
                        <th className="text-left py-3 text-metal-500 font-medium text-sm">Ville</th>
                        <th className="text-center py-3 text-metal-500 font-medium text-sm">Distance</th>
                        <th className="text-right py-3 text-metal-500 font-medium text-sm">Delai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {zone.villes.map((ville) => (
                        <tr key={ville.nom} className="border-b border-metal-800/50">
                          <td className="py-3 text-white">{ville.nom}</td>
                          <td className="py-3 text-center text-metal-400">{ville.distance}</td>
                          <td className="py-3 text-right">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              ville.delai === 'J+1'
                                ? 'bg-green-500/20 text-green-400'
                                : ville.delai === 'J+2'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-metal-700 text-metal-400'
                            }`}>
                              {ville.delai}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalites de livraison */}
      <section className="section-padding gradient-section">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">
              Modalites de <span className="text-gradient">livraison</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {modalites.map((modalite, index) => (
              <div
                key={index}
                className="p-6 bg-metal-900/50 rounded-xl border border-metal-800 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                  {modalite.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{modalite.titre}</h3>
                <p className="text-metal-400 text-sm mb-4">{modalite.description}</p>
                <span className="inline-block px-4 py-2 bg-metal-800 text-white rounded-full font-medium">
                  {modalite.prix}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos complementaires */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-8 text-center">
              Informations <span className="text-gradient">pratiques</span>
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-metal-900/50 rounded-xl border border-metal-800">
                <h3 className="text-lg font-bold text-white mb-3">Horaires de retrait</h3>
                <p className="text-metal-400">
                  Du lundi au vendredi : 8h00 - 12h00 et 14h00 - 18h00<br />
                  Merci de nous prevenir de votre venue par telephone.
                </p>
              </div>

              <div className="p-6 bg-metal-900/50 rounded-xl border border-metal-800">
                <h3 className="text-lg font-bold text-white mb-3">Livraisons hors zone</h3>
                <p className="text-metal-400">
                  Pour les livraisons en dehors des Alpes-Maritimes et du Var,
                  contactez-nous pour etudier les possibilites (transporteur, etc.).
                </p>
              </div>

              <div className="p-6 bg-metal-900/50 rounded-xl border border-metal-800">
                <h3 className="text-lg font-bold text-white mb-3">Conditions de livraison</h3>
                <p className="text-metal-400">
                  Le cout de livraison depend du poids, du volume et de la distance.
                  Il vous sera communique avec votre devis. Franco de port possible
                  selon conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-section">
        <div className="container-custom px-4 text-center">
          <h2 className="heading-lg text-white mb-4">
            Une question sur la livraison ?
          </h2>
          <p className="text-metal-300 mb-8 max-w-xl mx-auto">
            Contactez-nous pour connaitre les conditions de livraison
            pour votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un devis
            </Link>
            <a href="tel:+33493194090" className="btn-secondary">
              04 93 19 40 90
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
