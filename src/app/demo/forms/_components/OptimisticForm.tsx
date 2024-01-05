'use client';

import React, { useOptimistic } from 'react';
import SubmitButton from '@/src/components/SubmitButton';
import type { JokeSchemaType } from '@/src/validations/jokeSchema';
import JokesList from '../../_components/JokesList';
import { createJokeOptimistic } from '../_actions/createJokeOptimistic';
import type { Joke } from '@prisma/client';

export default function OptimisticForm({ jokes }: { jokes: Joke[] }) {
  const [optimisticJokes, addOptimisticJoke] = useOptimistic(
    jokes,
    (state: JokeSchemaType[], newJoke: JokeSchemaType) => {
      return [...state, newJoke];
    },
  );

  const action = async (formData: FormData) => {
    const newJoke = {
      content: formData.get('content')?.valueOf() as string,
      name: formData.get('name')?.valueOf() as string,
    };
    addOptimisticJoke(newJoke);
    await createJokeOptimistic(newJoke);
  };

  return (
    <>
      <form action={action}>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
        <label>
          Content:
          <textarea name="content" />
        </label>
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </form>
      <JokesList jokes={optimisticJokes as Joke[]} />
    </>
  );
}
