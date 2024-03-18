'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function createJoke(formData: FormData) {
  await prisma.joke.create({
    data: {
      content: formData.get('content') as string,
      name: formData.get('name') as string,
    },
  });
  revalidatePath('/jokes');
}
