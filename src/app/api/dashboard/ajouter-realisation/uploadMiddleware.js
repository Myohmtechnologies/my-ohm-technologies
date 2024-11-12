import multer from 'multer';

// Configuration du stockage Multer
const storage = multer.diskStorage({
  destination: './public/uploads', // Chemin où enregistrer les fichiers
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

// Middleware pour accepter une seule image principale et plusieurs images de détail
export default upload.fields([
  { name: 'image', maxCount: 1 }, // Une seule image principale
  { name: 'imageDetails', maxCount: 10 }, // Jusqu'à 10 images supplémentaires
]);
