import React from 'react';
import { slow } from '@/utils/slow';

export default async function JokesHeader() {
  await slow(2000);

  return <h5>Jokes</h5>;
}
