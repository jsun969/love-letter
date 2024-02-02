import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from './schema';

const client = createClient({
	url: import.meta.env.DATABASE_URL,
	authToken: import.meta.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema, logger: import.meta.env.DEV });
