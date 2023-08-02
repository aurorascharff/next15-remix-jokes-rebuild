'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({ disabled, color = 'default', ...rest }: Props) {
  const className =
    'cursor-pointer inline-flex items-center justify-center font-bold leading-none text-lg m-0 rounded bg-yellow text-purple font-display p-2 shadow-lg';

  return (
    <button className={className} {...rest}>
      {rest.children}
    </button>
  );
}
