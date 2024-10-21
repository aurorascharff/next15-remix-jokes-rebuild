import Link from 'next/link';
import React from 'react';

export type OptimisticJoke = {
  content: string;
  name: string;
  createdAt: Date;
  id: string;
};

export default function JokesList({ jokes }: { jokes: OptimisticJoke[] }) {
  return (
    <ul>
      {jokes.map((joke, key) => {
        return (
          <li key={key}>
            <Link href={`/jokes/${joke.id}`}>{joke.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
