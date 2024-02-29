'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '@/components/Button';
import { createJoke } from '@/lib/actions/createJoke4';
import { saveJokeDraft } from '@/lib/actions/saveJokeDraft';
import { jokeSchema, type JokeSchemaType } from '@/validations/jokeSchema';

type Props = {
  initialJoke: JokeSchemaType;
};

export default function Form({ initialJoke }: Props) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JokeSchemaType>({
    defaultValues: initialJoke,
    mode: 'onChange',
    resolver: zodResolver(jokeSchema),
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = handleSubmit(async data => {
    const response = await createJoke(data);
    if (response.error) {
      toast.error(response.error);
    } else {
      toast.success('Joke added!');
      reset();
    }
  });

  const saveDraft = (e: React.FocusEvent<HTMLFormElement>) => {
    if (!e.target.value) {
      return;
    }
    startTransition(() => {
      saveJokeDraft(e.target.name, e.target.value);
    });
  };

  return (
    <form onBlur={saveDraft} onSubmit={onSubmit}>
      <label>
        Name:
        <input {...register('name')} name="name" type="text" />
        <span className="font-sm text-red">{errors?.name?.message}</span>
      </label>
      <label>
        Content:
        <textarea {...register('content')} name="content" />
        <span className="font-sm text-red">{errors?.content?.message}</span>
      </label>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Adding...' : 'Add joke'}
      </Button>
      {isPending ? 'Saving...' : null}
    </form>
  );
}
