'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import type { JokeSchemaErrorType, JokeSchemaType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';

type State = {
  success: boolean;
  data?: JokeSchemaType;
  timestamp?: number;
  errors?: JokeSchemaErrorType;
};

export async function createJoke(_prevState: State, formData: FormData): Promise<State> {
  await slow();

  const joke = {
    content: formData.get('content') as string,
    name: formData.get('name') as string,
  };

  const result = jokeSchema.safeParse(joke);

  if (!result.success) {
    return {
      data: joke,
      errors: result.error.formErrors,
      success: false,
    };
  }

  await prisma.joke.create({
    data: result.data,
  });

  revalidatePath('/jokes');

  return {
    success: true,
    timestamp: Date.now(),
  };
}
