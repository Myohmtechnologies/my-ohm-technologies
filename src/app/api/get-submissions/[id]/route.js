import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return new Response('ID invalide', { status: 400 });
    }

    const { db } = await connectToDatabase();
    const lead = await db.collection('leads').findOne({ _id: new ObjectId(id) });

    if (!lead) {
      return new Response('Lead non trouvé', { status: 404 });
    }

    return new Response(JSON.stringify(lead), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du lead :', error);
    return new Response('Erreur serveur', { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { id } = params; // Assurez-vous que `params` est passé correctement
    const body = await request.json();

    if (!ObjectId.isValid(id)) {
      return new Response("ID invalide", { status: 400 });
    }

    const result = await db
      .collection("leads")
      .updateOne({ _id: new ObjectId(id) }, { $set: body });

    if (result.matchedCount === 0) {
      return new Response("Aucun lead trouvé", { status: 404 });
    }

    return new Response(JSON.stringify({ id, ...body }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du lead :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}

