'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
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

// Timeline Item Component
function TimelineItem({ year, title, description, isLeft }: { year: string; title: string; description: string; isLeft: boolean }) {
  return (
    <div className={`reveal flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-bold px-4 py-1 rounded-full mb-2">
          {year}
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-metal-400">{description}</p>
      </div>
      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-metal-800 flex-shrink-0 relative z-10" />
      <div className="flex-1" />
    </div>
  );
}

// Value Card Component
function ValueCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  return (
    <div
      className="reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-metal-800/50 to-metal-900/50 backdrop-blur-sm border border-white/10 p-8"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-metal-300">{description}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
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

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Excellence",
      description: "Engagement total pour la qualité dans chaque réalisation. Contrôles rigoureux à chaque étape de production pour garantir la perfection."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Maîtrise Totale",
      description: "100% de la production en interne. De la conception à la finition, aucune sous-traitance pour un contrôle absolu de la qualité."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Proximité Client",
      description: "Écoute attentive et accompagnement personnalisé. Votre satisfaction est notre priorité, de la conception à la livraison."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Réactivité",
      description: "Délais optimisés grâce à notre atelier intégré. De l'étude à la livraison, nous nous adaptons à vos urgences."
    }
  ];

  return (
    <>
      {/* Hero Section - Full Screen with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/atelier-2.jpg"
            alt="Atelier Europliage"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay with Gradient - Same as homepage */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Gradient Orbs */}
        <div
          className="hidden md:block absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
          }}
        />
        <div
          className="hidden md:block absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            bottom: '20%',
            left: '10%',
          }}
        />

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center px-4">
          <div className="reveal section-label mx-auto w-fit mb-6">
            Notre Histoire
          </div>

          <h1 className="reveal heading-display text-white mb-6" style={{ transitionDelay: '0.1s' }}>
            <span className="text-gradient">Europliage</span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">L'Excellence depuis 1990</span>
          </h1>

          <p className="reveal text-body-lg max-w-3xl mx-auto mb-12" style={{ transitionDelay: '0.2s' }}>
            Plus de 34 ans d'expertise en métallerie et tôlerie industrielle.
            Une entreprise familiale dédiée à l'excellence et à la satisfaction client.
          </p>

          {/* Stats Grid */}
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto" style={{ transitionDelay: '0.3s' }}>
            <AnimatedCounter value={34} suffix="+" label="Années d'expérience" />
            <AnimatedCounter value={100} suffix="%" label="Production interne" />
            <AnimatedCounter value={1500} suffix="+" label="Projets réalisés" />
            <AnimatedCounter value={2} label="Départements livrés" />
          </div>

          {/* Scroll Indicator */}
          <div className="reveal absolute bottom-10 left-1/2 -translate-x-1/2" style={{ transitionDelay: '0.4s' }}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Large Image */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="reveal-left">
              <div className="section-label mb-4">
                Notre ADN
              </div>
              <h2 className="heading-lg text-white mb-6">
                Une Entreprise <span className="text-gradient">Familiale</span>
              </h2>
              <div className="space-y-6 text-metal-300 text-lg">
                <p>
                  Fondée en <strong className="text-white">1990</strong>, Europliage est née de la passion
                  pour le travail du métal et de l'ambition de créer une entreprise différente.
                </p>
                <p>
                  Située au cœur de la <strong className="text-white">Zone Industrielle de Saint-Laurent-du-Var</strong>,
                  notre atelier de 800m² abrite l'ensemble de notre chaîne de production :
                  découpe laser, pliage CNC, soudure et thermolaquage.
                </p>
                <p className="border-l-4 border-blue-500 pl-4 italic">
                  "Notre philosophie : aucune sous-traitance. De la conception à la finition,
                  tout est réalisé en interne pour garantir une qualité irréprochable."
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Bureau d'études", value: "Plans 2D/3D" },
                  { label: "Production", value: "100% Interne" },
                  { label: "Contrôle Qualité", value: "Chaque étape" },
                  { label: "Livraison", value: "06 & 83" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-blue-400 text-sm font-medium mb-1">{item.label}</div>
                    <div className="text-white font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image Collage */}
            <div className="reveal-right relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images-europliage/decoupe-laser-acier.jpg"
                      alt="Découpe laser"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="/images-europliage/pliage-metal.jpg"
                      alt="Pliage métal"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="/images-europliage/atelier-1.jpg"
                      alt="Atelier"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images-europliage/realisation-1.jpg"
                      alt="Réalisation"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-black">800m²</div>
                <div className="text-sm opacity-90">d'atelier équipé</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16">
            <div className="reveal section-label mx-auto w-fit mb-4">
              Nos Valeurs
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Ce qui nous <span className="text-gradient">Définit</span>
            </h2>
            <p className="reveal text-body-lg max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
              Les principes fondamentaux qui guident notre travail au quotidien
              et font la différence pour nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Tour Section */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-12">
            <div className="reveal section-label mx-auto w-fit mb-4">
              Notre Atelier
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Un Outil de Production <span className="text-gradient">Moderne</span>
            </h2>
          </div>

          {/* Large Feature Image */}
          <div className="reveal relative rounded-3xl overflow-hidden mb-8">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images-europliage/atelier-2.jpg"
                alt="Atelier Europliage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-metal-950 via-transparent to-transparent" />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Bureau d'études", desc: "CAO 2D/3D" },
                  { icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z", label: "Découpe Laser", desc: "Haute précision" },
                  { icon: "M4 5a1 1 0 011-1h4a1 1 0 010 2H6v10h4a1 1 0 010 2H5a1 1 0 01-1-1V5zM20 5a1 1 0 00-1-1h-4a1 1 0 000 2h2v10h-2a1 1 0 000 2h4a1 1 0 001-1V5z", label: "Pliage CNC", desc: "Jusqu'à 4m" },
                  { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", label: "Thermolaquage", desc: "+150 RAL" }
                ].map((item, idx) => (
                  <div key={idx} className="glass p-4 rounded-xl text-center">
                    <svg className="w-8 h-8 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <div className="text-white font-bold">{item.label}</div>
                    <div className="text-metal-400 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: "/images-europliage/decoupe-laser-acier.jpg", title: "Découpe Laser", desc: "Machine dernière génération pour une précision au dixième de millimètre" },
              { image: "/images-europliage/pliage-metal.jpg", title: "Pliage CNC", desc: "Presse plieuse numérique pour des angles parfaits jusqu'à 4 mètres" },
              { image: "/images-europliage/realisation-3.jpg", title: "Thermolaquage", desc: "Cabine intégrée pour une finition durable et esthétique" }
            ].map((item, idx) => (
              <div key={idx} className="reveal group relative overflow-hidden rounded-2xl" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-metal-950 via-metal-950/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-metal-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="reveal-left relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden bg-metal-800/50 border border-white/10">
                <Image
                  src="/images-europliage/habillage-facade.jpg"
                  alt="Zone d'intervention"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">Saint-Laurent-du-Var</div>
                    <div className="text-metal-400">Alpes-Maritimes (06)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="reveal-right">
              <div className="section-label mb-4">
                Zone de Livraison
              </div>
              <h2 className="heading-lg text-white mb-6">
                Nous Intervenons dans le <span className="text-gradient">Sud-Est</span>
              </h2>
              <p className="text-metal-300 text-lg mb-8">
                Depuis notre atelier de Saint-Laurent-du-Var, nous livrons et installons
                vos réalisations dans toute la région PACA.
              </p>

              <div className="space-y-6">
                {[
                  {
                    dept: "Alpes-Maritimes (06)",
                    cities: "Nice, Cannes, Antibes, Grasse, Saint-Laurent-du-Var...",
                    highlight: true
                  },
                  {
                    dept: "Var (83)",
                    cities: "Toulon, Fréjus, Saint-Raphaël, Draguignan...",
                    highlight: false
                  }
                ].map((zone, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl border ${zone.highlight ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/10'}`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-3 h-3 rounded-full ${zone.highlight ? 'bg-blue-500' : 'bg-metal-500'}`} />
                      <h4 className="text-xl font-bold text-white">{zone.dept}</h4>
                    </div>
                    <p className="text-metal-400 pl-7">{zone.cities}</p>
                  </div>
                ))}
              </div>

              <p className="text-metal-400 mt-6 text-sm">
                * Livraison possible dans d'autres départements sur demande.
                Contactez-nous pour plus d'informations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="reveal section-label mx-auto w-fit mb-4">
                Informations
              </div>
              <h2 className="reveal heading-lg text-white" style={{ transitionDelay: '0.1s' }}>
                Mentions <span className="text-gradient">Légales</span>
              </h2>
            </div>

            <div className="reveal glass p-8 md:p-10 rounded-3xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: "Raison sociale", value: "EUROPLIAGE" },
                  { label: "Forme juridique", value: "SAS" },
                  { label: "SIRET", value: "379 087 976" },
                  { label: "Capital social", value: "50 000 €" },
                  { label: "RCS", value: "Antibes 379 087 976" },
                  { label: "Création", value: "Août 1990" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="text-metal-400 text-sm mb-1">{item.label}</div>
                    <div className="text-white font-bold text-lg">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <div className="text-metal-400 text-sm mb-2">Adresse</div>
                <div className="text-white">
                  ZI secteur D12 - Allée des Santonniers<br />
                  06700 Saint-Laurent-du-Var
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/sol-metal.jpg"
            alt="Réalisation métallique"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-metal-950/90 to-metal-950/95" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10 text-center px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="reveal heading-xl text-white mb-6">
              Travaillons <span className="text-gradient">Ensemble</span>
            </h2>
            <p className="reveal text-body-lg text-white/80 mb-10" style={{ transitionDelay: '0.1s' }}>
              Confiez-nous votre projet et bénéficiez de notre expertise reconnue
              depuis plus de 34 ans. Devis gratuit sous 48h.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.2s' }}>
              <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-metal-100 justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contactez-nous
              </Link>
              <Link href="/realisations" className="btn-secondary border-white/30 hover:border-white justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Voir nos Réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
