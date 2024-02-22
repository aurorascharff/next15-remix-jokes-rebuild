'use client';

import React, { useState, useTransition } from 'react';
import DeleteJokeButton from '@/components/DeleteJokeButton';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { updateJoke } from '../_actions/updateJoke';
import type { Joke } from '@prisma/client';

type Props = {
  joke: Joke;
};

export default function UpdateJokeForm({ joke }: Props) {
  const [isPending, startTransition] = useTransition();
  const [activeJoke, setActiveJoke] = useState<JokeSchemaType>({
    content: joke.content,
    name: joke.name,
  });

  const onBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    if (!e.target.value) {
      return;
    }
    startTransition(() => {
      updateJoke(joke.id, activeJoke);
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <form onBlur={onBlur} autoComplete="off">
          <label>
            Name
            <input
              disabled={isPending}
              onChange={e => {
                return setActiveJoke({ ...activeJoke, name: e.target.value });
              }}
              value={activeJoke.name}
              name="name"
              type="text"
            />
          </label>
          <label>
            Content:
            <textarea
              disabled={isPending}
              onChange={e => {
                return setActiveJoke({ ...activeJoke, content: e.target.value });
              }}
              value={activeJoke.content}
              name="content"
            />
          </label>
        </form>
        <span> {isPending ? 'Saving joke...' : ''}</span>
      </div>
      <DeleteJokeButton jokeid={joke.id} />
    </>
  );
}
