'use client';
import React from 'react';
import Button from './Button';
import { redirect } from 'next/navigation';

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function NavigateButton({ to, children }: Props) {
  return (
    <Button
      onClick={() => {
        redirect(to);
      }}
    >
      {children}
    </Button>
  );
}
