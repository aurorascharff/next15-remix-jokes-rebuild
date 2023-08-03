import React from 'react';
import JokesList from '@/components/JokesList';
import NavigateButton from '@/components/NavigateButton';
import { prisma } from '@/db';
import Link from 'next/link';

function getJokes() {
  return prisma.joke.findMany();
}

export default async function Sidebar() {
  const jokes = await getJokes();

  return (
    <div className="max-w-xl">
      <Link className="text-yellow" href="/jokes">
        Get a random joke
      </Link>
      <JokesList jokes={jokes} />
      <NavigateButton href="/jokes/new">Add your own</NavigateButton>
    </div>
  );
}
