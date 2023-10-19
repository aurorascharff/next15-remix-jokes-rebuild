import { dehydrate } from '@tanstack/react-query';
import { getJokes } from '@/src/actions/getJokes';
import QueryProvider from './_components/QueryProvider';
import ReactQueryHydrate from './_components/ReactQueryHydrate';
import getQueryClient from './_utils/getQueryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - React Query',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryFn: getJokes, queryKey: ['jokes'] });
  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryProvider>
      <ReactQueryHydrate state={dehydratedState}>{children}</ReactQueryHydrate>
    </QueryProvider>
  );
}
