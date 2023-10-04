'use server';

import { prisma } from '@/db';

export async function getJokes() {
  await new Promise(resolve => {
    return setTimeout(resolve, 3000);
  });
  return prisma.joke.findMany();
}
