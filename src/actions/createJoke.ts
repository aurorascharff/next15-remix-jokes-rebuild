import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function createJoke(data: FormData) {
  'use server';

  const name = data.get('name')?.valueOf();
  const content = data.get('content')?.valueOf();

  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('Invalid name');
  }

  if (typeof content !== 'string' || content.length === 0) {
    throw new Error('Invalid content');
  }

  await prisma.joke.create({
    data: {
      content,
      name,
    },
  });
  revalidatePath('/jokes');
}
