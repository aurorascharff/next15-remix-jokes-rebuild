import { Joke } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';

async function deleteJoke(data: FormData) {
  'use server';

  const jokeId = data.get('id')?.valueOf();

  if (typeof jokeId !== 'string' || jokeId.length === 0) {
    throw new Error('Invalid jokeId');
  }

  await prisma.joke.delete({ where: { id: jokeId } });
  redirect('/jokes');
}

export default function Joke({ joke }: { joke: Pick<Joke, 'content' | 'name' | 'id'> }) {
  return (
    <div>
      <p className="text-white">Heres your hilarious joke:</p>
      <p className="text-white">{joke.content}</p>
      <Link className="text-yellow" href=".">
        "{joke.name}" Permalink
      </Link>
      <form action={deleteJoke}>
        <Button type="submit">Delete</Button>
      </form>
    </div>
  );
}
