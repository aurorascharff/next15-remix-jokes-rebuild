'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function favoriteJoke(jokeId: string) {
  await prisma.joke.update({
    data: { favorite: true },
    where: { id: jokeId },
  });
  revalidatePath('/jokes');
}
