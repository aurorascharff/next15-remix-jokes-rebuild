import 'server-only';

import { prisma } from '@/db';
import type { Joke } from '@prisma/client';

export async function getJokeDraft() {
  return (await prisma.joke.findUnique({
    where: { id: 'DRAFT' },
  })) as Joke;
}
