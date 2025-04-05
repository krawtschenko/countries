import { useQuery } from '@tanstack/react-query';
import { filterByCode } from '@/api/api';

export function useFilter(codes: string[]) {
  return useQuery({
    queryKey: ['codes', codes],
    queryFn: () => filterByCode(codes),
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}
