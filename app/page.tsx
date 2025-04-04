'use client';
import { useCountries } from '@/hooks/useCountries';
import { Controls } from '@/components/ui/controls/controls';
import { List } from '@/components/ui/list/list';
import { Card, Info } from '@/components/ui/card/card';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCountries();

  const countries = data
    ?.slice()
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  if (isLoading) {
    return <h1>IS LOADING...</h1>;
  }

  return (
    <>
      <Controls />

      <List>
        {countries?.map((country) => {
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
              img={country.flags.png}
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
