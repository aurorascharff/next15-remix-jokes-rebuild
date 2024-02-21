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

  const onBlur = (event: React.FocusEvent<HTMLFormElement, Element>) => {
    if (joke[event.target.name as keyof JokeSchemaType] === event.target.value || event.target.value === '') {
      return;
    }
    startTransition(() => {
      updateJoke(joke.id, activeJoke);
    });
  };

  const onChange = (event: React.FocusEvent<HTMLFormElement, Element>) => {
    setActiveJoke({ ...activeJoke, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <form onBlur={onBlur} onChange={onChange} autoComplete="off">
          <label>
            Name
            <input disabled={isPending} value={activeJoke.name} name="name" type="text" />
          </label>
          <label>
            Content:
            <textarea disabled={isPending} value={activeJoke.content} name="content" />
          </label>
        </form>
        <span> {isPending ? 'Saving joke...' : ''}</span>
      </div>
      <DeleteJokeButton jokeid={joke.id} />
    </>
  );
}
