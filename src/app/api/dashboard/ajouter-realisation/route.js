import { connectToDatabase } from '../../../lib/mongodb';  // Assurez-vous que vous avez la fonction de connexion MongoDB configurée
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';  // Pour l'upload sur Cloudinary

// Configuration de Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fonction pour générer un slug (comme pour le blog)
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // Enlève les caractères spéciaux
    .replace(/\s+/g, '-')      // Remplace les espaces par des tirets
    .trim();
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const location = formData.get('location');
    const date = formData.get('date');
    const marquePanneaux = formData.get('marquePanneaux');
    const marqueMicroOnduleur = formData.get('marqueMicroOnduleur');
    const surfaceMaison = formData.get('surfaceMaison');
    const puissanceMax = formData.get('puissanceMax');
    const nombrePanneaux = formData.get('nombrePanneaux');
    
    const mainImageFile = formData.get('mainImage');
    const detailImageFiles = formData.getAll('detailImages'); // Plusieurs images peuvent être téléchargées

    // Afficher les fichiers d'images de détail
    console.log('Fichiers d\'images de détail:', detailImageFiles); // Affiche les fichiers reçus

    // Vérifie si des fichiers d'images de détail ont été envoyés
    if (detailImageFiles.length === 0) {
      return NextResponse.json({ error: 'Aucune image de détail n\'a été envoyée.' }, { status: 400 });
    }

    // Générer un slug basé sur le titre
    const slug = generateSlug(title);

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    // Téléverser l'image principale sur Cloudinary
    let mainImageUrl = null;
    if (mainImageFile) {
      const imageBuffer = await mainImageFile.arrayBuffer();
      const base64Image = Buffer.from(imageBuffer).toString('base64');
      const result = await cloudinary.v2.uploader.upload(`data:image/jpeg;base64,${base64Image}`);
      mainImageUrl = result.secure_url;
    }

    // Téléverser les images détaillées sur Cloudinary
    let detailImagesUrls = [];
    for (const detailImage of detailImageFiles) {
      // Vérifie si le fichier est bien une image
      if (detailImage.type.startsWith('image/')) {
        const imageBuffer = await detailImage.arrayBuffer();
        const base64Image = Buffer.from(imageBuffer).toString('base64');
        const result = await cloudinary.v2.uploader.upload(`data:image/jpeg;base64,${base64Image}`);
        detailImagesUrls.push(result.secure_url);
      } else {
        console.log("Le fichier n'est pas une image :", detailImage.name);
        return NextResponse.json({ error: `Le fichier ${detailImage.name} n'est pas une image valide.` }, { status: 400 });
      }
    }

    const { db } = await connectToDatabase();

    // Créer la nouvelle réalisation
    const newRealisation = {
      title,
      description,
      location,
      date,
      marquePanneaux,
      marqueMicroOnduleur,
      surfaceMaison,
      puissanceMax,
      nombrePanneaux,
      mainImage: mainImageUrl,
      detailImages: detailImagesUrls,
      slug,  // Ajouter le slug
      createdAt: new Date(),
    };

    // Insérer la réalisation dans la base de données
    const result = await db.collection('realisations').insertOne(newRealisation);

    return NextResponse.json({ message: 'Réalisation ajoutée avec succès!', realisation: { _id: result.insertedId, ...newRealisation } });
  } catch (error) {
    console.error('Erreur lors de l’ajout de la réalisation:', error.message);
    return NextResponse.json({ error: 'Erreur lors de l’ajout de la réalisation.' }, { status: 500 });
  }
}
