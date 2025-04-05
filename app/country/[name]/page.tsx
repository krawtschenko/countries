'use client';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import { useCountry } from '@/hooks/useCountry';
import { Button } from '@/components/ui/button/button';
import { Info } from '@/components/ui/info/info';
import { Loader } from '@/components/ui/loader/loader';

type Props = {
  params: Promise<{ name: string }>;
};

export default function Details({ params }: Props) {
  const { name } = use(params);
  const router = useRouter();
  const { data, isLoading } = useCountry(name);

  if (isLoading || !data) {
    return <Loader />;
  }

  const country = data?.[0];
  const nativeName = Object.keys(country.name.nativeName)[0];
  const currency = Object.keys(country.currencies).map(
    (key) => country?.currencies[key].name
  );
  const languages = Object.keys(country.languages).map(
    (key) => country.languages[key]
  );

  return (
    <div>
      <Button onClick={() => router.back()}>
        <IoArrowBack />
        Back
      </Button>

      <Info
        name={country.name.common}
        nativeName={country?.name.nativeName[nativeName].common}
        flag={country?.flags.svg}
        population={country?.population}
        area={country?.area}
        region={country?.region}
        subregion={country?.subregion}
        capital={country?.capital}
        tld={country?.tld}
        currency={currency[0]}
        languages={languages}
        borders={country?.borders}
      />
    </div>
  );
}
