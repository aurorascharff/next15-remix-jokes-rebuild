'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function favoriteJoke(jokeId: string, isFavorite: boolean) {
  await prisma.joke.update({
    data: { favorite: !isFavorite },
    where: { id: jokeId },
  });
  revalidatePath('/jokes');
}
