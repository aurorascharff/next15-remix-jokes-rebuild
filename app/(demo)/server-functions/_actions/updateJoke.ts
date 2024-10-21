'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { jokeSchema } from '../../_validations/jokeSchema';
import type { Joke } from '@prisma/client';

export async function updateJoke(jokeId: string, joke: Joke) {
  const result = jokeSchema.safeParse(joke);

  if (!result.success) {
    console.log('VALIDATION ERROR');
    return;
  }

  await prisma.joke.update({ data: joke, where: { id: jokeId } });
  revalidatePath('/jokes');
  redirect('/server-functions/' + jokeId);
}
