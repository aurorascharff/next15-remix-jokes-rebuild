'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function createJoke(data: FormData) {
  await prisma.joke.create({
    data: {
      content: data.get('content') as string,
      name: data.get('name') as string,
    },
  });

  revalidatePath('/jokes');
}
