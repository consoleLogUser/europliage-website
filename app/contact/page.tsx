'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Floating Input Component
function FloatingInput({
  id,
  name,
  type = 'text',
  label,
  required = false,
  value,
  onChange,
  placeholder
}: {
  id: string;
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value;

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? placeholder : ''}
        className={`
          w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-metal-500
          transition-all duration-300 outline-none
          ${isActive ? 'border-blue-500 bg-white/10' : 'border-white/10 hover:border-white/20'}
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none
          ${isActive
            ? '-top-2.5 text-xs bg-metal-900 px-2 text-blue-400'
            : 'top-4 text-metal-400'
          }
        `}
      >
        {label}{required && ' *'}
      </label>
    </div>
  );
}

// Contact Card Component
function ContactCard({
  icon,
  title,
  content,
  link,
  linkText,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  linkText?: string;
  delay: number;
}) {
  return (
    <div
      className="reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-metal-800/50 to-metal-900/50 backdrop-blur-sm border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Hover Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-metal-400 whitespace-pre-line mb-4">{content}</p>
        {link && linkText && (
          <a
            href={link}
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group/link"
          >
            {linkText}
            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const subjects = [
    { value: '', label: 'Type de projet'},
    { value: 'decoupe-laser', label: 'Decoupe Laser' },
    { value: 'pliage', label: 'Pliage CNC' },
    { value: 'soudure', label: 'Soudure' },
    { value: 'thermolaquage', label: 'Thermolaquage' },
    { value: 'couvertines', label: 'Couvertines' },
    { value: 'precadres', label: 'Precadres' },
    { value: 'enseignes', label: 'Enseignes et Lettrages' },
    { value: 'brise-vue', label: 'Brise-vue et Claustras' },
    { value: 'autre', label: 'Autre demande' },
  ];

  return (
    <>
      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-metal-950 via-metal-900 to-metal-950" />

        {/* Radial Gradient Accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[200px]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Floating Geometric Shapes - Hidden on mobile for performance */}
        <div className="hidden md:block absolute top-20 left-20 w-20 h-20 border border-blue-500/30 rounded-lg rotate-45 animate-float" />
        <div className="hidden md:block absolute top-40 right-32 w-16 h-16 border border-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="hidden md:block absolute bottom-32 left-1/4 w-12 h-12 bg-blue-500/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="hidden md:block absolute bottom-40 right-20 w-24 h-24 border-2 border-blue-400/20 rounded-full animate-float-reverse" />
        <div className="hidden md:block absolute top-1/3 right-1/4 w-8 h-8 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />

        <div className="container-custom relative z-10 px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="reveal section-label mb-6">
                Contactez-nous
              </div>

              <h1 className="reveal heading-display text-white mb-6" style={{ transitionDelay: '0.1s' }}>
                Parlons de Votre{' '}
                <span className="text-gradient">Projet</span>
              </h1>

              <p className="reveal text-body-lg mb-10" style={{ transitionDelay: '0.2s' }}>
                Notre equipe est a votre ecoute pour repondre a vos questions
                et vous accompagner dans la realisation de vos projets metalliques.
                Devis gratuit sous 48h.
              </p>

              {/* Quick Contact Cards */}
              <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transitionDelay: '0.3s' }}>
                <a
                  href="tel:+33493194090"
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-metal-400 text-sm">Telephone</div>
                    <div className="text-white font-bold">04 93 19 40 90</div>
                  </div>
                </a>

                <a
                  href="mailto:commande@europliage.com"
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-metal-400 text-sm">Email</div>
                    <div className="text-white font-bold">commande@europliage.com</div>
                  </div>
                </a>
              </div>

              {/* Guarantee Badge */}
              <div className="reveal mt-8 flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30" style={{ transitionDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold">Reponse garantie sous 48h</div>
                  <div className="text-blue-400/80 text-sm">Devis detaille et personnalise</div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="reveal-right">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />

                <div className="relative glass p-8 md:p-10 rounded-3xl">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Demande de <span className="text-gradient">Devis</span>
                  </h2>

                  {submitStatus === 'success' && (
                    <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="flex items-center gap-4 text-green-400">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Message envoye !</div>
                          <div className="text-green-400/80">Nous vous repondrons sous 48h.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FloatingInput
                        id="name"
                        name="name"
                        label="Nom complet"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                      />
                      <FloatingInput
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FloatingInput
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Telephone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                      />
                      <FloatingInput
                        id="company"
                        name="company"
                        label="Societe"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Votre entreprise"
                      />
                    </div>

                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={`
                          w-full px-4 py-4 bg-white/5 border rounded-xl text-white appearance-none cursor-pointer
                          transition-all duration-300 outline-none
                          ${formData.subject ? 'border-blue-500 bg-white/10' : 'border-white/10 hover:border-white/20'}
                        `}
                      >
                        {subjects.map((subject) => (
                          <option key={subject.value} value={subject.value} className="bg-gray-900 text-white">
                            {subject.label}
                          </option>
                        ))}
                      </select>
                      <label
                        htmlFor="subject"
                        className={`
                          absolute left-4 transition-all duration-300 pointer-events-none
                          ${formData.subject
                            ? '-top-2.5 text-xs bg-metal-900 px-2 text-blue-400'
                            : 'top-4 text-metal-400'
                          }
                        `}
                      >
                        Type de projet *
                      </label>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-metal-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder={formData.message ? '' : ''}
                        className={`
                          w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-metal-500 resize-none
                          transition-all duration-300 outline-none
                          ${formData.message ? 'border-blue-500 bg-white/10' : 'border-white/10 hover:border-white/20'}
                        `}
                      />
                      <label
                        htmlFor="message"
                        className={`
                          absolute left-4 transition-all duration-300 pointer-events-none
                          ${formData.message
                            ? '-top-2.5 text-xs bg-metal-900 px-2 text-blue-400'
                            : 'top-4 text-metal-400'
                          }
                        `}
                      >
                        Votre message *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group py-4"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <>
                          <span>Envoyer ma demande</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-metal-500 text-center">
                      * Champs obligatoires. Vos donnees restent confidentielles.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-12">
            <div className="reveal section-label mx-auto w-fit mb-4">
              Informations
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Comment nous <span className="text-gradient">Joindre</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard
              icon={
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Adresse"
              content="ZI secteur D12 Allee des Santonniers 06700 Saint-Laurent-du-Var"
              link="https://maps.google.com/?q=43.70251167804127,7.1822976871426665"
              linkText="Itineraire"
              delay={0}
            />
            <ContactCard
              icon={
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Telephone"
              content="04 93 19 40 90"
              link="tel:+33493194090"
              linkText="Appeler"
              delay={0.1}
            />
            <ContactCard
              icon={
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Email"
              content="commande@europliage.com"
              link="mailto:commande@europliage.com"
              linkText="Envoyer un email"
              delay={0.2}
            />
            <ContactCard
              icon={
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Horaires"
              content='Lun - Ven: 8h - 12h / 14h - 18h Samedi - Dimanche: Fermé'
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container-custom relative z-10 px-4 sm:px-0">
          <div className="text-center mb-12">
            <div className="reveal section-label mx-auto w-fit mb-4">
              Localisation
            </div>
            <h2 className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
              Nous <span className="text-gradient">Trouver</span>
            </h2>
            <p className="reveal text-body max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
              Situes dans la Zone Industrielle de Saint-Laurent-du-Var,
              nous sommes facilement accessibles depuis Nice et toute la Cote d'Azur.
            </p>
          </div>

          <div className="reveal grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d7.1822976871426665!3d43.70251167804127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzA5LjAiTiA3wrAxMCc1Ni4zIkU!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Access Info */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Acces
                </h3>
                <ul className="space-y-3 text-metal-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Sortie autoroute A8 - Saint-Laurent-du-Var</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>A 10 min de l'aeroport Nice Cote d'Azur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Parking gratuit sur place</span>
                  </li>
                </ul>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Horaires d'ouverture
                </h3>
                <div className="space-y-2">
                  {[
                    { day: 'Lundi - Vendredi', hours: '8h00 - 12h00 / 14h00 - 18h00', open: true },
                    { day: 'Samedi', hours: 'Ferme', open: false },
                    { day: 'Dimanche', hours: 'Ferme', open: false },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="text-white">{item.day}</span>
                      <span className={item.open ? 'text-green-400' : 'text-metal-500'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=43.70251167804127,7.1822976871426665"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images-europliage/decoupe-laser-acier.jpg"
            alt="Decoupe laser"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-metal-950/90 to-metal-950/95" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-custom relative z-10 text-center px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="reveal heading-xl text-white mb-6">
              Pret a <span className="text-gradient">Demarrer</span> ?
            </h2>
            <p className="reveal text-body-lg text-white/80 mb-10" style={{ transitionDelay: '0.1s' }}>
              Que vous ayez un projet precis ou une simple question,
              notre equipe est la pour vous accompagner.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.2s' }}>
              <a href="tel:+33493194090" className="btn-primary bg-white text-blue-600 hover:bg-metal-100 justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appelez-nous
              </a>
              <Link href="/realisations" className="btn-secondary border-white/30 hover:border-white justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Voir nos Realisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
