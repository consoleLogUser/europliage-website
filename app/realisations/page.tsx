'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Lightbox Component
const Lightbox = ({
  image,
  title,
  category,
  onClose,
  onPrev,
  onNext
}: {
  image: string;
  title: string;
  category: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation */}
      <button
        onClick={onPrev}
        className="absolute left-6 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="absolute right-6 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Container */}
      <div className="relative z-10 max-w-6xl max-h-[85vh] mx-4">
        <div className="relative aspect-[4/3] w-full max-h-[70vh]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain rounded-2xl"
            sizes="(max-width: 1200px) 90vw, 1200px"
          />
        </div>
        <div className="mt-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-3">
            {category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({
  project,
  index,
  onClick,
  size = 'normal'
}: {
  project: {
    image: string;
    title: string;
    category: string;
    description: string;
    features: string[];
    location: string;
  };
  index: number;
  onClick: () => void;
  size?: 'normal' | 'large' | 'tall';
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const heightClass = size === 'large' ? 'h-[500px] md:h-[600px]' : size === 'tall' ? 'h-[400px] md:h-[500px]' : 'h-[350px] md:h-[400px]';

  return (
    <div
      ref={ref}
      className={`reveal relative group cursor-pointer ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${heightClass} rounded-2xl overflow-hidden`}>
        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />

        {/* Border Glow */}
        <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${isHovered ? 'border-blue-500 shadow-[inset_0_0_40px_rgba(59,130,246,0.2)]' : 'border-white/10'}`} />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Top - Category & Location */}
          <div className="flex items-start justify-between">
            <span className={`inline-block px-3 py-1.5 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-80'}`}>
              {project.category}
            </span>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {project.location}
            </span>
          </div>

          {/* Bottom - Title & Description */}
          <div>
            <h3 className={`text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
              {project.title}
            </h3>
            <p className={`text-metal-300 text-sm mb-4 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
              {project.description}
            </p>

            {/* Features */}
            <div className={`flex flex-wrap gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {project.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white/70 text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* View Icon */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Category Filter Button
const FilterButton = ({
  label,
  count,
  isActive,
  onClick
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
      isActive
        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
        : 'bg-white/5 text-metal-300 hover:bg-white/10 hover:text-white border border-white/10'
    }`}
  >
    <span>{label}</span>
    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
      {count}
    </span>
  </button>
);

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'Tous', count: 9 },
    { id: 'metallerie', label: 'Métallerie', count: 3 },
    { id: 'tolerie', label: 'Tôlerie', count: 2 },
    { id: 'thermolaquage', label: 'Thermolaquage', count: 2 },
    { id: 'structure', label: 'Structure', count: 2 },
  ];

  const projects = [
    {
      category: 'Métallerie',
      categoryId: 'metallerie',
      title: 'Garde-corps Design Contemporain',
      image: '/images-europliage/realisation-1.jpg',
      description: 'Fabrication et pose de garde-corps en inox brossé pour une résidence neuve avec vue mer.',
      features: ['Inox 316L', '15 mètres linéaires', 'Design épuré', 'Certification NF'],
      location: 'Antibes (06)'
    },
    {
      category: 'Architecture',
      categoryId: 'metallerie',
      title: 'Habillage Façade Commerciale',
      image: '/images-europliage/habillage-facade.jpg',
      description: 'Conception et installation d\'un habillage de façade moderne pour un commerce.',
      features: ['Aluminium composite', 'Découpe laser personnalisée', 'Finition RAL', 'Pose complète'],
      location: 'Nice (06)'
    },
    {
      category: 'Industrie',
      categoryId: 'tolerie',
      title: 'Précadres Acier Sur Mesure',
      image: '/images-europliage/precadre-acier.jpg',
      description: 'Fabrication de précadres en acier galvanisé pour projet d\'isolation thermique.',
      features: ['Acier galvanisé', 'Sur mesure', 'ITE compatible', 'Lot de 50 unités'],
      location: 'Saint-Laurent-du-Var (06)'
    },
    {
      category: 'Métallerie',
      categoryId: 'metallerie',
      title: 'Escalier Hélicoïdal Design',
      image: '/images-europliage/atelier-1.jpg',
      description: 'Conception et réalisation d\'un escalier en colimaçon pour accès mezzanine.',
      features: ['Acier galvanisé', 'Hauteur 4m', 'Marches antidérapantes', 'Certification ERP'],
      location: 'Cannes (06)'
    },
    {
      category: 'Thermolaquage',
      categoryId: 'thermolaquage',
      title: 'Mobilier Urbain',
      image: '/images-europliage/sol-metal.jpg',
      description: 'Traitement thermolaquage de bancs et mobilier urbain pour résistance aux intempéries.',
      features: ['100 pièces', 'RAL 7016', 'Prétraitement zinc', 'Garantie 10 ans'],
      location: 'Saint-Laurent-du-Var (06)'
    },
    {
      category: 'Structure',
      categoryId: 'structure',
      title: 'Portail Coulissant Motorisé',
      image: '/images-europliage/pliage-metal.jpg',
      description: 'Fabrication d\'un portail coulissant sur mesure avec motorisation intégrée.',
      features: ['Largeur 5m', 'Acier thermolaqué', 'Motorisation', 'Contrôle d\'accès'],
      location: 'Valbonne (06)'
    },
    {
      category: 'Tôlerie',
      categoryId: 'tolerie',
      title: 'Capots Machines Industrielles',
      image: '/images-europliage/decoupe-laser-acier.jpg',
      description: 'Série de capots de protection pour lignes de production avec pliage précis.',
      features: ['Acier 3mm', '40 unités', 'Pliage CNC', 'Livraison échelonnée'],
      location: 'Grasse (06)'
    },
    {
      category: 'Thermolaquage',
      categoryId: 'thermolaquage',
      title: 'Brise-Vue Décoratif',
      image: '/images-europliage/realisation-3.jpg',
      description: 'Création de panneaux brise-vue avec motifs personnalisés et finition premium.',
      features: ['Motif sur mesure', 'Aluminium 3mm', 'RAL personnalisé', '8m²'],
      location: 'Monaco (MC)'
    },
    {
      category: 'Structure',
      categoryId: 'structure',
      title: 'Verrière Atelier',
      image: '/images-europliage/atelier-2.jpg',
      description: 'Fabrication et pose d\'une verrière style atelier pour séparation d\'espaces.',
      features: ['Acier noir mat', '6 carreaux', 'Verre trempé', 'Sur mesure'],
      location: 'Mougins (06)'
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categoryId === activeFilter);

  const stats = [
    { value: '850+', label: 'Projets réalisés' },
    { value: '34', label: 'Années d\'expérience' },
    { value: '100%', label: 'Clients satisfaits' },
    { value: '06/83', label: 'Départements couverts' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/realisation-1.jpg"
            alt="Réalisations Europliage"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal section-label mx-auto w-fit mb-6">
              Portfolio
            </div>
            <h1 className="reveal heading-display text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Nos <span className="text-gradient">Réalisations</span>
            </h1>
            <p className="reveal text-body-lg max-w-2xl mx-auto mb-10" style={{ transitionDelay: '0.2s' }}>
              Découvrez notre savoir-faire à travers une sélection de projets
              réalisés dans les Alpes-Maritimes et le Var
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" style={{ transitionDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-metal-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 py-6 bg-metal-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="container-custom px-4 sm:px-0">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <FilterButton
                key={cat.id}
                label={cat.label}
                count={cat.count}
                isActive={activeFilter === cat.id}
                onClick={() => setActiveFilter(cat.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          {/* Masonry-like Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
                onClick={() => setLightboxIndex(index)}
                size={index === 0 ? 'large' : index % 4 === 1 ? 'tall' : 'normal'}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Aucun projet trouvé</h3>
              <p className="text-metal-400 mb-8">Essayez un autre filtre ou consultez tous nos projets</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="btn-primary"
              >
                Voir tous les projets
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16">
            <div className="reveal section-label mx-auto w-fit mb-6">
              Témoignages
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Ils Nous Ont <span className="text-gradient">Fait Confiance</span>
            </h2>
          </div>

          <div className="reveal stagger-children grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote: "Travail impeccable sur notre porte blindée. Équipe professionnelle et délais respectés. Je recommande vivement.",
                author: "M. Dubois",
                role: "Particulier",
                location: "Nice"
              },
              {
                quote: "Excellent partenaire pour nos besoins industriels. Qualité constante et réactivité exemplaire depuis 5 ans.",
                author: "Mme Bernard",
                role: "Directrice Production",
                location: "Grasse"
              },
              {
                quote: "Superbe travail sur notre escalier métallique. Un vrai savoir-faire et des finitions parfaites.",
                author: "M. Martin",
                role: "Architecte",
                location: "Cannes"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card-glass p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-6xl text-blue-500/10 font-serif">&quot;</div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-metal-300 mb-6 italic leading-relaxed relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-metal-400">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/atelier-2.jpg"
            alt="Atelier"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-purple-900/95" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10 text-center px-4 sm:px-0">
          <h2 className="reveal heading-xl text-white mb-6">
            Votre Projet, Notre Expertise
          </h2>
          <p className="reveal text-body-lg text-white/80 mb-10 max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Rejoignez nos nombreux clients satisfaits et confiez-nous
            la réalisation de votre projet métallique
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.2s' }}>
            <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-metal-100 justify-center">
              <span>Démarrer Votre Projet</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+33493194090" className="btn-secondary border-white/30 hover:border-white justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>04 93 19 40 90</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          image={filteredProjects[lightboxIndex].image}
          title={filteredProjects[lightboxIndex].title}
          category={filteredProjects[lightboxIndex].category}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(lightboxIndex === 0 ? filteredProjects.length - 1 : lightboxIndex - 1)}
          onNext={() => setLightboxIndex(lightboxIndex === filteredProjects.length - 1 ? 0 : lightboxIndex + 1)}
        />
      )}
    </>
  );
}
