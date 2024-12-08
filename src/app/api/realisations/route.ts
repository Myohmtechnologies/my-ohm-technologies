import { NextResponse } from 'next/server';
import { RealisationService } from '@/services/realisationService';
import type { Realisation } from '@/types';

// GET /api/realisations
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    const filter = {
      city: searchParams.get('city') || undefined,
      type: searchParams.get('type') || undefined,
      year: searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined
    };

    const result = await RealisationService.getAllRealisations(page, limit, filter);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error fetching realisations' },
      { status: 500 }
    );
  }
}

// POST /api/realisations
export async function POST(request: Request) {
  try {
    const realisation: Omit<Realisation, 'id'> = await request.json();
    const result = await RealisationService.createRealisation(realisation);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error creating realisation' },
      { status: 500 }
    );
  }
}

// GET /api/realisations/stats
export async function GET_STATS() {
  try {
    const stats = await RealisationService.getStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error fetching stats' },
      { status: 500 }
    );
  }
}

// GET /api/realisations/search
export async function GET_SEARCH(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const results = await RealisationService.searchRealisations(query);
    return NextResponse.json(results);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error searching realisations' },
      { status: 500 }
    );
  }
}
