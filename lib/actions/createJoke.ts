'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';

export async function createJoke(formData: FormData) {
  const joke = await prisma.joke.create({
    data: {
      content: formData.get('content') as string,
      name: formData.get('name') as string,
    },
  });

  revalidatePath('/jokes');
  redirect('/jokes/' + joke.id);
}
