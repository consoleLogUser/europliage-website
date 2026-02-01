import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Parc Machines et Equipements - Capacites Techniques | Europliage',
  description: 'Decouvrez notre parc machines: decoupe laser haute precision, presses plieuses CNC 320T, poste soudure TIG/MIG, cabine thermolaquage. Atelier 800m2 a Saint-Laurent-du-Var.',
  keywords: [
    'parc machines metallerie',
    'decoupe laser industrielle',
    'presse plieuse CNC',
    'cabine thermolaquage',
    'equipements tolerie',
    'atelier metallerie Nice',
    'capacites techniques',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/equipements',
  },
};

const equipements = [
  {
    category: 'Decoupe',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    machines: [
      {
        name: 'Laser fibre haute puissance',
        specs: ['Puissance: 4kW', 'Table: 3000 x 1500 mm', 'Precision: 0.1mm', 'Acier: jusqu\'a 25mm', 'Inox: jusqu\'a 20mm', 'Alu: jusqu\'a 12mm'],
        image: '/images-europliage/decoupe-laser-acier.jpg',
      },
      {
        name: 'Cisaille hydraulique CNC',
        specs: ['Longueur: 3000mm', 'Epaisseur max: 6mm', 'Butee arriere programmable', 'Coupe droite de precision'],
        image: '/images-europliage/atelier-1.jpg',
      },
    ],
  },
  {
    category: 'Pliage',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    machines: [
      {
        name: 'Presse plieuse CNC 320T',
        specs: ['Force: 320 tonnes', 'Longueur utile: 4000mm', 'Precision angulaire: 0.5°', 'Commande numerique 6 axes', 'Compensation automatique'],
        image: '/images-europliage/pliage-metal.jpg',
      },
      {
        name: 'Presse plieuse CNC 160T',
        specs: ['Force: 160 tonnes', 'Longueur utile: 3000mm', 'Ideal petites series', 'Changement rapide d\'outils'],
        image: '/images-europliage/pliage-metal.jpg',
      },
    ],
  },
  {
    category: 'Soudure',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    machines: [
      {
        name: 'Postes TIG AC/DC',
        specs: ['Soudure tous metaux', 'Acier, inox, aluminium', 'Finition haute qualite', 'Soudeurs certifies'],
        image: '/images-europliage/atelier-2.jpg',
      },
      {
        name: 'Postes MIG/MAG',
        specs: ['Soudure semi-automatique', 'Haute productivite', 'Fil fourre ou massif', 'Gaz Argon/CO2'],
        image: '/images-europliage/atelier-2.jpg',
      },
      {
        name: 'Soudeuse par points',
        specs: ['Assemblage rapide', 'Toles fines', 'Sans apport de matiere', 'Ideal grandes series'],
        image: '/images-europliage/atelier-1.jpg',
      },
    ],
  },
  {
    category: 'Finition',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    machines: [
      {
        name: 'Cabine thermolaquage',
        specs: ['Dimensions: 3800 x 1700 mm', 'Four polymerisation 200°C', '150+ coloris RAL', 'Finitions: brillant, mat, texture', 'Garantie 10 ans'],
        image: '/images-europliage/atelier-1.jpg',
      },
      {
        name: 'Grenailleuse',
        specs: ['Preparation de surface', 'Decapage automatique', 'Ameliore adherence', 'Traitement grandes pieces'],
        image: '/images-europliage/atelier-2.jpg',
      },
    ],
  },
];

const capacites = [
  { label: 'Surface atelier', value: '800', unit: 'm²' },
  { label: 'Decoupe laser max', value: '25', unit: 'mm acier' },
  { label: 'Longueur pliage', value: '4', unit: 'metres' },
  { label: 'Force pliage', value: '320', unit: 'tonnes' },
  { label: 'Coloris RAL', value: '150', unit: '+' },
  { label: 'Delai devis', value: '48', unit: 'heures' },
];

export default function EquipementsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              Notre Atelier
            </div>
            <h1 className="heading-xl text-white mb-6">
              Parc <span className="text-gradient">Machines</span>
            </h1>
            <p className="text-body-lg text-metal-300">
              Un atelier de 800m² equipe des dernieres technologies pour repondre
              a tous vos besoins en metallerie et tolerie industrielle.
            </p>
          </div>
        </div>
      </section>

      {/* Capacites en chiffres */}
      <section className="py-12 border-b border-metal-800">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capacites.map((cap, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {cap.value}<span className="text-blue-400 text-xl">{cap.unit}</span>
                </div>
                <div className="text-metal-500 text-sm">{cap.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipements par categorie */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="space-y-20">
            {equipements.map((category, catIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {category.category}
                    </h2>
                    <p className="text-metal-400">
                      {category.machines.length} equipement{category.machines.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Machines Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.machines.map((machine, machIndex) => (
                    <div
                      key={machine.name}
                      className="group bg-metal-900/50 rounded-2xl overflow-hidden border border-metal-800 hover:border-blue-500/50 transition-all"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={machine.image}
                          alt={machine.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-metal-950 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">
                          {machine.name}
                        </h3>
                        <ul className="space-y-2">
                          {machine.specs.map((spec, specIndex) => (
                            <li key={specIndex} className="flex items-start gap-2 text-metal-400 text-sm">
                              <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visite virtuelle CTA */}
      <section className="section-padding gradient-section">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Visitez notre atelier
            </h2>
            <p className="text-body-lg text-metal-300 mb-8">
              Vous souhaitez voir nos equipements en action ? Contactez-nous pour
              organiser une visite de notre atelier a Saint-Laurent-du-Var.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Planifier une visite
              </Link>
              <a href="tel:+33493194090" className="btn-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                04 93 19 40 90
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
