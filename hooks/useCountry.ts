import { useQuery } from '@tanstack/react-query';
import { fetchCountry } from '@/api/api';

export function useCountry(name: string) {
  return useQuery({
    queryKey: ['country', name],
    queryFn: () => fetchCountry(name),
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}
