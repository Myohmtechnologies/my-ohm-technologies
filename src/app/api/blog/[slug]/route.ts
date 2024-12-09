import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';
import type { BlogPost } from '@/types';

interface Params {
  params: {
    slug: string;
  };
}

// GET /api/blog/[slug]
export async function GET(
  request: NextRequest,
  { params }: Params
) {
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
  try {
    const body = await request.json();
    const blog = await BlogService.updateBlog(params.slug, body);
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in updateBlog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[slug]
export async function DELETE(
  request: NextRequest,
  { params }: Params
) {
  try {
    const blog = await BlogService.deleteBlog(params.slug);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === 'Blog non trouvé') {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    console.error('Error in deleteBlog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
