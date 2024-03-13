'use client';

import React, { useOptimistic, useTransition } from 'react';
import { favoriteJoke } from '@/lib/actions/favoriteJoke';
import type { Joke } from '@prisma/client';

export default function Favorite({ joke }: { joke: Joke }) {
  const favoriteJokeById = favoriteJoke.bind(null, joke.id);
  const favorite = joke.favorite;
  const [optimisticFavorite, addOptimisticFavorite] = useOptimistic(favorite);
  const [, startTransition] = useTransition();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(async () => {
      addOptimisticFavorite(!favorite);
      await favoriteJokeById(new FormData(event.currentTarget));
    });
  };

  return (
    <form className="w-fit" action={favoriteJokeById} onSubmit={onSubmit}>
      <button
        type="submit"
        className="w-fit text-yellow-400"
        aria-label={optimisticFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {optimisticFavorite ? '★' : '☆'}
      </button>
      <input type="hidden" name="favorite" value={favorite ? 'false' : 'true'} />
    </form>
  );
}
