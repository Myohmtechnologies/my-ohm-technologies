import { connectToDatabase } from '@/app/lib/mongodb';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const { db } = await connectToDatabase();
    const totalClients = await db.collection('leads').countDocuments();
    const clients = await db.collection('leads')
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    return new Response(
      JSON.stringify({ total: totalClients, page, limit, clients }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des clients :", error);
    return new Response('Erreur serveur', { status: 500 });
  }
}
