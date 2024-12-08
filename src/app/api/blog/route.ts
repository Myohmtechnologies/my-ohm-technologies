import { NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';

// GET /api/blog
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    const query = {
      search: searchParams.get('search') || undefined,
      category: searchParams.get('category') || undefined,
      tags: searchParams.get('tags')?.split(',') || undefined,
      status: searchParams.get('status') || 'published',
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 10,
      sortBy: searchParams.get('sortBy') || 'createdAt',
      sortOrder: (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc'
    };

    const blogs = await BlogService.getAllBlogs(query);
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error in getAllBlogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST /api/blog
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const blog = await BlogService.createBlog(body);
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in createBlog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
