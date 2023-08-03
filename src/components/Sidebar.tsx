import Link from 'next/link';
import React from 'react';
import { prisma } from '@/db';
import JokesList from './JokesList';
import NavigateButton from './NavigateButton';

function getJokes() {
  return prisma.joke.findMany();
}

export default async function Sidebar() {
  const jokes = await getJokes();

  return (
    <div className="gap-y-5 flex flex-col">
      <Link prefetch href="/jokes">
        Get a random joke
      </Link>
      <JokesList jokes={jokes} />
      <NavigateButton href="/jokes/new">Add your own</NavigateButton>
    </div>
  );
}
