import { eq } from 'drizzle-orm';

import { db } from '@/libs/DB';
import { counterSchema } from '@/models/Schema';

export async function fetchCount(id: number) {
  const count = await db.query.counterSchema.findMany({
    where: eq(counterSchema.id, id),
  });

  return count[0]?.count ?? 0;
}
