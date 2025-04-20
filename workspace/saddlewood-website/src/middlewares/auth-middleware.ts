import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';
import { users } from '@/shared/schema';
import { eq } from 'drizzle-orm';
import { memStorage } from '@/lib/mem-storage';

/**
 * Middleware to check if a request is authenticated
 * Returns the user if authenticated, or false if not
 */
export async function isAuthenticated(request: NextRequest) {
  try {
    // Check for auth cookie
    const authCookie = request.cookies.get('adminUser');
    
    if (authCookie?.value) {
      try {
        const userData = JSON.parse(authCookie.value);
        if (userData && userData.id) {
          return userData;
        }
      } catch (e) {
        console.error('Error parsing auth cookie:', e);
      }
    }
    
    // Alternative: check auth header (for API clients)
    const authHeader = request.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      try {
        // Simple token validation (in a real app, you'd verify JWT or similar)
        const userData = JSON.parse(atob(token));
        if (userData && userData.id) {
          return userData;
        }
      } catch (e) {
        console.error('Error parsing auth header:', e);
      }
    }
    
    return false;
  } catch (error) {
    console.error('Auth middleware error:', error);
    return false;
  }
}

/**
 * Middleware to protect admin API routes
 * Will return a 401 response if not authenticated
 */
export async function withAdminAuth(
  request: NextRequest,
  handler: (req: NextRequest, user: any) => Promise<NextResponse>
) {
  const user = await isAuthenticated(request);
  
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  return handler(request, user);
}