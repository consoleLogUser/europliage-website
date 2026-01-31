# DOCUMENTATION TECHNIQUE - SITE WEB EUROPLIAGE

## Table des Matières

1. [Architecture du Projet](#1-architecture-du-projet)
2. [Technologies Utilisées](#2-technologies-utilisées)
3. [Configuration](#3-configuration)
4. [Design System](#4-design-system)
5. [Composants](#5-composants)
6. [Pages](#6-pages)
7. [CSS et Styles](#7-css-et-styles)
8. [Animations et Interactions](#8-animations-et-interactions)
9. [Problèmes Résolus](#9-problèmes-résolus)
10. [Guide de Développement](#10-guide-de-développement)

---

## 1. Architecture du Projet

### 1.1 Structure des Dossiers

```
site-web/
├── app/                          # Application Next.js (App Router)
│   ├── layout.tsx               # Layout racine avec Navigation/Footer
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Styles globaux et design system
│   └── services/
│       └── page.tsx             # Page services
│
├── components/                   # Composants réutilisables
│   ├── Navigation.tsx           # Navigation principale
│   └── Footer.tsx               # Footer du site
│
├── public/                      # Assets statiques
│   └── images-europliage/
│       └── logo-europliage.png
│
├── node_modules/                # Dépendances
│
├── package.json                 # Dépendances et scripts
├── next.config.js               # Configuration Next.js
├── tailwind.config.js           # Configuration Tailwind CSS
├── tsconfig.json                # Configuration TypeScript
└── postcss.config.js            # Configuration PostCSS
```

### 1.2 Organisation des Fichiers

**Principe**: App Router de Next.js 13+ avec structure modulaire

- **app/** : Dossier racine de l'application Next.js utilisant l'App Router
- **components/** : Composants React réutilisables
- **public/** : Assets statiques accessibles publiquement
- Fichiers de configuration à la racine

---

## 2. Technologies Utilisées

### 2.1 Stack Technique Principal

```json
{
  "framework": "Next.js 16.1.1",
  "react": "19.2.3",
  "typescript": "5.9.3",
  "styling": "Tailwind CSS 4.1.18",
  "postcss": "8.5.6"
}
```

### 2.2 Dépendances Détaillées

#### Framework & Runtime
- **Next.js** `^16.1.1` - Framework React avec SSR, App Router, optimisation d'images
- **React** `^19.2.3` - Bibliothèque UI avec Server Components
- **React-DOM** `^19.2.3` - Rendu DOM pour React

#### TypeScript
- **TypeScript** `^5.9.3` - Langage typé statiquement
- **@types/node** `^25.0.7` - Types pour Node.js
- **@types/react** `^19.2.8` - Types pour React
- **@types/react-dom** `^19.2.3` - Types pour React-DOM

#### Styling
- **Tailwind CSS** `^4.1.18` - Framework CSS utility-first
- **@tailwindcss/postcss** `^4.1.18` - Plugin PostCSS pour Tailwind v4
- **PostCSS** `^8.5.6` - Transformateur CSS
- **Autoprefixer** `^10.4.23` - Ajout automatique de préfixes CSS

### 2.3 Versions des Outils

- **Node.js** : Compatible avec Node 18+
- **npm/yarn** : Gestionnaire de paquets
- **Git** : Contrôle de version

---

## 3. Configuration

### 3.1 Next.js Configuration (next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Active le mode strict de React
  images: {
    domains: [],          // Domaines autorisés pour next/image
  },
}

module.exports = nextConfig
```

**Explications:**
- `reactStrictMode: true` : Active les vérifications et avertissements en développement
- `images.domains` : Liste vide = seules les images locales sont autorisées

### 3.2 Tailwind Configuration (tailwind.config.js)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        metal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
    },
  },
  plugins: [],
}
```

**Palettes de Couleurs Personnalisées:**

1. **primary** (Bleu électrique) : Couleur principale de la marque
   - Utilisée pour les CTA, liens, accents
   - Gamme de 50 (très clair) à 900 (très foncé)

2. **metal** (Gris industriel) : Couleur secondaire
   - Utilisée pour les backgrounds, textes, bordures
   - Évoque le métal et l'industrie

### 3.3 TypeScript Configuration

Le projet utilise TypeScript avec configuration Next.js par défaut :
- Compilation stricte
- Résolution de modules ESNext
- Alias `@/` pointant vers la racine

### 3.4 PostCSS Configuration

PostCSS est configuré pour utiliser :
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Autoprefixer pour la compatibilité navigateurs

---

## 4. Design System

### 4.1 Variables CSS (CSS Custom Properties)

#### Couleurs Primaires (Electric Blue)
```css
--primary-50: #eff6ff
--primary-100: #dbeafe
--primary-200: #bfdbfe
--primary-300: #93c5fd
--primary-400: #60a5fa
--primary-500: #3b82f6   /* Couleur principale */
--primary-600: #2563eb
--primary-700: #1d4ed8
--primary-800: #1e40af
--primary-900: #1e3a8a
```

#### Couleurs Metal (Industrial)
```css
--metal-50: #f8fafc
--metal-100: #f1f5f9
--metal-200: #e2e8f0
--metal-300: #cbd5e1
--metal-400: #94a3b8
--metal-500: #64748b
--metal-600: #475569
--metal-700: #334155
--metal-800: #1e293b
--metal-900: #0f172a
--metal-950: #020617   /* Background principal */
```

#### Couleurs d'Accent
```css
--accent-orange: #f97316
--accent-emerald: #10b981
--accent-violet: #8b5cf6
```

#### Timings d'Animation (Easing Functions)
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)      /* Expo out - très fluide */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)    /* Quart out - doux */
--ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1) /* Circ in-out - équilibré */
```

#### Espacements
```css
--section-padding: clamp(4rem, 10vw, 8rem)  /* Padding responsive entre sections */
```

### 4.2 Typographie

#### Classes de Titres

**1. heading-display** - Titre principal hero
```css
font-size: clamp(3rem, 8vw, 7rem)     /* 48px → 112px */
font-weight: 800
line-height: 0.95
letter-spacing: -0.03em
```

**2. heading-xl** - Grand titre
```css
font-size: clamp(2.5rem, 6vw, 5rem)   /* 40px → 80px */
font-weight: 700
line-height: 1
letter-spacing: -0.02em
```

**3. heading-lg** - Titre section
```css
font-size: clamp(2rem, 4vw, 3.5rem)   /* 32px → 56px */
font-weight: 700
line-height: 1.1
letter-spacing: -0.02em
```

**4. heading-md** - Sous-titre
```css
font-size: clamp(1.5rem, 3vw, 2.5rem) /* 24px → 40px */
font-weight: 600
line-height: 1.2
```

#### Classes de Texte

**1. text-body-lg** - Texte large
```css
font-size: clamp(1.125rem, 2vw, 1.375rem) /* 18px → 22px */
line-height: 1.6
color: var(--metal-300)
```

**2. text-body** - Texte standard
```css
font-size: 1rem                        /* 16px */
line-height: 1.7
color: var(--metal-400)
```

#### Effets de Gradient sur Texte

**1. text-gradient** - Gradient animé
```css
background: linear-gradient(135deg, var(--primary-400), var(--primary-600), var(--accent-violet))
background-clip: text
-webkit-background-clip: text
color: transparent
background-size: 200% 200%
animation: gradientShift 8s ease infinite
```

**2. text-gradient-gold** - Gradient doré
```css
background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)
```

**3. text-gradient-steel** - Gradient acier
```css
background: linear-gradient(135deg, var(--metal-300), var(--metal-500), var(--metal-300))
```

### 4.3 Boutons

#### btn-primary - Bouton principal
```css
/* Style de base */
padding: 1rem 2rem
font-weight: 600
font-size: 1rem
color: white
background: linear-gradient(135deg, var(--primary-500), var(--primary-600))
border-radius: 100px
box-shadow:
  0 4px 15px rgba(59, 130, 246, 0.4),
  0 0 0 0 rgba(59, 130, 246, 0.4)

/* Au hover */
transform: translateY(-3px) scale(1.02)
box-shadow:
  0 8px 30px rgba(59, 130, 246, 0.5),
  0 0 0 4px rgba(59, 130, 246, 0.2)

/* Overlay au hover */
::before {
  background: linear-gradient(135deg, var(--primary-400), var(--primary-500))
  opacity: 0 → 1
}
```

#### btn-secondary - Bouton secondaire
```css
/* Style de base */
padding: 1rem 2rem
background: transparent
border: 2px solid rgba(255, 255, 255, 0.3)
backdrop-filter: blur(10px)

/* Animation au hover */
::before {
  background: white
  transform: scaleX(0) → scaleX(1)
}

/* Couleur texte change au hover */
color: white → var(--metal-900)
```

#### btn-outline - Bouton outline
```css
padding: 0.875rem 1.75rem
color: var(--primary-400)
border: 2px solid var(--primary-500)

/* Au hover */
background: var(--primary-500)
color: white
transform: translateY(-2px)
box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3)
```

### 4.4 Cards

#### card - Carte standard
```css
/* Base */
background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))
border: 1px solid rgba(148, 163, 184, 0.1)
border-radius: 1.5rem

/* Au hover */
transform: translateY(-10px)
border-color: rgba(59, 130, 246, 0.3)
box-shadow:
  0 30px 60px -20px rgba(0, 0, 0, 0.5),
  0 0 0 1px rgba(59, 130, 246, 0.2)

/* Overlay gradient au hover */
::before {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)
  opacity: 0 → 1
}
```

#### card-glass - Carte glassmorphism
```css
background: rgba(255, 255, 255, 0.05)
backdrop-filter: blur(20px)
border: 1px solid rgba(255, 255, 255, 0.1)
border-radius: 1.5rem

/* Au hover */
background: rgba(255, 255, 255, 0.08)
border-color: rgba(255, 255, 255, 0.2)
transform: translateY(-5px)
```

### 4.5 Backgrounds et Gradients

#### gradient-bg
```css
background: linear-gradient(135deg, var(--metal-900), var(--metal-950))
```

#### gradient-hero
```css
background:
  radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.3), transparent),
  radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.15), transparent),
  linear-gradient(180deg, var(--metal-950) 0%, var(--metal-900) 100%)
```

#### gradient-section
```css
background:
  radial-gradient(ellipse 100% 100% at 0% 0%, rgba(59, 130, 246, 0.1), transparent),
  linear-gradient(180deg, var(--metal-900) 0%, var(--metal-950) 100%)
```

#### gradient-cta
```css
background:
  linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 50%, var(--metal-900) 100%)
```

### 4.6 Effets Spéciaux

#### glass - Effet verre
```css
background: rgba(255, 255, 255, 0.05)
backdrop-filter: blur(20px)
border: 1px solid rgba(255, 255, 255, 0.1)
```

#### glass-dark - Verre sombre
```css
background: rgba(15, 23, 42, 0.8)
backdrop-filter: blur(20px)
border: 1px solid rgba(148, 163, 184, 0.1)
```

#### grid-pattern - Motif grille
```css
background-image:
  linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
background-size: 60px 60px
```

#### dot-pattern - Motif points
```css
background-image: radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)
background-size: 30px 30px
```

---

## 5. Composants

### 5.1 Navigation.tsx

**Fichier**: `components/Navigation.tsx`

#### Description
Navigation principale avec design glassmorphism, menu mobile fullscreen, et animations fluides.

#### États React
```typescript
const [isScrolled, setIsScrolled] = useState(false)           // Détecte le scroll
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Menu mobile
const [hoveredItem, setHoveredItem] = useState<string | null>(null) // Hover state
const [isLoaded, setIsLoaded] = useState(false)               // Animation d'entrée
```

#### useEffects Utilisés

**1. Animation d'entrée (ligne 15-18)**
```typescript
useEffect(() => {
  const timer = setTimeout(() => setIsLoaded(true), 100)
  return () => clearTimeout(timer)
}, [])
```
- Délai de 100ms avant d'afficher la navigation
- Animation de slide-down

**2. Détection du scroll (ligne 20-26)**
```typescript
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20)
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```
- Change le style après 20px de scroll
- `passive: true` pour meilleures performances
- Nettoyage de l'event listener au démontage

**3. Fermeture menu au changement de route (ligne 28-30)**
```typescript
useEffect(() => {
  setIsMobileMenuOpen(false)
}, [pathname])
```
- Utilise `usePathname()` de Next.js
- Ferme le menu mobile lors de la navigation

**4. Gestion du scroll du body (ligne 32-41)**
```typescript
useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
  return () => {
    document.body.style.overflow = 'unset'
  }
}, [isMobileMenuOpen])
```
- Bloque le scroll quand le menu mobile est ouvert
- Restaure le scroll à la fermeture

#### Éléments de Navigation
```typescript
const navItems = [
  { name: 'Accueil', href: '/', icon: '...' },
  { name: 'Services', href: '/services', icon: '...' },
  { name: 'Produits', href: '/produits', icon: '...' },
  { name: 'Réalisations', href: '/realisations', icon: '...' },
  { name: 'À Propos', href: '/a-propos', icon: '...' },
  { name: 'Contact', href: '/contact', icon: '...' },
]
```

#### Fonction isActive
```typescript
const isActive = (href: string) => {
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}
```
- Détecte la page active
- Cas spécial pour l'accueil (exacte)

#### Styles Dynamiques

**1. Header avec glassmorphism**
```typescript
<div className={`absolute inset-0 transition-all duration-500 ${
  isScrolled
    ? 'bg-[#0a0f1a]/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.05)]'
    : 'bg-transparent'
}`} />
```

**2. Hauteur responsive**
```typescript
style={{
  height: isScrolled ? '70px' : '90px',
  transition: 'height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
}}
```

**3. Animation d'apparition**
```typescript
style={{
  opacity: isLoaded ? 1 : 0,
  transform: isLoaded ? 'translateY(0)' : 'translateY(-100%)',
  transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
}}
```

#### Logo
- Image Next.js optimisée
- Taille responsive: `h-14 sm:h-16 lg:h-[70px]`
- Effet de halo au hover

#### Navigation Desktop (lg:flex)
- Liens avec background au hover/active
- Indicateur actif (point bleu lumineux)
- Bouton CTA avec glow effect
- Séparateur vertical

#### Menu Mobile
- Fullscreen overlay avec backdrop blur
- Animation staggered des items
- Icônes SVG inline
- Bouton CTA en bas
- Infos de contact (téléphone, email)

### 5.2 Footer.tsx

**Fichier**: `components/Footer.tsx`

#### Description
Footer responsive avec colonnes de liens, réseaux sociaux, et informations de contact.

#### Structure
```typescript
const footerLinks = {
  services: [...],   // Liens vers services
  produits: [...],   // Liens vers produits
  company: [...],    // À propos, réalisations, contact
}
```

#### Layout Grid
```typescript
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
  {/* Brand Column (col-span-4) */}
  {/* Services Column (col-span-2) */}
  {/* Products Column (col-span-2) */}
  {/* Company Column (col-span-2) - hidden on very small screens */}
  {/* Contact Column (col-span-2) */}
</div>
```

#### Éléments Clés

**1. Logo et Description**
- Logo SVG inline
- Texte descriptif
- Responsive: `text-xs sm:text-sm md:text-base`

**2. Réseaux Sociaux**
```typescript
<a href="..." target="_blank" rel="noopener noreferrer">
  {/* LinkedIn, Facebook, Instagram */}
</a>
```
- `rel="noopener noreferrer"` pour la sécurité
- Icônes SVG inline
- Hover effects: couleur + background

**3. Colonnes de Liens**
- Responsive spacing
- Hover animation: ligne apparaît à gauche
- `hidden sm:block` pour certaines colonnes

**4. Bottom Bar**
- Copyright dynamique: `new Date().getFullYear()`
- Liens mentions légales
- Responsive flex direction

**5. Ligne Décorative**
```typescript
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
```

---

## 6. Pages

### 6.1 Layout Racine (app/layout.tsx)

**Fichier**: `app/layout.tsx`

#### Métadonnées SEO
```typescript
export const metadata: Metadata = {
  title: 'Europliage - Métallerie et Tôlerie Industrielle depuis 1990',
  description: 'Expert en métallerie depuis 1990 à Saint-Laurent-du-Var. Découpe laser, pliage, soudure, thermolaquage. Fabrication 100% interne. Livraison 06 et 83.',
  keywords: 'métallerie, tôlerie, découpe laser, pliage, soudure, thermolaquage, couvertines, précadres, enseignes, brise-vue, Saint-Laurent-du-Var, Alpes-Maritimes, 06, Var, 83',
}
```

#### Police de Caractères
```typescript
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```
- Police Google Fonts optimisée par Next.js
- Subset latin uniquement

#### Structure
```typescript
<html lang="fr">
  <body className={inter.className}>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </body>
</html>
```

### 6.2 Page d'Accueil (app/page.tsx)

**Fichier**: `app/page.tsx`

#### Description
Page d'accueil avec hero animé, sections services, avantages, processus, et CTA.

#### Composants Personnalisés

**1. AnimatedCounter** (ligne 7-49)
```typescript
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // IntersectionObserver pour détecter la visibilité
  // Animation avec requestAnimationFrame
}
```
**Fonctionnement:**
- Détecte quand l'élément entre dans le viewport
- Anime le compteur de 0 à `target` avec `requestAnimationFrame`
- `threshold: 0.5` = déclenche à 50% de visibilité

**2. FloatingParticles** (ligne 52-79)
```typescript
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="..." />

  return (
    <div className="...">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="..." style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  )
}
```
**Fonctionnement:**
- Vérifie `mounted` pour éviter l'hydration mismatch
- Génère 20 particules avec positions et timings aléatoires
- Animation `float` avec durée entre 5-10s

**3. ServiceCard** (ligne 82-129)
```typescript
const ServiceCard = ({ icon, title, description, index }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="reveal service-card" style={{ transitionDelay: `${index * 0.1}s` }}>
      {/* Contenu */}
    </div>
  )
}
```
**Fonctionnement:**
- IntersectionObserver ajoute la classe `active` au scroll
- Delay en cascade: `index * 0.1s` pour effet staggered
- `threshold: 0.2` = déclenche à 20% de visibilité

#### Effet Principal useEffect (ligne 135-156)
```typescript
useEffect(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => {
    observer.observe(el)
  })
}, [])
```
**Fonctionnement:**
- Observe tous les éléments avec classes `.reveal*`
- `rootMargin: '0px 0px -50px 0px'` = déclenche 50px avant le bas du viewport
- Ajoute classe `active` qui déclenche les animations CSS

#### Données de la Page

**1. Services** (ligne 158-214)
```typescript
const services = [
  {
    icon: <svg>...</svg>,
    title: 'Découpe Laser',
    description: '...',
  },
  // 6 services au total
]
```

**2. Advantages** (ligne 216-253)
```typescript
const advantages = [
  {
    icon: <svg>...</svg>,
    title: 'Qualité Garantie',
    description: '...',
  },
  // 4 avantages
]
```

#### Sections de la Page

**1. Hero Section** (ligne 258-398)
```html
<section className="relative min-h-screen flex items-center gradient-hero">
  <!-- Background animé -->
  <div className="absolute inset-0">
    <div className="grid-pattern" />
    <FloatingParticles />
    <div className="gradient-orbs" /> <!-- Caché sur mobile -->
    <div className="geometric-shapes" /> <!-- Caché sur mobile -->
  </div>

  <!-- Contenu -->
  <div className="container-custom">
    <!-- Badge animé -->
    <!-- Titre principal avec gradient -->
    <!-- Description -->
    <!-- CTA Buttons -->
    <!-- Stats avec AnimatedCounter -->
  </div>

  <!-- Scroll indicator (desktop only) -->
</section>
```

**Points clés:**
- `min-h-screen` pour pleine hauteur
- Éléments décoratifs cachés sur mobile (`hidden md:block`)
- Stats avec `AnimatedCounter` component
- Scroll indicator avec animation `scrollMouse`

**2. Services Section** (ligne 400-430)
```html
<section className="section-padding gradient-section">
  <!-- Background pattern -->
  <div className="container-custom">
    <!-- Section header -->
    <!-- Services grid -->
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </div>
  </div>
</section>
```

**3. Why Choose Us Section** (ligne 432-500)
- Grid 2 colonnes sur desktop
- Liste d'avantages avec icônes
- Carte visuelle animée (morphing sur desktop)
- Cartes flottantes cachées sur mobile

**4. Process Section** (ligne 502-537)
- 4 étapes du processus
- Flèches de connexion sur desktop
- Cards glassmorphism

**5. CTA Section** (ligne 539-579)
- Gradient background
- 2 boutons CTA
- Bouton téléphone cliquable

### 6.3 Page Services (app/services/page.tsx)

**Fichier**: `app/services/page.tsx`

#### Description
Page détaillant tous les services d'Europliage avec sections alternées.

#### useEffect Global (ligne 7-24)
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach((el) => {
    observer.observe(el)
  })

  return () => observer.disconnect()
}, [])
```
- Identique à la page d'accueil
- Active les animations au scroll

#### Données Services (ligne 26-128)
```typescript
const services = [
  {
    id: 'decoupe',              // Pour les anchors (#decoupe)
    title: 'Découpe Laser',
    subtitle: 'Précision Micrométrique',
    description: '...',
    features: [                  // Liste de 6 features
      'Précision jusqu\'à 0.1mm',
      '...'
    ],
    icon: <svg>...</svg>,
    color: 'from-blue-500 to-cyan-500',  // Gradient Tailwind
  },
  // 5 services au total
]
```

#### Process Steps (ligne 130-138)
```typescript
const processSteps = [
  { step: '01', title: 'Réception', description: 'Plans, DXF ou gabarits' },
  // 7 étapes au total
]
```

#### Sections de la Page

**1. Hero Section** (ligne 142-171)
- Min-height responsive: `min-h-[50vh] md:min-h-[60vh]`
- Padding top pour navigation: `pt-24 md:pt-32`

**2. Services Grid** (ligne 173-245)
```html
<section>
  {services.map((service, index) => (
    <div
      id={service.id}
      className={`grid lg:grid-cols-2 ${
        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      <!-- Content (alternance gauche/droite) -->
      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
        <!-- Icon, title, description, features, CTA -->
      </div>

      <!-- Visual (hidden md:block) -->
      <div className={`hidden md:block ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
        <!-- Animated card -->
      </div>
    </div>
  ))}
</section>
```

**Points clés:**
- Alternance gauche/droite avec `index % 2`
- `lg:grid-flow-col-dense` pour inverser l'ordre
- Visuel caché sur mobile
- Chaque service a un `id` pour navigation par anchor

**3. Process Section** (ligne 247-277)
- Grid responsive: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-7`
- 7 étapes du processus

**4. Stats & Quality Section** (ligne 279-336)
- Grid 2x2 de stats
- Liste d'engagements qualité

**5. Delivery Zone Section** (ligne 338-399)
- 2 cartes: zones de livraison + retrait atelier
- Badges 06 et 83
- Adresse complète

**6. CTA Section** (ligne 401-431)
- Identique à la page d'accueil

---

## 7. CSS et Styles

### 7.1 Styles de Base

#### Reset CSS Sélectif
```css
/* Ne reset que les éléments spécifiques, pas * */
body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
  margin: 0;
}

ul, ol {
  padding: 0;
}
```
**Important:** Pas de reset global `*` pour éviter le bug de padding.

#### Body
```css
body {
  background-color: var(--metal-950);  /* #020617 - très sombre */
  color: var(--metal-100);             /* #f1f5f9 - très clair */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### Sélection
```css
::selection {
  background: var(--primary-500);
  color: white;
}
```

#### Scrollbar Personnalisée
```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--metal-900);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--primary-500), var(--primary-700));
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, var(--primary-400), var(--primary-600));
}
```

### 7.2 Layout Utilities

#### container-custom
```css
.container-custom {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1rem, 4vw, 3rem);
  padding-right: clamp(1rem, 4vw, 3rem);
}

@media (min-width: 1536px) {
  .container-custom {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
```

#### section-padding
```css
.section-padding {
  padding-top: var(--section-padding);    /* clamp(4rem, 10vw, 8rem) */
  padding-bottom: var(--section-padding);
}
```

### 7.3 Navigation Styles

#### nav-link
```css
.nav-link {
  position: relative;
  color: var(--metal-300);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-400), var(--primary-600));
  transition: width 0.3s var(--ease-out-expo);
}

.nav-link:hover {
  color: white;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: var(--primary-400);
}

.nav-link.active::after {
  width: 100%;
}
```

### 7.4 Section Labels

#### section-label
```css
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary-400);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 100px;
  margin-bottom: 1.5rem;
}

.section-label::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--primary-400);
  border-radius: 50%;
  animation: pulse-glow 2s ease-in-out infinite;
}
```

### 7.5 Stats Counter

#### stat-item
```css
.stat-item {
  text-align: center;
  padding: 2rem;
}

