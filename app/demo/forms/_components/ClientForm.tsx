'use client';

import React from 'react';
import SubmitButton from '@/components/SubmitButton';
import { jokeSchema } from '@/validations/jokeSchema';
import { createJokeClientValidation } from '../_actions/createJokeClientValidation';

export default function ClientForm() {
  const clientAction = async (formData: FormData) => {
    const newJoke = {
      content: formData.get('content'),
      name: formData.get('name'),
    };
    const result = jokeSchema.safeParse(newJoke);
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
      <SubmitButton />
    </form>
  );
}
