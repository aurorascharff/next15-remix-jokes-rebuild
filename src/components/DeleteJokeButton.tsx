'use client';

import React, { useTransition } from 'react';
import { deleteJoke } from '../actions/deleteJoke';
import Button from './Button';

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
