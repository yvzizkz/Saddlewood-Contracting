import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie } from '@/lib/session';

export async function POST(request: NextRequest) {
  try {
    // Create a response that will clear the auth cookie
    const response = NextResponse.json({ 
      success: true,
      message: 'Logged out successfully'
    });
    
    // Clear the session using our new helper
    clearSessionCookie(response);
    
    return response;
    
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ 
      success: false,
      message: 'An error occurred during logout'
    }, { status: 500 });
  }
}