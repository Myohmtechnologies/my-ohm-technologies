/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Configuration expérimentale
  experimental: {
    serverActions: true,
    optimizePackageImports: ['@heroicons/react'],
    fallbackModuleResolution: true,
  },

  // Configuration Webpack personnalisée
  webpack: (config, { isServer }) => {
    // Résolution explicite des modules
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
    };

    // Fallbacks pour les modules Node.js
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
      net: false, 
      tls: false 
    };

    // Optimisation des imports
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');

    return config;
  },

  // Gestion des redirections
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/not-found',
        permanent: true
      },
      {
        source: '/500',
        destination: '/error',
        permanent: true
      }
    ];
  },

  // Configuration des headers de sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { 
            key: 'Content-Security-Policy', 
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'"
          }
        ]
      }
    ];
  },

  // Options de build
  typescript: {
    ignoreBuildErrors: false,  // Activé pour détecter les erreurs
  },
  eslint: {
    ignoreDuringBuilds: false,  // Activé pour détecter les erreurs
  },

  // Optimisation des images
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configuration de la génération statique
  staticPageGenerationTimeout: 60,
};

module.exports = nextConfig;
