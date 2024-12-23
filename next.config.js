/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  webpack(config, { isServer }) {
    // Ignore punycode deprecation warnings
    config.ignoreWarnings = [
      { module: /node:punycode/ },
    ];

    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Resolve package.json issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
  typescript: {
    // Ignore build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint warnings during build
    ignoreDuringBuilds: true,
  },
  // Disable server-side rendering for problematic pages
  experimental: {
    serverComponentsExternalPackages: ['punycode'],
  },
};

module.exports = nextConfig;
