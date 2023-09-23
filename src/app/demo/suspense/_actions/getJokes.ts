import { prisma } from '@/db';

export const revalidate = '0';

export async function getJokes() {
  'use server';

  await new Promise(resolve => {
    return setTimeout(resolve, 3000);
  });
  return prisma.joke.findMany();
}
