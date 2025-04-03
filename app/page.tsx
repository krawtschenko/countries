'use client';
import { useCountries } from '@/hooks/useCountries';
import { Controls } from '@/components/ui/controls/controls';
import { Main } from '@/components/layout/main/main';
import { List } from '@/components/ui/list/list';
import { Card, Info } from '@/components/ui/card/card';

export default function Home() {
  const { data } = useCountries();

  if (!data) return;

  const countries = data
    ?.slice()
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <Main>
      <Controls />

      <List>
        {countries.map((country) => {
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

          return (
            <Card
              key={country.name.official}
              img={country.flags.png}
              name={country.name.common}
              info={info}
            />
          );
        })}
      </List>
    </Main>
  );
}
