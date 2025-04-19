import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar, text, timestamp, boolean } from 'drizzle-orm/pg-core';

// User schema for admin authentication
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Leads schema for storing contact form submissions
export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  service: varchar('service', { length: 50 }),
  message: text('message').notNull(),
  status: varchar('status', { length: 50 }).default('new').notNull(),
  notes: text('notes'),
  processed: boolean('processed').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

// Define relations between tables
export const usersRelations = relations(users, ({ many }) => ({
  notes: many(leadNotes),
}));

// Lead notes for tracking communications and updates
export const leadNotes = pgTable('lead_notes', {
  id: serial('id').primaryKey(),
  leadId: serial('lead_id').notNull().references(() => leads.id),
  userId: serial('user_id').notNull().references(() => users.id),
  note: text('note').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type LeadNote = typeof leadNotes.$inferSelect;
export type InsertLeadNote = typeof leadNotes.$inferInsert;

export const leadNotesRelations = relations(leadNotes, ({ one }) => ({
  lead: one(leads, {
    fields: [leadNotes.leadId],
    references: [leads.id],
  }),
  user: one(users, {
    fields: [leadNotes.userId],
    references: [users.id],
  }),
}));

export const leadsRelations = relations(leads, ({ many }) => ({
  notes: many(leadNotes),
}));