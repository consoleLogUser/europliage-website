'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Découpe Laser', href: '/services#decoupe' },
      { name: 'Pliage CNC', href: '/services#pliage' },
      { name: 'Soudure', href: '/services#soudure' },
      { name: 'Thermolaquage', href: '/services#thermolaquage' },
      { name: 'Bureau d\'Études', href: '/services#bureau-etudes' },
    ],
    produits: [
      { name: 'Couvertines', href: '/produits#couvertines' },
      { name: 'Précadres', href: '/produits#precadres' },
      { name: 'Enseignes', href: '/produits#enseignes' },
      { name: 'Brise-vue', href: '/produits#brise-vue' },
      { name: 'Sur Mesure', href: '/produits#sur-mesure' },
    ],
    company: [
      { name: 'À Propos', href: '/a-propos' },
      { name: 'Réalisations', href: '/realisations' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="relative bg-metal-950 border-t border-metal-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div
          className="hidden md:block absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            bottom: '-30%',
            right: '-10%',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-4">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 5a1 1 0 011-1h4a1 1 0 010 2H6v10h4a1 1 0 010 2H5a1 1 0 01-1-1V5zM20 5a1 1 0 00-1-1h-4a1 1 0 000 2h2v10h-2a1 1 0 000 2h4a1 1 0 001-1V5z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">
                    <span className="text-blue-400">EURO</span>
                    <span className="text-white">PLIAGE</span>
                  </span>
                </div>
              </Link>

              <p className="text-metal-400 mb-6 sm:mb-8 max-w-sm leading-relaxed text-xs sm:text-sm md:text-base">
                Expert en métallerie et tôlerie industrielle depuis 1990.
                Fabrication sur mesure, découpe laser, pliage CNC, soudure et thermolaquage.
              </p>

              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-metal-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-metal-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-metal-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-white font-semibold mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full" />
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-metal-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-xs sm:text-sm"
                    >
                      <span className="hidden sm:block w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-white font-semibold mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full" />
                Produits
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.produits.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-metal-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-xs sm:text-sm"
                    >
                      <span className="hidden sm:block w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column - Hidden on very small screens, shown in contact on mobile */}
            <div className="hidden sm:block col-span-1 lg:col-span-2">
              <h3 className="text-white font-semibold mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full" />
                Entreprise
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-metal-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-xs sm:text-sm"
                    >
                      <span className="hidden sm:block w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <h3 className="text-white font-semibold mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full" />
                Contact
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="tel:+33493194090"
                    className="flex items-center sm:items-start gap-2 sm:gap-3 text-metal-400 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="hidden sm:block text-xs text-metal-500">Téléphone</span>
                      <span className="font-medium text-xs sm:text-sm">04 93 19 40 90</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:commande@europliage.com"
                    className="flex items-center sm:items-start gap-2 sm:gap-3 text-metal-400 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <span className="hidden sm:block text-xs text-metal-500">Email</span>
                      <span className="font-medium text-xs sm:text-sm break-all">commande@europliage.com</span>
                    </div>
                  </a>
                </li>
                <li className="hidden sm:block">
                  <div className="flex items-start gap-3 text-metal-400">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-metal-500 block">Adresse</span>
                      <span className="font-medium text-sm">
                        ZI secteur D12<br />
                        Allée des Santonniers<br />
                        06700 Saint-Laurent-du-Var
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-metal-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-metal-500 text-center sm:text-left">
              <span>&copy; {currentYear} Europliage.</span>
              <span className="hidden sm:inline">Tous droits réservés.</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-metal-500">
              <Link href="/mentions-legales" className="hover:text-blue-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-blue-400 transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
