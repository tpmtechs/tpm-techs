import { Inter } from "next/font/google"
import React from "react"
import BasicLayout from "layouts/basicLayout"
import "styles/tailwind.css"


import StyledComponentsRegistry from "../lib/AntdRegistry"

import "globals.css"

export const metadata = {
  title: "TPM Technology",
  description: "Welcome to TPM Technology",
}

const inter = Inter({ 
  subsets: ["latin"],
})

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function RootLayout({ params, children }: LayoutProps) {

  const { locale } = params;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
            <BasicLayout>{children}</BasicLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
