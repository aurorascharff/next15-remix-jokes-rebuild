'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJoke(data: JokeSchemaType) {
  const result = jokeSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    return {
      error: errorMessages,
      success: false,
    };
  }

  await prisma.joke.create({
    data: result.data,
  });

  revalidatePath('/jokes');
  return {
    error: undefined,
    success: true,
  };
}
