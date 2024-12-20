import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';
import type { BlogPost } from '@/types';

interface Params {
  params: {
    slug: string;
  };
}

// Fonction utilitaire pour vérifier si la requête provient du dashboard
const isDashboardRequest = (request: NextRequest) => {
  const referer = request.headers.get('referer');
  return referer?.includes('/dashboard');
};

// GET /api/blog/[slug]
export async function GET(
  request: NextRequest,
  { params }: Params
) {
  if (!isDashboardRequest(request)) {
    return NextResponse.json(
      { error: 'Accès non autorisé' },
      { status: 403 }
    );
  }

  try {
    const blog = await BlogService.getBlogBySlug(params.slug);
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in getBlogBySlug:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// PUT /api/blog/[slug]
export async function PUT(
  request: NextRequest,
  { params }: Params
) {
  if (!isDashboardRequest(request)) {
    return NextResponse.json(
      { error: 'Accès non autorisé' },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const blog = await BlogService.updateBlog(params.slug, body);
    return NextResponse.json({ 
      message: 'Article mis à jour avec succès',
      blog 
    });
  } catch (error) {
    console.error('Error in updateBlog:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la mise à jour de l\'article' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[slug]
export async function DELETE(
  request: NextRequest,
  { params }: Params
) {
  if (!isDashboardRequest(request)) {
    return NextResponse.json(
      { error: 'Accès non autorisé' },
      { status: 403 }
    );
  }

  try {
    await BlogService.deleteBlog(params.slug);
    return NextResponse.json({ 
      message: 'Article supprimé avec succès' 
    });
  } catch (error) {
    console.error('Error in deleteBlog:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la suppression de l\'article' },
      { status: 500 }
    );
  }
}
