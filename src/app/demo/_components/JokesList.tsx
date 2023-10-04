import Link from 'next/link';
import React from 'react';
import type { Joke } from '@prisma/client';

type Props = {
  jokes: Pick<Joke, 'id' | 'name'>[];
};

export default function JokesList({ jokes }: Props) {
  return (
    <ul>
      {jokes
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
        .map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`/jokes/${id}`}>{name}</Link>
            </li>
          );
        })}
    </ul>
  );
}
