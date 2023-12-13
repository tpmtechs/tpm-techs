import Footer from "components/Footer"
import Header from "components/Header"
import React from "react"
import { ConfigProvider } from "antd"
import type { FC } from "react"
import theme from "config/theme"

interface IBasicLayout {
  children: any
}

const BasicLayout: FC<IBasicLayout> = ({ children }) => {
  return (
    <>
      <ConfigProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ConfigProvider>
    </>
  )
}

export default BasicLayout
