'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';

type State = {
  success?: boolean;
  error?: JokeSchemaErrorType;
};

export async function createJokeStateForm(_prevState: State, data: FormData) {
  const result = jokeSchema.safeParse({
    content: data.get('content'),
    name: data.get('name'),
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

  revalidatePath('/demo/forms');
  return {
    error: undefined,
    success: true,
  };
}
