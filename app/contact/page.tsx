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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const Contact: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-2.jpg?alt=media&token=1eb8d70f-c57b-4350-ab09-bb161e9262fd')] bg-cover bg-no-repeat"
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
            # Contact
          </div>
          <Divider />
          <Row gutter={[48, 48]}>
            <Col span={12}>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Liên hệ chúng tôi</h2>
              {/* <p className="mt-2 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p> */}
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
              <form action="#" method="POST" className="mt-8 w-full sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Họ
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Họ"
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
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
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
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
                        name="company"
                        id="company"
                        autoComplete="organization"
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
                        name="email"
                        id="email"
                        autoComplete="email"
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
                          id="country"
                          name="country"
                          className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                        >
                          <option>VN</option>
                          <option>JP</option>
                          <option>US</option>
                        </select>
                      </div>
                      <input
                        placeholder="Số điện thoại"
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                      Tiêu đề
                    </label>
                    <div className="mt-2.5">
                      <input
                        placeholder="Tiêu đề"
                        type="title"
                        name="title"
                        id="title"
                        autoComplete="title"
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
                        placeholder="Nội dung"
                        name="message"
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
