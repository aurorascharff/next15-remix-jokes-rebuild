'use client';

import React, { useOptimistic } from 'react';
import { favoriteJoke } from '@/lib/actions/favoriteJoke';
import type { Joke } from '@prisma/client';

export default function Favorite({ joke }: { joke: Joke }) {
  const favoriteJokeById = favoriteJoke.bind(null, joke.id, joke.favorite);
  const [optimisticFavorite, setOptimsticFavorite] = useOptimistic(joke.favorite);
  const [isPending, startTransition] = React.useTransition();

  return (
    <form
      action={favoriteJokeById}
      onSubmit={e => {
        startTransition(async () => {
          e.preventDefault();
          setOptimsticFavorite(!optimisticFavorite);
          if (isPending) return;
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
