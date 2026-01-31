'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Accueil', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Services', href: '/services', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    { name: 'Produits', href: '/produits', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'Réalisations', href: '/realisations', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'À Propos', href: '/a-propos', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Contact', href: '/contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Navigation principale */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Background avec effet glassmorphism */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? 'bg-[#0a0f1a]/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.05)]'
              : 'bg-transparent'
          }`}
        />

        {/* Container principal */}
        <nav className="relative">
          <div
            className="container-custom"
            style={{
              height: isScrolled ? '70px' : '90px',
              transition: 'height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="flex items-center justify-between h-full">

              {/* Logo */}
              <Link
                href="/"
                className="group flex items-center relative z-10 ml-4 sm:ml-6 lg:ml-8"
              >
                {/* Halo au hover */}
                <div
                  className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                  }}
                />

                {/* Logo Image */}
                <div className="relative transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images-europliage/logo-europliage.png"
                    alt="Europliage - Métallerie Industrielle"
                    width={200}
                    height={105}
                    className="h-14 sm:h-16 lg:h-[70px] w-auto brightness-110"
                    priority
                  />
                </div>
              </Link>

              {/* Navigation Desktop */}
              <div className="hidden lg:flex items-center gap-2">

                {/* Liens de navigation */}
                <nav className="flex items-center" style={{ gap: '8px' }}>
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    const hovered = hoveredItem === item.name;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="relative group"
                        style={{
                          padding: '12px 20px',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: active ? '#ffffff' : '#94a3b8',
                          borderRadius: '12px',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {/* Background au hover/active */}
                        <span
                          className="absolute inset-0 rounded-xl transition-all duration-300"
                          style={{
                            background: active
                              ? 'rgba(255, 255, 255, 0.08)'
                              : hovered
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'transparent',
                            transform: hovered || active ? 'scale(1)' : 'scale(0.95)',
                            opacity: hovered || active ? 1 : 0,
                          }}
                        />

                        {/* Texte */}
                        <span
                          className="relative z-10 transition-colors duration-300"
                          style={{ color: hovered || active ? '#ffffff' : '#94a3b8' }}
                        >
                          {item.name}
                        </span>

                        {/* Indicateur actif */}
                        {active && (
                          <span
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                            style={{
                              width: '4px',
                              height: '4px',
                              background: '#3b82f6',
                              boxShadow: '0 0 8px 2px rgba(59, 130, 246, 0.5)',
                            }}
                          />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Séparateur */}
                <div
                  className="mx-4"
                  style={{
                    width: '1px',
                    height: '24px',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(148,163,184,0.3) 50%, transparent 100%)',
                  }}
                />

                {/* Bouton CTA */}
                <Link
                  href="/contact"
                  className="group relative"
                  onMouseEnter={() => setHoveredItem('cta')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                    style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}
                  />

                  {/* Bouton */}
                  <div
                    className="relative flex items-center gap-3 transition-all duration-300 group-hover:shadow-xl"
                    style={{
                      padding: '12px 24px',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#ffffff',
                      borderRadius: '100px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      boxShadow: hoveredItem === 'cta'
                        ? '0 8px 32px -8px rgba(59, 130, 246, 0.5)'
                        : '0 4px 16px -4px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <span>Devis Gratuit</span>
                    <svg
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{ width: '18px', height: '18px' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Bouton Menu Mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-10 flex items-center justify-center transition-transform active:scale-95"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                aria-label="Toggle menu"
              >
                <div className="relative" style={{ width: '22px', height: '16px' }}>
                  <span
                    className="absolute left-0 w-full bg-white rounded-full transition-all duration-300"
                    style={{
                      height: '2px',
                      top: isMobileMenuOpen ? '7px' : '0',
                      transform: isMobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
                    }}
                  />
                  <span
                    className="absolute left-0 top-[7px] w-full bg-white rounded-full transition-all duration-200"
                    style={{
                      height: '2px',
                      opacity: isMobileMenuOpen ? 0 : 1,
                    }}
                  />
                  <span
                    className="absolute left-0 w-full bg-white rounded-full transition-all duration-300"
                    style={{
                      height: '2px',
                      bottom: isMobileMenuOpen ? '7px' : '0',
                      transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)',
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu Mobile Fullscreen */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: 'rgba(2, 6, 23, 0.98)', backdropFilter: 'blur(20px)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Contenu du menu - Scrollable */}
        <div
          className={`absolute inset-0 flex flex-col overflow-y-auto transition-all duration-700 ease-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Éléments décoratifs - Fixed position */}
          <div
            className="fixed rounded-full blur-3xl pointer-events-none"
            style={{
              top: '15%',
              right: '10%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            }}
          />

          {/* Header du menu avec bouton fermer */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 pt-6 pb-4">
            <span className="text-lg font-bold text-white">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
              aria-label="Fermer le menu"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Liens de navigation - Scrollable */}
          <div className="flex-1 px-4 pb-4 overflow-y-auto">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-4 transition-all duration-500"
                    style={{
                      padding: '16px 20px',
                      borderRadius: '16px',
                      background: active ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                      border: active ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: isMobileMenuOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                  >
                    {/* Icône */}
                    <div
                      className="flex items-center justify-center transition-all duration-300 flex-shrink-0"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        background: active ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <svg
                        className="transition-colors duration-300"
                        style={{
                          width: '22px',
                          height: '22px',
                          color: active ? '#60a5fa' : '#64748b',
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>

                    {/* Texte */}
                    <span
                      className="flex-1 font-medium transition-colors duration-300"
                      style={{
                        fontSize: '16px',
                        color: active ? '#60a5fa' : '#ffffff',
                      }}
                    >
                      {item.name}
                    </span>

                    {/* Flèche */}
                    <svg
                      className="transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
                      style={{
                        width: '18px',
                        height: '18px',
                        color: active ? '#60a5fa' : '#475569',
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section CTA en bas - Fixed */}
          <div
            className="flex-shrink-0 p-8 border-t border-white/5"
            style={{
              transitionDelay: isMobileMenuOpen ? '500ms' : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Bouton CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative block w-full"
            >
              <div
                className="absolute -inset-1 rounded-2xl opacity-60 blur-lg group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}
              />
              <div
                className="relative flex items-center justify-center gap-3 w-full font-semibold text-white"
                style={{
                  padding: '20px 32px',
                  fontSize: '17px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                }}
              >
                <span>Demander un Devis Gratuit</span>
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ width: '20px', height: '20px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Infos de contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <a
                href="tel:+33493194090"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-blue-400 transition-colors"
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span style={{ fontSize: '15px', fontWeight: 500 }}>04 93 19 40 90</span>
              </a>

              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#334155]" />

              <a
                href="mailto:commande@europliage.com"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-blue-400 transition-colors"
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span style={{ fontSize: '15px', fontWeight: 500 }}>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
