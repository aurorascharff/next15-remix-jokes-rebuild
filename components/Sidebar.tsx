import React from 'react';
import JokesList from './JokesList';
import RandomJokeButton from './RandomJokeButton';
import NavButton from './ui/NavButton';

export default function Sidebar() {
  return (
    <div className="flex min-w-max flex-col gap-y-5">
      <RandomJokeButton />
      <p>Here are a few more jokes to check out:</p>
      <JokesList />
      <NavButton href="/jokes/new">Add your own</NavButton>
    </div>
  );
}
