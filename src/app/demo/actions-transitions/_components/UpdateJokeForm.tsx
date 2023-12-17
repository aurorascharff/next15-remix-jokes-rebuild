'use client';

import { Joke } from '@prisma/client';
import React, { useState, useTransition } from 'react';
import { updateJoke } from '../_actions/updateJoke';

type Props = {
  joke: Joke;
};

export default function UpdateJokeForm({ joke }: Props) {
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState(joke.content);

  return (
    <div className="flex flex-col gap-2">
      Joke name: {joke.name}
      <form>
        <label>
          Content:
          <textarea
            onChange={e => {
              setContent(e.target.value);
              startTransition(() => {
                updateJoke(joke.id, e.target.value);
              });
            }}
            value={content}
            name="content"
          />
        </label>
      </form>
      <span> {isPending ? 'Saving joke...' : ''}</span>
    </div>
  );
}