.stat-number {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  background: linear-gradient(135deg, white, var(--metal-300));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--metal-400);
  font-weight: 500;
}
```

### 7.6 Service Cards

#### service-card
```css
.service-card {
  position: relative;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8));
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.5s var(--ease-out-expo);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-500), var(--accent-violet));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s var(--ease-out-expo);
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.5);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.4s var(--ease-out-expo);
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
}
```

### 7.7 Form Elements

#### form-input
```css
.form-input {
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(148, 163, 184, 0.1);
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-500);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder {
  color: var(--metal-500);
}
```

### 7.8 Footer

#### footer-link
```css
.footer-link {
  color: var(--metal-400);
  transition: all 0.3s ease;
  position: relative;
}

.footer-link:hover {
  color: var(--primary-400);
  padding-left: 0.5rem;
}
```

---

## 8. Animations et Interactions

### 8.1 Keyframes

#### gradientShift - Gradient animé
```css
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```
**Utilisé pour:** `.text-gradient`

#### float - Flottement doux
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}
```
**Utilisé pour:** Éléments décoratifs, cartes

#### floatReverse - Flottement inverse
```css
@keyframes floatReverse {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-2deg); }
}
```

#### pulse-glow - Pulsation lumineuse
```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
    transform: scale(1.02);
  }
}
```
**Utilisé pour:** Boutons, badges

