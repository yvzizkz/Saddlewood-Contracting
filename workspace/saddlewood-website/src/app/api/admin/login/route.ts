import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/shared/schema';
import { comparePasswords } from '@/lib/auth/password';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { memStorage } from '@/lib/mem-storage';

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
    
    // Try to find user in database first
    let user;
    let storageType = 'database';
    
    try {
      // First try database
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.username, validatedData.username));
      
      if (dbUser) {
        user = dbUser;
      }
    } catch (dbError) {
      console.error('Database error, using memory storage fallback:', dbError);
      storageType = 'memory';
    }
    
    // If not found in database, try memory storage
    if (!user) {
      storageType = 'memory';
      user = await memStorage.getUserByUsername(validatedData.username);
    }
    
    // If no user found or password doesn't match
    if (!user || !(await comparePasswords(validatedData.password, user.password))) {
      return NextResponse.json({ 
        success: false,
        message: "Invalid username or password"
      }, { status: 401 });
    }
    
    // Create session
    // (in a real app, this would set up a session or JWT)
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    
    return NextResponse.json({ 
      success: true,
      user: userWithoutPassword,
      storageType
    });
    
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