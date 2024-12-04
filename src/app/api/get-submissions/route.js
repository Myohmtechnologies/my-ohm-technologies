import { connectToDatabase } from '../../../app/lib/mongodb';
import { ObjectId } from 'mongodb';


export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const search = url.searchParams.get("search") || "";
    const page = parseInt(url.searchParams.get("page"), 10) || 1;
    const limit = parseInt(url.searchParams.get("limit"), 10) || 10;

    const query = {
      ...(status && { status: { $regex: new RegExp(`^${status}$`, "i") } }),
      ...(search && {
        $or: [
          { name: { $regex: new RegExp(search, "i") } },
          { email: { $regex: new RegExp(search, "i") } },
          { phone: { $regex: new RegExp(search, "i") } },
        ],
      }),
    };

    const skip = (page - 1) * limit;

    const leads = await db
      .collection("leads")
      .find(query)
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalLeads = await db.collection("leads").countDocuments(query);

    const formattedLeads = leads.map((lead) => ({
      ...lead,
      id: lead._id.toString(),
    }));

    return new Response(
      JSON.stringify({
        leads: formattedLeads,
        total: totalLeads,
        page,
        limit,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des leads :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}



export async function POST(request) {
  try {
    const { db } = await connectToDatabase();
    const body = await request.json();

    body.dateEnvoye = new Date(); // Ajout de la date d'envoi
    body.status = body.status || "Nouveau"; // Statut par défaut

    const result = await db.collection('leads').insertOne(body);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    return new Response('Erreur lors de la connexion à la base de données', {
      status: 500,
    });
  }
}

// Nouvelle méthode PUT

export async function PUT(request) {
  try {
    const { db } = await connectToDatabase();
    const body = await request.json();

    const { id, status, notes, date, images } = body;

    if (!ObjectId.isValid(id)) {
      console.error("ID invalide :", id);
      return new Response("ID invalide", { status: 400 });
    }

    const updateFields = {};
    if (status) updateFields.status = status;
    if (notes) {
      updateFields.notes = {
        content: notes,
        date: date || new Date(),
      };
    }
    if (images) {
      if (Array.isArray(images)) {
        updateFields.images = images;
      } else {
        console.error("Format des images invalide :", images);
        return new Response("Format des images invalide", { status: 400 });
      }
    }

    console.log("Champs validés pour mise à jour :", updateFields);

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
    console.error("Erreur lors de la mise à jour du lead :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}
