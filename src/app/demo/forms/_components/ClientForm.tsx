'use client';

import React from 'react';
import Button from '@/src/components/Button';
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
      console.log('CLIENT ERROR: ' + result.error.message);
      return;
    }
    await createJokeClientValidation(result.data);
  };

  return (
    <form action={clientAction}>
      <div>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
      </div>
      <div>
        <label>
          Content:
          <textarea name="content" />
        </label>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
