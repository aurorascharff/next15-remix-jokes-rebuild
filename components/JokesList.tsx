'use client';

import Link from 'next/link';
import React from 'react';
import { useJokesContext } from '@/providers/JokesContext';
import StarButton from './StarButton';

export default function JokesList() {
  const { optimisticJokes } = useJokesContext();

  return (
    <ul>
      {optimisticJokes
        .sort((a, b) => {
          return a.starred === b.starred ? 0 : a.starred ? -1 : 1;
        })
        .map(({ id, name, starred }) => {
          return (
            <li key={id} className="flex flex-row gap-2">
              {id && <StarButton jokeId={id} starred={starred} />}
              <Link prefetch href={`/jokes/${id}`}>
                {name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
