import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define paths that should be protected
const PROTECTED_ADMIN_PATHS = [
  '/admin',
  '/admin/leads',
  '/admin/users',
];

// Define paths that are public (don't need redirect)
const PUBLIC_ADMIN_PATHS = [
  '/admin/login',
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Only process admin paths (except public ones like login)
  if (path.startsWith('/admin') && !PUBLIC_ADMIN_PATHS.includes(path)) {
    
    // Check if there's a valid adminUser cookie
    const adminUserCookie = request.cookies.get('adminUser');
    
    // Debug log to see what's happening
    console.log('Middleware checking auth cookie:', path, !!adminUserCookie?.value);
    
    // Check if cookie exists and contains valid data
    let isAuthenticated = false;
    if (adminUserCookie?.value) {
      try {
        const userData = JSON.parse(adminUserCookie.value);
        isAuthenticated = userData && userData.id ? true : false;
      } catch (error) {
        console.error('Error parsing auth cookie in middleware:', error);
      }
    }
    
    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
      console.log('Not authenticated, redirecting to login');
      const url = new URL('/admin/login', request.url);
      url.searchParams.set('from', path);
      return NextResponse.redirect(url);
    }
  }
  
  // For all other paths or if authenticated, continue
  return NextResponse.next();
}

// Only run middleware on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};