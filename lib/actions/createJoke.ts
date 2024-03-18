'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJoke(formData: FormData) {
  await slow();

  const result = jokeSchema.safeParse({
    content: formData.get('content'),
    name: formData.get('name'),
  });

  if (!result.success) {
    console.log('VALIDATION ERROR');
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/jokes');
}
