'use client';
import { Search } from '@/components/ui/search/search';
import { Select, SelectItem } from '@/components/ui/select/select';
import s from './controls.module.scss';

type Props = {
  search: string;
  region: string;
  setSearchAction: (search: string) => void;
  setRegionAction: (region: string) => void;
  options: Options[];
};

type Options = {
  value: string;
  label: string;
};

export const Controls = ({
  search,
  region,
  setSearchAction,
  setRegionAction,
  options,
}: Props) => {
  return (
    <div className={s.wrapper}>
      <Search search={search} setSearch={setSearchAction} />

      <Select value={region} onValueChange={setRegionAction}>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
