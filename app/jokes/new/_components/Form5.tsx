'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '@/components/Button';
import { createJoke } from '@/lib/actions/createJoke5';
import { useJokesContext } from '@/providers/JokesContext';
import { jokeSchema, type JokeSchemaType } from '@/validations/jokeSchema';

export default function Form() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JokeSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(jokeSchema),
  });

  const [, startTransition] = useTransition();
  const { addOptimisticJoke } = useJokesContext();

  const onSubmit = handleSubmit(data => {
    startTransition(async () => {
      addOptimisticJoke(data);
      reset();
      const response = await createJoke(data);
      if (response.message) {
        toast.error('Failed to create joke: ' + response.message);
      } else {
        toast.success('Joke added!');
      }
    });
  });

  return (
    <form onSubmit={onSubmit}>
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
        Add joke
      </Button>
    </form>
  );
}
