'use client';

import React from 'react';

import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke1';

export default function Form() {
  return (
    <form action={createJoke}>
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
