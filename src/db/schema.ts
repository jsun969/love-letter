import { sql } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { nanoid } from 'nanoid';

export const letterTable = sqliteTable('letters', {
	id: text('id')
		.$defaultFn(() => nanoid())
		.primaryKey(),
	content: text('content').notNull(),
	color: text('color').notNull(),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});
