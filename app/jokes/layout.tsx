import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default async function JokesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-[100svh] w-full flex-col gap-5 bg-purple">
      <Toaster position="top-right" />
      <Header />
      <div className="mx-10 flex grow flex-col gap-10 py-3 md:flex-row lg:mx-40">
        <Sidebar />
        <div className="grow">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
