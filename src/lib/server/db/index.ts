import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
	user: env.PG_USER,
	password: env.PG_PASSWORD,
	database: env.PG_DATABASE,
	host: env.PG_HOST,
	port: env.PG_PORT ? parseInt(env.PG_PORT, 10) : undefined
});
await client.connect();
export const db = drizzle(client);
