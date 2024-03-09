import Link from 'next/link';
import React from 'react';
import { getJokes } from '@/lib/services/getJokes';

export default async function JokesList() {
  const jokes = await getJokes();

  return (
    <ul>
      {jokes
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
        .map(({ id, name }) => {
          return (
            <li key={id} className="flex flex-row gap-2">
              ★
              <Link prefetch href={`/jokes/${id}`}>
                {name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
