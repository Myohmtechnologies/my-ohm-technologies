// src/app/api/submit/route.js
import { connectToDatabase } from '../../lib/mongodb'; // Vérifiez que le chemin est correct

export async function POST(request) {
  try {
    const { db } = await connectToDatabase();

    // Par exemple, récupérez le corps de la requête
    const body = await request.json();

    // Exemple d'insertion dans la base de données
    const result = await db.collection('leads').insertOne(body);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return new Response('Error connecting to the database', { status: 500 });
  }
}
