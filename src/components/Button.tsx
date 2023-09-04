'use client';

import React from 'react';

type Props = {
  color?: string;
};

export default function Button({ color, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  const backgroundColor = color || 'yellow';
  return (
    <button
      className={`bg-${backgroundColor} inline-flex w-fit cursor-pointer items-center justify-center rounded px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:transform hover:no-underline hover:enabled:-translate-y-px disabled:cursor-default disabled:opacity-80`}
      {...props}
    >
      {props.children}
    </button>
  );
}
