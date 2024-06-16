'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import Button from './ui/Button';

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? 'Deleting...' : 'Delete'}
    </Button>
  );
}
