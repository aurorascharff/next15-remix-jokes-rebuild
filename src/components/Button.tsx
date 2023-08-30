'use client';

import React from 'react';

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="inline-flex w-fit cursor-pointer items-center justify-center rounded bg-yellow px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:transform hover:no-underline hover:enabled:-translate-y-px disabled:cursor-default disabled:bg-yellow-dark"
      {...props}
    >
      {props.children}
    </button>
  );
}
