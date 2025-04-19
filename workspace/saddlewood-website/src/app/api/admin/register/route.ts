import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/shared/schema';
import { hashPassword } from '@/lib/auth/password';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth-options';

// Registration schema validation
const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // For development and testing, allow any registration
    // In a production environment, you would want to restrict this
    
    // Get and validate request body
    const body = await request.json();
    const validatedData = registerSchema.parse(body);
    
    // Check if username already exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.username, validatedData.username));
    
    if (existingUser) {
      return NextResponse.json({ 
        success: false,
        message: "Username already exists"
      }, { status: 400 });
    }
    
    // Hash password
    const hashedPassword = await hashPassword(validatedData.password);
    
    // Create user
    const [newUser] = await db
      .insert(users)
      .values({
        username: validatedData.username,
        password: hashedPassword,
        name: validatedData.name || validatedData.username,
        createdAt: new Date(),
      })
      .returning();
    
    // Remove password from response
    const { password, ...userWithoutPassword } = newUser;
    
    return NextResponse.json({ 
      success: true,
      user: userWithoutPassword
    }, { status: 201 });
    
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