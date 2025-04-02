import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header/header';
import { Main } from '@/components/layout/main/main';
import { Controls } from '@/components/ui/controls/controls';

export const metadata: Metadata = {
  title: 'Countries',
  description: 'The World Is Not Enough',
};

const nunitoSans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />

        <Main>
          <Controls />

          {children}
        </Main>
      </body>
    </html>
  );
}
