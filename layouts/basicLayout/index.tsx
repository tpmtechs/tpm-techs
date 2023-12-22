import { ConfigProvider } from "antd"
import React from "react"
import type { FC } from "react"
import Footer from "components/Footer"
import Header from "components/Header"
import theme from "config/theme"
import "./index.css"

interface IBasicLayout {
  children: any
}

const BasicLayout: FC<IBasicLayout> = ({ children }) => {
  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="relative">
          <Header />
            {children}
          <Footer />
        </div>
      </ConfigProvider>
    </>
  )
}

export default BasicLayout
