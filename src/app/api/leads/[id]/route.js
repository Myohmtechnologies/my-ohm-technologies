import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(request, { params }) {
  const { id } = params;
  const { status, notes, date, images, observation, bordereau } = await request.json();

  if (!ObjectId.isValid(id)) {
    return new Response("ID invalide", { status: 400 });
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("leads");

    const update = {
      $set: {
        status,
        updatedAt: new Date(),
      },
      $push: {
        notes: {
          content: notes,
          date: new Date(),
          author: "Utilisateur", // Remplacez par l'utilisateur actuel
        },
      },
    };

    if (date) {
      update.$push.appointments = { date, notes };
    }
    if (images) {
      update.$set.images = images;
    }
    if (observation) {
      update.$push.notes.content += `\nObservation: ${observation}`;
    }
    if (bordereau) {
      update.$set["administrative.bordereau"] = bordereau;
    }

    await collection.updateOne({ _id: new ObjectId(id) }, update);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du lead :", error);
    return new Response("Erreur interne", { status: 500 });
  }
}
