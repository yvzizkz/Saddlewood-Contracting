import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Create a response that will clear the auth cookie
    const response = NextResponse.json({ 
      success: true,
      message: 'Logged out successfully'
    });
    
    // Clear the adminUser cookie
    response.cookies.set({
      name: 'adminUser',
      value: '',
      expires: new Date(0), // Set expiry to epoch (effectively deleting the cookie)
      path: '/',
      sameSite: 'lax', // Changed from 'strict' to 'lax' for better compatibility
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Only secure in production
    });
    
    return response;
    
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ 
      success: false,
      message: 'An error occurred during logout'
    }, { status: 500 });
  }
}