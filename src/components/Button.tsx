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
      className="cursor-pointer inline-flex items-center justify-center font-bold leading-none text-lg m-0 rounded bg-yellow text-purple font-display p-2 shadow-lg"
      {...rest}
    >
      {rest.children}
    </button>
  );
}
