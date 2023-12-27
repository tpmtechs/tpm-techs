"use client"

/* eslint-disable @next/next/no-img-element */
import { Button, Carousel, Col, Divider, Row, Typography } from "antd"
import { Metadata } from "next"
import { FC } from "react"
import "animate.css"
import "./index.css"
import { partners } from "./data"

const { Link } = Typography

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
  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <div className="w-full">
        <Carousel autoplay autoplaySpeed={2000}>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT1.jpg?alt=media&token=48f7566c-0163-47e3-aa6b-d4a31cec8dc0')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT2.jpg?alt=media&token=0ee4c3bf-9cf4-4459-bb09-bc09b8545e04')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT3.jpg?alt=media&token=f6738436-9956-460f-9f1e-0a6cca2e5d04')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT4.jpg?alt=media&token=cad8d884-d3cb-41d0-9226-f6990b6d0279')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT5.jpg?alt=media&token=1735844b-5457-4bdd-a5a5-931713407a53')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT6.jpg?alt=media&token=5bfb9890-237a-4bdc-bced-86737298403d')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT7.jpg?alt=media&token=0bc8fa7c-6a68-4d63-9ad4-e5b40e19b683')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT8.jpg?alt=media&token=3d91aee2-0004-4618-a5b8-eec38b326c64')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT9.jpg?alt=media&token=f1f2be23-4e80-47e3-b820-28403ed9826e')] bg-cover bg-center bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
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
                          Liên hệ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>
          </div>
        </Carousel>
      </div>

      <div style={{ maxWidth: 1280 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
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
                  <div style={{ color: "#3172A9" }} className="text-5xl font-semibold">
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
                  <div style={{ color: "#3172A9" }} className="text-5xl font-semibold">
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
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # Services
          </div>
          <Divider />
          <Row gutter={[48, 48]} align="middle">
            <Col span={12}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://images.ctfassets.net/szez98lehkfm/7g2sitSkiFvEKsqCwh2LnY/0d1a0347390c625abdea9fb27d035488/MyIC_Inline_73525"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/1">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/1">
                      <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                        HỆ THỐNG TỰ ĐỘNG HÓA VÀ ĐIỀU KHIỂN
                      </div>
                    </Link>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Giải pháp Quản lý Toàn diện của chúng tôi cung cấp các giải pháp phần mềm sáng tạo dành cho hệ
                      thống tòa nhà thương mại và công nghiệp, cung cấp khả năng kiểm soát và giám sát hiệu quả để nâng
                      cao hiệu suất hoạt động của tòa nhà
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>

            <Col span={12}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/2">
                      <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                        THIẾT BỊ KẾT NỐI
                      </div>
                    </Link>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      TPM Technology có chuyên môn và công nghệ để cung cấp thông tin cảnh báo quý giá, phân tích dữ
                      liệu và các hệ thống hiệu quả cho dự án của bạn, bất kể phạm vi của nó. Khám phá cách những thiết
                      bị kết nối của chúng tôi có thể cách mạng hóa hoạt động của bạn
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col span={12}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://bcp.cdnchinhphu.vn/334894974524682240/2023/6/26/csdlqg-1687768866623578740455.jpg"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/2">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>

            <Col span={12}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://vina-aspire.com/wp-content/uploads/2022/06/1-3.png"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/3">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/3">
                      <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                        TƯ VẤN
                      </div>
                    </Link>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Hỗ trợ khách hàng trong việc đạt được quá trình chuyển đổi kỹ thuật số mượt mà và bền vững
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>

            <Col span={12}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/4">
                      <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                        HỖ TRỢ
                      </div>
                    </Link>
                  </Col>
                  <Col span={24}>
                    <div className="text-xl text-slate-500">
                      Chúng tôi cung cấp dịch vụ bảo trì và hỗ trợ toàn diện, bao gồm bảo trì phòng ngừa và khắc phục,
                      phân tích hiệu suất, giám sát máy chủ và ứng dụng, cải tiến liên tục và các mức hỗ trợ 1, 2 và 3.
                      Mục tiêu của chúng tôi là đảm bảo hệ thống hoạt động ổn định và cung cấp hỗ trợ liên tục cho khách
                      hàng
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col span={12}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://smartindustry.vn/wp-content/uploads/2022/04/iot_istock_1215247403.jpg"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/4">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # Chúng tôi cung cấp dịch vụ:
          </div>
          <Divider />
          <Row gutter={[24, 24]} align="middle" justify="space-between">
            <Col span={8}>
              <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                Smart metering services
              </div>
              <div className="text-md w-8/12 text-slate-500">Dịch vụ cung cấp năng lượng thông minh</div>
            </Col>
            <Col span={8}>
              <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                Smart energy consulting
              </div>
              <div className="text-md w-8/12 text-slate-500">Dịch vụ tư vấn năng lượng thông minh</div>
            </Col>
            <Col span={8}>
              <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                Smart farming solutions
              </div>
              <div className="text-md w-8/12 text-slate-500">Giải pháp nông nghiệp thông minh</div>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # Đối tác chiến lược
          </div>
          <Divider />
          <div className="my-8 flex items-center justify-center text-center text-lg font-semibold">
            <div className="w-6/12 ">
              Đồng hành với TPM Technology là những đối tác chuyên nghiệp. Cùng nhau chúng tôi sẽ giúp công trình của
              bạn trường tồn lâu dài và mang lại giá trị cao nhất
            </div>
          </div>
          <Row align="middle" justify="center">
            <Row style={{ width: "60%" }} gutter={[24, 24]} align="middle" justify="center">
              {partners.map((partner: string) => {
                return (
                  <Col key={partner}>
                    <PartnerBlock>
                      <img alt="company-logo" src={partner} />
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
