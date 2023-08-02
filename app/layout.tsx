import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next 13 Jokes Demo',
  description: 'Next 13 version of Remix Jokes Demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = 'bg-gradient-to-r from-purple to-purple-light';

  return (
    <html lang="en">
      <body className={twMerge(inter.className, className)}>{children}</body>
    </html>
  );
}
