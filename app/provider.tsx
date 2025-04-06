'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { Header } from '@/components/layout/header/header';
import { Main } from '@/components/layout/main/main';

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div id="loader"></div>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </Main>
    </QueryClientProvider>
  );
};
