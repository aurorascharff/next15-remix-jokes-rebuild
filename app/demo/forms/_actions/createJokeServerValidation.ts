'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJokeServerValidation(data: FormData) {
  const newJoke = {
    content: data.get('content')?.valueOf(),
    name: data.get('name')?.valueOf(),
  };

  const result = jokeSchema.safeParse(newJoke);

  if (!result.success) {
    console.log('SERVER ERROR');
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/demo/forms');
}
