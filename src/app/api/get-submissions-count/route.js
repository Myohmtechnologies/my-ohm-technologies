import { connectToDatabase } from "../../lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Agrégation pour compter le nombre de leads par statut
    const counts = await db.collection("leads").aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]).toArray();

    return new Response(JSON.stringify(counts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des comptes :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}
