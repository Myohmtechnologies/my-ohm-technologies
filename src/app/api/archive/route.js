import { connectToDatabase } from '../../lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const archives = await db.collection('archives').find({}).toArray();
    
    if (!archives || archives.length === 0) {
      return new Response(JSON.stringify({ message: 'Aucune archive trouvée.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(archives), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des archives:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la récupération des archives.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
