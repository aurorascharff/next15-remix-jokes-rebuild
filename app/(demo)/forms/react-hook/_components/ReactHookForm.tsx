'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useOptimistic, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import type { JokeSchemaType } from '@/app/(demo)/_validations/jokeSchema';
import { jokeSchema } from '@/app/(demo)/_validations/jokeSchema';
import Button from '@/components/ui/Button';
import JokesList from '../../../_components/JokesList';
import { createJoke } from '../_actions/createJoke';
import type { OptimisticJoke } from '../../../_components/JokesList';
import type { Joke } from '@prisma/client';

export default function ReactHookForm({ jokes }: { jokes: Joke[] }) {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<JokeSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(jokeSchema),
  });

  const [, startTransition] = useTransition();

  const [optimisticJokes, addOptimisticJoke] = useOptimistic(
    jokes,
    (state: OptimisticJoke[], newJoke: OptimisticJoke) => {
      return [...state, newJoke].sort((a, b) => {
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
    },
  );

  const onSubmit = handleSubmit(data => {
    reset();
    startTransition(async () => {
      addOptimisticJoke({
        content: data.content,
        createdAt: new Date(),
        id: 'optimistic',
        name: data.name,
      });
      const response = await createJoke(data);
      if (response?.error) {
        toast.error(response.error);
        setValue('name', data.name, { shouldValidate: true });
        setValue('content', data.content, { shouldValidate: true });
      } else {
        toast.success('Joke added!');
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
          <Button type="submit">Add</Button>
        </div>
      </form>
      <JokesList jokes={optimisticJokes} />
    </>
  );
}
