import { prisma } from '@/db';
import { revalidatePath } from 'next/cache';

export async function deleteJoke(jokeId: string) {
  'use server';

  await prisma.joke.delete({ where: { id: jokeId } });
  revalidatePath('/jokes');
}
