import Link from 'next/link';
import React from 'react';
import { getJokes } from '@/data/services/getJokes';

export default async function JokesList() {
  const jokes = await getJokes();

  return (
    <ul>
      {jokes.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link href={`/jokes/${id}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
