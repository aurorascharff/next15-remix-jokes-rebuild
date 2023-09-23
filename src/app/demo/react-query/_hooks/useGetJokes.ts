import { useQuery } from '@tanstack/react-query';
import { getJokes } from '@/src/actions/getJokes';

export default function useGetJokes() {
  return useQuery(['jokes'], () => {
    return getJokes();
  });
}
