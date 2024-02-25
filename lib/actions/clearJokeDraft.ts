'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function clearJokeDraft() {
  await prisma.joke.update({
    data: {
      content: '',
      name: '',
    },
    where: { id: 'DRAFT' },
  });
  revalidatePath('/jokes');
}
