import 'server-only';

import { notFound } from 'next/navigation';
import { cache } from 'react';
import { prisma } from '@/db';

export const getJoke = cache(async (jokeId: string) => {
  const joke = await prisma.joke.findUnique({
    where: { id: jokeId },
  });
  if (!joke) {
    notFound();
  }
  return joke;
});
