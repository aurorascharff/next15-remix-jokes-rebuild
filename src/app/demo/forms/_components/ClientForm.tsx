'use client';

import React from 'react';
import SubmitButton from '@/src/components/SubmitButton';
import { JokeSchema } from '@/src/validations/jokeSchema';
import { createJokeClientValidation } from '../_actions/createJokeClientValidation';

export default function ClientForm() {
  const clientAction = async (formData: FormData) => {
    const newJoke = {
      content: formData.get('content') as string,
      name: formData.get('name') as string,
    };
    const result = JokeSchema.safeParse(newJoke);
    if (!result.success) {
      console.log('CLIENT ERROR');
      return;
    }
    await createJokeClientValidation(result.data);
  };

  return (
    <form autoComplete="off" action={clientAction}>
      <label>
        Name:
        <input name="name" type="text" />
      </label>
      <label>
        Content:
        <textarea name="content" />
      </label>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
