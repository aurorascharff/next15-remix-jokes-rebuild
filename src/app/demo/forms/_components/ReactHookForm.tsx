'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { experimental_useOptimistic as useOptimistic } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '@/src/components/Button';
import JokesList from '@/src/components/JokesList';
import type { JokeSchemaType } from '@/src/validations/jokeSchema';
import { JokeSchema } from '@/src/validations/jokeSchema';
import { createJoke } from '../_actions/createJokeReactHookForm';
import type { Joke } from '@prisma/client';

export default function ReactHookForm({ jokes }: { jokes: Joke[] }) {
  const [optimisticJokes, addOptimisticJoke] = useOptimistic(
    jokes,
    (state: JokeSchemaType[], newJoke: JokeSchemaType) => {
      return [...state, newJoke];
    },
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JokeSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(JokeSchema),
  });

  const onSubmit = handleSubmit(async data => {
    addOptimisticJoke(data);
    const response = await createJoke(data);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success('Joke added!');
      reset();
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input {...register('name')} id="name" name="name" type="text" />
          {errors?.name && <p className="text-sm text-red">{errors?.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea {...register('content')} id="content" name="content" />
          {errors?.content && <p className="text-sm text-red">{errors?.content?.message}</p>}
        </div>
        <div className="flex justify-end">
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Adding...' : 'Add'}
          </Button>
        </div>
      </form>
      <JokesList jokes={optimisticJokes as Joke[]} />
    </>
  );
}
