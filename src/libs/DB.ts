import '@/libs/envConfig';

import path from 'node:path';

import { sql } from '@vercel/postgres';
import { drizzle as drizzleVercel } from 'drizzle-orm/vercel-postgres';
import { migrate } from 'drizzle-orm/vercel-postgres/migrator';

import * as schema from '@/models/Schema';

const drizzle = drizzleVercel(sql, { schema });

await migrate(drizzle, { migrationsFolder: path.join(process.cwd(), 'migrations') });

export const db = drizzle;
