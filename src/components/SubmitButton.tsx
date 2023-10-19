'use client';

import React from 'react';
// @ts-expect-error There is no type def for this yet
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import Button from './Button';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? 'Adding...' : 'Add'}
    </Button>
  );
}
