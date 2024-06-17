import './globals.css';
import { Baloo_2, Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import type { Metadata } from 'next';

const baloo2 = Baloo_2({
  preload: true,
  subsets: ['latin'],
  variable: '--font-baloo',
  weight: '800',
});

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Next.js 15 rebuild of Remix Jokes',
  title: 'Next Jokes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = 'min-h-[100svh] flex bg-gradient-radial';

  return (
    <html lang="en">
      <body className={twMerge(inter.className, baloo2.variable, className)}>{children}</body>
    </html>
  );
}
