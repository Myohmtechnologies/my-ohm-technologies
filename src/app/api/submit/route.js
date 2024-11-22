import { connectToDatabase } from '../../lib/mongodb'; // Vérifiez que le chemin est correct

export async function POST(request) {
  try {
    const { db } = await connectToDatabase();

    // Récupérer le corps de la requête
    const body = await request.json();

    // Ajouter un champ 'dateTime' avec la date et l'heure actuelles
    body.dateTime = new Date(); // Date et heure actuelles

    // Ajouter un champ 'status' avec une valeur par défaut 'Nouveau'
    body.status = body.status || "Nouveau"; // Si aucun statut n'est donné, le statut par défaut est "Nouveau"

    // Ajouter un champ 'source' avec une valeur par défaut 'web'
    body.source = body.source || "web"; // Si aucune source n'est donnée, la source par défaut est "web"

    // Insérer le lead dans la base de données
    const result = await db.collection('leads').insertOne(body);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return new Response('Error connecting to the database', { status: 500 });
  }
}
