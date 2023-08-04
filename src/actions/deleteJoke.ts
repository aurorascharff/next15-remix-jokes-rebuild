'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function deleteJoke(jokeId: string) {
  await prisma.joke.delete({ where: { id: jokeId } });
  // should be redirect('/jokes') here but there is a bug with server actions
  revalidatePath('/jokes');
}
