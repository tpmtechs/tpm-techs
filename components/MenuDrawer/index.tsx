"use client"

import { Button, Col, Drawer, Image, Row } from "antd"
import Link from "next/link"
import { FC, useState } from "react"
import { MenuOutlined } from "@ant-design/icons"
import { topFunction } from "utils/utils"
import Path from "config/path"
import LocaleSelect from "components/LocaleSelect"

const MenuDrawer: FC = () => {
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
              <Button type="link" onClick={() => handleClick()} href={Path.HOME}>
                Trang chủ
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={Path.ABOUT}>
                Giới thiệu
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={Path.SERVICES}>
                Dịch vụ
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={Path.PROJECTS}>
                Dự án
              </Button>
            </Col>
            <Col span={24}>
              <Button type="link" onClick={() => handleClick()} href={Path.CONTACT}>
                Liên hệ
              </Button>
            </Col>
          </Row>
        </div>
      </Drawer>
    </>
  )
}

export default MenuDrawer