#### slideUp, slideDown, slideInLeft, slideInRight
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* ... autres directions similaires */
```

#### scaleIn - Apparition par zoom
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

#### rotateIn - Apparition par rotation
```css
@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}
```

#### shimmer - Effet de brillance
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

#### scrollMouse - Animation souris scroll
```css
@keyframes scrollMouse {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### borderGlow - Bordure lumineuse
```css
@keyframes borderGlow {
  0%, 100% {
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
  }
  50% {
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
  }
}
```

#### morphing - Forme organique
```css
@keyframes morphing {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 50% 70% 50%; }
  75% { border-radius: 60% 40% 60% 30% / 70% 40% 50% 60%; }
}
```
**Utilisé pour:** Grandes cartes visuelles

#### particle-float - Particules flottantes
```css
@keyframes particle-float {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px) rotate(720deg);
    opacity: 0;
  }
}
```

### 8.2 Classes d'Animation

#### Animations Flottantes
```css
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: floatReverse 7s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 10s ease-in-out infinite;
}
```

#### Autres Animations
```css
.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.animate-morphing {
  animation: morphing 15s ease-in-out infinite;
}

.animate-shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

.animate-border-glow {
  animation: borderGlow 3s ease-in-out infinite;
}
```

### 8.3 Reveal Animations (IntersectionObserver)

#### reveal - Apparition par le bas
```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s var(--ease-out-expo);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

#### reveal-left - Apparition par la gauche
```css
.reveal-left {
  opacity: 0;
  transform: translateX(-60px);
  transition: all 0.8s var(--ease-out-expo);
}

.reveal-left.active {
  opacity: 1;
  transform: translateX(0);
}
```

#### reveal-right - Apparition par la droite
```css
.reveal-right {
  opacity: 0;
  transform: translateX(60px);
  transition: all 0.8s var(--ease-out-expo);
}

.reveal-right.active {
  opacity: 1;
  transform: translateX(0);
}
```

#### reveal-scale - Apparition par zoom
```css
.reveal-scale {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.8s var(--ease-out-expo);
}

.reveal-scale.active {
  opacity: 1;
  transform: scale(1);
}
```

### 8.4 Staggered Children Animation

```css
.stagger-children > * {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s var(--ease-out-expo);
}

.stagger-children.active > *:nth-child(1) { transition-delay: 0.1s; }
.stagger-children.active > *:nth-child(2) { transition-delay: 0.2s; }
.stagger-children.active > *:nth-child(3) { transition-delay: 0.3s; }
.stagger-children.active > *:nth-child(4) { transition-delay: 0.4s; }
.stagger-children.active > *:nth-child(5) { transition-delay: 0.5s; }
.stagger-children.active > *:nth-child(6) { transition-delay: 0.6s; }

.stagger-children.active > * {
  opacity: 1;
  transform: translateY(0);
}
```

**Utilisation:**
```typescript
<div className="reveal stagger-children">
  <div>Élément 1</div> {/* Delay 0.1s */}
  <div>Élément 2</div> {/* Delay 0.2s */}
  <div>Élément 3</div> {/* Delay 0.3s */}
</div>
```

### 8.5 IntersectionObserver Pattern

**Pattern utilisé dans toutes les pages:**

```typescript
useEffect(() => {
  const observerOptions = {
    threshold: 0.1,                        // Déclenche à 10% de visibilité
    rootMargin: '0px 0px -50px 0px'       // Offset de -50px en bas
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')  // Ajoute .active
      }
    })
  }, observerOptions)

  // Observe tous les éléments avec classes .reveal*
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => {
    observer.observe(el)
  })

  return () => observer.disconnect()  // Cleanup
}, [])
```

**Fonctionnement:**
1. Observer détecte quand un élément avec `.reveal` entre dans le viewport
2. Ajoute la classe `.active` à l'élément
3. Les styles CSS `.reveal.active` déclenchent la transition
4. `rootMargin: -50px` déclenche l'animation 50px avant que l'élément soit visible

---

## 9. Problèmes Résolus

### 9.1 Bug CSS Padding/Margin Reset

#### Problème Initial
```css
/* ❌ CODE PROBLÉMATIQUE INITIAL */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Symptômes:**
- Tous les éléments perdaient leur padding et margin
- Boutons, inputs, et autres éléments interactifs malformés
- Layout complètement cassé
- Espacement interne des composants perdu

