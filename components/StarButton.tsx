'use client';

import React, { startTransition, useOptimistic } from 'react';
import { starJoke } from '@/lib/actions/starJoke';

type Props = {
  starred: boolean;
  jokeId: string;
};

export default function StarButton({ starred, jokeId }: Props) {
  const [optimisticStar, setOptimisticStar] = useOptimistic(starred);

  return (
    <button
      onClick={() => {
        startTransition(() => {
          setOptimisticStar(!starred);
          starJoke(!starred, jokeId);
        });
      }}
    >
      {optimisticStar ? '★' : '☆'}
    </button>
  );
}
