'use client'

import { FacebookFilled, GithubFilled, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons"
import { Button, Col, Divider, Image, Input, Row, Select } from "antd"
import dayjs from "dayjs"
import Link from "next/link"
import { type FC ,useState } from "react"
import "./index.css"
import Map from "components/Map"

enum FormType {
  NAME = "name",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
  FIELD = "field",
}

interface IFormData {
  name?: string
  phoneNumber?: string
  email?: string
  field?: string
}

const Footer: FC = () => {
  const [values, setValues] = useState<IFormData>({
    name: "Họ và tên",
    phoneNumber: "Số điện thoại",
    email: "Email",
    field: "Lĩnh vực vần tư vấn",
  })

  const body = encodeURIComponent(
    "Tên: " +
      `${values?.name}` +
      "\nEmail: " +
      values?.email +
      "\nSố điện thoại: " +
      `${values?.phoneNumber}` +
      `\nNội dung: Cần hỗ trợ tư vấn về lĩnh vực ${values?.field}`
  )

  const mailtoHref = `mailto:quan260402@gmail.com?subject=[TPM Technology] - Hỗ trợ tư vấn&body=${body}`

  const handleChange = (type: string, e: any) => {
    setValues({
      ...values,
      [type]: e?.target?.value || "",
    })
  }

  const handleSelect = (value: string) => {
    setValues({
      ...values,
      field: value,
    })
  }

  return (
    <div className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-primary-700 to-primary-800 pb-6 text-white">
      <section
        style={{ width: "100vw" }}
        className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/NL9.jpg?alt=media&token=333c5633-f345-4832-ad22-dd45b408505d')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 400 }} className="z-40 flex w-full items-center justify-start">
          <div className="w-full">
            <Row align="middle" justify="center">
              <Col span={8}>
                <Row gutter={[16, 16]} justify="center">
                  <Col className="text-center font-semibold">
                    <div className="text-4xl text-white">Cần hỗ trợ ?</div>
                    <div className="text-base text-white">Đăng ký thông tin để được tư vấn</div>
                  </Col>
                  <Col span={24}>
                    <Input onChange={(e) => handleChange( FormType.NAME , e) } size="large" placeholder="Họ và tên" />
                  </Col>
                  <Col span={24}>
                    <Input onChange={(e) => handleChange( FormType.PHONE_NUMBER , e) } size="large" placeholder="Số điện thoại" />
                  </Col>
                  <Col span={24}>
                    <Input onChange={(e) => handleChange( FormType.EMAIL , e) } size="large" placeholder="Địa chỉ Email" />
                  </Col>
                  <Col span={24}>
                    <Select
                      onChange={handleSelect}
                      style={{ width: "100%" }}
                      size="large"
                      placeholder="Lĩnh vực cần tư vấn"
                      options={[
                        { value: "IOT", label: "IOT" },
                        { value: "Năng lượng tái tạo", label: "Năng lượng tái tạo" },
                        { value: "Lĩnh vực khác", label: "Lĩnh vực khác" },
                      ]}
                    />
                  </Col>
                  <Col span={24}>
                    <Button href={mailtoHref} style={{ width: "100%" }} size="large" type="primary">
                      Đăng ký
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ height: 400 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-25" />
      </section>

      <div className="footer-container w-full">
        <div className="pt-12">
          <Row gutter={[48, 48]} justify="space-between" align="middle">
            <Col span={7}>
              <div className="flex items-center justify-center rounded-xl bg-white">
                <Image
                  preview={false}
                  width={120}
                  alt="tpm-techs-logo"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
                />
              </div>
              <div className="mt-2 text-center">“Chúng tôi là Đối tác tin cậy của khách hàng”</div>
            </Col>
            <Col span={6}>
              <Row gutter={[12, 12]}>
                <Col span={24}>Địa chỉ: Số 42 đường 34, An Phú, thành phố Thủ Đức</Col>
                <Col span={24}>Email: tpmcore@gmail.com</Col>
                <Col span={24}>Hotline: 028 2229 9685</Col>
              </Row>
            </Col>
            <Col span={3}>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <Link href="/about">Trang chủ</Link>
                </Col>
                <Col span={24}>
                  <Link href="/about">Giới thiệu</Link>
                </Col>
                <Col span={24}>
                  <Link href="/services">Dịch vụ</Link>
                </Col>
                <Col span={24}>
                  <Link href="/projects">Dự án</Link>
                </Col>
                <Col span={24}>
                  <Link href="/contact">Liên hệ</Link>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Map
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "12px",
                }}
              />
            </Col>
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
                  <Button type="link" href="https://www.facebook.com/profile.php?id=61554331060849">
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