#### Cause Racine
Le sélecteur universel `*` réinitialise **TOUS** les éléments, y compris:
- Les boutons natifs du navigateur
- Les inputs de formulaire
- Les éléments inline comme `<span>`
- Les composants internes React/Next.js

#### Solution Implémentée

```css
/* ✅ SOLUTION CORRECTE */

/* Reset sélectif - seulement les éléments de contenu */
body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
  margin: 0;
}

/* Reset padding uniquement pour les listes */
ul, ol {
  padding: 0;
}

/* box-sizing universel maintenu */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

**Changements clés:**
1. Remplacement de `*` par une liste sélective d'éléments
2. Séparation du reset margin et padding
3. Conservation du `box-sizing` universel (sécuritaire)
4. Pas de reset sur les éléments de formulaire ou boutons

**Impact:**
- ✅ Layout restauré correctement
- ✅ Boutons fonctionnels
- ✅ Inputs de formulaire corrects
- ✅ Spacing préservé où nécessaire
- ✅ Performance maintenue

### 9.2 Hydration Mismatch - FloatingParticles

#### Problème
```typescript
// ❌ CODE PROBLÉMATIQUE
const FloatingParticles = () => {
  return (
    <div>
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          left: `${Math.random() * 100}%`,  // ⚠️ Différent server/client
          top: `${Math.random() * 100}%`,
        }} />
      ))}
    </div>
  )
}
```

**Symptômes:**
- Warning React: "Text content does not match server-rendered HTML"
- Positions aléatoires différentes entre server et client
- Flash de contenu non stylé (FOUC)

#### Cause
`Math.random()` génère des valeurs différentes:
- Côté serveur (SSR)
- Côté client (hydration)

#### Solution

```typescript
// ✅ SOLUTION
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }} />
      ))}
    </div>
  )
}
```

**Explication:**
1. Composant retourne un placeholder vide au premier render (SSR)
2. `useEffect` s'exécute uniquement côté client après hydration
3. `setMounted(true)` déclenche un re-render client-only
4. Les particules sont générées uniquement côté client
5. Pas de mismatch car le serveur ne voit jamais les valeurs aléatoires

---

## 10. Guide de Développement

### 10.1 Installation et Démarrage

```bash
# Installation des dépendances
npm install

