'use client';
import { Search } from '@/components/ui/search/search';
import { useState } from 'react';
import { Select, SelectItem } from '@/components/ui/select/select';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const Controls = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      <Select>
        {options.map(({ value, label }) => (
          <SelectItem value={value}>{label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
