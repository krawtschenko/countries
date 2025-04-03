import s from './list.module.scss';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const List = ({ children }: Props) => {
  return <section className={s.wrapper}>{children}</section>;
};
