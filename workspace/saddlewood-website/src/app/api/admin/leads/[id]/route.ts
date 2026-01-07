import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leads } from '@/shared/schema';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth-options';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

// GET - Retrieve a specific lead by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ 
        success: false,
        message: 'Invalid lead ID'
      }, { status: 400 });
    }
    
    // Fetch the lead
    const [lead] = await db
      .select()
      .from(leads)
      .where(eq(leads.id, id));
    
    if (!lead) {
      return NextResponse.json({ 
        success: false,
        message: 'Lead not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({ 
      success: true,
      lead
    });
    
  } catch (error) {
    console.error('Error fetching lead:', error);
    return NextResponse.json({ 
      success: false,
      message: 'An error occurred while fetching the lead'
    }, { status: 500 });
  }
}

// Update lead schema
const updateLeadSchema = z.object({
  status: z.enum(['new', 'contacted', 'completed']).optional(),
  notes: z.string().optional(),
  processed: z.boolean().optional(),
});

// PATCH - Update a lead
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ 
        success: false,
        message: 'Invalid lead ID'
      }, { status: 400 });
    }
    
    // Get request body
    const body = await request.json();
    
    // Validate update data
    const validatedData = updateLeadSchema.parse(body);
    
    // Update the lead
    const [updatedLead] = await db
      .update(leads)
      .set({
        ...validatedData,
        updatedAt: new Date(),
      })
      .where(eq(leads.id, id))
      .returning();
    
    if (!updatedLead) {
      return NextResponse.json({ 
        success: false,
        message: 'Lead not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({ 
      success: true,
      lead: updatedLead
    });
    
  } catch (error) {
    console.error('Error updating lead:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.issues,
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      success: false,
      message: 'An error occurred while updating the lead'
    }, { status: 500 });
  }
}