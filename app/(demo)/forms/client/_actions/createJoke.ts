'use server';

import { revalidatePath } from 'next/cache';
import type { JokeSchemaType } from '@/app/(demo)/_validations/jokeSchema';
import { prisma } from '@/db';

export async function createJoke(data: JokeSchemaType) {
  await prisma.joke.create({
    data,
  });
  revalidatePath('/forms');
}
