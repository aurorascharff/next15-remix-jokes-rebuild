'use client';

import React from 'react';
import Button from './Button';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavigateButton({ href, ...rest }: Props) {
  const className =
    'cursor-pointer inline-flex items-center justify-center font-bold leading-none text-lg m-0 rounded bg-yellow text-purple font-display p-2 shadow-lg';

  return (
    <Link href={href} className={className} {...rest}>
      {rest.children}
    </Link>
  );
}
