import BasicLayout from "layouts/basicLayout"
import "styles/tailwind.css"

import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '../lib/AntdRegistry';

import 'globals.css';

export const metadata = {
  title: 'TPM Technology',
  description: 'Welcome to TPM Technologxy',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasicLayout>
          <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
        </BasicLayout>
      </body>
    </html>
  )
}
