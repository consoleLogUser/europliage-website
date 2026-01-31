# Europliage - Site Web Officiel

Site web moderne et professionnel pour **Europliage**, entreprise spécialisée en métallerie et tôlerie industrielle située à Saint-Laurent-du-Var (06).

## À propos d'Europliage

Depuis 1990, Europliage excelle dans la conception et la fabrication d'ouvrages métalliques sur mesure :
- Portes blindées haute sécurité
- Pliage et soudure pour l'industrie et le bâtiment
- Thermolaquage sur aluminium et acier
- Métallerie du bâtiment
- Tôlerie industrielle

## Technologies utilisées

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utility-first
- **React 19** - Dernière version de React

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version optimisée pour la production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Structure du projet

```
site-web/
├── app/                    # Pages et routes (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Page services
│   ├── a-propos/          # Page à propos
│   ├── realisations/      # Page réalisations
│   ├── contact/           # Page contact
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Navigation.tsx     # Menu de navigation
│   └── Footer.tsx         # Pied de page
├── public/               # Fichiers statiques
│   └── images/           # Images
├── tailwind.config.js    # Configuration Tailwind
├── tsconfig.json         # Configuration TypeScript
└── next.config.js        # Configuration Next.js
```

## Pages du site

- **Accueil** - Présentation de l'entreprise et services principaux
- **Services** - Détail des services offerts
- **Réalisations** - Portfolio de projets réalisés
- **À Propos** - Histoire et valeurs de l'entreprise
- **Contact** - Formulaire de contact et coordonnées

## Fonctionnalités

- Design moderne et responsive
- Navigation fluide avec menu mobile
- Formulaire de contact interactif
- Optimisé pour le SEO
- Performance optimale avec Next.js
- Animations et transitions élégantes

## Déploiement

Le site peut être déployé sur diverses plateformes :

### Vercel (Recommandé)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod
```

### Autre hébergement
```bash
npm run build
npm start
```

## Contact

**Europliage**
Allée des Santonniers
Zone Industrielle Secteur D - Bâtiment B
06700 Saint-Laurent-du-Var

Téléphone: 04 93 31 02 10
Email: contact@europliage.com

---

© 2025 Europliage. Tous droits réservés.
