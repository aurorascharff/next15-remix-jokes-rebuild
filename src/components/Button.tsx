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
      className="cursor-pointer inline-flex items-center justify-center font-bold leading-none text-lg rounded mr-10 bg-yellow text-purple font-display p-2 shadow-lg hover:no-underline hover:transform hover:-translate-y-px"
      {...rest}
    >
      {rest.children}
    </button>
  );
}
