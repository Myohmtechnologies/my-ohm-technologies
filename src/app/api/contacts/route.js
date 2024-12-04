import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Validation des champs requis
    const requiredFields = ['name', 'email', 'phone', 'address', 'postalCode', 'city'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Le champ ${field} est requis` },
          { status: 400 }
        );
      }
    }

    // Connexion à MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Ajout de la date de création
    const contact = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insertion dans la base de données
    const result = await db.collection('contacts').insertOne(contact);

    return NextResponse.json(
      { message: 'Contact créé avec succès', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur lors de la création du contact:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du contact' },
      { status: 500 }
    );
  }
}
