'use client';

import React from 'react';
import AddButton from '@/components/AddButton';
import { jokeSchema } from '@/validations/jokeSchema';
import { createJoke } from '../_actions/createJoke';

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
    await createJoke(result.data);
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
      <AddButton />
    </form>
  );
}
