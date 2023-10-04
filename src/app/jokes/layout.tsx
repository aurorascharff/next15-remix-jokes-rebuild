import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';

import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  description: 'Jokes Rebuild',
  title: 'Jokes',
};

export default function JokesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-full flex-col gap-5 bg-purple">
      <Header />
      <div className="mx-10 flex h-full flex-col gap-10 py-3 md:mx-40 md:flex-row">{children}</div>
      <Footer />
    </main>
  );
}
