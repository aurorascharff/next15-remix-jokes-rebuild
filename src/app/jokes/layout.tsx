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
    <div className="flex flex-col bg-purple gap-5 h-full">
      <Header />
      <div className="flex items-center py-3 gap-5 mx-40">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
