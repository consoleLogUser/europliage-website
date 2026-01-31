/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimisation des images
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours de cache
  },

  // Compression et optimisation
  compress: true,

  // Headers de securite et SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
      {
        // Cache long pour les assets statiques
        source: '/images-europliage/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache pour les polices
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirections SEO
  async redirects() {
    return [
      // Redirection des anciennes URLs si necessaire
      {
        source: '/accueil',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nos-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/nos-produits',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/nos-realisations',
        destination: '/realisations',
        permanent: true,
      },
      {
        source: '/qui-sommes-nous',
        destination: '/a-propos',
        permanent: true,
      },
      {
        source: '/contactez-nous',
        destination: '/contact',
        permanent: true,
      },
    ];
  },

  // Rewrites pour les trailing slashes (coherence des URLs)
  trailingSlash: false,

  // Optimisation des performances
  poweredByHeader: false, // Supprime le header X-Powered-By pour la securite

  // Configuration du build output
  output: 'standalone',

  // Experimental features pour de meilleures performances
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
