/** @type {import('next').NextConfig} */
const nextConfig = {
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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    // Ignore punycode deprecation warnings
    config.ignoreWarnings = [
      { module: /node:punycode/ },
    ];
    
    return config;
  },
  typescript: {
    // Ignore ESLint warnings during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint warnings during build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
