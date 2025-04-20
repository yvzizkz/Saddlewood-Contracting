import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/shared/schema';
import { comparePasswords } from '@/lib/auth/password';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { memStorage } from '@/lib/mem-storage';
import { setSessionCookie } from '@/lib/session';

// Login schema validation
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: NextRequest) {
  try {
    // Get and validate request body
    const body = await request.json();
    const validatedData = loginSchema.parse(body);
    
    // Try to find user in database or memory storage
    let user;
    let storageType = 'database';
    
    // First try database
    try {
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.username, validatedData.username))
        .limit(1);
      
      if (dbUser) {
        user = dbUser;
        console.log('User found in database');
      }
    } catch (dbError) {
      console.error('Database error, will try memory storage fallback:', dbError);
      storageType = 'memory';
    }
    
    // If not found in database or there was an error, try memory storage
    if (!user) {
      try {
        storageType = 'memory';
        user = await memStorage.getUserByUsername(validatedData.username);
        if (user) {
          console.log('User found in memory storage');
        }
      } catch (memError) {
        console.error('Memory storage error:', memError);
      }
    }
    
    // If no user found or password doesn't match
    if (!user || !(await comparePasswords(validatedData.password, user.password))) {
      return NextResponse.json({ 
        success: false,
        message: "Invalid username or password"
      }, { status: 401 });
    }
    
    // Create cookie-based session
    const { password, ...userWithoutPassword } = user;
    
    // Create response with user data
    const response = NextResponse.json({ 
      success: true,
      user: userWithoutPassword,
      storageType
    });
    
    // Set session cookie using our new helper
    setSessionCookie(response, userWithoutPassword);
    
    return response;
    
  } catch (error) {
    console.error('Error during login:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      success: false,
      message: 'An error occurred during login'
    }, { status: 500 });
  }
}