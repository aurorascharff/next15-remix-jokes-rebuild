'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaType } from '@/src/validations/jokeSchema';

export async function createJokeOptimistic(data: JokeSchemaType) {
  try {
    await prisma.joke.create({
      data,
    });
  } catch (error) {
    revalidatePath('/demo/forms');
    return {
      error: 'SERVER ERROR',
    };
  } finally {
    revalidatePath('/demo/forms');
  }
}
