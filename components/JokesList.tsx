import Link from 'next/link';
import React from 'react';
import { getJokes } from '@/lib/services/getJokes';

export default async function JokesList() {
  const jokes = await getJokes();

  return (
    <ul>
      {jokes
        .sort((a, b) => {
          if (!a.createdAt || !b.createdAt) {
            return 0;
          }
          return b.createdAt.getTime() - a.createdAt.getTime();
        })
        .map((joke, key) => {
          return (
            <li key={key}>
              <Link prefetch href={`/jokes/${joke.id}`}>
                {joke.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
