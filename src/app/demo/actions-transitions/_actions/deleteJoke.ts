'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function deleteJoke(jokeId: string) {
  await prisma.joke.delete({ where: { id: jokeId } });
  revalidatePath('/demo/actions-transitions');
}
