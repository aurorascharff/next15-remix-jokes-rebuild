'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function deleteJoke(jokeid: string) {
  await slow();
  await prisma.joke.delete({
    where: {
      id: jokeid,
    },
  });
  revalidatePath('/jokes');
  redirect('/jokes');
}
