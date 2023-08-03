import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Sidebar from '@/src/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Jokes Demo',
  title: 'Jokes',
};

export default function JokesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-purple">
      <Header />
      <div className="flex justify-between items-center">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
