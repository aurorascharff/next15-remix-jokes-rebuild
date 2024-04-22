'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJoke(data: FormData) {
  await slow();

  const result = jokeSchema.safeParse({
    content: data.get('content'),
    name: data.get('name'),
  });

  if (!result.success) {
    console.error('FORM VALIDATION ERROR');
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });

  revalidatePath('/jokes');
}
