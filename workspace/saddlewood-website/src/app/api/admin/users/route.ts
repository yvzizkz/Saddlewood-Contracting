import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/shared/schema';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth-options';
import { desc } from 'drizzle-orm';

// GET - Retrieve all users
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Fetch all users, ordered by most recent first
    const allUsers = await db
      .select({
        id: users.id,
        username: users.username,
        name: users.name,
        createdAt: users.createdAt,
        // intentionally exclude password field
      })
      .from(users)
      .orderBy(desc(users.createdAt));
    
    return NextResponse.json({ 
      success: true,
      users: allUsers
    });
    
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ 
      success: false,
      message: 'An error occurred while fetching users'
    }, { status: 500 });
  }
}