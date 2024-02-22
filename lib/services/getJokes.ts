import 'server-only';

import { prisma } from '@/db';

export async function getJokes() {
  const jokes = await prisma.joke.findMany();

  return jokes.filter(joke => {
    return joke.id !== 'DRAFT';
  });
}
