import { prisma } from '@/db';
import React from 'react';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import Button from '@/components/Button';

async function createTodo(data: FormData) {
  'use server';

  const name = data.get('name')?.valueOf();
  const content = data.get('content')?.valueOf();

  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('Invalid name');
  }

  if (typeof content !== 'string' || content.length === 0) {
    throw new Error('Invalid content');
  }

  await prisma.joke.create({
    data: {
      name,
      content,
    },
  });
  redirect('/jokes');
}

export default function NewJokePage() {
  return (
    <div>
      <p className="text-white">Add your own hilarious joke</p>
      <form action={createTodo} className="flex flex-col gap-4 w-full">
        <div>
          <label className="text-white">
            Name:
            <input
              className="appearance-none flex items-center w-full h-10 m-0 rounded shadow-none text-base font-normal leading-normal border-purple-light border-2 bg-layer bg-opacity-10"
              name="name"
              type="text"
              required
              minLength={2}
            />
          </label>
        </div>
        <div>
          <label className="text-white">
            Content:
            <textarea
              className="appearance-none flex items-center w-full h-10 m-0 rounded shadow-none text-base font-normal leading-normal border-purple-light border-2 bg-layer bg-opacity-10"
              name="content"
              required
              minLength={5}
            />
          </label>
        </div>
        <div>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
}
