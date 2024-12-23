/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Supprimer les options expérimentales non supportées
  experimental: {
    // Serveur Actions sont maintenant activées par défaut
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
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      }
    ];
  },

  // Options de build
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
};

module.exports = nextConfig;
