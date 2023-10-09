import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Sidebar from '@/src/components/Sidebar';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  description: 'Jokes Rebuild',
  title: 'Jokes',
};

export default function JokesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-grow flex-col gap-5 bg-purple">
      <Header />
      <div className="mx-10 flex flex-grow flex-col gap-10 py-3 md:mx-40 md:flex-row">
        <Sidebar />
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
