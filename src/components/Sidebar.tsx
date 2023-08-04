import Link from 'next/link';
import React from 'react';

import JokesList from './JokesList';
import NavigateButton from './NavigateButton';

export default async function Sidebar() {
  return (
    <div className="flex flex-col gap-y-5">
      <Link prefetch href="/jokes">
        Get a random joke
      </Link>
      <JokesList />
      <NavigateButton href="/jokes/new">Add your own</NavigateButton>
    </div>
  );
}
