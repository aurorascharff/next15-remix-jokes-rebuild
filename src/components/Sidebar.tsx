import React from 'react';
import { getJokes } from '../actions/getJokes';
import JokesList from './JokesList';
import NavButton from './NavButton';
import RandomJokeButton from './RandomJokeButton';

export default async function Sidebar() {
  const jokes = await getJokes();

  return (
    <div className="flex flex-col gap-y-5">
      <RandomJokeButton />
      <p>Here are a few more jokes to check out:</p>
      <JokesList jokes={jokes} />
      <NavButton href="/jokes/new">Add your own</NavButton>
    </div>
  );
}
