// src/app/api/get-submissions/route.js
import { connectToDatabase } from '../../lib/mongodb';

export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    const submissions = await db.collection('leads').find({}).toArray();

    return new Response(JSON.stringify(submissions), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des soumissions:', error);
    return new Response('Erreur lors de la récupération des soumissions', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { db } = await connectToDatabase();
    const body = await request.json();

    // Ajouter la date d'envoi à la soumission
    const dateEnvoye = new Date();  // Créer un nouvel objet Date avec la date actuelle
    body.dateEnvoye = dateEnvoye;    // Ajouter la date d'envoi au corps de la requête

    const result = await db.collection('leads').insertOne(body);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    return new Response('Erreur lors de la connexion à la base de données', { status: 500 });
  }
}
