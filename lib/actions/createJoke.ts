'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';

export async function createJoke(data: FormData) {
  const name = data.get('name');
  const content = data.get('content');

  const joke = await prisma.joke.create({
    data: {
      content: content as string,
      name: name as string,
    },
  });
  revalidatePath('/jokes');
  redirect('/jokes/' + joke.id);
}
