import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jokes',
  description: 'Jokes Demo',
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
