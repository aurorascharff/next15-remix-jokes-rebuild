'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import Button from './Button';

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Deleting...' : 'Delete'}
    </Button>
  );
}
