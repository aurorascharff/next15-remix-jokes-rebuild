import Link from 'next/link';
import React from 'react';
import { getJokes } from '@/lib/services/getJokes';

export default async function JokesList() {
  const jokes = await getJokes();

  return (
    <ul>
      {jokes
        .sort((a, b) => {
          return a.createdAt.getTime() - b.createdAt.getTime();
        })
        .map(joke => {
          return (
            <li key={joke.id}>
              <Link prefetch href={`/jokes/${joke.id}`}>
                {joke.name}
              </Link>
              {joke.favorite ? <span className="text-yellow-400"> ★</span> : null}
            </li>
          );
        })}
    </ul>
  );
}
