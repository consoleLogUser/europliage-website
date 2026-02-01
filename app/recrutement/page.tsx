import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recrutement - Rejoignez Europliage | Carrieres Metallerie',
  description: 'Rejoignez l\'equipe Europliage! Offres d\'emploi en metallerie: soudeurs, operateurs laser, plieur CNC. Entreprise familiale depuis 1990 a Saint-Laurent-du-Var (06).',
  keywords: [
    'emploi metallerie Nice',
    'recrutement tolerie 06',
    'offre emploi soudeur',
    'operateur laser emploi',
    'plieur CNC recrutement',
    'carrieres metallerie',
    'travail Saint-Laurent-du-Var',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/recrutement',
  },
};

const avantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Horaires stables',
    description: 'Du lundi au vendredi, 8h-12h / 14h-18h',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Equipe soudee',
    description: 'Ambiance familiale et entraide',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Evolution possible',
    description: 'Formations et montee en competences',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Entreprise stable',
    description: '34+ ans d\'existence, activite constante',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Localisation ideale',
    description: 'Proche autoroute, parking gratuit',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Atelier moderne',
    description: 'Equipements recents et securises',
  },
];

const offres = [
  {
    title: 'Operateur Decoupe Laser',
    type: 'CDI',
    location: 'Saint-Laurent-du-Var (06)',
    description: 'Vous assurez la production sur notre machine de decoupe laser. Lecture de plans, programmation et controle qualite.',
    requirements: ['Experience decoupe laser souhaitee', 'Lecture de plans techniques', 'Rigueur et autonomie'],
    active: true,
  },
  {
    title: 'Plieur sur Presse CNC',
    type: 'CDI',
    location: 'Saint-Laurent-du-Var (06)',
    description: 'Vous realisez les operations de pliage sur nos presses CNC. Reglage, programmation et controle des pieces.',
    requirements: ['Experience pliage CNC 2 ans minimum', 'Maitrise lecture de plans', 'Connaissance des materiaux'],
    active: true,
  },
  {
    title: 'Soudeur TIG/MIG',
    type: 'CDI',
    location: 'Saint-Laurent-du-Var (06)',
    description: 'Vous realisez les assemblages par soudure TIG et MIG sur acier, inox et aluminium.',
    requirements: ['Maitrise soudure TIG impérative', 'Experience inox appreciee', 'Souci du detail'],
    active: false,
  },
];

export default function RecrutementPage() {
  const offresActives = offres.filter(o => o.active);
  const offresInactives = offres.filter(o => !o.active);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/atelier-2.jpg"
            alt="Equipe Europliage au travail dans l'atelier"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-metal-950 via-metal-950/90 to-metal-950/70" />
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl">
            <div className="section-label mb-6">
              Rejoignez-nous
            </div>
            <h1 className="heading-xl text-white mb-6">
              Construisez votre <span className="text-gradient">Carriere</span>
            </h1>
            <p className="text-body-lg text-metal-300 mb-8">
              Europliage recherche des talents passionnes par le travail du metal.
              Rejoignez une equipe de professionnels dans une entreprise a taille humaine.
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {offresActives.length} poste{offresActives.length > 1 ? 's' : ''} ouvert{offresActives.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="section-padding gradient-section">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">
              Pourquoi rejoindre <span className="text-gradient">Europliage</span> ?
            </h2>
            <p className="text-metal-400 max-w-2xl mx-auto">
              Une entreprise familiale ou l'humain est au coeur de nos valeurs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((avantage, index) => (
              <div
                key={index}
                className="p-6 bg-metal-900/50 rounded-xl border border-metal-800 hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                  {avantage.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{avantage.title}</h3>
                <p className="text-metal-400">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres d'emploi */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">
              Nos <span className="text-gradient">Offres</span> d'Emploi
            </h2>
          </div>

          {/* Offres actives */}
          {offresActives.length > 0 && (
            <div className="space-y-6 mb-12">
              {offresActives.map((offre, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 bg-metal-900/50 rounded-2xl border border-metal-800 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {offre.title}
                        </h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                          {offre.type}
                        </span>
                      </div>
                      <p className="text-metal-400 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {offre.location}
                      </p>
                    </div>
                    <a
                      href={`mailto:commande@europliage.com?subject=Candidature: ${offre.title}`}
                      className="btn-primary whitespace-nowrap"
                    >
                      Postuler
                    </a>
                  </div>

                  <p className="text-metal-300 mb-6">{offre.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Profil recherche :</h4>
                    <ul className="flex flex-wrap gap-2">
                      {offre.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="px-3 py-1 bg-metal-800 text-metal-300 text-sm rounded-full"
                        >
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Candidature spontanee */}
          <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Candidature spontanee
            </h3>
            <p className="text-metal-300 mb-6 max-w-xl mx-auto">
              Votre profil ne correspond pas aux offres actuelles ?
              Envoyez-nous votre CV, nous etudions toutes les candidatures.
            </p>
            <a
              href="mailto:commande@europliage.com?subject=Candidature spontanee"
              className="btn-secondary inline-flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envoyer ma candidature
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-section">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">
              Notre processus de <span className="text-gradient">recrutement</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Candidature', desc: 'Envoyez CV et lettre de motivation par email' },
              { step: '2', title: 'Echange telephonique', desc: 'Premier contact pour faire connaissance' },
              { step: '3', title: 'Entretien', desc: 'Rencontre a l\'atelier avec la direction' },
              { step: '4', title: 'Integration', desc: 'Bienvenue dans l\'equipe Europliage !' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-metal-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
