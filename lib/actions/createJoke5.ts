'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJoke(data: JokeSchemaType) {
  const result = jokeSchema.safeParse({
    content: data.content,
    name: data.name,
  });

  if (!result.success) {
    revalidatePath('/jokes');
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
  } catch (e) {
    revalidatePath('/jokes');
    return {
      message: 'SERVER ERROR',
      success: false,
    };
  }

  revalidatePath('/jokes');
  return {
    success: true,
  };
}
