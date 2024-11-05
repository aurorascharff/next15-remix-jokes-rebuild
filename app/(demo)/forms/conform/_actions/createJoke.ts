'use server';

import { parseWithZod } from '@conform-to/zod';
import { revalidatePath } from 'next/cache';
import { jokeSchema } from '@/app/(demo)/_validations/jokeSchema';
import { prisma } from '@/db';

export async function createJoke(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: jokeSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.joke.create({
    data: submission.value,
  });

  revalidatePath('/forms');
}
