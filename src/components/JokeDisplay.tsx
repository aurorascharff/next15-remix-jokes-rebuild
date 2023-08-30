'use client';

import Link from 'next/link';
import React from 'react';
import Button from './Button';
import type { Joke } from '@prisma/client';

type Props = {
  joke: Pick<Joke, 'content' | 'name' | 'id'>;
  deleteJoke: (_id: string) => void;
};

export default function JokeDisplay({ joke, deleteJoke }: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      <p>Heres your hilarious joke:</p>
      <p>{joke.content}</p>
      <Link prefetch href={`/jokes/${joke.id}`}>
        {`"${joke.name}" Permalink`}
      </Link>
      <form
        action={() => {
          deleteJoke(joke.id);
        }}
      >
        <Button type="submit">Delete</Button>
      </form>
    </div>
  );
}
