'use client';
import { Search } from '@/components/ui/search/search';
import { useState } from 'react';
import { Select, SelectItem } from '@/components/ui/select/select';

const options = [
  { value: 'default', label: 'Filter by Region' },
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

export const Controls = () => {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState(options[0].value);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      <Select value={select} onValueChange={setSelect}>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
