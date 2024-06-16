'use client';

import React, { useOptimistic } from 'react';
import Button from '@/components/ui/Button';
import JokesList from '../../../_components/JokesList';
import { createJoke } from '../_actions/createJoke';
import type { OptimisticJoke } from '../../../_components/JokesList';
import type { Joke } from '@prisma/client';

export default function OptimisticForm({ jokes }: { jokes: Joke[] }) {
  const [optimisticJokes, addOptimisticJoke] = useOptimistic(
    jokes,
    (state: OptimisticJoke[], newJoke: OptimisticJoke) => {
      return [...state, newJoke];
    },
  );
  const formRef = React.useRef<HTMLFormElement>(null);

  const action = async (formData: FormData) => {
    addOptimisticJoke({
      content: formData.get('content') as string,
      createdAt: new Date(),
      id: 'optimistic',
      name: formData.get('name') as string,
    });
    formRef.current?.reset();
    await createJoke(formData);
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
