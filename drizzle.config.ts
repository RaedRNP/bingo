import { defineConfig } from 'drizzle-kit';

if (!process.env.PG_DATABASE) throw new Error('PG_NAME is not set');
if (!process.env.PG_USER) throw new Error('PG_USER is not set');
if (!process.env.PG_PASSWORD) throw new Error('PG_PASSWORD is not set');
if (!process.env.PG_HOST) throw new Error('PG_HOST is not set');
if (!process.env.PG_PORT) throw new Error('PG_PORT is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		user: process.env.PG_USER,
		password: process.env.PG_PASSWORD,
		database: process.env.PG_DATABASE || 'default_database',
		host: process.env.PG_HOST || 'localhost',
		port: process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : undefined,
		ssl: false
	},

	verbose: true,
	strict: true,
	dialect: 'postgresql'
});
