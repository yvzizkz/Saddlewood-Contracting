import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leads } from '@/shared/schema';
import { z } from 'zod';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .refine((val) => val === '' || /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(val), {
      message: 'Please enter a valid phone number (e.g., (123) 456-7890)'
    }),
  service: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

export async function POST(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();
    
    // Validate form data
    const validatedData = contactFormSchema.parse(body);
    
    // Insert into database
    const result = await db.insert(leads).values({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || '',
      service: validatedData.service || '',
      message: validatedData.message,
      status: 'new',
      processed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: result[0],
    }, { status: 201 });
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    
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