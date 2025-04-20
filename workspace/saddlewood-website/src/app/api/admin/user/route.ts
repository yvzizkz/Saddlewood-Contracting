import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/middlewares/auth-middleware';

// GET - Check if user is authenticated and return user data
export async function GET(request: NextRequest) {
  try {
    const user = await isAuthenticated(request);
    
    if (!user) {
      return NextResponse.json({ 
        success: false,
        message: 'Not authenticated' 
      }, { status: 401 });
    }
    
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