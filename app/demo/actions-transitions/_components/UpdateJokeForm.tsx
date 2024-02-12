'use client';

import { Joke } from '@prisma/client';
import React, { useState, useTransition } from 'react';
import { updateJoke } from '../_actions/updateJoke';
import { JokeSchemaType } from '@/validations/jokeSchema';
import DeleteJokeButton from '@/components/DeleteJokeButton';

type Props = {
  joke: Joke;
};

export default function UpdateJokeForm({ joke }: Props) {
  const [isPending, startTransition] = useTransition();
  const [activeJoke, setActiveJoke] = useState<JokeSchemaType>({
    content: joke.content,
    name: joke.name,
  });

  const onBlur = (value: string, field: keyof JokeSchemaType) => {
    if (joke[field] === value || value === '') {
      return;
    }
    startTransition(() => {
      updateJoke(joke.id, activeJoke);
    });
  };

  const onChange = (value: string, field: keyof JokeSchemaType) => {
    setActiveJoke({ ...activeJoke, [field]: value });
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <form autoComplete="off">
          <label>
            Name
            <input
              disabled={isPending}
              onBlur={e => onBlur(e.target.value, 'name')}
              onChange={e => onChange(e.target.value, 'name')}
              value={activeJoke.name}
              name="name"
              type="text"
            />
          </label>
          <label>
            Content:
            <textarea
              disabled={isPending}
              onChange={e => onChange(e.target.value, 'content')}
              onBlur={e => onBlur(e.target.value, 'content')}
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
