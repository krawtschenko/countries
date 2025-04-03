import { Container } from '@/components/layout/container/container';
import s from './main.module.scss';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <main className={s.main}>
      <Container>{children}</Container>
    </main>
  );
};
