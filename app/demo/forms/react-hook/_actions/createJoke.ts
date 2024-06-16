'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { jokeSchemaStricter, type JokeSchemaType } from '@/validations/jokeSchema';

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
  } catch (error) {
    return {
      error: 'SERVER ERROR',
    };
  }
  revalidatePath('/demo/forms');
}
