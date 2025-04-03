import { ReactNode } from 'react';
import s from './container.module.scss';

type Props = {
  children: ReactNode;
};

export const Container = ({ children, ...props }: Props) => {
  return (
    <div className={s.container} {...props}>
      {children}
    </div>
  );
};
