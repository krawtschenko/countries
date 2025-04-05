import s from './button.module.scss';
import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};
