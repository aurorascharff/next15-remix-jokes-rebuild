'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJoke(data: FormData) {
  const result = jokeSchema.safeParse({
    content: data.get('content')?.valueOf(),
    name: data.get('name')?.valueOf(),
  });

  if (!result.success) {
    console.error('FORM VALIDATION ERROR');
    return;
  }

  try {
    await prisma.joke.create({
      data: result.data,
    });
  } catch (e) {
    console.error('SERVER ERROR');
    return;
  }

  revalidatePath('/jokes');
}
