'use client';
import { Search } from '@/components/ui/search/search';
import { useState } from 'react';
import { Select, SelectItem } from '@/components/ui/select/select';
import s from './controls.module.scss';

type Props = {
  search: string;
  region: string;
  setSearch: (search: string) => void;
  setRegion: (region: string) => void;
  options: Options[];
};

type Options = {
  value: string;
  label: string;
};

export const Controls = ({
  search,
  region,
  setSearch,
  setRegion,
  options,
}: Props) => {
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
