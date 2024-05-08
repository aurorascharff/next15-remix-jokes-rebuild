import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
// Opt out of Next.js caching and make the page render on the server for every request

export const metadata: Metadata = {
  description: 'Next 14 Remix Jokes Rebuild',
  title: 'Jokes',
};

export default function JokesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-[100svh] w-full flex-col gap-5 bg-purple">
      <Header />
      <div className="mx-10 flex grow flex-col gap-10 py-3 md:flex-row lg:mx-40">
        <Sidebar />
        <div className="grow">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
