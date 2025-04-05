import { CountriesType } from '@/types/countries.type';

const BASE_URL = 'https://restcountries.com/v3.1';

// export const fetchCountries = async (): Promise<Country[]> => {
//   const response = await fetch(
//     `${BASE_URL}/all?fields=name,capital,flags,population,region`
//   );
//
//   if (!response.ok) {
//     throw new Error('Error fetching countries');
//   }
//
//   return response.json();
// };

// export const fetchCountry = async ({
//   queryKey,
// }: {
//   queryKey: [string, string];
// }) => {
//   const [, name] = queryKey;
//   const response = await fetch(`${BASE_URL}/name/${name}`);
//
//   if (!response.ok) {
//     throw new Error('Error fetching country');
//   }
//
//   return response.json();
// };

export const fetchCountries = async (): Promise<CountriesType[]> => {
  const res = await fetch(
    `${BASE_URL}/all?fields=name,capital,flags,population,region`
  );

  if (!res.ok) throw new Error('Error fetching countries');

  return res.json();
};

export const fetchCountry = async (name: string): Promise<CountriesType[]> => {
  const response = await fetch(`${BASE_URL}/name/${name}`);

  if (!response.ok) {
    throw new Error('Error fetching country');
  }

  return await response.json();
};

export const filterByCode = async (
  codes: string[]
): Promise<CountriesType[]> => {
  const response = await fetch(`${BASE_URL}/alpha?codes=${codes.join(',')}`);

  if (!response.ok) {
    throw new Error('Error fetching country');
  }

  return await response.json();
};
