'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { JokeSchemaStricter, type JokeSchemaType } from '@/validations/jokeSchema';

export async function createJokeReactHookForm(data: JokeSchemaType) {
  const result = JokeSchemaStricter.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    console.log('SERVER ERROR: ' + errorMessages);
    revalidatePath('/demo/forms');
    return {
      error: errorMessages,
    };
  }

  try {
    await prisma.joke.create({
      data,
    });
  } catch (error) {
    revalidatePath('/demo/forms');
    return {
      error: 'SERVER ERROR',
    };
  }
  revalidatePath('/demo/forms');
}
