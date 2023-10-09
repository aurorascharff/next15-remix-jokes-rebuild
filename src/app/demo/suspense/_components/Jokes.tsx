import React from 'react';
import JokesList from '../../_components/JokesList';
import { getJokes } from '../_actions/getJokes';

export default async function Jokes() {
  const jokes = await getJokes();

  return <JokesList jokes={jokes} />;
}