# Développement
npm run dev
# Ouvre http://localhost:3000

# Build production
npm run build

# Démarrage production
npm start

# Linting
npm run lint
```

### 10.2 Structure de Fichier Type

**Composant React TypeScript:**

```typescript
'use client'  // Si le composant utilise des hooks ou interactivité

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface Props {
  title: string
  description?: string
}

const MonComposant = ({ title, description }: Props) => {
  const [state, setState] = useState<string>('')

  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    }
  }, [])

  return (
    <div className="container-custom">
      {/* JSX */}
    </div>
  )
}

export default MonComposant
```

### 10.3 Ajout d'une Nouvelle Page

1. **Créer le fichier de page**
```bash
# Créer app/nouvelle-page/page.tsx
```

2. **Structure minimale**
```typescript
'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

export default function NouvellePage() {
  useEffect(() => {
    // IntersectionObserver pour animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <h1 className="reveal heading-display text-white">
            Titre Page
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      {/* ... */}
    </>
  )
}
```

3. **Ajouter au menu de navigation**
```typescript
// components/Navigation.tsx
const navItems = [
  // ...
  { name: 'Nouvelle Page', href: '/nouvelle-page', icon: '...' },
]
```

### 10.4 Conventions de Nommage

**Fichiers:**
- Components: `PascalCase.tsx` (ex: `Navigation.tsx`)
- Pages: `page.tsx` (convention Next.js App Router)
- Styles: `kebab-case.css` (ex: `globals.css`)

**Classes CSS:**
- Utilities: `kebab-case` (ex: `.container-custom`)
- BEM si nécessaire: `.block__element--modifier`
- Tailwind: classes natives

**Variables:**
- React state: `camelCase` (ex: `isScrolled`)
- CSS variables: `--kebab-case` (ex: `--primary-500`)

### 10.5 Responsive Design

**Breakpoints Tailwind:**
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Pattern mobile-first:**
```html
<div className="
  text-sm          {/* Mobile */}
  sm:text-base     {/* ≥640px */}
  md:text-lg       {/* ≥768px */}
  lg:text-xl       {/* ≥1024px */}
">
```

**Cacher/Afficher:**
```html
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

### 10.6 Ajout d'une Animation

**1. Définir le keyframe (globals.css):**
```css
@keyframes monAnimation {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**2. Créer la classe:**
```css
.animate-mon-animation {
  animation: monAnimation 0.5s ease-out forwards;
}
```

**3. Utiliser:**
```html
<div className="animate-mon-animation">
  Contenu animé
</div>
```

### 10.7 Performance Best Practices

**Images:**
```typescript
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // Pour images above-the-fold
/>
```

**Lazy Loading:**
```typescript
// Composants lourds
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false  // Désactive SSR si nécessaire
})
```

**IntersectionObserver Cleanup:**
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(...)

  // Observe
  elements.forEach(el => observer.observe(el))

  // ✅ Toujours cleanup
  return () => observer.disconnect()
}, [])
```

