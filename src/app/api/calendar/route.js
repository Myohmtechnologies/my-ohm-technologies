import { connectToDatabase } from '@/app/lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const events = await db.collection('leads')
      .find({ prochainRDV: { $exists: true, $ne: null } })
      .project({ _id: 1, nom: 1, prochainRDV: 1 })
      .toArray();

    const calendarEvents = events.map(event => ({
      id: event._id,
      title: event.nom,
      start: event.prochainRDV,
    }));

    return new Response(JSON.stringify(calendarEvents), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du calendrier :", error);
    return new Response('Erreur serveur', { status: 500 });
  }
}
