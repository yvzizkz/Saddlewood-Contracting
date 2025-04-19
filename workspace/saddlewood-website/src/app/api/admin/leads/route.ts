import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leads } from '@/shared/schema';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth-options';
import { desc } from 'drizzle-orm';

// GET - Retrieve all leads
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Fetch all leads, ordered by most recent first
    const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));
    
    return NextResponse.json({ 
      success: true,
      leads: allLeads
    });
    
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ 
      success: false,
      message: 'An error occurred while fetching leads'
    }, { status: 500 });
  }
}