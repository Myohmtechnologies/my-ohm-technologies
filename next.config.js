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

    // Désactiver les warnings spécifiques
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

  // Configuration avancée pour gérer les erreurs de prérendu
  experimental: {
    serverComponentsExternalPackages: ['punycode'],
    
    // Désactiver le prérendu des pages d'erreur
    staticPageGenerationTimeout: 60,
    
    // Ignorer les erreurs de prérendu
    disableStaticPageGeneration: true
  },

  // Redirection des erreurs
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
