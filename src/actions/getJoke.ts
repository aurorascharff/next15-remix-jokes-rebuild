import { prisma } from '@/db';

export async function getJoke(jokeId: string) {
  'use server';

  return prisma.joke.findUnique({
    where: { id: jokeId },
  });
}
