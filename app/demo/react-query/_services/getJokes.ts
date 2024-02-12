'use server';

import { prisma } from '@/db';

export async function getJokes() {
  console.log('REFETCH');
  return prisma.joke.findMany();
}
