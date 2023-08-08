'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
}

export const NavLink = ({ href, exact, children, ...props }: Props) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} className={isActive ? 'underline' : ''} {...props}>
      {children}
    </Link>
  );
};
