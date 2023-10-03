'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
};

export const NavLink = ({ href, exact, children, ...props }: Props) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.includes(href) && href !== '/';

  return (
    <Link href={href} className={`${isActive ? 'underline' : ''} w-full whitespace-nowrap text-start`} {...props}>
      {children}
    </Link>
  );
};
