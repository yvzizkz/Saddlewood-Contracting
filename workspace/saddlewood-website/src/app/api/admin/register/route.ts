import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/shared/schema';
import { hashPassword } from '@/lib/auth/password';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { memStorage } from '@/lib/mem-storage';
import { setSessionCookie } from '@/lib/session';

// Registration schema validation
const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Get and validate request body
    const body = await request.json();
    const validatedData = registerSchema.parse(body);
    
    // Hash password
    const hashedPassword = await hashPassword(validatedData.password);
    
    // Try to use database first, fall back to memory storage if it fails
    let newUser;
    let storageType = 'database';
    
    try {
      // First try database storage - check if username exists
      const [existingDbUser] = await db
        .select()
        .from(users)
        .where(eq(users.username, validatedData.username))
        .limit(1);
      
      if (existingDbUser) {
        console.log('Username already exists in database');
        return NextResponse.json({ 
          success: false,
          message: "Username already exists"
        }, { status: 400 });
      }
      
      // Create user in database
      const [dbUser] = await db
        .insert(users)
        .values({
          username: validatedData.username,
          password: hashedPassword,
          name: validatedData.name || validatedData.username,
          createdAt: new Date(),
        })
        .returning();
        
      newUser = dbUser;
      console.log('User created in database');
      
    } catch (dbError) {
      console.error('Database error, using memory storage fallback:', dbError);
      storageType = 'memory';
      
      // Check if username exists in memory storage
      try {
        const existingMemUser = await memStorage.getUserByUsername(validatedData.username);
        if (existingMemUser) {
          console.log('Username already exists in memory storage');
          return NextResponse.json({ 
            success: false,
            message: "Username already exists"
          }, { status: 400 });
        }
        
        // Create user in memory storage
        newUser = await memStorage.createUser({
          username: validatedData.username,
          password: hashedPassword,
          name: validatedData.name || validatedData.username,
        });
        console.log('User created in memory storage');
      } catch (memError) {
        console.error('Memory storage error:', memError);
        return NextResponse.json({ 
          success: false,
          message: "Error creating user"
        }, { status: 500 });
      }
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = newUser;
    
    // Create response with user data
    const response = NextResponse.json({ 
      success: true,
      user: userWithoutPassword,
      storageType
    }, { status: 201 });
    
    // Set session cookie using our new helper
    setSessionCookie(response, userWithoutPassword);
    
    return response;
    
  } catch (error) {
    console.error('Error registering user:', error);
    
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
      message: 'An error occurred during registration'
    }, { status: 500 });
  }
}