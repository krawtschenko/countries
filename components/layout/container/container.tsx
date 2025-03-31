import { ComponentProps } from 'react';
import s from './container.module.scss';

type Props = ComponentProps<'div'>;

export const Container = ({ children, ...props }: Props) => {
  return (
    <div className={s.container} {...props}>
      {children}
    </div>
  );
};
