'use server';

import { cache } from 'react';
import { prisma } from '@/db';

export const getJokes = cache(async () => {
  return prisma.joke.findMany();
});
