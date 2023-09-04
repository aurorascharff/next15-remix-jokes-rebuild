'use client';

import React from 'react';
import { cn } from '../utils/style';

type Props = {
  color?: string;
};

export default function Button({ color = 'yellow', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  const defaultClasses =
    'cursor-pointer rounded px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:transform hover:enabled:-translate-y-px disabled:cursor-default disabled:opacity-80';
  const colorClasses = `bg-${color}`;
  const className = cn(defaultClasses, colorClasses);

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
}
