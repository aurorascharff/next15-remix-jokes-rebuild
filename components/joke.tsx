'use client';

import { Joke } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

interface Props {
  joke: Pick<Joke, 'content' | 'name' | 'id'>;
  deleteJoke: (id: string) => void;
}

export default function Joke({ joke, deleteJoke }: Props) {
  return (
    <div>
      <p className="text-white">Heres your hilarious joke:</p>
      <p className="text-white">{joke.content}</p>
      <Link className="text-yellow" href=".">
        "{joke.name}" Permalink
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
