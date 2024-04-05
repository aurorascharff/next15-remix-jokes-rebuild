'use client';

import React, { useTransition } from 'react';
import Button from '@/components/Button';
import { deleteJoke } from '@/lib/actions/deleteJoke';

export default function DeleteJokeButton({ jokeid }: { jokeid: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          deleteJoke(jokeid);
        });
      }}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </Button>
  );
}
