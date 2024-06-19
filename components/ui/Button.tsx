
import React from 'react';
import { cn } from '@/utils/style';

type Props = {
  color?: 'white' | 'yellow';
};

export default function Button({ color, ...props }: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const defaultClasses =
    'active:enabled:translate-y-px h-fit w-fit cursor-pointer rounded px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:enabled:-translate-y-px disabled:cursor-default disabled:opacity-80';
  const colorClasses = color === 'white' ? 'bg-white' : 'bg-yellow';
  const className = cn(defaultClasses, colorClasses);

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
}
