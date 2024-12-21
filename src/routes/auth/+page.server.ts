import { hash, verify } from '@node-rs/argon2';
import { encodeBase32LowerCase } from '@oslojs/encoding';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		return redirect(302, '/auth/dashboard');
	}
	return {};
};

export const actions: Actions = {
	login: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		let results;

		if (!validatePassword(password)) {
			return fail(400, { message: 'Invalid password' });
		}
		if (email?.toString().includes('@')) {
			if (!validateEmail(email)) {
				return fail(400, { message: 'Invalid email' });
			}
			results = await db.select().from(table.user).where(eq(table.user.email, email));
		} else {
			if (!validateUsername(email)) {
				return fail(400, { message: 'Invalid username' });
			}
			results = await db.select().from(table.user).where(eq(table.user.username, email));
		}

		const existingUser = results.at(0);

		if (!existingUser) {
			return fail(400, { message: 'Incorrect username, email or password' });
		}

		const validPassword = await verify(existingUser.passwordHash, password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});
		if (!validPassword) {
			return fail(400, { message: 'Incorrect username, email or password' });
		}

		const sessionToken = auth.generateSessionToken();
		const session = await auth.createSession(sessionToken, existingUser.id);
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);

		return redirect(302, '/auth/dashboard');
	},
	register: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const username = formData.get('username');
		const password = formData.get('password');

		if (!validateEmail(email)) {
			return fail(400, { message: 'Invalid email' });
		}
		if (!validateUsername(username)) {
			return fail(400, { message: 'Invalid username' });
		}
		if (!validatePassword(password)) {
			return fail(400, { message: 'Invalid password' });
		}

		const userId = generateUserId();
		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		try {
			await db.insert(table.user).values({ id: userId, username, email, passwordHash });

			const sessionToken = auth.generateSessionToken();
			const session = await auth.createSession(sessionToken, userId);
			auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
		} catch (e) {
			return fail(500, { message: `An error has occurred: ${e}` });
		}
		return redirect(302, '/auth/dashboard');
	}
};

function generateUserId() {
	// ID with 120 bits of entropy, or about the same as UUID v4.
	const bytes = crypto.getRandomValues(new Uint8Array(15));
	const id = encodeBase32LowerCase(bytes);
	return id;
}

function validateUsername(username: unknown): username is string {
	return (
		typeof username === 'string' &&
		username.length >= 3 &&
		username.length <= 30 &&
		/^[a-zA-Z0-9_-]+$/.test(username)
	);
}

function validateEmail(email: unknown): email is string {
	return (
		typeof email === 'string' &&
		email.length >= 16 &&
		email.length <= 30 &&
		email.includes('@') &&
		email.includes('.')
	);
}

function validatePassword(password: unknown): password is string {
	return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}
