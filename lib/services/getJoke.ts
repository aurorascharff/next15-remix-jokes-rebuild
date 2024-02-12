import 'server-only';

import { notFound } from 'next/navigation';
import { prisma } from '@/db';

export async function getJoke(jokeId: string) {
  const joke = await prisma.joke.findUnique({
    where: { id: jokeId },
  });
  if (!joke) {
    notFound();
  }
  return joke;
}
