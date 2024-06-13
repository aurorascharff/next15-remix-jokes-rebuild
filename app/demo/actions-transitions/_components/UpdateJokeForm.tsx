'use client';

import React, { useState, useTransition } from 'react';
import DeleteJokeButton from '@/components/DeleteJokeButton';
import { updateJoke } from '../_actions/updateJoke';
import type { Joke } from '@prisma/client';

export default function UpdateJokeForm({ joke }: { joke: Joke }) {
  const [isPending, startTransition] = useTransition();
  const [activeJoke, setActiveJoke] = useState({
    content: joke.content,
    name: joke.name,
  });

  const onBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    if (!e.target.value) {
      return;
    }
    startTransition(async () => {
      await updateJoke(joke.id, {
        ...joke,
        content: activeJoke.content,
        name: activeJoke.name,
      });
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
