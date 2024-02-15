'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { jokeSchema } from '@/validations/jokeSchema';

type State = {
  success?: boolean;
  error?: string;
};

export async function createJokeStateForm(_prevState: State, data: FormData) {
  const newJoke = {
    content: data.get('content')?.valueOf(),
    name: data.get('name')?.valueOf(),
  };

  const result = jokeSchema.safeParse(newJoke);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    return {
      error: errorMessages,
    };
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/demo/forms');
  return {
    success: true,
  };
}
