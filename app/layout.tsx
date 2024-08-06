import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

//--- Add these 3 lines to avoid icons show up too big while loading --------
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LevelContextProvider from '@/Context/LevelContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cookie Monster',
  description: 'Cookie Monster Game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <LevelContextProvider>{children}</LevelContextProvider>
      </body>
    </html>
  );
}
