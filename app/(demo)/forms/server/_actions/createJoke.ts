'use server';

import { revalidatePath } from 'next/cache';
import { jokeSchema } from '@/app/(demo)/_validations/jokeSchema';
import { prisma } from '@/db';

export async function createJoke(formData: FormData) {
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
  revalidatePath('/forms');
}
