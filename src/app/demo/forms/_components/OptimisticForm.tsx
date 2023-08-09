'use client';

import React, { experimental_useOptimistic as useOptimistic } from 'react';
import Button from '@/src/components/Button';
import JokesList from '@/src/components/JokesList';
import type { JokeSchemaType } from '@/src/validations/jokeSchema';
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
        <div>
          <label>
            Name:
            <input name="name" type="text" />
          </label>
        </div>
        <div>
          <label>
            Content:
            <textarea name="content" />
          </label>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Add</Button>
        </div>
      </form>
      <JokesList jokes={optimisticJokes as Joke[]} />
    </>
  );
}
