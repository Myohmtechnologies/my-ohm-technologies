// src/app/api/get-realizations/route.js
import { connectToDatabase } from '../../../lib/mongodb'; 
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Récupérer toutes les réalisations
    const realizations = await db.collection('realisations').find({}).toArray();

    // Si aucune réalisation n'est trouvée
    if (realizations.length === 0) {
      return NextResponse.json({ message: 'Aucune réalisation trouvée.' }, { status: 404 });
    }

    // Retourner les réalisations sous forme de JSON
    return NextResponse.json(realizations, { status: 200 });

  } catch (error) {
    // En cas d'erreur, loguer l'erreur et envoyer une réponse JSON d'erreur
    console.error('Erreur lors de la récupération des réalisations:', error.message);
    return NextResponse.json({ error: 'Erreur lors de la récupération des réalisations.' }, { status: 500 });
  }
}
