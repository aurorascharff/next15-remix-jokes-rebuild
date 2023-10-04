'use server';

import { prisma } from '@/db';

export const revalidate = '0';

export async function getJokes() {
  return prisma.joke.findMany();
}
