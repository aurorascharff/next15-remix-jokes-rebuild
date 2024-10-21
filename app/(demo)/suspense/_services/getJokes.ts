import 'server-only';

import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function getJokes() {
  await slow(4000);

  return prisma.joke.findMany({
    orderBy: { createdAt: 'desc' },
  });
}
