'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import Button from './Button';
import SpinnerIcon from './icons/SpinnerIcon';

type Props = {
  color?: 'white' | 'yellow';
  children: React.ReactNode;
  loading?: boolean;
};

export default function SubmitButton({
  children,
  loading,
  disabled,
  color,
}: Props & React.HTMLProps<HTMLButtonElement>) {
  const { pending } = useFormStatus();
  const isSubmitting = pending || loading;

  return (
    <Button color={color} disabled={isSubmitting || disabled} type="submit">
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          {children}
          <div className="h-fit w-fit animate-spin">
            <SpinnerIcon width={16} height={16} />
          </div>
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
