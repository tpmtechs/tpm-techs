import { Button, Col, Image, Row } from "antd"
import Link from "next/link"
import { FC } from "react"
import "./index.css"

const Header: FC = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-center bg-white">
      <div className="header-container w-full ">
        <Row style={{ width: "100%" }} justify="space-between" align="middle">
          <Col>
            <Link href="/home">
              <Image
                preview={false}
                width={60}
                alt="tpm-techs-logo"
                src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
              />
            </Link>
          </Col>
          <Col>
            <Row gutter={[48, 48]} align="middle">
              <Col>
                <Link className="text-primary" style={{ fontFamily: 'Nunito'}} href="/home">Home</Link>
              </Col>
              <Col>
                <Link className="text-primary" href="/about">About TPM</Link>
              </Col>
              <Col>
                <Link className="text-primary" href="/services">Services</Link>
              </Col>
              <Col>
                <Link className="text-primary" href="/projects">Projects</Link>
              </Col>
              <Col>
                <Button type="primary" size="large" href="/contact">
                    Contact Us
                  </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
