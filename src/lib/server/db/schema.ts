import type { AnyPgColumn } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm/sql';
import { pgTable, integer, text, varchar, timestamp, serial } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: varchar('id', { length: 255 }).primaryKey(),
	username: varchar('username', { length: 32 }).notNull().unique(),
	bs: integer('Bs').default(0),
	email: varchar('email', { length: 100 }).notNull().unique(),
	firstname: varchar('firstname', { length: 100 }),
	lastname: varchar('lastname', { length: 100 }),
	userIdentification: varchar('userIdentification', { length: 10 }).unique(),
	passwordHash: varchar('password_hash', { length: 255 }).notNull(),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').default(sql`now()`)
});

export const session = pgTable('session', {
	id: varchar('id', { length: 255 }).primaryKey(),
	userId: varchar('user_id', { length: 255 })
		.notNull()
		.references((): AnyPgColumn => user.id),
	expiresAt: timestamp('expires_at').notNull()
});

export const cartones = pgTable('cartones', {
	id: serial('id').primaryKey().unique(),
	carton: text('carton'),
	userId: varchar('user_id', { length: 255 })
		.notNull()
		.references((): AnyPgColumn => user.id),
	createdAt: timestamp('created_at').defaultNow()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
