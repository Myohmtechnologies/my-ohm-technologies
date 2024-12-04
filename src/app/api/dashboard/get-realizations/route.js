// src/app/api/dashboard/get-realizations/route.js
import { connectToDatabase } from '../../../lib/mongodb'; 
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Début de la requête GET /api/dashboard/get-realizations');
    const { db } = await connectToDatabase();
    console.log('Connexion à la base de données établie');

    // Récupérer toutes les réalisations
    const realizations = await db
      .collection('realizations')
      .find({})
      .sort({ date: -1 })
      .toArray();

    // Si aucune réalisation n'est trouvée
    if (realizations.length === 0) {
      console.log('Aucune réalisation trouvée');
      return NextResponse.json({ message: 'Aucune réalisation trouvée.' }, { status: 404 });
    }

    // Retourner les réalisations sous forme de JSON
    console.log('Réalisations récupérées avec succès');
    return NextResponse.json(realizations, { status: 200 });

  } catch (error) {
    // En cas d'erreur, loguer l'erreur et envoyer une réponse JSON d'erreur
    console.error('Erreur lors de la récupération des réalisations:', error.message);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des réalisations.', details: error.message },
      { status: 500 }
    );
  }
}
