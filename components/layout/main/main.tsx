import { Container } from '@/components/layout/container/container';
import s from './main.module.scss';
import { ComponentProps } from 'react';

type Props = ComponentProps<'main'>;

export const Main = ({ children, ...props }: Props) => {
  return (
    <main className={s.main} {...props}>
      <Container>{children}</Container>
    </main>
  );
};
