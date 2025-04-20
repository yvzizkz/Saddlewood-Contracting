/**
 * Simple session management with cookies
 * This provides a reliable way to handle authentication
 */

import { serialize, parse } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

// Session cookie name
const SESSION_COOKIE = 'saddlewood_admin_session';

// Cookie options
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

export type UserSession = {
  id: number;
  username: string;
  name: string | null;
};

// Set session cookie
export function setSessionCookie(response: NextResponse, user: UserSession): void {
  const sessionData = JSON.stringify(user);
  
  response.headers.set(
    'Set-Cookie',
    serialize(SESSION_COOKIE, sessionData, COOKIE_OPTIONS)
  );
}

// Clear session cookie
export function clearSessionCookie(response: NextResponse): void {
  response.headers.set(
    'Set-Cookie',
    serialize(SESSION_COOKIE, '', {
      ...COOKIE_OPTIONS,
      maxAge: 0,
      expires: new Date(0),
    })
  );
}

// Get session from request
export function getSessionFromRequest(request: NextRequest): UserSession | null {
  const cookies = parse(request.headers.get('cookie') || '');
  const sessionCookie = cookies[SESSION_COOKIE];
  
  if (!sessionCookie) {
    return null;
  }
  
  try {
    return JSON.parse(sessionCookie);
  } catch (error) {
    console.error('Error parsing session cookie:', error);
    return null;
  }
}