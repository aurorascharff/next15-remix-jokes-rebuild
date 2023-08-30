'use client';

import Link from 'next/link';
import React from 'react';
import { deleteJoke } from '../actions/deleteJoke';
import Button from './Button';
import type { Joke } from '@prisma/client';

type Props = {
  joke: Pick<Joke, 'content' | 'name' | 'id'>;
};

export default function JokeDisplay({ joke }: Props) {
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
