import { prisma } from '@/db';

export const revalidate = '0';

export async function getJokes() {
  'use server';

  return prisma.joke.findMany();
}
