'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';
import { clearJokeDraft } from './clearJokeDraft';

export async function createJoke(data: JokeSchemaType) {
  // revalidatePath('/jokes');
  // return {
  //   error: 'SERVER ERROR',
  //   success: false,
  // };

  const result = jokeSchema.safeParse({
    content: data.content,
    name: data.name,
  });

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    revalidatePath('/jokes');
    return {
      error: errorMessages,
      success: false,
    };
  }

  await prisma.joke.create({
    data: result.data,
  });

  clearJokeDraft();
  revalidatePath('/jokes');
  return {
    error: undefined,
    success: true,
  };
}
