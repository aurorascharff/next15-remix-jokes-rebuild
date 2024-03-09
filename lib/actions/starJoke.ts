'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function starJoke(starred: boolean, jokeId: string) {
  await prisma.joke.update({
    data: {
      starred,
    },
    where: { id: jokeId },
  });
  revalidatePath('/jokes');
}
