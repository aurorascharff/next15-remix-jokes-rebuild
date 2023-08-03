import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function deleteJoke(jokeId: string) {
  'use server';

  await prisma.joke.delete({ where: { id: jokeId } });
  revalidatePath('/jokes');
}
