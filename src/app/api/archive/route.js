import { connectToDatabase } from '@/app/lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const archivedLeads = await db.collection('leads')
      .find({ status: "Archivé" })
      .toArray();

    return new Response(JSON.stringify(archivedLeads), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des archives :", error);
    return new Response('Erreur serveur', { status: 500 });
  }
}
