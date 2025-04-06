import s from './info.module.scss';
import { useRouter } from 'next/navigation';
import { useFilter } from '@/hooks/useFilter';
import { Loader } from '@/components/ui/loader/loader';

type Props = {
  name: string;
  nativeName: string;
  flag: string;
  population: number;
  area: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currency: string;
  languages: string[];
  borders: string[];
};

export const Info = (props: Props) => {
  const router = useRouter();
  const { data: borders, isLoading } = useFilter(props.borders);

  if (isLoading || !borders) {
    return <Loader id="loader" />;
  }

  return (
    <section className={s.wrapper}>
      <img className={s.img} src={props.flag} alt={props.name} />

      <div>
        <h1 className={s.title}>{props.name}</h1>

        <div className={s.listGroup}>
          <ul className={s.list}>
            <li className={s.item}>
              <b>Native Name:</b> {props.nativeName}
            </li>

            <li className={s.item}>
              <b>Population:</b> {props.population.toLocaleString()}
            </li>

            <li className={s.item}>
              <b>Region:</b> {props.region}
            </li>

            <li className={s.item}>
              <b>Sub Region:</b> {props.subregion}
            </li>

            <li className={s.item}>
              <b>Capital:</b> {props.capital}
            </li>

            <li className={s.item}>
              <b>Area:</b> {props.area.toLocaleString()} km&sup2;
            </li>
          </ul>

          <ul className={s.list}>
            <li className={s.item}>
              <b>Top Level Domain:</b> {props.tld}
            </li>

            <li className={s.item}>
              <b>Currency:</b> {props.currency}
            </li>

            <li className={s.item}>
              <b>Official language:</b> {props.languages.join(', ')}
            </li>
          </ul>
        </div>

        <div className={s.meta}>
          <b>Border Countries:</b>

          {!props.borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={s.tagGroup}>
              {borders.map((b) => (
                <span
                  className={s.tag}
                  key={b.name.common}
                  onClick={() => router.push(`/country/${b.name.common}`)}
                >
                  {b.name.common}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
