'use client';

import Link from 'next/link';
import React from 'react';
import { useJokesContext } from '@/providers/JokesContext';

export default function JokesList() {
  const { optimisticJokes } = useJokesContext();

  return (
    <ul>
      {optimisticJokes.map(({ id, name }) => {
        return (
          <li key={id} className="group">
            <Link prefetch href={`/jokes/${id}`}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