### 10.8 Debugging

**React DevTools:**
- Installer l'extension Chrome/Firefox
- Inspecter les composants et leur state

**Console Logging:**
```typescript
useEffect(() => {
  console.log('Component mounted', { props, state })

  return () => {
    console.log('Component unmounted')
  }
}, [])
```

**CSS Debugging:**
```css
/* Ajouter temporairement */
* {
  outline: 1px solid red !important;
}
```

### 10.9 Build et Déploiement

**Build local:**
```bash
npm run build
npm start
```

**Variables d'environnement:**
```
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Vérification avant déploiement:**
1. `npm run lint` - pas d'erreurs
2. `npm run build` - build réussit
3. Test manuel de toutes les pages
4. Vérification responsive (mobile, tablet, desktop)
5. Test des animations au scroll
6. Vérification des liens

### 10.10 Ressources Utiles

**Documentation:**
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

**Outils de Design:**
- Figma pour maquettes
- Chrome DevTools pour debug
- Lighthouse pour performance
- Wave pour accessibilité

---

## Résumé Technique

### Stack
- **Framework:** Next.js 16.1.1 (App Router)
- **React:** 19.2.3
- **TypeScript:** 5.9.3
- **Styling:** Tailwind CSS 4.1.18 + CSS personnalisé

### Architecture
- Structure modulaire avec App Router
- Composants réutilisables dans `/components`
- Pages dans `/app` avec routing automatique
- Design system complet dans `globals.css`

### Points Clés
- **Animations:** IntersectionObserver + CSS transitions/keyframes
- **Performance:** Lazy loading, optimisation images Next.js
- **Responsive:** Mobile-first avec Tailwind breakpoints
- **Accessibilité:** ARIA labels, semantic HTML
- **SEO:** Metadata optimisée, structure sémantique

### Problèmes Résolus
1. ✅ Bug CSS reset universel corrigé
2. ✅ Hydration mismatch FloatingParticles résolu
3. ✅ Navigation responsive avec menu mobile fluide
4. ✅ Animations performantes avec IntersectionObserver

---

**Documentation créée le:** 2026-01-25
**Version:** 1.0.0
**Auteur:** Documentation technique générée pour le projet Europliage
