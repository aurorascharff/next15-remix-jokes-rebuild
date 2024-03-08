'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function createJoke(data: FormData) {
  await prisma.joke.create({
    data: {
      content: data.get('content')?.valueOf() as string,
      name: data.get('name')?.valueOf() as string,
    },
  });

  revalidatePath('/jokes');
}
