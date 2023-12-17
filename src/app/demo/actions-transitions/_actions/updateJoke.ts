'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';

export async function updateJoke(jokeId: string, content: string) {
  if (typeof content !== 'string' || content.length === 0) {
    throw new Error('Invalid content');
  }

  await prisma.joke.update({ data: { content }, where: { id: jokeId } });
  revalidatePath('/jokes');
  redirect('/demo/actions-transitions/' + jokeId);
}
