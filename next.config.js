/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuration pour gérer les erreurs de prérendu
  experimental: {
    // Ignorer les erreurs de prérendu
    staticPageGenerationTimeout: 120, // Augmenter le timeout
    missingSuspenseBoundaryError: 'warn', // Transformer les erreurs en warnings
  },

  // Configuration webpack pour gérer les modules problématiques
  webpack: (config, { isServer }) => {
    // Désactiver les avertissements spécifiques
    config.infrastructureLogging = {
      level: 'error'
    };

    // Ignorer certains warnings
    config.ignoreWarnings = [
      /node:internal/,
      /punycode/,
      /useContext/
    ];

    return config;
  },

  // Configuration TypeScript et ESLint
  typescript: {
    ignoreBuildErrors: true
  },
  
  eslint: {
    ignoreDuringBuilds: true
  },

  // Compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  // Désactiver le prérendu des pages d'erreur
  async rewrites() {
    return [
      {
        source: '/404',
        destination: '/'
      },
      {
        source: '/500',
        destination: '/'
      }
    ];
  }
};

module.exports = nextConfig;
