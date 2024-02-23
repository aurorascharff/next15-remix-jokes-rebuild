'use client';

import Link from 'next/link';
import React from 'react';
import { useJokesContext } from '@/providers/JokesContext';

export default function JokesList() {
  const { optimisticJokes } = useJokesContext();

  return (
    <ul>
      {optimisticJokes
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
        .map(({ id, name }) => {
          return (
            <li key={id}>
              <Link prefetch href={`/jokes/${id}`}>
                {name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
