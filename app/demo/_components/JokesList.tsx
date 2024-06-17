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
              <Link href={`/jokes/${joke.id}`}>{joke.name}</Link>
            </li>
          );
        })}
    </ul>
  );
}
