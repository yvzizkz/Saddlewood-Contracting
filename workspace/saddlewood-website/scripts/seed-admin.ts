import { db } from '../src/lib/db';
import { users } from '../src/shared/schema';
import { hashPassword } from '../src/lib/auth/password';
import { eq } from 'drizzle-orm';

async function seedAdmin() {
  console.log('🌱 Seeding admin user...');
  
  try {
    // Check if admin user already exists
    const [existingAdmin] = await db
      .select()
      .from(users)
      .where(eq(users.username, 'admin'));
    
    if (existingAdmin) {
      console.log('✅ Admin user already exists.');
      return;
    }
    
    // Create admin user
    const hashedPassword = await hashPassword('admin1234');
    
    const [adminUser] = await db
      .insert(users)
      .values({
        username: 'admin',
        password: hashedPassword,
        name: 'Administrator',
        createdAt: new Date(),
      })
      .returning();
    
    console.log('✅ Admin user created successfully!');
    console.log('  Username:', adminUser.username);
    console.log('  Name:', adminUser.name);
    console.log('  Password: admin1234');
    
  } catch (error) {
    console.error('❌ Error seeding admin user:', error);
  } finally {
    process.exit(0);
  }
}

seedAdmin();