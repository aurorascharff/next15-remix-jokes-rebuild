import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavButton({ href, children }: Props) {
  return (
    <Link
      prefetch
      href={href}
      className="m-0 w-fit cursor-pointer rounded bg-yellow px-5 py-3 font-display text-lg font-bold leading-none text-purple shadow-lg hover:-translate-y-px hover:no-underline active:translate-y-px"
    >
      {children}
    </Link>
  );
}
