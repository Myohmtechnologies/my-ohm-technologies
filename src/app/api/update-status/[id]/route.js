import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(request, context) {
  try {
    // Attendez que les paramètres soient disponibles
    const { id } = await context.params;

    // Vérifiez si l'ID est valide
    if (!ObjectId.isValid(id)) {
      return new Response('Invalid ID', { status: 400 });
    }

    // Récupérez les données de la requête
    const body = await request.json();
    const { status, appointment, reminderDate, notes } = body;

    const { db } = await connectToDatabase();
    const collection = db.collection('leads');

    // Mettez à jour les informations en base de données
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          appointment,
          reminderDate,
          notes,
        },
      }
    );

    if (!result.matchedCount) {
      return new Response('Lead not found', { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Lead updated successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating lead:', error);
    return new Response('Server error', { status: 500 });
  }
}
