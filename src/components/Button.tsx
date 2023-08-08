'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({ ...props }: Props) {
  return (
    <button
      className="inline-flex w-fit cursor-pointer items-center justify-center rounded bg-yellow px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:transform hover:no-underline hover:enabled:-translate-y-px disabled:cursor-default disabled:bg-yellow-dark"
      {...props}
    >
      {props.children}
    </button>
  );
}
