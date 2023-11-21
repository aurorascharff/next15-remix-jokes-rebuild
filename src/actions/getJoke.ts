'use server';

import { prisma } from '@/db';

export async function getJoke(jokeId: string) {
  return prisma.joke.findUnique({
    where: { id: jokeId },
  });
}
