'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function favoriteJoke(jokeId: string, isFavorite: boolean) {
  await slow();

  await prisma.joke.update({
    data: { favorite: !isFavorite },
    where: { id: jokeId },
  });
  revalidatePath('/jokes');
}
