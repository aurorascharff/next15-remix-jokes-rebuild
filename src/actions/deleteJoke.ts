'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';

export async function deleteJoke(jokeId: string) {
  await prisma.joke.delete({ where: { id: jokeId } });
  revalidateTag('jokes');
  redirect('/jokes');
}
