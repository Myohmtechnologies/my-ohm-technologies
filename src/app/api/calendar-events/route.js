import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const events = await db.collection('calendar_events').find({}).toArray();

    if (!events || events.length === 0) {
      return NextResponse.json(
        { message: 'Aucun événement trouvé.' },
        { status: 404 }
      );
    }

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des événements.', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const client = await clientPromise;
    const db = client.db();

    if (!data.title || !data.start || !data.end) {
      return NextResponse.json(
        { error: 'Le titre, la date de début et la date de fin sont requis.' },
        { status: 400 }
      );
    }

    const newEvent = {
      ...data,
      createdAt: new Date()
    };

    const result = await db.collection('calendar_events').insertOne(newEvent);
    return NextResponse.json(
      { message: 'Événement créé avec succès', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'événement.', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'L\'ID de l\'événement est requis.' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('calendar_events').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Événement non trouvé.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Événement supprimé avec succès.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'événement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'événement.', details: error.message },
      { status: 500 }
    );
  }
}
