import React, { use } from 'react';
import JokesList from '../../_components/JokesList';
import { getJokes } from '../_actions/getJokes';

export default function Jokes() {
  const jokes = use(getJokes());

  return <JokesList jokes={jokes} />;
}
