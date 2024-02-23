import 'server-only';

import { prisma } from '@/db';
import { Joke } from '@prisma/client';

export async function getJokeDraft() {
  return (await prisma.joke.findUnique({
    where: { id: 'DRAFT' },
  })) as Joke;
}
