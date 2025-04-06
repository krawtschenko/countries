'use client';
import { useCountries } from '@/hooks/useCountries';
import { Controls } from '@/components/ui/controls/controls';
import { List } from '@/components/ui/list/list';
import { Card, Info } from '@/components/ui/card/card';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { Loader } from '@/components/ui/loader/loader';

const options = [
  { value: 'default', label: 'Filter by Region' },
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data, isLoading } = useCountries();

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState(options[0].value);

  const filteredCountries = data
    ?.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .filter((country) =>
      region === 'default' ? true : country.region.toLowerCase() === region
    )
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  const updateSearchParams = (newSearch: string, newRegion: string) => {
    const params = new URLSearchParams();
    if (newSearch) params.set('search', newSearch);
    if (newRegion && newRegion !== 'default') params.set('region', newRegion);
    router.replace(`/?${params.toString()}`);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    updateSearchParams(value, region);
  };

  const handleRegionChange = (value: string) => {
    setRegion(value);
    updateSearchParams(search, value);
  };

  useLayoutEffect(() => {
    const defaultSearch = searchParams.get('search') || '';
    const defaultRegion = searchParams.get('region') || 'default';

    setSearch(defaultSearch);
    setRegion(defaultRegion);
  }, []);

  if (isLoading || !data) {
    return <Loader id="loader" />;
  }

  return (
    <>
      <Controls
        search={search}
        region={region}
        setSearchAction={handleSearchChange}
        setRegionAction={handleRegionChange}
        options={options}
      />

      <List>
        {filteredCountries?.map((country) => {
          const info: Info[] = [
            {
              title: 'Population',
              description: country.population.toLocaleString(),
            },
            {
              title: 'Region',
              description: country.region,
            },
            {
              title: 'Capital',
              description: country.capital,
            },
          ];

          const handleClick = () => {
            router.push(`/country/${country.name.common}`);
          };

          return (
            <Card
              key={country.name.common}
              img={country.flags.svg}
              name={country.name.common}
              info={info}
              onClick={handleClick}
            />
          );
        })}
      </List>
    </>
  );
}
