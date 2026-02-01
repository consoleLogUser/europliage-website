import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Certifications et Normes Qualité | Garanties Europliage',
  description: 'Découvrez nos certifications qualité et normes respectées : ISO 9001, marquage CE, normes NF, garantie décennale. Europliage, métallerie certifiée à Saint-Laurent-du-Var (06).',
  keywords: [
    'certification metallerie',
    'norme ISO 9001',
    'marquage CE metal',
    'norme NF metallerie',
    'garantie decennale',
    'qualite metallerie',
    'certification soudure',
    'norme EN 1090',
    'thermolaquage certifie',
    'qualicoat',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/certifications',
  },
  openGraph: {
    title: 'Certifications et Normes Qualité | Europliage',
    description: 'Nos engagements qualité : certifications, normes et garanties pour une métallerie d\'excellence.',
    url: 'https://www.europliage.com/certifications',
    images: [
      {
        url: '/images-europliage/atelier-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Certifications qualité Europliage',
      },
    ],
  },
};

const certifications = [
  {
    name: 'ISO 9001:2015',
    category: 'Système de Management',
    description: 'Certification internationale garantissant un système de management de la qualité rigoureux. Nos processus de fabrication sont audités annuellement pour assurer une qualité constante.',
    benefits: [
      'Traçabilité complète des commandes',
      'Amélioration continue des processus',
      'Satisfaction client mesurée',
      'Gestion documentaire rigoureuse',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    name: 'Marquage CE',
    category: 'Conformité Européenne',
    description: 'Conformité aux exigences essentielles de sécurité et de santé de l\'Union Européenne. Tous nos produits portent le marquage CE attestant leur conformité.',
    benefits: [
      'Conformité réglementaire UE',
      'Sécurité des produits garantie',
      'Documentation technique complète',
      'Libre circulation en Europe',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'EN 1090-2',
    category: 'Structures Métalliques',
    description: 'Norme européenne pour l\'exécution des structures en acier et en aluminium. Certification essentielle pour les ouvrages de construction métallique.',
    benefits: [
      'Qualité d\'exécution certifiée',
      'Contrôles de production usine',
      'Soudeurs qualifiés selon EN ISO 9606',
      'Classes d\'exécution EXC1 à EXC4',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Qualicoat',
    category: 'Thermolaquage',
    description: 'Label de qualité pour le thermolaquage de l\'aluminium. Garantit la durabilité et la résistance de nos finitions laquées dans le temps.',
    benefits: [
      'Épaisseur de revêtement contrôlée',
      'Tests de résistance UV',
      'Adhérence optimale garantie',
      'Résistance à la corrosion',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const guarantees = [
  {
    title: 'Garantie Décennale',
    duration: '10 ans',
    description: 'Assurance responsabilité civile décennale couvrant nos ouvrages de construction métallique conformément à la loi.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Garantie Thermolaquage',
    duration: '10 ans',
    description: 'Garantie sur la tenue des couleurs et la résistance à la corrosion de nos finitions thermolaquées.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" />
      </svg>
    ),
  },
  {
    title: 'Garantie Fabrication',
    duration: '2 ans',
    description: 'Garantie sur les défauts de fabrication couvrant l\'ensemble de nos produits métalliques.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'SAV Réactif',
    duration: '48h',
    description: 'Service après-vente réactif avec intervention sous 48h pour toute réclamation ou problème technique.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const qualityCommitments = [
  {
    title: 'Matières Premières Traçables',
    description: 'Tous nos métaux proviennent de fournisseurs européens certifiés avec certificat matière 3.1.',
  },
  {
    title: 'Contrôle Qualité Systématique',
    description: 'Chaque pièce est contrôlée avant expédition : dimensions, aspect, conformité au plan.',
  },
  {
    title: 'Personnel Qualifié',
    description: 'Nos soudeurs sont certifiés selon EN ISO 9606, nos opérateurs formés en continu.',
  },
  {
    title: 'Équipements Calibrés',
    description: 'Nos machines sont étalonnées régulièrement pour garantir une précision constante.',
  },
];

// JSON-LD Schema
const certificationsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.europliage.com/#organization',
  name: 'Europliage',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ISO 9001:2015',
      credentialCategory: 'Certification Qualité',
      description: 'Système de management de la qualité certifié ISO 9001:2015',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Marquage CE',
      credentialCategory: 'Conformité Européenne',
      description: 'Conformité aux directives européennes de sécurité',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'EN 1090-2',
      credentialCategory: 'Structures Métalliques',
      description: 'Certification pour l\'exécution des structures en acier et aluminium',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Qualicoat',
      credentialCategory: 'Thermolaquage',
      description: 'Label qualité pour le thermolaquage de l\'aluminium',
    },
  ],
};

export default function CertificationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              Qualité & Conformité
            </div>
            <h1 className="heading-xl text-white mb-6">
              Nos <span className="text-gradient">Certifications</span> et Normes
            </h1>
            <p className="text-body-lg max-w-2xl mx-auto">
              Chez Europliage, la qualité n'est pas une option mais un engagement quotidien.
              Découvrez les certifications et normes qui garantissent l'excellence de nos produits.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Certifications <span className="text-gradient">Officielles</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Des certifications reconnues internationalement pour vous garantir qualité et conformité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                      {cert.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">{cert.name}</h3>
                  </div>
                </div>

                <p className="text-metal-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-2">
                  <span className="text-sm font-semibold text-white">Avantages :</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-metal-400">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section-padding relative bg-metal-900/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Nos <span className="text-gradient">Garanties</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Des garanties solides pour vous accompagner sur le long terme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
                  {guarantee.icon}
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {guarantee.duration}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-sm text-metal-400">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label w-fit mb-4">
                Notre Engagement
              </div>
              <h2 className="heading-lg text-white mb-6">
                La Qualité au <span className="text-gradient">Quotidien</span>
              </h2>
              <p className="text-body mb-8">
                Au-delà des certifications, c'est notre culture d'entreprise qui garantit
                la qualité de nos productions. Chaque membre de l'équipe est impliqué
                dans notre démarche qualité.
              </p>

              <div className="space-y-6">
                {qualityCommitments.map((commitment, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{commitment.title}</h3>
                      <p className="text-sm text-metal-400">{commitment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Satisfaction Client
                  </h3>
                  <p className="text-metal-400">Notre objectif n°1</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-gradient">98%</div>
                    <div className="text-xs text-metal-400">Clients satisfaits</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-gradient">0.5%</div>
                    <div className="text-xs text-metal-400">Taux de retour</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-gradient">85%</div>
                    <div className="text-xs text-metal-400">Clients fidèles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Besoin de Documentations ?
            </h2>
            <p className="text-body-lg mb-8">
              Nous pouvons vous fournir tous les certificats et attestations nécessaires
              pour vos marchés publics ou privés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                <span>Demander les Certificats</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/a-propos" className="btn-secondary">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
