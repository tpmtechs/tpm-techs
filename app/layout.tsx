import { Nunito } from "next/font/google"
import React from "react"
import BasicLayout from "layouts/basicLayout"
import "styles/tailwind.css"

import StyledComponentsRegistry from "../lib/AntdRegistry"

import "globals.css"

export const metadata = {
  title: "TPM Technology",
  description: "Welcome to TPM Technology",
}

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['200','300', '400', '500', '600', '700', '800', '900', '1000'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
            <BasicLayout>{children}</BasicLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
