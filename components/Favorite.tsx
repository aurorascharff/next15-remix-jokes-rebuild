'use client';

import React, { useOptimistic, useTransition } from 'react';
import { favoriteJoke } from '@/lib/actions/favoriteJoke';
import type { Joke } from '@prisma/client';

export default function Favorite({ joke }: { joke: Joke }) {
  const favoriteJokeById = favoriteJoke.bind(null, joke.id, joke.favorite);
  const [optimisticFavorite, setOptimsticFavorite] = useOptimistic(joke.favorite);
  const [, startTransition] = useTransition();

  return (
    <form
      action={favoriteJokeById}
      onSubmit={e => {
        e.preventDefault();
        startTransition(async () => {
          setOptimsticFavorite(!optimisticFavorite);
          await favoriteJokeById();
        });
      }}
      className="w-fit"
    >
      <button type="submit" className="w-fit text-yellow-400">
        {optimisticFavorite ? '★' : '☆'}
      </button>
    </form>
  );
}
