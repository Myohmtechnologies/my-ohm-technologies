import { NextRequest, NextResponse } from 'next/server';
import { RealisationService } from '@/services/realisationService';
import { Realisation } from '@/types';

// GET /api/realisations
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const region = searchParams.get('region') || undefined;
    const city = searchParams.get('city') || undefined;
    const type = searchParams.get('type') || undefined;
    const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;

    // Si stats est demandé, retourner les stats
    if (searchParams.get('stats') === 'true') {
      const stats = await RealisationService.getStats();
      return NextResponse.json(stats);
    }

    // Si search est présent, retourner les résultats de recherche
    if (searchParams.has('search')) {
      const searchTerm = searchParams.get('search') || '';
      const searchResults = await RealisationService.searchRealisations(searchTerm);
      return NextResponse.json(searchResults);
    }

    const result = await RealisationService.getAllRealisations();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// POST /api/realisations
export async function POST(request: NextRequest) {
  try {
    const realisationData: Omit<Realisation, '_id'> = await request.json();
    const result = await RealisationService.createRealisation(realisationData);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json();
    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    const result = await RealisationService.updateRealisation(id, updates);
    if (!result) {
      return NextResponse.json(
        { error: 'Realisation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    const result = await RealisationService.deleteRealisation(id);
    if (!result) {
      return NextResponse.json(
        { error: 'Realisation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
