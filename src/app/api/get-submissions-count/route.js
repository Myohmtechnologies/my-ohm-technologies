import { connectToDatabase } from "../../lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Agrégation pour compter le nombre de leads par statut
    const counts = await db.collection("leads").aggregate([

      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]).toArray();

    return new Response(JSON.stringify(counts), {

      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    // Transformer le résultat en objet avec les noms de statut comme clés
    const statusCounts = counts.reduce((acc, curr) => {
      // Mapper les statuts de la base de données aux noms affichés
      const statusMapping = {
        "Nouveau": "Nouveau contact",
        "RDV fixé": "RDV Client",
        "Visite technique": "Visite technique",
        "Démarche administrative": "Démarche administrative",
        "Pose": "Pose",
        "CONSUEL": "CONSUEL",
        "Raccordement EDF": "Raccordement EDF",
        "Suivis": "Suivis",
        "Archive": "Archive"
      };

      const displayName = statusMapping[curr._id] || curr._id;
      acc[displayName] = curr.count;
      return acc;
    }, {});

    return new Response(JSON.stringify(statusCounts), {
 1cfc82d (Initial commit)
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des comptes :", error);
    return new Response("Erreur serveur", { status: 500 });
  }
}
