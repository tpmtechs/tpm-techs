'use client'

import { ConfigProvider } from "antd"
import React, { useEffect, useState } from "react"
import { type FC } from "react"
import { IntlProvider } from "react-intl";
import Footer from "components/Footer"
import Header from "components/Header"
import theme from "config/theme"
import "./index.css"
import Loading from "app/[locale]/loading";

function getMessages(locale: string) {
  return import(`locales/${locale}.json`);
}

interface IBasicLayout {
  locale: string;
  children: React.ReactNode;
}

const BasicLayout: FC<IBasicLayout> = ({ locale, children }) => {

  const [messages, setMessages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const newMessages = await getMessages(locale)
      setMessages(newMessages);
      setIsLoading(false);
    }

    setIsLoading(true);
    load();
  },[locale])


  if(isLoading) {
    return <Loading />
  }

  return (
    <>
    <IntlProvider locale={locale} messages={messages}>
      <ConfigProvider theme={theme}>
        <div className="relative">
          <Header />
            {children}
          <Footer />
        </div>
      </ConfigProvider>
      </IntlProvider>
    </>
  )
}

export default BasicLayout
