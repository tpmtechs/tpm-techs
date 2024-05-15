"use client"

import { Button, Col, Drawer, Image, Row } from "antd"
import Link from "next/link"
import { FC, useState } from "react"
import { MenuOutlined } from "@ant-design/icons"
import { topFunction } from "utils/utils"
import Path from "config/path"
import LocaleSelect from "components/LocaleSelect"
import { FormattedMessage, useIntl } from "react-intl"
import urlcat from "urlcat"

const MenuDrawer: FC = () => {
  const { locale } = useIntl()
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleClick = () => {
    topFunction()
    onClose()
  }

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer 
      footer={<LocaleSelect />} 
      placement="right" onClose={onClose} open={open}>
        <div>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Row justify="start" align="middle">
                <Link href={Path.HOME}>
                  <Image
                    preview={false}
                    width={60}
                    alt="tpm-techs-logo"
                    src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
                  />
                </Link>
              </Row>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={urlcat(Path.HOME, {locale})}>
                <FormattedMessage id="common.home" />
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={urlcat(Path.ABOUT, {locale})}>
                <FormattedMessage id="common.about" />
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={urlcat(Path.SERVICES, {locale})}>
                <FormattedMessage id="common.services" />
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={urlcat(Path.PROJECTS, {locale})}>
                <FormattedMessage id="common.projects" />
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={urlcat(Path.NEWS, {locale})}>
                <FormattedMessage id="common.news" />
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={urlcat(Path.PRODUCTS, {locale})}>
                <FormattedMessage id="common.products" />
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={urlcat(Path.CONTACT, {locale})}>
                 <FormattedMessage id="common.contact.us" />
              </Button>
            </Col>
          </Row>
        </div>
      </Drawer>
    </>
  )
}

export default MenuDrawer
