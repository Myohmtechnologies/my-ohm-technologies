// src/app/api/installations-details/[slug]/route.js
import { connectToDatabase } from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    const { db } = await connectToDatabase();

    // Rechercher une installation par le slug
    const installation = await db.collection('realisations').findOne({ slug });

    // Si l'installation n'est pas trouvée
    if (!installation) {
      return NextResponse.json({ message: 'Installation non trouvée' }, { status: 404 });
    }

    // Retourner les détails de l'installation
    return NextResponse.json(installation, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'installation:', error.message);
    return NextResponse.json({ error: 'Erreur lors de la récupération des détails de l\'installation' }, { status: 500 });
  }
}
