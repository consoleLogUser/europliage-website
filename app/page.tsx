'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: `rgba(${59 + Math.random() * 80}, ${130 + Math.random() * 50}, 246, ${0.1 + Math.random() * 0.3})`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

// Parallax Image Component
const ParallaxImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffset(scrollProgress * 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-100"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

// Service Card Component with Image
const ServiceCard = ({
  image,
  title,
  description,
  index,
  href,
  alt
}: {
  image: string;
  title: string;
  description: string;
  index: number;
  href: string;
  alt?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link href={href}>
      <div
        ref={ref}
        className="reveal group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
        style={{ transitionDelay: `${index * 0.1}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={alt || title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`} />

        {/* Animated Border */}
        <div className={`absolute inset-0 border-2 transition-all duration-500 rounded-2xl ${isHovered ? 'border-blue-500 shadow-[inset_0_0_30px_rgba(59,130,246,0.3)]' : 'border-white/10'}`} />

        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <div className={`transform transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
            <p className={`text-metal-300 mb-4 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
              {description}
            </p>
            <div className={`inline-flex items-center gap-2 text-blue-400 font-semibold transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <span>Découvrir</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />
      </div>
    </Link>
  );
};

// Realisation Card with hover effect
const RealisationCard = ({ image, title, category, index, alt }: { image: string; title: string; category: string; index: number; alt?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="reveal relative group cursor-pointer"
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={alt || title}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <span className={`inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-3 w-fit transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}`}>
            {category}
          </span>
          <h3 className={`text-xl md:text-2xl font-bold text-white transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-1'}`}>
            {title}
          </h3>
        </div>

        {/* View Icon */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => {
      observer.observe(el);
    });

    // Scroll handler for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      image: '/images-europliage/decoupe-laser-acier.jpg',
      title: 'Decoupe Laser',
      description: 'Technologie de pointe pour une decoupe de precision sur acier, inox et aluminium. Plus de 3000 motifs disponibles.',
      href: '/services#decoupe',
      alt: 'Service de decoupe laser haute precision sur acier - Europliage metallerie Nice'
    },
    {
      image: '/images-europliage/pliage-metal.jpg',
      title: 'Pliage CNC',
      description: 'Pliage de precision jusqu\'a 4 metres de longueur. Technologie CNC pour des angles parfaits.',
      href: '/services#pliage',
      alt: 'Pliage CNC de tole metallique sur presse plieuse professionnelle - Europliage'
    },
    {
      image: '/images-europliage/atelier-1.jpg',
      title: 'Soudure Expert',
      description: 'Soudure TIG, MIG et par point sur tous types de metaux. Assemblages solides et esthetiques.',
      href: '/services#soudure',
      alt: 'Atelier de soudure professionnelle TIG MIG - Europliage metallerie Alpes-Maritimes'
    },
  ];

  const realisations = [
    {
      image: '/images-europliage/realisation-1.jpg',
      title: 'Garde-corps Design',
      category: 'Metallerie',
      alt: 'Garde-corps design en metal thermolaque realise par Europliage - projet Nice Cote d\'Azur'
    },
    {
      image: '/images-europliage/habillage-facade.jpg',
      title: 'Habillage Facade',
      category: 'Architecture',
      alt: 'Habillage facade metallique moderne pour batiment professionnel - Europliage 06'
    },
    {
      image: '/images-europliage/precadre-acier.jpg',
      title: 'Precadres Acier',
      category: 'Industrie',
      alt: 'Precadres acier galvanise pour isolation thermique ITE - fabrication Europliage'
    },
  ];

  const advantages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Qualité Garantie',
      description: 'Contrôle qualité à chaque étape de production',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Réactivité',
      description: 'Devis personnalisé sous 48h',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: '100% Interne',
      description: 'Aucune sous-traitance, tout est fait en interne',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '+34 Ans d\'Expérience',
      description: 'Expertise reconnue depuis 1990',
    },
  ];

  return (
    <>
      {/* Hero Section - Full Screen with Video/Image Background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/atelier-2.jpg"
            alt="Atelier de metallerie Europliage a Saint-Laurent-du-Var - machines de decoupe laser et pliage CNC professionnelles"
            fill
            className="object-cover"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            priority
            sizes="100vw"
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Floating Particles */}
          <FloatingParticles />

          {/* Gradient Orbs - Hidden on mobile for performance */}
          <div
            className="hidden md:block absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
              top: '10%',
              left: '60%',
            }}
          />
          <div
            className="hidden md:block absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
              bottom: '10%',
              left: '20%',
            }}
          />
        </div>

        <div className="container-custom relative z-10 pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 sm:mb-10 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-blue-500"></span>
              </span>
              <span className="text-blue-400 font-medium text-sm sm:text-base">Expert en Métallerie depuis 1990</span>
            </div>

            {/* Main Heading */}
            <h1 className="reveal heading-display text-white mb-8 sm:mb-10 leading-[1.1]" style={{ transitionDelay: '0.1s' }}>
              L&apos;Art du{' '}
              <span className="text-gradient">Métal</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>au Service de
              <br />
              <span className="text-gradient">Vos Projets</span>
            </h1>

            {/* Subheading */}
            <p className="reveal text-metal-300 max-w-2xl text-lg sm:text-xl leading-relaxed mb-10" style={{ transitionDelay: '0.2s' }}>
              De la conception à la finition, nous transformons le métal avec précision
              et savoir-faire. Découpe laser, pliage CNC, soudure et thermolaquage —
              tout est réalisé en interne dans nos ateliers.
            </p>

            {/* CTA Buttons */}
            <div className="reveal flex flex-col sm:flex-row gap-4 sm:gap-5 mb-16" style={{ transitionDelay: '0.3s' }}>
              <Link href="/contact" className="btn-primary text-center justify-center group">
                <span>Demander un Devis</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/realisations" className="btn-secondary text-center justify-center group">
                <span>Voir nos Réalisations</span>
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>

            {/* Stats - Floating Cards */}
            <div
              className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              style={{ transitionDelay: '0.4s' }}
            >
              {[
                { value: 34, suffix: '+', label: 'Années d\'expérience' },
                { value: 100, suffix: '%', label: 'Fabrication interne' },
                { value: 3000, suffix: '+', label: 'Motifs disponibles' },
                { value: 48, suffix: 'h', label: 'Devis personnalisé' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-metal-400 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 animate-bounce">
          <span className="text-metal-500 text-sm">Découvrir</span>
          <div className="w-7 h-12 border-2 border-metal-500 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="section-padding gradient-section relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="reveal section-label mx-auto w-fit mb-6">
              Nos Services
            </div>
            <h2 className="reveal heading-xl text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Solutions Complètes en{' '}
              <span className="text-gradient">Métallerie</span>
            </h2>
            <p className="reveal text-body-lg max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
              Une expertise complète pour tous vos besoins en métallerie et tôlerie industrielle.
              De la pièce unique à la série, nous réalisons vos projets avec précision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          {/* View All Services Link */}
          <div className="reveal text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-3 text-blue-400 font-semibold text-lg group">
              <span>Voir tous nos services</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="reveal section-label mb-6">
                Pourquoi Nous
              </div>
              <h2 className="reveal heading-lg text-white mb-8" style={{ transitionDelay: '0.1s' }}>
                L&apos;Excellence au Service de{' '}
                <span className="text-gradient">Vos Projets</span>
              </h2>
              <p className="reveal text-body-lg mb-10" style={{ transitionDelay: '0.2s' }}>
                Depuis plus de 34 ans, Europliage s&apos;engage à fournir des solutions métalliques
                de haute qualité. Notre maîtrise complète de la chaîne de production garantit
                des résultats exceptionnels.
              </p>

              {/* Advantages List */}
              <div className="reveal stagger-children space-y-6" style={{ transitionDelay: '0.3s' }}>
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/25">
                      <div className="text-white">{advantage.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{advantage.title}</h3>
                      <p className="text-metal-400">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="reveal-right order-1 lg:order-2">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
                  <Image
                    src="/images-europliage/sol-metal.jpg"
                    alt="Realisation sol metallique decoratif - precision et qualite Europliage metallerie Nice 06"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating Cards */}
                <div className="hidden md:block absolute -top-6 -right-6 w-40 h-40 glass rounded-2xl p-6 animate-float shadow-xl">
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-metal-400 text-sm">Couleurs RAL disponibles</div>
                </div>

                <div className="hidden md:block absolute -bottom-6 -left-6 w-48 h-32 glass rounded-2xl p-6 animate-float-reverse shadow-xl">
                  <div className="text-2xl font-bold text-white mb-2">4m</div>
                  <div className="text-metal-400 text-sm">Capacité de pliage maximale</div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl border-2 border-blue-500/20" />
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-purple-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realisations Showcase */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="reveal section-label mb-6">
                Nos Réalisations
              </div>
              <h2 className="reveal heading-lg text-white" style={{ transitionDelay: '0.1s' }}>
                Projets <span className="text-gradient">Récents</span>
              </h2>
            </div>
            <Link href="/realisations" className="reveal inline-flex items-center gap-3 text-blue-400 font-semibold group" style={{ transitionDelay: '0.2s' }}>
              <span>Voir toutes les réalisations</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Realisations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {realisations.map((realisation, index) => (
              <RealisationCard key={realisation.title} {...realisation} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="reveal section-label mx-auto w-fit mb-6">
              Notre Processus
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              De l&apos;Idée à la{' '}
              <span className="text-gradient">Réalisation</span>
            </h2>
          </div>

          <div className="reveal stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Analyse de vos besoins et conseils personnalisés', icon: '💬' },
              { step: '02', title: 'Conception', description: 'Création des plans 2D/3D par notre bureau d\'études', icon: '✏️' },
              { step: '03', title: 'Fabrication', description: 'Production en interne avec contrôle qualité', icon: '⚙️' },
              { step: '04', title: 'Livraison', description: 'Livraison dans les départements 06 et 83', icon: '🚚' },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="card-glass h-full p-8 text-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-blue-500/30">
                  {/* Step Number with Icon */}
                  <div className="relative mb-6">
                    <div className="text-6xl font-bold text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                      {item.step}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-metal-400">{item.description}</p>
                </div>
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/decoupe-laser-acier.jpg"
            alt="Machine de decoupe laser Europliage en action sur plaque acier - technologie haute precision"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-purple-900/95" />
        </div>

        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="reveal heading-xl text-white mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="reveal text-body-lg text-white/80 mb-10 max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
              Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et recevoir
              un devis personnalisé sous 48h. Notre équipe d&apos;experts est à votre écoute.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.2s' }}>
              <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-metal-100 text-center justify-center group">
                <span>Demander un Devis Gratuit</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+33493194090" className="btn-secondary border-white/30 hover:border-white text-center justify-center group">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>04 93 19 40 90</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
