'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { jokeSchema } from '@/validations/jokeSchema';

export async function createJoke(formData: FormData) {
  const result = jokeSchema.safeParse({
    content: formData.get('content'),
    name: formData.get('name'),
  });

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    console.log('SERVER ERROR: ' + errorMessages);
    return;
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/demo/forms');
}
