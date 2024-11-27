// next.config.mjs
export default {
  reactStrictMode: true, // Facultatif, active le mode strict de React

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Autorise toutes les images de ce domaine
      },
    ],
  },
};
