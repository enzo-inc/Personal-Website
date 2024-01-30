import React from 'react';
import { roboto, roboto_mono, roboto_condensed, roboto_flex, courierPrime, inter } from '@/app/fonts';
import './globals.css';

export const metadata = {
  title: 'Enzo Homepage',
  description: 'Enzo Incutti Personal Website',
};

export default function RootLayout({ children } : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
