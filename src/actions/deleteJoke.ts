'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';

export async function deleteJoke(jokeId: string) {
  await prisma.joke.delete({ where: { id: jokeId } });
  redirect('/jokes');
}
