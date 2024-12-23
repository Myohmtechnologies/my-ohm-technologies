/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuration webpack pour gérer les modules problématiques
  webpack: (config, { isServer }) => {
    // Configuration pour ignorer certains warnings
    config.infrastructureLogging = {
      level: 'error'
    };

    // Ignorer les warnings spécifiques
    config.ignoreWarnings = [
      /node:internal/,
      /punycode/,
      /useContext/
    ];

    return config;
  },

  // Configuration TypeScript
  typescript: {
    ignoreBuildErrors: true
  },

  // Configuration ESLint
  eslint: {
    ignoreDuringBuilds: true
  },

  // Configuration de compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  // Désactiver le prérendu des pages d'erreur
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/',
        permanent: false
      },
      {
        source: '/500',
        destination: '/',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
