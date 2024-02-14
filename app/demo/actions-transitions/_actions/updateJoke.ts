'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';

export async function updateJoke(jokeId: string, joke: JokeSchemaType) {
  const result = jokeSchema.safeParse(joke);

  if (!result.success) {
    console.log('SERVER ERROR');
    return;
  }

  await prisma.joke.update({ data: joke, where: { id: jokeId } });
  revalidatePath('/jokes');
  redirect('/demo/actions-transitions/' + jokeId);
}
