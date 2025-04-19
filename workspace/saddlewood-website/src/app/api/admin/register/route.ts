import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/shared/schema';
import { z } from 'zod';
import { hashPassword } from '@/lib/auth/password';

// Admin registration schema
const adminRegistrationSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' })
    .max(50, { message: 'Username must be less than 50 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  registrationCode: z.string(),
});

// This endpoint is for registering admin users
export async function POST(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();
    
    // Validate admin registration code (simple security measure)
    // In a production app, you'd use a more secure approach
    const REGISTRATION_CODE = process.env.ADMIN_REGISTRATION_CODE || 'saddlewood2025';
    
    if (body.registrationCode !== REGISTRATION_CODE) {
      return NextResponse.json({
        success: false,
        message: 'Invalid registration code',
      }, { status: 403 });
    }
    
    // Validate form data
    const validatedData = adminRegistrationSchema.parse(body);
    
    // Check if username already exists
    const existingUsers = await db
      .select()
      .from(users)
      .where(({ eq }) => eq(users.username, validatedData.username));
    
    if (existingUsers.length > 0) {
      return NextResponse.json({
        success: false,
        message: 'Username already exists',
      }, { status: 400 });
    }
    
    // Hash the password
    const hashedPassword = await hashPassword(validatedData.password);
    
    // Insert into database
    const result = await db.insert(users).values({
      username: validatedData.username,
      password: hashedPassword,
      name: validatedData.name,
      createdAt: new Date(),
    }).returning();
    
    // Remove password from the result before returning
    const { password, ...userWithoutPassword } = result[0];
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Admin user created successfully',
      data: userWithoutPassword,
    }, { status: 201 });
    
  } catch (error) {
    console.error('Admin registration error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      }, { status: 400 });
    }
    
    // Handle other errors
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request',
    }, { status: 500 });
  }
}