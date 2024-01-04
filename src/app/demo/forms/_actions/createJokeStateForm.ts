'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { JokeSchema } from '@/src/validations/jokeSchema';

type State = {
  success?: boolean;
  error?: string;
};

export async function createJokeStateForm(_prevState: State, data: FormData) {
  const newJoke = {
    content: data.get('content')?.valueOf(),
    name: data.get('name')?.valueOf(),
  };

  const result = JokeSchema.safeParse(newJoke);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    console.log('SERVER ERROR: ' + errorMessages);
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
