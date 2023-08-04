import Link from 'next/link';
import React from 'react';
import { prisma } from '@/db';

function getJokes() {
  return prisma.joke.findMany();
}

export default async function JokesList() {
  const jokes = await getJokes();

  return (
    <>
      <p>Here are a few more jokes to check out:</p>
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
    </>
  );
}
