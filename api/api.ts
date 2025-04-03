import { Country } from '@/types/country';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,capital,flags,population,region`
  );

  if (!response.ok) {
    throw new Error('Error fetching countries');
  }

  return response.json();
};
