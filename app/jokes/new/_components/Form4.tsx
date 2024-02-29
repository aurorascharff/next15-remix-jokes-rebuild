'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke3';
import { saveJokeDraft } from '@/lib/actions/saveJokeDraft';
import type { JokeSchemaErrorType, JokeSchemaType } from '@/validations/jokeSchema';

type Props = {
  initialJoke: JokeSchemaType;
};

export default function Form({ initialJoke }: Props) {
  const [state, formAction] = useFormState(createJoke, {
    error: {} as JokeSchemaErrorType,
    success: false,
  });
  const [activeJoke, setActiveJoke] = useState(initialJoke);
  const [isPending, startTransition] = useTransition();

  const saveDraft = (e: React.FocusEvent<HTMLFormElement>) => {
    if (!e.target.value) {
      return;
    }
    startTransition(() => {
      saveJokeDraft(e.target.name, e.target.value);
    });
  };

  useEffect(() => {
    if (state.success) {
      setActiveJoke({
        content: '',
        name: '',
      });
      toast.success('Joke created!');
    }
  }, [state.success]);

  return (
    <form onBlur={saveDraft} action={formAction}>
      <label>
        Name:
        <input
          value={activeJoke.name}
          onChange={e => {
            return setActiveJoke({ ...activeJoke, name: e.target.value });
          }}
          name="name"
          type="text"
        />
        <span className="font-sm text-red">{state.error?.fieldErrors?.name}</span>
      </label>
      <label>
        Content:
        <textarea
          onChange={e => {
            return setActiveJoke({ ...activeJoke, content: e.target.value });
          }}
          value={activeJoke.content}
          name="content"
        />
        <span className="font-sm text-red">{state.error?.fieldErrors?.content}</span>
      </label>
      <SubmitButton />
      {isPending ? 'Saving...' : null}
    </form>
  );
}
