import { useQuery } from '@tanstack/react-query';
import { getJokes } from '../_services/getJokes';

export default function useGetJokes() {
  return useQuery({
    queryFn: () => {
      return getJokes();
    },
    queryKey: ['jokes'],
  });
}
