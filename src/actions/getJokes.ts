'use server';

import { cache } from 'react';
import { prisma } from '@/db';

export const getJokes = cache(async () => {
  const jokes = await prisma.joke.findMany();
  return jokes.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
});
