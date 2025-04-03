import s from './card.module.scss';

type Props = {
  img: string;
  name: string;
  info: Info[];
  onClick?: () => void;
};

export type Info = {
  title: string;
  description: string[] | string;
};

export const Card = ({ img, name, info, onClick }: Props) => {
  return (
    <article className={s.wrapper} onClick={onClick}>
      <img className={s.img} src={img} alt={name} />

      <div className={s.body}>
        <h3 className={s.title}>{name}</h3>

        <ul className={s.list}>
          {info.map((item) => (
            <li className={s.item} key={item.title}>
              <b>{item.title}:</b> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
