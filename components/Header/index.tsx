import { Button, Col, Image, Row } from "antd"
import Link from "next/link"
import { FC } from "react"
import "./index.css"
import MenuDrawer from "components/MenuDrawer"

const Header: FC = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-center bg-white">
      <div className="header-container w-full ">
        <Row style={{ width: "100%" }} justify="space-between" align="middle">
          <Col lg={4} md={4} xs={10}>
            <Link href="/home">
              <Image
                preview={false}
                width={60}
                alt="tpm-techs-logo"
                src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
              />
            </Link>
          </Col>
          <Col lg={20} md={20} xs={0}>
            <Row gutter={[48, 48]} align="middle" justify="end">
              <Col>
                <Link className="text-primary" href="/home">
                  Trang chủ
                </Link>
              </Col>
              <Col>
                <Link className="text-primary" href="/about">
                  Giới thiệu
                </Link>
              </Col>
              <Col>
                <Link className="text-primary" href="/services">
                  Dịch vụ
                </Link>
              </Col>
              <Col>
                <Link className="text-primary" href="/projects">
                  Dự án
                </Link>
              </Col>
              <Col>
                <Button type="primary" size="large" href="/contact">
                  Liên hệ
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={0} md={0} xs={10}>
            <Row justify="end" align="middle">
              <MenuDrawer />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
