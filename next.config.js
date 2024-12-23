/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuration webpack pour gérer les modules et warnings
  webpack: (config, { isServer }) => {
    // Fallback pour les modules problématiques
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: require.resolve('punycode/')
      };
    }

    // Configuration pour ignorer certains warnings
    config.infrastructureLogging = {
      level: 'error'
    };

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

  // Désactiver les avertissements spécifiques
  experimental: {
    serverComponentsExternalPackages: ['punycode']
  }
};

module.exports = nextConfig;
