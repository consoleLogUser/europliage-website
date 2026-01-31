'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Parallax Section Component
const ParallaxSection = ({
  children,
  backgroundImage,
  overlayColor = 'from-black/80 via-black/60 to-black/80'
}: {
  children: React.ReactNode;
  backgroundImage: string;
  overlayColor?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffset(scrollProgress * 100 - 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          style={{ transform: `translateY(${offset}px) scale(1.2)` }}
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Service Feature Card
const ServiceFeatureCard = ({
  icon,
  title,
  description,
  index
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="reveal group"
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-full p-6 rounded-2xl transition-all duration-500 ${isHovered ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/10'} border backdrop-blur-sm`}>
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${isHovered ? 'bg-blue-500 scale-110 rotate-3' : 'bg-blue-500/20'}`}>
          <div className="text-white">{icon}</div>
        </div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-metal-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function ServicesPage() {
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

  const services = [
    {
      id: 'decoupe',
      title: 'Découpe Laser',
      subtitle: 'Précision Micrométrique',
      description: 'Notre technologie de découpe laser de dernière génération permet une précision exceptionnelle sur tous types de métaux. Acier, inox, aluminium - nous découpons avec une finesse remarquable pour des pièces parfaites.',
      image: '/images-europliage/decoupe-laser-acier.jpg',
      features: [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Précision 0.1mm', description: 'Tolérances serrées' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" /></svg>, title: '3000+ Motifs', description: 'Catalogue complet' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: 'Multi-matériaux', description: 'Acier, inox, alu' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Épaisseur max', description: 'Jusqu\'à 25mm' },
      ],
      stats: [
        { value: '0.1', unit: 'mm', label: 'Précision' },
        { value: '25', unit: 'mm', label: 'Épaisseur max' },
        { value: '3000', unit: '+', label: 'Motifs' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'pliage',
      title: 'Pliage CNC',
      subtitle: 'Angles Parfaits',
      description: 'Nos presses plieuses CNC de dernière génération garantissent des angles précis et une répétabilité parfaite. Idéal pour vos productions en série ou pièces uniques avec une qualité constante.',
      image: '/images-europliage/pliage-metal.jpg',
      features: [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>, title: '4 mètres', description: 'Capacité maximale' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, title: 'CNC', description: 'Programmation précise' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, title: 'Répétabilité', description: 'Qualité série' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Formes complexes', description: 'Sans limites' },
      ],
      stats: [
        { value: '4', unit: 'm', label: 'Longueur max' },
        { value: '±0.5', unit: '°', label: 'Précision angle' },
        { value: '320', unit: 't', label: 'Force' },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'soudure',
      title: 'Soudure Expert',
      subtitle: 'Assemblages Durables',
      description: 'Nos soudeurs certifiés maîtrisent toutes les techniques de soudure pour garantir des assemblages solides, esthétiques et durables sur tous types de métaux. Un savoir-faire reconnu.',
      image: '/images-europliage/atelier-1.jpg',
      features: [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>, title: 'TIG Précision', description: 'Soudure fine' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'MIG/MAG', description: 'Productivité' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>, title: 'Par point', description: 'Assemblage rapide' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>, title: 'Certifiés', description: 'Qualité garantie' },
      ],
      stats: [
        { value: '3', unit: '', label: 'Techniques' },
        { value: '100', unit: '%', label: 'Contrôle' },
        { value: '34', unit: '+', label: 'Années exp.' },
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'thermolaquage',
      title: 'Thermolaquage',
      subtitle: 'Finitions Premium',
      description: 'Notre atelier de thermolaquage offre une finition professionnelle avec plus de 150 couleurs RAL. Un revêtement durable et résistant aux intempéries pour une protection optimale.',
      image: '/images-europliage/sol-metal.jpg',
      features: [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>, title: '150+ Couleurs', description: 'Palette RAL complète' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, title: 'Finitions', description: 'Mat, brillant, texturé' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Résistance UV', description: 'Protection longue durée' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>, title: 'Dimensions max', description: '3800 x 1700 mm' },
      ],
      stats: [
        { value: '150', unit: '+', label: 'Couleurs RAL' },
        { value: '3.8', unit: 'm', label: 'Longueur max' },
        { value: '10', unit: 'ans', label: 'Garantie' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'bureau-etudes',
      title: 'Bureau d\'Études',
      subtitle: 'Conception Sur Mesure',
      description: 'Notre bureau d\'études intégré traite vos plans 2D et 3D avec expertise. Nous acceptons tous formats : fichiers DXF, PDF ou même gabarits physiques pour une précision maximale.',
      image: '/images-europliage/atelier-2.jpg',
      features: [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>, title: 'CAO 2D/3D', description: 'Modélisation complète' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, title: 'DXF & PDF', description: 'Tous formats acceptés' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: 'Optimisation', description: 'Réduction des chutes' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, title: 'Conseils', description: 'Expertise technique' },
      ],
      stats: [
        { value: '48', unit: 'h', label: 'Devis' },
        { value: '100', unit: '%', label: 'Sur mesure' },
        { value: '0', unit: '', label: 'Erreurs tolérées' },
      ],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Réception', description: 'Plans, DXF ou gabarits', icon: '📥' },
    { step: '02', title: 'Études', description: 'Retravail 2D/3D', icon: '✏️' },
    { step: '03', title: 'Validation', description: 'BAT si nécessaire', icon: '✅' },
    { step: '04', title: 'Fabrication', description: 'Découpe, pliage, soudure', icon: '⚙️' },
    { step: '05', title: 'Finition', description: 'Thermolaquage', icon: '🎨' },
    { step: '06', title: 'Contrôle', description: 'Qualité garantie', icon: '🔍' },
    { step: '07', title: 'Livraison', description: '06 & 83', icon: '🚚' },
  ];

  return (
    <>
      {/* Hero Section with Parallax Background */}
      <ParallaxSection backgroundImage="/images-europliage/decoupe-laser-acier.jpg">
        <section className="min-h-[70vh] md:min-h-[80vh] flex items-center pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="container-custom px-4 sm:px-0">
            <div className="max-w-4xl">
              <div className="reveal section-label mb-6">
                Nos Services
              </div>
              <h1 className="reveal heading-display text-white mb-6" style={{ transitionDelay: '0.1s' }}>
                Solutions Complètes en{' '}
                <span className="text-gradient">Métallerie</span>
              </h1>
              <p className="reveal text-body-lg max-w-2xl mb-10" style={{ transitionDelay: '0.2s' }}>
                De la conception à la finition, nous maîtrisons l&apos;ensemble de la chaîne de production.
                Découvrez nos services de pointe pour tous vos projets métalliques.
              </p>
              <div className="reveal flex flex-wrap gap-4" style={{ transitionDelay: '0.3s' }}>
                <Link href="/contact" className="btn-primary">
                  <span>Demander un Devis</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="#services" className="btn-secondary">
                  <span>Explorer nos services</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Services Grid - Each service gets a full section */}
      <div id="services">
        {services.map((service, serviceIndex) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding relative overflow-hidden ${serviceIndex % 2 === 0 ? 'gradient-section' : 'gradient-bg'}`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 dot-pattern opacity-20" />

            <div className="container-custom relative z-10 px-4 sm:px-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${serviceIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={serviceIndex % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`reveal${serviceIndex % 2 === 1 ? '-right' : '-left'}`}>
                    {/* Badge */}
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r ${service.color} bg-opacity-20 text-white border border-white/10`}>
                      {service.subtitle}
                    </span>

                    <h2 className="heading-xl text-white mb-6">{service.title}</h2>
                    <p className="text-body-lg mb-10">{service.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {service.stats.map((stat, index) => (
                        <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-3xl font-bold text-white">
                            {stat.value}<span className="text-blue-400">{stat.unit}</span>
                          </div>
                          <div className="text-metal-400 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature, index) => (
                        <ServiceFeatureCard key={index} {...feature} index={index} />
                      ))}
                    </div>

                    <Link href="/contact" className="btn-primary">
                      <span>Demander un Devis</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`reveal${serviceIndex % 2 === 1 ? '-left' : '-right'} ${serviceIndex % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    {/* Main Image */}
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Floating Label */}
                      <div className={`absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-gradient-to-r ${service.color} backdrop-blur-sm`}>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/80">{service.subtitle}</p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -z-10 top-4 ${serviceIndex % 2 === 0 ? '-right-4' : '-left-4'} w-full h-full rounded-3xl border-2 border-blue-500/20`} />
                    <div className={`absolute -z-10 -bottom-4 ${serviceIndex % 2 === 0 ? 'right-4' : 'left-4'} w-full h-full rounded-3xl border-2 border-purple-500/20`} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16 md:mb-20">
            <div className="reveal section-label mx-auto w-fit mb-6">
              Notre Processus
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              De la Commande à la{' '}
              <span className="text-gradient">Livraison</span>
            </h2>
            <p className="reveal text-body-lg max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
              Un processus éprouvé pour garantir qualité et respect des délais
            </p>
          </div>

          <div className="reveal stagger-children">
            {/* Desktop Process - Horizontal */}
            <div className="hidden lg:flex items-center justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 -translate-y-1/2" />

              {processSteps.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30 mb-4 hover:scale-110 transition-transform cursor-pointer">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-metal-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Process - Grid */}
            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
              {processSteps.map((item, index) => (
                <div key={index} className="card-glass p-5 text-center transition-all duration-300 hover:bg-white/10">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold text-blue-500/50 mb-1">{item.step}</div>
                  <div className="text-base font-bold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-metal-400">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Zone Section */}
      <ParallaxSection backgroundImage="/images-europliage/atelier-2.jpg" overlayColor="from-blue-900/95 via-blue-800/90 to-purple-900/95">
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="reveal-left card-glass p-8 lg:p-10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="heading-md text-white mb-4">Zones de Livraison</h3>
                <p className="text-body mb-8">
                  Service de livraison professionnel dans les départements suivants
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">06</div>
                    <div>
                      <div className="font-semibold text-white">Alpes-Maritimes</div>
                      <div className="text-sm text-metal-400">Livraison dans tout le département</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">83</div>
                    <div>
                      <div className="font-semibold text-white">Var</div>
                      <div className="text-sm text-metal-400">Livraison dans tout le département</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal-right card-glass p-8 lg:p-10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="heading-md text-white mb-4">Retrait en Atelier</h3>
                <p className="text-body mb-8">
                  Possibilité de récupérer directement vos commandes dans nos ateliers
                </p>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="font-semibold text-white text-lg mb-3">Europliage</div>
                  <div className="text-metal-400 leading-relaxed mb-4">
                    ZI secteur D12<br />
                    Allée des Santonniers<br />
                    06700 Saint-Laurent-du-Var
                  </div>
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                    <a href="tel:+33493194090" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      04 93 19 40 90
                    </a>
                    <a href="mailto:commande@europliage.com" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-cta" />
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="reveal heading-xl text-white mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="reveal text-body-lg text-white/80 mb-10 max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Contactez notre bureau d&apos;études pour discuter de votre projet
              et recevoir un devis personnalisé sous 48h.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.2s' }}>
              <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-metal-100 text-center justify-center">
                <span>Demander un Devis</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/produits" className="btn-secondary border-white/30 hover:border-white text-center justify-center">
                <span>Voir nos Produits</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
