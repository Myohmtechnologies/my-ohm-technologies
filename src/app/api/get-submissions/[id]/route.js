import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request, context) {
  try {
    // Attendez pour accéder à `params`
    const { id } = await context.params;

    // Validez l'ID MongoDB
    if (!ObjectId.isValid(id)) {
      return new Response("ID invalide", { status: 400 });
    }

    // Connexion à la base de données
    const { db } = await connectToDatabase();
    const lead = await db.collection("leads").findOne({ _id: new ObjectId(id) });

    // Vérifiez si le lead existe
    if (!lead) {
      return new Response("Lead non trouvé", { status: 404 });
    }

    // Retournez le lead
    return new Response(JSON.stringify(lead), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du lead :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}

export async function PUT(request, context) {
  try {
    const { id } = await context.params;

    if (!id || !ObjectId.isValid(id)) {
      console.error("ID invalide :", id);
      return new Response("ID invalide", { status: 400 });
    }

    const { db } = await connectToDatabase();
    const body = await request.json();

    console.log("Données reçues :", body); // LOG ICI

    const updateFields = {};
    if (body.status) updateFields.status = body.status;
    if (body.notes) {
      updateFields.notes = {
        content: body.notes.content || "",
        date: body.notes.date ? new Date(body.notes.date) : new Date(),
      };
    }

    console.log("Champs validés pour mise à jour :", updateFields); // LOG ICI

    const result = await db.collection("leads").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateFields },
      { returnDocument: "after" }
    );

    if (!result.value) {
      return new Response("Aucun lead trouvé", { status: 404 });
    }

    return new Response(JSON.stringify(result.value), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}

