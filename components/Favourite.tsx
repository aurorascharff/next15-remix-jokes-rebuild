'use client';

import React, { useOptimistic, useTransition } from 'react';
import { favoriteJoke } from '@/lib/actions/favouriteJoke';
import { cn } from '@/utils/style';
import type { Joke } from '@prisma/client';

export default function Favorite({ joke }: { joke: Joke }) {
  const favoriteJokeById = favoriteJoke.bind(null, joke.id);
  const favorite = joke.favorite;
  const [optimisticFavorite, addOptimisticFavorite] = useOptimistic(favorite);
  const [isPending, startTransition] = useTransition();

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
        className={cn('w-fit', isPending ? 'text-yellow-600' : 'text-yellow-400')}
        aria-label={optimisticFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {optimisticFavorite ? '★' : '☆'}
      </button>
      <input type="hidden" name="favorite" value={favorite ? 'false' : 'true'} />
    </form>
  );
}
