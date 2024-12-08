import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Vérifier si nous sommes sur la page merci ou dashboard
  if (request.nextUrl.pathname === '/merci' || request.nextUrl.pathname.startsWith('/dashboard')) {
    // Ajouter un header personnalisé pour indiquer une page sans header par défaut
    const response = NextResponse.next();
    response.headers.set('x-page-type', 'no-default-header');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/merci', '/dashboard/:path*'],
};
