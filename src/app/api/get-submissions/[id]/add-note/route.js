import { connectToDatabase } from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request, { params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return new Response("ID invalide", { status: 400 });
  }

  try {
    const { db } = await connectToDatabase();

    // Parse le corps de la requête
    const { content, author, date } = await request.json();

    if (!content || !author || !date) {
      return new Response("Contenu, auteur ou date manquants", { status: 400 });
    }

    // Ajouter la note au document du lead
    const result = await db.collection('leads').updateOne(
      { _id: new ObjectId(id) },
      {
        $push: {
          notes: {
            content,
            author,
            date,
          },
        },
      }
    );

    if (!result.matchedCount) {
      return new Response("Lead non trouvé", { status: 404 });
    }

    // Renvoyer les données mises à jour
    const updatedLead = await db.collection('leads').findOne({ _id: new ObjectId(id) });

    return new Response(JSON.stringify(updatedLead), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erreur lors de l'ajout de la note :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}
