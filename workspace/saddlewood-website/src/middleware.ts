import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionFromRequest } from '@/lib/session';

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
  
  // Handle authentication for admin paths
  if (path.startsWith('/admin') && !PUBLIC_ADMIN_PATHS.includes(path)) {
    // Get user from session using our helper
    const user = getSessionFromRequest(request);
    
    // If not authenticated, redirect to login page
    if (!user) {
      const url = new URL('/admin/login', request.url);
      url.searchParams.set('from', path);
      return NextResponse.redirect(url);
    }
  }
  
  // For all paths, add security headers
  const response = NextResponse.next();
  
  // Add security headers
  const securityHeaders = {
    // Content Security Policy (CSP)
    'Content-Security-Policy': 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com; " +
      "font-src 'self' fonts.gstatic.com; " +
      "img-src 'self' data: blob:; " +
      "connect-src 'self' vitals.vercel-insights.com; " +
      "frame-src 'self'; " +
      "frame-ancestors 'self'; " +
      "form-action 'self';",
    
    // XSS Protection
    'X-XSS-Protection': '1; mode=block',
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Frame options to prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Set strict Transport Security for HTTPS
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    
    // Permissions Policy
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };
  
  // Apply the headers to the response
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  return response;
}

// Run middleware on all routes
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};