import { NextResponse } from 'next/server';

const GOOGLE_PLACE_ID = 'VOTRE_PLACE_ID'; // Remplacez par votre Place ID
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function GET() {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews from Google');
    }

    const data = await response.json();
    
    // Trier les avis par date (les plus récents d'abord)
    const sortedReviews = data.result.reviews.sort((a, b) => b.time - a.time);

    return NextResponse.json({ reviews: sortedReviews });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
