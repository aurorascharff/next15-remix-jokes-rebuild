import Link from 'next/link';
import React from 'react';
import JokesList from './JokesList';
import NavButton from './NavButton';

export default async function Sidebar() {
  return (
    <div className="flex flex-col gap-y-5">
      <Link prefetch href="/jokes">
        Get a random joke
      </Link>
      <p>Here are a few more jokes to check out:</p>
      <JokesList />
      <NavButton href="/jokes/new">Add your own</NavButton>
    </div>
  );
}
