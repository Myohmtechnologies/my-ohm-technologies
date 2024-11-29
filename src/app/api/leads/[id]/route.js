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

export async function PUT(request) {
  try {
    // Extraire l'ID de l'URL
    const id = request.url.split('/').pop();
    if (!ObjectId.isValid(id)) {
      return new Response("ID invalide", { status: 400 });
    }

    const { status, notes } = await request.json();

    const { db } = await connectToDatabase();
    const collection = db.collection("leads");

    // Vérifier si le document existe
    const existingLead = await collection.findOne({ _id: new ObjectId(id) });
    if (!existingLead) {
      return new Response("Lead non trouvé", { status: 404 });
    }

    // Préparer la mise à jour
    const update = {
      $set: {
        status,
        updatedAt: new Date()
      }
    };

    // Ajouter la nouvelle note
    if (notes) {
      const noteToAdd = {
        content: notes.content,
        date: notes.date || new Date(),
        type: notes.type || 'action'
      };

      if (Array.isArray(existingLead.notes)) {
        // Si notes est déjà un tableau, utiliser $push
        update.$push = { notes: noteToAdd };
      } else {
        // Si notes n'est pas un tableau ou n'existe pas, créer un nouveau tableau
        update.$set.notes = [noteToAdd];
      }
    }

    // Effectuer la mise à jour
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      update
    );

    if (result.modifiedCount === 0) {
      return new Response("Aucune modification effectuée", { status: 400 });
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: "Lead mis à jour avec succès"
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Erreur lors de la mise à jour du lead :", error);
    return new Response(JSON.stringify({ 
      error: error.message,
      stack: error.stack
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
 1cfc82d (Initial commit)
  }
}
