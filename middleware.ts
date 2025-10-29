import { NextResponse } from 'next/server'

export function middleware(req) {
  const pathname = req.nextUrl.pathname
  
  // Skip middleware for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/icons/')
  ) {
    return NextResponse.next()
  }
  
  // Allow access to public routes
  const publicRoutes = [
    '/',
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/editor',
    '/thesis-builder',
    '/survey',
    '/exam'
  ]
  
  if (publicRoutes.includes(pathname) || pathname.startsWith('/auth/')) {
    return NextResponse.next()
  }
  
  // For protected routes, let the client-side handle authentication
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}