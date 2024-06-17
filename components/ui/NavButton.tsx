import Link from 'next/link';
import React from 'react';
import type { LinkProps } from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavButton({ href, children, ...otherProps }: Props & LinkProps) {
  return (
    <Link
      {...otherProps}
      href={href}
      className="m-0 w-fit cursor-pointer rounded bg-yellow px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg"
    >
      {children}
    </Link>
  );
}
