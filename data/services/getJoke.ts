import 'server-only';

import { notFound } from 'next/navigation';
import { cache } from 'react';
import { prisma } from '@/db';

/**
 * Since this function is used twice in the same render in joke/[jokeid]/page.tsx,
 * and it's a database query rather than a fetch request (where it's automatically memoized),
 * we have to manually add the memoization using this function. */
export const getJoke = cache(async (jokeId: string) => {
  const joke = await prisma.joke.findUnique({
    where: { id: jokeId },
  });
  if (!joke) {
    notFound();
  }
  return joke;
});
