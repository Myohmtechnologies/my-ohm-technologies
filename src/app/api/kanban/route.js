import { connectToDatabase } from '../../lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const pipeline = [
      {
        $group: {
          _id: "$status",
          leads: { $push: "$$ROOT" },
        },
      },
    ];
    const kanbanData = await db.collection('leads').aggregate(pipeline).toArray();

    return new Response(JSON.stringify(kanbanData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du Kanban :", error);
    return new Response('Erreur lors de la récupération du Kanban', { status: 500 });
  }
}
