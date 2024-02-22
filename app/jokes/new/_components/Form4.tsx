'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/SubmitButton';
import { clearJokeDraft } from '@/lib/actions/clearJokeDraft';
import { createJoke } from '@/lib/actions/createJoke3';
import { saveJokeDraft } from '@/lib/actions/saveJokeDraft';
import type { JokeSchemaErrorType, JokeSchemaType } from '@/validations/jokeSchema';

type Props = {
  joke: JokeSchemaType;
};

export default function Form({ joke }: Props) {
  const [state, formAction] = useFormState(createJoke, {
    error: {} as JokeSchemaErrorType,
    success: false,
  });
  const [activeJoke, setActiveJoke] = useState(joke);

  const formRef = React.useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (state.success) {
      startTransition(() => {
        clearJokeDraft();
      });
      formRef.current?.reset();
      toast.success('Joke created!');
    }
  }, [state.success]);

  const saveDraft = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target.value) {
      return;
    }
    startTransition(() => {
      saveJokeDraft(e.target.name, e.target.value);
    });
  };

  return (
    <form ref={formRef} action={formAction}>
      <label>
        Name:
        <input
          value={activeJoke.name}
          onChange={e => {
            return setActiveJoke({ ...activeJoke, name: e.target.value });
          }}
          onBlur={saveDraft}
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
          onBlur={saveDraft}
          name="content"
        />
        <span className="font-sm text-red">{state.error?.fieldErrors?.content}</span>
      </label>
      <SubmitButton />
      {isPending ? 'Saving...' : null}
    </form>
  );
}
