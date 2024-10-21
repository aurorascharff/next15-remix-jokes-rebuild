'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { JokeSchemaType } from '@/app/(demo)/_validations/jokeSchema';

export async function createJoke(data: JokeSchemaType) {
  await prisma.joke.create({
    data,
  });
  revalidatePath('/forms');
}
