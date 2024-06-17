'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LinkProps } from 'next/link';

type Props = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
};

export const NavLink = ({ href, exact, children, ...otherProps }: Props & LinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.includes(href) && href !== '/';

  return (
    <Link {...otherProps} href={href} className={`${isActive ? 'underline' : ''} w-full whitespace-nowrap text-start`}>
      {children}
    </Link>
  );
};
