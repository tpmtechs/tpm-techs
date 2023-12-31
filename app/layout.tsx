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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
            <BasicLayout>{children}</BasicLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
