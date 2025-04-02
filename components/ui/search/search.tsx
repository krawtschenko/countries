import { IoSearch } from 'react-icons/io5';
import s from './search.module.scss';

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

export const Search = ({ search, setSearch }: Props) => {
  return (
    <label className={s.container}>
      <IoSearch />
      <input
        id="search-input"
        className={s.input}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type={search}
        placeholder={'Search for a country...'}
      />
    </label>
  );
};
