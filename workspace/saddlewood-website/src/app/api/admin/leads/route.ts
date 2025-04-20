import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leads } from '@/shared/schema';
import { desc } from 'drizzle-orm';
import { withAdminAuth } from '@/middlewares/auth-middleware';

// GET - Retrieve all leads - protected by authentication middleware
export async function GET(request: NextRequest) {
  return withAdminAuth(request, async (req, user) => {
    try {
      // Attempt to fetch from database
      try {
        // Fetch all leads, ordered by most recent first
        const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));
        
        return NextResponse.json({ 
          success: true,
          leads: allLeads
        });
      } catch (dbError) {
        console.error('Database error fetching leads:', dbError);
        
        // Return empty array as fallback
        return NextResponse.json({ 
          success: true,
          leads: [],
          message: 'Using fallback empty leads array due to database error'
        });
      }
      
    } catch (error) {
      console.error('Error fetching leads:', error);
      return NextResponse.json({ 
        success: false,
        message: 'An error occurred while fetching leads'
      }, { status: 500 });
    }
  });
}