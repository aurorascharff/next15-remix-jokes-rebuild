'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { jokeSchema, type JokeSchemaType } from '@/validations/jokeSchema';

export async function createJokeOptimistic(data: JokeSchemaType) {
  const result = jokeSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    console.log('SERVER ERROR: ' + errorMessages);
    revalidatePath('/demo/forms');
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/demo/forms');
}
