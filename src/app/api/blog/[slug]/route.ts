import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';
import type { BlogPost } from '@/types';

type Params = { slug: string };

// GET /api/blog/[slug]
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const post = await BlogService.getPostBySlug(params.slug);
    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Error fetching blog post' }, { status: 500 });
  }
}

// PUT /api/blog/[slug]
export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const updates: Partial<BlogPost> = await request.json();
    const updatedBlog = await BlogService.updateBlog(params.slug, updates);

    if (!updatedBlog) {
      return NextResponse.json(
        { error: 'Blog post not found or could not be updated' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      blog: updatedBlog
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error updating blog post' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[slug]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const result = await BlogService.deleteBlog(params.slug);

    if (!result) {
      return NextResponse.json(
        { error: 'Blog post not found or could not be deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error deleting blog post' },
      { status: 500 }
    );
  }
}
