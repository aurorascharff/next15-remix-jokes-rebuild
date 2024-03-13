'use server';

import { revalidatePath } from 'next/cache';

import { prisma } from '@/db';

export async function favoriteJoke(jokeId: string, formData: FormData) {
  await prisma.joke.update({
    data: { favorite: formData.get('favorite') === 'true' ? true : false },
    where: { id: jokeId },
  });
  revalidatePath('/jokes');
}
