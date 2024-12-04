<<<<<<< HEAD
// src/app/api/dashboard/get-realizations/route.js
=======
// src/app/api/get-realizations/route.js
>>>>>>> origin/main
import { connectToDatabase } from '../../../lib/mongodb'; 
import { NextResponse } from 'next/server';

export async function GET() {
  try {
<<<<<<< HEAD
    console.log('Début de la requête GET /api/dashboard/get-realizations');
    const { db } = await connectToDatabase();
    console.log('Connexion à la base de données établie');

    // Récupérer toutes les réalisations
    const realizations = await db.collection('realisations').find({}).toArray();
    console.log('Nombre de réalisations trouvées:', realizations.length);

    // Si aucune réalisation n'est trouvée
    if (realizations.length === 0) {
      console.log('Aucune réalisation trouvée');
=======
    const { db } = await connectToDatabase();

    // Récupérer toutes les réalisations
    const realizations = await db.collection('realisations').find({}).toArray();

    // Si aucune réalisation n'est trouvée
    if (realizations.length === 0) {
>>>>>>> origin/main
      return NextResponse.json({ message: 'Aucune réalisation trouvée.' }, { status: 404 });
    }

    // Retourner les réalisations sous forme de JSON
<<<<<<< HEAD
    console.log('Réalisations récupérées avec succès');
=======
>>>>>>> origin/main
    return NextResponse.json(realizations, { status: 200 });

  } catch (error) {
    // En cas d'erreur, loguer l'erreur et envoyer une réponse JSON d'erreur
<<<<<<< HEAD
    console.error('Erreur lors de la récupération des réalisations:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des réalisations.', details: error.message },
      { status: 500 }
    );
=======
    console.error('Erreur lors de la récupération des réalisations:', error.message);
    return NextResponse.json({ error: 'Erreur lors de la récupération des réalisations.' }, { status: 500 });
>>>>>>> origin/main
  }
}
