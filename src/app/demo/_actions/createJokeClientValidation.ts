'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import type { Joke } from '@prisma/client';

export async function createJokeClientValidation(joke: Joke) {
  await prisma.joke.create({
    data: joke,
  });
  revalidatePath('/demo/forms');
}
