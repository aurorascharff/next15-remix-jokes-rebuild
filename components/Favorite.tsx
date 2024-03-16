'use client';

import React from 'react';
import { favoriteJoke } from '@/lib/actions/favoriteJoke';
import type { Joke } from '@prisma/client';

export default function Favorite({ joke }: { joke: Joke }) {
  const favoriteJokeById = favoriteJoke.bind(null, joke.id, joke.favorite);

  return (
    <form action={favoriteJokeById} className="w-fit">
      <button type="submit" className="w-fit text-yellow-400">
        {joke.favorite ? '★' : '☆'}
      </button>
    </form>
  );
}
