import Link from 'next/link';
import React from 'react';
import type { Joke } from '@prisma/client';

type Props = {
  jokes: Pick<Joke, 'id' | 'name'>[];
}

export default function JokesList({ jokes }: Props) {
  return (
    <ul>
      {jokes.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link href={`/jokes/${id}`} prefetch>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
