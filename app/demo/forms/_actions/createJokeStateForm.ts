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

export async function createJokeStateForm(_prevState: State, data: FormData): Promise<State> {
  const result = jokeSchema.safeParse({
    content: data.get('content'),
    name: data.get('name'),
  });

  if (!result.success) {
    return {
      data: {
        content: data.get('content') as string,
        name: data.get('name') as string,
      },
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
