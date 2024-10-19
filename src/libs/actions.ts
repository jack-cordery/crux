'use server';

import { sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import type { FieldValues } from 'react-hook-form';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';
import { CounterValidation } from '@/validations/CounterValidation';

export async function incrementCount(formData: FieldValues) {
  const parse = CounterValidation.safeParse(formData);
  const id = 0;
  logger.info(`Form data ${JSON.stringify(formData)}`);

  if (!parse.success) {
    logger.error(`Invalid form data ${JSON.stringify(parse.error)}`);
    return;
  }
  try {
    await db.insert(counterSchema).values({ id, count: parse.data.increment }).onConflictDoUpdate({
      target: counterSchema.id,
      set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
    })
      .returning();

    logger.info('Counter has been incremented');
  } catch (error) {
    logger.error('Failed to increment counter', { error });
  }

  revalidatePath('/counter');
}
