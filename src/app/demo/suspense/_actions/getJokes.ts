'use server';

import { prisma } from '@/db';

export async function getJokes() {
  await new Promise(resolve => {
    return setTimeout(resolve, 4000);
  });
  return prisma.joke.findMany();
}
