// 'use client'

/* eslint-disable @next/next/no-img-element */
import { Button, Col, Divider, Row } from "antd"
import { Metadata } from "next"
import { FC } from "react"
import "animate.css"
import "./index.css"

export const metadata: Metadata = {
  title: "TPM Technology - Home",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
      },
    ],
  },
}

interface IPartnerBlock {
  children?: any
}

const PartnerBlock: FC<IPartnerBlock> = ({ children }) => {
  return (
    <div
      id="partner-block"
      className={`animate__animated animate__fadeIn h-40 w-40 rounded-xl border border-slate-500 p-2`}
    >
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col>{children}</Col>
      </Row>
    </div>
  )
}

const Home: FC = () => {
  const arr = Array.from(Array(8).keys())

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-2.jpg?alt=media&token=1eb8d70f-c57b-4350-ab09-bb161e9262fd')] bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1440, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-5xl font-extrabold text-white">
                The standard Lorem Ipsum passage, used since the 1500s.
              </div>
              <div className="text-5xl font-extrabold text-white">Since 2023.</div>
              <div className="text-2xl text-white">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={[24, 24]} align="middle" justify="start">
                <Col>
                  <Button size="large" href="/services">
                    What we do
                  </Button>
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
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
      </section>
      <div style={{ maxWidth: 1440 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-bold">
            # Introduction
          </div>
          <Divider />
          <div className="text-lg font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </section>

        <section className="my-16">
          <Row gutter={[48, 48]} justify="center">
            <Col>
              <Row align="middle" gutter={[12, 12]}>
                <Col>
                  <div style={{ color: "#3172A9" }} className="text-5xl font-bold">
                    3
                  </div>
                </Col>
                <Col>
                  <div className="text-slate-500">Years</div>
                  <div className="text-slate-500">of experience</div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" gutter={[12, 12]}>
                <Col>
                  <div style={{ color: "#3172A9" }} className="text-5xl font-bold">
                    500+
                  </div>
                </Col>
                <Col>
                  <div className="font-semibold text-slate-500">Projects</div>
                  <div className="font-semibold text-slate-500">we have done</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-bold">
            # Services
          </div>
          <Divider />
          <Row gutter={[100, 100]}>
            <Col span={12}>
              <img
                alt="banner"
                className="w-full rounded-xl"
                src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-1.jpeg?alt=media&token=0d2c26d9-4d3a-497b-bf55-a8e1be6bc35d"
              />
            </Col>
            <Col span={12}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <div style={{ color: "#3172A9" }} className="text-2xl font-bold">
                      1914 translation by H. Rackham
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>

            <Col span={12}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <div style={{ color: "#3172A9" }} className="text-2xl font-bold">
                      1914 translation by H. Rackham
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col span={12}>
              <img
                alt="banner"
                className="w-full rounded-xl"
                src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-1.jpeg?alt=media&token=0d2c26d9-4d3a-497b-bf55-a8e1be6bc35d"
              />
            </Col>

            <Col span={12}>
              <img
                alt="banner"
                className="w-full rounded-xl"
                src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-1.jpeg?alt=media&token=0d2c26d9-4d3a-497b-bf55-a8e1be6bc35d"
              />
            </Col>
            <Col span={12}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <div style={{ color: "#3172A9" }} className="text-2xl font-bold">
                      1914 translation by H. Rackham
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-bold">
            # Products
          </div>
          <Divider />
          <Row gutter={[24, 24]} align="middle" justify="space-between">
            <Col span={6}>
              <div style={{ color: "#3172A9" }} className="text-xl font-bold">
                Asphalt Monitoring
              </div>
              <div className="text-md w-8/12 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </Col>
            <Col span={6}>
              <div style={{ color: "#3172A9" }} className="text-xl font-bold">
                Asphalt Monitoring
              </div>
              <div className="text-md w-8/12 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </Col>
            <Col span={6}>
              <div style={{ color: "#3172A9" }} className="text-xl font-bold">
                Asphalt Monitoring
              </div>
              <div className="text-md w-8/12 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </Col>
            <Col span={6}>
              <div style={{ color: "#3172A9" }} className="text-xl font-bold">
                Asphalt Monitoring
              </div>
              <div className="text-md w-8/12 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-bold">
            # Partners
          </div>
          <Divider />
          <div className="flex items-center justify-center text-center text-lg font-semibold my-8">
            <div className="w-6/12 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>
          <Row align="middle" justify="center">
            <Row style={{ width: "60%" }} gutter={[24, 24]} align="middle" justify="center">
              {arr.map((index) => {
                return (
                  <Col key={index}>
                    <PartnerBlock>
                      <img
                        alt="company-logo"
                        src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/comany-logo.jpeg?alt=media&token=55953978-5699-46b4-82da-5aac6c1f0868"
                      />
                    </PartnerBlock>
                  </Col>
                )
              })}
            </Row>
          </Row>
        </section>
      </div>
    </div>
  )
}

export default Home
