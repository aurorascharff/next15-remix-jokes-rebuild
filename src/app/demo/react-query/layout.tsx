import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getJokes } from '@/src/actions/getJokes';
import QueryProvider from './_components/QueryProvider';
import getQueryClient from './_utils/getQueryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - React Query',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryFn: getJokes, queryKey: ['jokes'] });

  return (
    <QueryProvider>
      <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
    </QueryProvider>
  );
}
