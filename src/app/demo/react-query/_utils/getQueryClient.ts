import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';

const getQueryClient = cache(() => {
  return new QueryClient();
});
export default getQueryClient;
