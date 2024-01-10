"use client"

import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
  TwitterSquareFilled,
} from "@ant-design/icons"
import { Button, Col, Divider, Row } from "antd"
import { type FC, useState } from "react"
import Map from "components/Map"

enum FormType {
  LAST_NAME = "lastName",
  FIRST_NAME = "firstName",
  COMPANY = "company",
  EMAIL = "email",
  COUNTRY = "country",
  PHONE_NUMBER = "phoneNumber",
  SUBJECT = "subject",
  MESSAGE = "message",
}

interface IFormData {
  lastName?: string
  firstName?: string
  email?: string
  phoneNumber?: string
  company?: string
  message?: string
  subject?: string
  country?: string
}

const Contact: FC = () => {
  const [values, setValues] = useState<IFormData>({
    lastName: "Họ",
    firstName: "Tên",
    email: "Email",
    phoneNumber: "Số điện thoại",
    company: "Công ty",
    message: "Nội dung",
    subject: "Tiêu đề",
    country: "(+84)",
  })

  const body = encodeURIComponent(
    "Tên: " +
      `${values?.lastName} ${values?.firstName}` +
      "\nNơi làm việc: " +
      values?.company +
      "\nEmail: " +
      values?.email +
      "\nSố điện thoại: " +
      `${values?.country} ${values?.phoneNumber}` +
      "\nCông ty: " +
      values?.company +
      "\nNội dung: " +
      values?.message
  )

  const mailtoHref = `mailto:quan260402@gmail.com?subject=[TPM Technology] - ${values?.subject}&body=${body}`

  const handleChange = (type: string, e: any) => {
    if (type === FormType.COUNTRY) {
      // @ts-ignore
      const country = document.getElementById("country").value
      setValues({
        ...values,
        country,
      })
    } else {
      setValues({
        ...values,
        [type]: e?.target?.value || "",
      })
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT9.jpg?alt=media&token=f1f2be23-4e80-47e3-b820-28403ed9826e')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl italic text-white">TPM Technology</div>
              <div className=" text-7xl font-extrabold text-white">Liên hệ</div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-50" />
      </section>
      <div className="my-16 flex w-full items-center justify-center">
        <div style={{ maxWidth: 1280 }} className="w-full">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # {`Liên hệ`}
          </div>
          <Divider />
          <Row gutter={[48, 48]}>
            <Col span={12}>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Liên hệ chúng tôi</h2>
              <div className="mt-28">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <div className="rounded-xl bg-white p-4">
                      <Row align="middle" gutter={[24, 24]}>
                        <Col>
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-solid border-primary text-2xl text-primary">
                            <PushpinOutlined />
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Địa chỉ văn phòng</h2>
                            <p>Số 42 đường 34, An Phú, thành phố Thủ Đức</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="rounded-xl bg-white p-4">
                      <Row align="middle" gutter={[24, 24]}>
                        <Col>
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-solid border-primary text-2xl text-primary">
                            <PhoneOutlined />
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Hotline</h2>
                            <p>028 2229 9685</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="rounded-xl bg-white p-4">
                      <Row align="middle" gutter={[24, 24]}>
                        <Col>
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-solid border-primary text-2xl text-primary">
                            <MailOutlined />
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Email</h2>
                            <p>tpmcore@gmail.com</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={24}>
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
                  <Col span={24}>
                    <Map
                      style={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "12px",
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Hãy để lại liên lạc</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.
                </p>
              </div>
              <form action={mailtoHref} method="POST" className="mt-8 w-full sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Họ
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Họ"
                        type="text"
                        id="last-name"
                        autoComplete="family-name"
                        onChange={(e) => handleChange(FormType.LAST_NAME, e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Tên
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Tên"
                        type="text"
                        id="first-name"
                        autoComplete="given-name"
                        onChange={(e) => handleChange(FormType.FIRST_NAME, e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                      Công ty
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Công ty"
                        type="text"
                        id="company"
                        autoComplete="organization"
                        onChange={(e) => handleChange(FormType.COMPANY, e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        autoComplete="email"
                        onChange={(e) => handleChange(FormType.EMAIL, e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                      Số điện thoại
                    </label>
                    <div className="relative mt-2.5">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="country" className="sr-only">
                          Quốc gia
                        </label>
                        <select
                          onChange={(e) => handleChange(FormType.COUNTRY, e)}
                          id="country"
                          defaultValue="(+84)"
                          className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                        >
                          <option value={"(+84)"}>VN</option>
                          <option value={"(+81)"}>JP</option>
                          <option value={"(+1)"}>US</option>
                        </select>
                      </div>
                      <input
                        placeholder="Số điện thoại"
                        type="tel"
                        id="phone-number"
                        autoComplete="tel"
                        onChange={(e) => handleChange(FormType.PHONE_NUMBER, e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                      Tiêu đề
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Tiêu đề"
                        type="subject"
                        id="subject"
                        autoComplete="subject"
                        onChange={(e) => handleChange(FormType.SUBJECT, e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Nội dung
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        onChange={(e) => handleChange(FormType.MESSAGE, e)}
                        placeholder="Nội dung"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Contact
