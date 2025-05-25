import type { Metadata } from 'next';
import { Geist_Mono, Great_Vibes } from 'next/font/google';
import './globals.css';

import styles from './[locale]/page.module.css';

const greatVibes = Great_Vibes({
  weight: '400',
  variable: '--font-great-vibes',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Liza és Gergő',
  description: 'Liza és Gergő esküvőjének weboldala, minden amit tudni kell a lagzinkról'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ width: '100%', height: '100vh' }}>
      <head>
        <meta name='color-scheme' content='light' />
      </head>
      <body className={`${greatVibes.variable} ${geistMono.variable} ${styles.body}`}>{children}</body>
    </html>
  );
}
