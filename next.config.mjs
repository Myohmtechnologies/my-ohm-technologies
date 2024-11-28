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
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Ajout du domaine Unsplash
        pathname: "/**", // Autorise toutes les images de ce domaine
      },
    ],
  },

  // Ajoutez ceci pour rendre la variable d'environnement accessible au build
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};
