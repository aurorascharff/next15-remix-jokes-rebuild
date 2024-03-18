'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import type { JokeSchemaErrorType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';

type State = {
  message?: string;
  success: boolean;
  errors?: JokeSchemaErrorType;
};

export async function createJoke(_prevState: State, formData: FormData) {
  await slow();
  const result = jokeSchema.safeParse({
    content: formData.get('content') as string,
    name: formData.get('name') as string,
  });

  if (!result.success) {
    return {
      errors: result.error.formErrors,
      message: 'VALIDATION ERROR',
      success: false,
    };
  }

  try {
    await prisma.joke.create({
      data: result.data,
    });
  } catch (error) {
    return {
      message: 'DATABASE ERROR',
      success: false,
    };
  }
  revalidatePath('/jokes');
  return {
    success: true,
  };
}
