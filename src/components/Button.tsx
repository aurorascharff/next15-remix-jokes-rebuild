'use client';

import React from 'react';
import { cn } from '../utils/style';

type Props = {
  color?: string;
};

export default function Button({ color, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  const backgroundColor = color || 'yellow';
  const defaultClasses =
    'inline-flex w-fit cursor-pointer items-center justify-center rounded px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:transform hover:no-underline hover:enabled:-translate-y-px disabled:cursor-default disabled:opacity-80';
  const colorClasses = `bg-${backgroundColor}`;
  const className = cn(defaultClasses, colorClasses);

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
}
