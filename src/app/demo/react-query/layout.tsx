import { dehydrate } from '@tanstack/react-query';
import { getJokes } from '@/src/actions/getJokes';
import QueryProvider from './_components/QueryProvider';
import ReactQueryHydrate from './_components/ReactQueryHydrate';
import getQueryClient from './_utils/getQueryClient';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['jokes'], getJokes);
  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryProvider>
      <ReactQueryHydrate state={dehydratedState}>{children}</ReactQueryHydrate>
    </QueryProvider>
  );
}