import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { LeadAction, LeadStatus, STATUS_TRANSITIONS } from '@/types';
import { ObjectId } from 'mongodb';

// GET /api/leads/[id]/actions
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    
    const actions = await db
      .collection('lead_actions')
      .find({ leadId: params.id })
      .sort({ date: -1 })
      .toArray();
    
    return NextResponse.json({ actions });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch actions' },
      { status: 500 }
    );
  }
}

// POST /api/leads/[id]/actions
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    
    const body = await request.json();
    const { type, notes, nextAction } = body;
    
    // Vérifier si le lead existe
    const lead = await db
      .collection('leads')
      .findOne({ _id: new ObjectId(params.id) });
    
    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }
    
    // Créer l'action
    const action: LeadAction = {
      leadId: params.id,
      type,
      status: 'COMPLETED',
      date: new Date().toISOString(),
      notes,
      nextAction
    };
    
    const result = await db.collection('lead_actions').insertOne(action);
    
    // Mettre à jour le statut du lead si nécessaire
    const currentStatus = lead.status as LeadStatus;
    const possibleNextStatuses = STATUS_TRANSITIONS[currentStatus];
    
    if (type === 'CALL' && currentStatus === 'NEW') {
      await db.collection('leads').updateOne(
        { _id: new ObjectId(params.id) },
        {
          $set: {
            status: 'CONTACTED',
            lastAction: action,
            nextAction: nextAction
          }
        }
      );
    } else if (type === 'MEETING' && currentStatus === 'CONTACTED') {
      await db.collection('leads').updateOne(
        { _id: new ObjectId(params.id) },
        {
          $set: {
            status: 'MEETING_SCHEDULED',
            lastAction: action,
            nextAction: nextAction
          }
        }
      );
    }
    // Ajouter d'autres conditions pour les autres types d'actions
    
    return NextResponse.json({ 
      action: { ...action, _id: result.insertedId },
      message: 'Action created successfully'
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to create action' },
      { status: 500 }
    );
  }
}
