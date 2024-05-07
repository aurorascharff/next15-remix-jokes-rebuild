'use client';

import React, { useOptimistic } from 'react';
import Button from '@/components/Button';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import JokesList from '../../_components/JokesList';
import { createJokeOptimistic } from '../_actions/createJokeOptimistic';
import type { Joke } from '@prisma/client';

export default function OptimisticForm({ jokes }: { jokes: Joke[] }) {
  const [optimisticJokes, addOptimisticJoke] = useOptimistic(
    jokes,
    (state: JokeSchemaType[], newJoke: JokeSchemaType) => {
      return [
        ...state,
        {
          ...newJoke,
          createdAt: new Date(),
        },
      ];
    },
  );
  const formRef = React.useRef<HTMLFormElement>(null);

  const action = async (formData: FormData) => {
    addOptimisticJoke({
      content: formData.get('content') as string,
      name: formData.get('name') as string,
    });
    formRef.current?.reset();
    await createJokeOptimistic(formData);
  };

  return (
    <>
      <form ref={formRef} autoComplete="off" action={action}>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
        <label>
          Content:
          <textarea name="content" />
        </label>
        <div className="flex justify-end">
          <Button type="submit">Add</Button>
        </div>
      </form>
      <JokesList jokes={optimisticJokes} />
    </>
  );
}
