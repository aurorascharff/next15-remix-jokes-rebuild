'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';
import { clearJokeDraft } from './clearJokeDraft';

type State = {
  success?: boolean;
  error?: JokeSchemaErrorType;
};

export async function createJoke(_prevState: State, data: FormData) {
  const result = jokeSchema.safeParse({
    content: data.get('content')?.valueOf(),
    name: data.get('name')?.valueOf(),
  });

  if (!result.success) {
    return {
      error: result.error.formErrors,
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
