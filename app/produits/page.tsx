'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  materials?: string[];
  color: string;
}

interface Material {
  name: string;
  thickness: string;
  image: string;
  description: string;
}

// Product Card Component with 3D tilt effect
function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-metal-800/80 to-metal-900/80 backdrop-blur-sm border border-white/10"
      style={{
        transform: transform,
        transitionDelay: `${index * 0.1}s`,
        transition: 'transform 0.1s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-metal-900 via-metal-900/50 to-transparent" />

        {/* Floating Badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          style={{ backgroundColor: product.color, color: 'white' }}
        >
          {product.subtitle}
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {product.title}
        </h3>
        <p className="text-metal-300 mb-6 line-clamp-2">
          {product.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {product.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-metal-400">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Materials Pills */}
        {product.materials && (
          <div className="flex flex-wrap gap-2 mb-6">
            {product.materials.map((mat, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-metal-300">
                {mat}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-white transition-colors"
        >
          <span>Demander un devis</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

// Material Card Component
function MaterialCard({ material, index }: { material: Material; index: number }) {
  return (
    <div
      className="reveal group relative overflow-hidden rounded-xl"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={material.image}
          alt={material.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-metal-900 via-metal-900/60 to-metal-900/20" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h4 className="text-xl font-bold text-white mb-1">{material.name}</h4>
        <p className="text-blue-400 text-sm font-medium mb-2">{material.thickness}</p>
        <p className="text-metal-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          {material.description}
        </p>
      </div>
    </div>
  );
}

// Animated Stats Component
function AnimatedStat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-metal-400 text-sm sm:text-base">{label}</div>
    </div>
  );
}

export default function ProduitsPage() {
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

  const products: Product[] = [
    {
      id: 'decoupe-laser',
      title: "Découpe Laser",
      subtitle: "Haute Précision",
      description: "Pièces industrielles et décoratives de haute précision avec fort volume de production. Plus de 3000 motifs disponibles.",
      image: "/images-europliage/decoupe-laser-acier.jpg",
      features: [
        "Remplissages portails",
        "Habillages façades",
        "Pièces sur mesure",
        "+3000 motifs",
        "Crédences design",
        "Logos & enseignes"
      ],
      materials: ["Acier", "Inox", "Aluminium"],
      color: "#3B82F6"
    },
    {
      id: 'pliages',
      title: "Pliages & Habillages",
      subtitle: "Sur Mesure",
      description: "Solutions d'habillage pour la menuiserie et l'agencement. Pliage CNC jusqu'à 4 mètres de longueur.",
      image: "/images-europliage/pliage-metal.jpg",
      features: [
        "Caissons sur mesure",
        "Profilés & cornières",
        "Plats d'habillage",
        "Moulures & tubes",
        "Jusqu'à 4m",
        "Toutes formes"
      ],
      materials: ["Acier", "Alu", "Galva"],
      color: "#10B981"
    },
    {
      id: 'precadres',
      title: "Précadres Acier",
      subtitle: "Isolation",
      description: "Solutions pour l'isolation thermique des bâtiments. Précadres en acier soudé et galvanisé, montés en usine.",
      image: "/images-europliage/precadre-acier.jpg",
      features: [
        "ITE / ITI compatible",
        "Galvanisé à froid",
        "Montage usine",
        "Dimensions libres",
        "Réduction thermique",
        "Pose rapide"
      ],
      materials: ["Acier 15/10", "Galvanisé"],
      color: "#F59E0B"
    },
    {
      id: 'facades',
      title: "Habillages Façades",
      subtitle: "Architecture",
      description: "Habillages métalliques pour façades de bâtiments. Solutions architecturales modernes et durables.",
      image: "/images-europliage/habillage-facade.jpg",
      features: [
        "Design moderne",
        "Thermolaqué",
        "Grande dimension",
        "Anti-corrosion",
        "+250 coloris",
        "Sur plan"
      ],
      materials: ["Aluminium", "Acier", "Composite"],
      color: "#8B5CF6"
    },
    {
      id: 'couvertines',
      title: "Couvertines",
      subtitle: "Protection",
      description: "Protection des murets et acrotères. Couvertines symétriques, asymétriques ou plates en aluminium.",
      image: "/images-europliage/atelier-1.jpg",
      features: [
        "Symétriques",
        "Asymétriques",
        "Appuis fenêtres",
        "Chaperons muraux",
        "Étanchéité",
        "RAL au choix"
      ],
      materials: ["Aluminium", "Acier laqué"],
      color: "#EC4899"
    },
    {
      id: 'tolerie',
      title: "Tôlerie Industrielle",
      subtitle: "Bâtiment",
      description: "Fabrication sur mesure pour le bâtiment et l'industrie. Grilles, garde-corps, verrières et plus.",
      image: "/images-europliage/sol-metal.jpg",
      features: [
        "Grilles ventilation",
        "Garde-corps",
        "Verrières",
        "Trappes staff",
        "Unitaire ou série",
        "Plans 3D"
      ],
      materials: ["Tous métaux"],
      color: "#06B6D4"
    }
  ];

  const materials: Material[] = [
    {
      name: "Acier",
      thickness: "1 à 25 mm",
      image: "/images-europliage/decoupe-laser-acier.jpg",
      description: "Robuste et polyvalent pour tous projets"
    },
    {
      name: "Inox 304L / 316L",
      thickness: "1 à 20 mm",
      image: "/images-europliage/atelier-2.jpg",
      description: "Résistance optimale à la corrosion"
    },
    {
      name: "Aluminium",
      thickness: "1 à 12 mm",
      image: "/images-europliage/pliage-metal.jpg",
      description: "Léger et esthétique, idéal façades"
    },
    {
      name: "Acier Galvanisé",
      thickness: "15/10",
      image: "/images-europliage/precadre-acier.jpg",
      description: "Protection anti-corrosion intégrée"
    }
  ];

  return (
    <>
      {/* Hero Section - Full Screen with Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-metal-950 via-metal-900 to-metal-950" />

        {/* Radial Gradient Accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[200px]" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Floating Geometric Shapes - Hidden on mobile for performance */}
        <div className="hidden md:block absolute top-20 left-20 w-20 h-20 border border-blue-500/30 rounded-lg rotate-45 animate-float" />
        <div className="hidden md:block absolute top-40 right-32 w-16 h-16 border border-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="hidden md:block absolute bottom-32 left-1/4 w-12 h-12 bg-blue-500/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="hidden md:block absolute bottom-40 right-20 w-24 h-24 border-2 border-blue-400/20 rounded-full animate-float-reverse" />
        <div className="hidden md:block absolute top-1/3 right-1/4 w-8 h-8 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center px-4">
          <div className="reveal section-label mx-auto w-fit mb-6">
            Catalogue Produits
          </div>

          <h1 className="reveal heading-display text-white mb-6" style={{ transitionDelay: '0.1s' }}>
            Nos <span className="text-gradient">Produits</span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">Métallerie & Tôlerie</span>
          </h1>

          <p className="reveal text-body-lg max-w-3xl mx-auto mb-10" style={{ transitionDelay: '0.2s' }}>
            Du prototype à la production en série, découvrez notre gamme complète
            de solutions en métallerie industrielle. Qualité, précision et réactivité.
          </p>

          {/* Quick Stats */}
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto" style={{ transitionDelay: '0.3s' }}>
            <AnimatedStat value={9} label="Gammes de produits" />
            <AnimatedStat value={3000} label="Motifs découpés" suffix="+" />
            <AnimatedStat value={250} label="Coloris RAL" suffix="+" />
            <AnimatedStat value={4} label="Mètres max pliage" suffix="m" />
          </div>

          {/* Scroll Indicator */}
          <div className="reveal absolute bottom-10 left-1/2 -translate-x-1/2" style={{ transitionDelay: '0.4s' }}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-12 md:mb-16">
            <div className="reveal section-label mx-auto w-fit mb-4">
              Notre Gamme
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Produits <span className="text-gradient">Sur Mesure</span>
            </h2>
            <p className="reveal text-body max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
              Chaque produit est fabriqué selon vos spécifications exactes,
              avec les meilleurs matériaux et finitions.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="reveal section-label w-fit mb-4">
                Matériaux
              </div>
              <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
                Expertise <span className="text-gradient">Multi-Matériaux</span>
              </h2>
              <p className="reveal text-body-lg mb-8" style={{ transitionDelay: '0.2s' }}>
                Notre atelier est équipé pour travailler tous types de métaux,
                des plus courants aux plus techniques.
              </p>

              {/* Capabilities List */}
              <div className="reveal space-y-4" style={{ transitionDelay: '0.3s' }}>
                {[
                  { label: "Découpe Laser", value: "Acier, Inox, Aluminium" },
                  { label: "Pliage CNC", value: "Jusqu'à 4 mètres" },
                  { label: "Thermolaquage", value: "3800 x 1700 mm max" },
                  { label: "Finitions", value: "+150 coloris RAL" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-blue-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Materials Grid */}
            <div className="grid grid-cols-2 gap-4">
              {materials.map((material, index) => (
                <MaterialCard key={material.name} material={material} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Types Section */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-12">
            <div className="reveal section-label mx-auto w-fit mb-4">
              Flexibilité
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Du Prototype à la <span className="text-gradient">Série</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Unit Production */}
            <div className="reveal-left group relative overflow-hidden rounded-2xl">
              <div className="relative h-80">
                <Image
                  src="/images-europliage/realisation-1.jpg"
                  alt="Pièce unitaire"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-metal-950 via-metal-950/60 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Pièce Unitaire</h3>
                <p className="text-metal-300">
                  Prototypes, pièces uniques et personnalisation.
                  Chaque projet bénéficie de la même attention et qualité.
                </p>
              </div>
            </div>

            {/* Series Production */}
            <div className="reveal-right group relative overflow-hidden rounded-2xl">
              <div className="relative h-80">
                <Image
                  src="/images-europliage/atelier-2.jpg"
                  alt="Production série"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-metal-950 via-metal-950/60 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Production en Série</h3>
                <p className="text-metal-300">
                  Volumes importants avec précision industrielle.
                  Répétabilité et qualité constante sur toute la série.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finishes Showcase */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="reveal glass p-8 md:p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Finitions <span className="text-gradient">Thermolaquage</span>
                </h3>
                <p className="text-metal-300 mb-6">
                  Notre cabine de thermolaquage intégrée vous garantit une finition parfaite
                  avec plus de 150 coloris RAL disponibles et des délais optimisés.
                </p>

                {/* Color Swatches */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {['#1E3A5F', '#2D5A27', '#8B0000', '#1C1C1C', '#F5F5F5', '#FFD700', '#4169E1', '#2F4F4F'].map((color, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-lg shadow-lg border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <ul className="space-y-3">
                  {[
                    "Finitions brillantes, mates ou fine texture",
                    "Dimensions max: 3800 x 1700 mm",
                    "Traitement anti-corrosion inclus",
                    "Délais réduits grâce à l'atelier intégré"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-metal-300">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images-europliage/realisation-3.jpg"
                  alt="Finition thermolaquage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-metal-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/decoupe-laser-acier.jpg"
            alt="Découpe laser"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-metal-950/90 to-metal-950/95" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10 text-center px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="reveal heading-xl text-white mb-6">
              Besoin d'un <span className="text-gradient">Produit Spécifique</span> ?
            </h2>
            <p className="reveal text-body-lg text-white/80 mb-10" style={{ transitionDelay: '0.1s' }}>
              Notre bureau d'études est à votre disposition pour analyser votre projet
              et vous proposer une solution technique et économique adaptée.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.2s' }}>
              <Link href="/contact" className="btn-primary justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Demander un Devis
              </Link>
              <Link href="/services" className="btn-secondary border-white/30 hover:border-white justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Voir nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
