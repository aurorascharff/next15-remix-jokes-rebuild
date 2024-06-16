'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaErrorType, JokeSchemaType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';

type State = {
  success?: boolean;
  data?: JokeSchemaType;
  error?: JokeSchemaErrorType;
  timestamp?: number;
};

export async function createJoke(_prevState: State, data: FormData): Promise<State> {
  const joke = {
    content: data.get('content') as string,
    name: data.get('name') as string,
  };

  const result = jokeSchema.safeParse(joke);

  if (!result.success) {
    return {
      data: joke,
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
    timestamp: Date.now(),
  };
}
