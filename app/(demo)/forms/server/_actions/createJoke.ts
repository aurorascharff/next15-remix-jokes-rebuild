'use server';

import { revalidatePath } from 'next/cache';
import { jokeSchema } from '@/app/(demo)/_validations/jokeSchema';
import { prisma } from '@/db';

export async function createJoke(data: FormData) {
  const result = jokeSchema.safeParse({
    content: data.get('content'),
    name: data.get('name'),
  });

  if (!result.success) {
    console.log('VALIDATION ERROR');
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/forms');
}
