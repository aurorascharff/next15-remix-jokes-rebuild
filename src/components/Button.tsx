'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary';
  onClick?: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({ disabled, ...rest }: Props) {
  return (
    <button
      disabled={disabled}
      className="inline-flex w-fit cursor-pointer items-center justify-center rounded bg-yellow px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:-translate-y-px hover:transform hover:no-underline"
      {...rest}
    >
      {rest.children}
    </button>
  );
}
