'use client';

import React from 'react';
import { deleteJoke } from '../actions/deleteJoke';
import Button from './Button';

type Props = {
  jokeid: string;
};

export default function DeleteJokeButton({ jokeid }: Props) {
  return (
    <Button
      onClick={() => {
        deleteJoke(jokeid);
      }}
    >
      Delete
    </Button>
  );
}
