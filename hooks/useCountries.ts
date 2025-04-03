import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '@/api/api';

export function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}
