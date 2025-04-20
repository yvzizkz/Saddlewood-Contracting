import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/lib/session';

// GET - Check if user is authenticated and return user data
export async function GET(request: NextRequest) {
  try {
    console.log('Checking user session...');
    const user = getSessionFromRequest(request);
    
    if (!user) {
      console.log('No valid session found');
      return NextResponse.json({ 
        success: false,
        message: 'Not authenticated' 
      }, { status: 401 });
    }
    
    console.log('Valid session found:', user);
    return NextResponse.json({
      success: true,
      user
    });
    
  } catch (error) {
    console.error('Error checking auth:', error);
    return NextResponse.json({ 
      success: false,
      message: 'Server error checking authentication'
    }, { status: 500 });
  }
}