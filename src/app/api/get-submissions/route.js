import { connectToDatabase } from '../../lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const leads = await db.collection("leads").find({}).toArray();

    // Ajoutez un champ `id` basé sur `_id`
    const formattedLeads = leads.map((lead) => ({
      ...lead,
      id: lead._id.toString(),
    }));

    return new Response(JSON.stringify(formattedLeads), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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
