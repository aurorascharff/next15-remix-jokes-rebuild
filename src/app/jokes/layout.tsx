import Footer from '@/src/_components/Footer';
import Header from '@/src/_components/Header';
import Sidebar from '@/src/_components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Jokes Demo',
  title: 'Jokes',
};

export default function JokesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-full flex-col gap-5 bg-purple">
      <Header />
      <div className="mx-10 flex h-full flex-col gap-10 py-3 md:mx-40 md:flex-row">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
