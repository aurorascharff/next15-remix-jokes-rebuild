'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '@/src/components/Button';
import type { JokeSchemaType } from '@/src/validations/jokeSchema';
import { JokeSchema } from '@/src/validations/jokeSchema';
import { createJoke } from '../../_actions/createJoke';

export default function ReactHookForm() {
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
    const response = await createJoke(data);
    if (response?.error) {
      toast.error(response.error);
    } else {
      reset();
    }
  });

  return (
    <div className="flex flex-col gap-5">
      <h4>Realistic form</h4>
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
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
