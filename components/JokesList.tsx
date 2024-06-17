import Link from 'next/link';
import React from 'react';
import { getJokes } from '@/lib/services/getJokes';

export default async function JokesList() {
  const jokes = await getJokes();

  return (
    <ul>
      {jokes
        .sort((a, b) => {
          return b.createdAt.getTime() - a.createdAt.getTime();
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
