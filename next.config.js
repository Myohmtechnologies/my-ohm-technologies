/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Désactiver le prérendu des pages statiques
  output: 'standalone',

  // Configuration webpack pour gérer les modules
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

  // Redirection des pages d'erreur
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
  },

  // Désactiver le prérendu de certaines pages
  experimental: {
    staticPageGenerationTimeout: 0,
  }
};

module.exports = nextConfig;
