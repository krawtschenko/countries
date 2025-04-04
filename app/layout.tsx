import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Provider } from '@/components/layout/provider/provider';

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
