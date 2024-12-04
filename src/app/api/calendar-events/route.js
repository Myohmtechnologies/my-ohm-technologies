import { NextResponse } from 'next/server';
<<<<<<< HEAD
import { google } from 'googleapis';
import clientPromise from '../../../app/lib/mongodb';
=======
import clientPromise from '../../lib/mongodb';
>>>>>>> origin/main
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    console.log('Récupération des événements du calendrier...');
    const client = await clientPromise;
    const db = client.db("ohm");
    const events = await db.collection("calendar_events").find({}).toArray();
    
    console.log(`${events.length} événements trouvés:`, events);
    return NextResponse.json(events);
  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    console.log('Création d\'un nouvel événement...');
    const client = await clientPromise;
    const db = client.db("ohm");
    const eventData = await request.json();
    console.log('Données reçues:', eventData);

    // Convertir les chaînes de date en objets Date
    eventData.start = new Date(eventData.start);
    eventData.end = new Date(eventData.end);
    
    // Convertir leadId en ObjectId
    if (eventData.leadId) {
      eventData.leadId = new ObjectId(eventData.leadId);
    }

    console.log('Données formatées:', eventData);
    const result = await db.collection("calendar_events").insertOne(eventData);
    console.log('Événement créé avec l\'ID:', result.insertedId);
    
    return NextResponse.json({ 
      success: true, 
      eventId: result.insertedId 
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
