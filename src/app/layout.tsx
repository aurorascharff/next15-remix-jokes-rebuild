import './globals.css';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next 13 rebuild of Remix Jokes',
  title: 'Next Jokes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = 'h-[100svh] bg-gradient-radial';

  return (
    <html lang="en">
      <body className={twMerge(inter.className, className)}>{children}</body>
    </html>
  );
}
