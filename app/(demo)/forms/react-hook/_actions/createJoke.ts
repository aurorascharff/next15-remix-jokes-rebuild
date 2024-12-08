'use server';

import { revalidatePath } from 'next/cache';
import type { JokeSchemaType } from '@/app/(demo)/_validations/jokeSchema';
import { jokeSchemaStricter } from '@/app/(demo)/_validations/jokeSchema';
import { prisma } from '@/db';

export async function createJoke(data: JokeSchemaType) {
  const result = jokeSchemaStricter.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    return {
      error: errorMessages,
    };
  }

  try {
    await prisma.joke.create({
      data,
    });
  } catch {
    return {
      error: 'SERVER ERROR',
    };
  }
  revalidatePath('/forms');
}
