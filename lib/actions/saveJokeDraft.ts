'use server';

import { prisma } from '@/db';

export async function saveJokeDraft(name: string, value: string) {
  await prisma.joke.update({
    data: {
      [name]: value,
    },
    where: { id: 'DRAFT' },
  });
}
