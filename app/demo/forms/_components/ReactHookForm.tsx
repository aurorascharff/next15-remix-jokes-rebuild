'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useOptimistic, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '@/components/Button';
import type { JokeSchemaType } from '@/validations/jokeSchema';
import { jokeSchema } from '@/validations/jokeSchema';
import JokesList from '../../_components/JokesList';
import { createJokeReactHookForm } from '../_actions/createJokeReactHookForm';
import type { Joke } from '@prisma/client';

export default function ReactHookForm({ jokes }: { jokes: Joke[] }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<JokeSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(jokeSchema),
  });

  const [, startTransition] = useTransition();

  const [optimisticJokes, addOptimisticJoke] = useOptimistic(
    jokes,
    (state: JokeSchemaType[], newJoke: JokeSchemaType) => {
      return [
        ...state,
        {
          ...newJoke,
          createdAt: new Date(),
        },
      ];
    },
  );

  const onSubmit = handleSubmit(data => {
    startTransition(async () => {
      addOptimisticJoke(data);
      const response = await createJokeReactHookForm(data);
      if (response?.error) {
        toast.error(response.error);
      } else {
        toast.success('Joke added!');
        reset();
      }
    });
  });

  return (
    <>
      <form autoComplete="off" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input {...register('name')} id="name" name="name" type="text" />
          {errors?.name && <p className="text-red">{errors?.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea {...register('content')} id="content" name="content" />
          {errors?.content && <p className="text-red">{errors?.content?.message}</p>}
        </div>
        <div className="flex justify-end">
          <Button disabled={!isValid} type="submit">
            Add
          </Button>
        </div>
      </form>
      <JokesList jokes={optimisticJokes} />
    </>
  );
}
