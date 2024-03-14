'use client';

import React, { useOptimistic, useTransition } from 'react';
import { favoriteJoke } from '@/lib/actions/favoriteJoke';
import type { Joke } from '@prisma/client';

export default function Favorite({ joke }: { joke: Joke }) {
  const favoriteJokeById = favoriteJoke.bind(null, joke.id, joke.favorite);
  const [, startTransition] = useTransition();
  const [optimisticFavorite, setOptimisticFavorite] = useOptimistic(joke.favorite);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(async () => {
      setOptimisticFavorite(!optimisticFavorite);
      await favoriteJokeById();
    });
  };

  return (
    <form action={favoriteJokeById} onSubmit={onSubmit} className="w-fit">
      <button type="submit" className="w-fit text-yellow-400">
        {optimisticFavorite ? '★' : '☆'}
      </button>
    </form>
  );
}
