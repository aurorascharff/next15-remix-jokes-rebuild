import React from 'react';
import JokesList from '@/src/components/JokesList';
import { getJokes } from '../_actions/getJokes';

export default async function Jokes() {
  const jokes = await getJokes();

  return <JokesList jokes={jokes} />;
}
