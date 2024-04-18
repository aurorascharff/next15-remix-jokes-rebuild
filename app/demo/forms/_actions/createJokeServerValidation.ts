'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJokeServerValidation(data: FormData) {
  const result = jokeSchema.safeParse({
    content: data.get('content') as string,
    name: data.get('name') as string,
  });

  if (!result.success) {
    console.log('SERVER ERROR');
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/demo/forms');
}
