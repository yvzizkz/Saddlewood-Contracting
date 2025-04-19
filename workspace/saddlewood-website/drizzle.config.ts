import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

export default {
  schema: './src/shared/schema.ts',
  out: './drizzle',
  driver: 'pg', // This is correct for PostgreSQL
  dbCredentials: {
    // This is the correct format for PostgreSQL connections
    url: process.env.DATABASE_URL,
  },
} satisfies Config;