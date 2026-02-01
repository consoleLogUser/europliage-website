'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  project: string;
  image?: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jean-Pierre Martin',
    role: 'Directeur Technique',
    company: 'Menuiseries Azur SARL',
    content: 'Nous travaillons avec Europliage depuis 5 ans pour nos précadres ITE. La qualité est toujours au rendez-vous, les délais sont respectés et leur bureau d\'études nous accompagne parfaitement sur les projets complexes. Un partenaire de confiance.',
    rating: 5,
    project: 'Précadres ITE pour résidence 80 logements',
    date: 'Janvier 2024',
  },
  {
    id: 2,
    name: 'Sophie Durand',
    role: 'Architecte DPLG',
    company: 'Atelier SD Architecture',
    content: 'Pour notre projet de façade en aluminium thermolaqué, Europliage a su répondre à nos exigences esthétiques et techniques. Le choix des 150+ teintes RAL et la qualité du thermolaquage ont fait la différence. Je recommande vivement.',
    rating: 5,
    project: 'Habillage façade immeuble bureaux Nice',
    date: 'Décembre 2023',
  },
  {
    id: 3,
    name: 'Marc Leblanc',
    role: 'Gérant',
    company: 'Ferronnerie Leblanc',
    content: 'Excellent partenaire pour la découpe laser ! Précision remarquable sur nos motifs décoratifs, livraison rapide et tarifs compétitifs. Leur réactivité pour les urgences est un vrai plus pour notre activité.',
    rating: 5,
    project: 'Découpe laser décorative portails et garde-corps',
    date: 'Février 2024',
  },
  {
    id: 4,
    name: 'Pierre Rossi',
    role: 'Chef de Chantier',
    company: 'Bâti Méditerranée',
    content: 'Les couvertines livrées par Europliage sont impeccables. Finition soignée, dimensions exactes, emballage protecteur. On gagne du temps sur le chantier car tout s\'emboîte parfaitement.',
    rating: 5,
    project: 'Couvertines aluminium complexe résidentiel',
    date: 'Novembre 2023',
  },
  {
    id: 5,
    name: 'Nathalie Bertrand',
    role: 'Responsable Achats',
    company: 'Charpente Métallique 06',
    content: 'Collaboration de longue date avec Europliage. Leur capacité à gérer aussi bien les petites séries que les grandes quantités est un atout majeur. Équipe professionnelle et à l\'écoute.',
    rating: 4,
    project: 'Sous-traitance tôlerie industrielle',
    date: 'Octobre 2023',
  },
  {
    id: 6,
    name: 'François Moreau',
    role: 'Artisan Serrurier',
    company: 'Serrurerie Moreau',
    content: 'En tant qu\'artisan, j\'apprécie particulièrement leur flexibilité. Ils acceptent les petites commandes et les délais sont toujours tenus. La qualité de la soudure TIG est excellente.',
    rating: 5,
    project: 'Garde-corps inox et grilles de sécurité',
    date: 'Janvier 2024',
  },
];

// JSON-LD Schema for Reviews
const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.europliage.com/#organization',
  name: 'Europliage',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: testimonials.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: t.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating.toString(),
      bestRating: '5',
    },
    reviewBody: t.content,
    datePublished: t.date,
  })),
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-metal-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal section-label mx-auto w-fit mb-4">
            Ils nous font confiance
          </div>
          <h2 id="testimonials-heading" className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
            Avis de nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="reveal text-body-lg max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            Découvrez les retours d'expérience de nos clients professionnels : architectes, menuisiers, ferronniers et entreprises du bâtiment.
          </p>

          {/* Aggregate Rating */}
          <div className="reveal flex items-center justify-center gap-4 mt-6" style={{ transitionDelay: '0.3s' }}>
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-white">4.9/5</span>
            <span className="text-metal-400">basé sur {testimonials.length} avis</span>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className="glass rounded-2xl p-8 md:p-10 transition-all duration-500"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8">
              "{testimonials[activeIndex].content}"
            </blockquote>

            {/* Project Info */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm text-blue-400">{testimonials[activeIndex].project}</span>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-metal-400">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">{renderStars(testimonials[activeIndex].rating)}</div>
                <span className="text-sm text-metal-400">{testimonials[activeIndex].date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-metal-600 hover:bg-metal-500'
              }`}
              aria-label={`Voir avis ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`glass rounded-xl p-5 text-left transition-all hover:border-blue-500/30 ${
                index === activeIndex ? 'border-blue-500/50 bg-blue-500/5' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/50 to-purple-600/50 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-metal-500">{testimonial.company}</div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-2">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-sm text-metal-400 line-clamp-2">
                "{testimonial.content}"
              </p>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-metal-400 mb-4">
            Vous aussi, faites confiance à Europliage pour vos projets métallerie
          </p>
          <a href="/contact" className="btn-primary inline-flex">
            <span>Demander un Devis</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
