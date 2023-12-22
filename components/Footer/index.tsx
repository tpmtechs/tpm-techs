import { FacebookFilled, GithubFilled, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons"
import { Button, Col, Divider, Image, Input, Row } from "antd"
import dayjs from "dayjs"
import Link from "next/link"
import type { FC } from "react"
import "./index.css"

const Footer: FC = () => {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-r from-primary-700 to-primary-800 py-6 pt-12 text-white">
      <div className="footer-container w-full">
        <div>
          <Row align="middle" justify="space-between">
            <Col className="font-semibold">
              <div className="text-4xl text-white">Join our newsletter</div>
              <div className="text-base text-white">We&apos;ll send you a nice letter once per week. No Spam.</div>
            </Col>
            <Col>
              <Row gutter={[8, 8]}>
                <Col>
                  <Input size="large" placeholder="Enter your email" />
                </Col>
                <Col>
                  <Button size="large" type="primary">
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Divider style={{ borderColor: "#3172A9" }} />
        <div>
          <Row gutter={[48, 48]} justify="space-between" align="middle">
            <Col span={6}>
              <div className="flex items-center justify-center bg-white rounded-xl">
                <Image
                  preview={false}
                  width={120}
                  alt="tpm-techs-logo"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
                />
              </div>
              <div className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s.
              </div>
            </Col>
            <Col span={6}>
              <Row gutter={[12, 12]}>
                <Col span={24}>Address: 268 Lý Thường Kiệt, Quận 10, Tp. Hồ Chí Minh</Col>
                <Col span={24}>Email: example@tpm-techs.com</Col>
                <Col span={24}>Phone: (+84)12 345 6789</Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <Link href="/about">Home</Link>
                </Col>
                <Col span={24}>
                  <Link href="/about">About TPM</Link>
                </Col>
                <Col span={24}>
                  <Link href="/services">Services</Link>
                </Col>
                <Col span={24}>
                  <Link href="/projects">Projects</Link>
                </Col>
                <Col span={24}>
                  <Link href="/contact">Contact Us</Link>
                </Col>
              </Row>
            </Col>
            <Col span={6}></Col>
          </Row>
        </div>
        <Divider style={{ borderColor: "#3172A9" }} />
        <div>
          <Row justify="space-between" align="middle">
            <Col>&#169; {dayjs().year()} TPM Technology. All rights reserved</Col>
            <Col>
              <Row gutter={[12, 12]}>
                <Col>
                  <Button type="link" href="/home">
                    <LinkedinFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
                <Col>
                  <Button type="link" href="/home">
                    <TwitterSquareFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
                <Col>
                  <Button type="link" href="/home">
                    <FacebookFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
                <Col>
                  <Button type="link" href="/home">
                    <GithubFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Footer
