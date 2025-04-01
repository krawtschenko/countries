'use client';
import { Search } from '@/components/ui/search/search';
import { useState } from 'react';
import { Select, SelectItem } from '@/components/ui/select/select';
import s from './controls.module.scss';

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
  const [region, setRegion] = useState(options[0].value);

  return (
    <div className={s.wrapper}>
      <Search search={search} setSearch={setSearch} />

      <Select value={region} onValueChange={setRegion}>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
