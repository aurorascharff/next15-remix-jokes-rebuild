import './globals.css';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next 13 version of Remix Jokes Demo',
  title: 'Next 13 Jokes Demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = 'bg-gradient-radial h-screen';

  return (
    <html lang="en">
      <body className={twMerge(inter.className, className)}>{children}</body>
    </html>
  );
}
