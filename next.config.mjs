// next.config.mjs
export default {
<<<<<<< HEAD
  // Tes configurations ici
}
=======
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
>>>>>>> 642d8a2 (Réinitialisation du dépôt)
