'use client';

import React, { useTransition } from 'react';
import Button from '@/src/components/Button';
import { deleteJoke } from '../lib/actions/deleteJoke';

type Props = {
  jokeid: string;
};

export default function DeleteJokeButton({ jokeid }: Props) {
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
