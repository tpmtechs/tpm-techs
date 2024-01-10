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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">
                      TPM Technology 
                    </div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                     Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href="/about">
                          Tìm hiểu về TPM
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

      <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # Giới thiệu
          </div>
          <Divider />
          <Typography.Text>
            <div className="my-4 text-lg font-semibold">{`Công ty TPM - Chuyên Gia Tiên Phong Trong Lĩnh Vực IoT`}</div>
          </Typography.Text>
          <Typography.Text>
            <div className="text-lg font-semibold">
              {`TPM, là một doanh nghiệp chuyên về công nghệ và đổi mới trong lĩnh vực Internet
of Things (IoT). Với lòng cam kết và sự sáng tạo, chúng tôi đang không ngừng nỗ
lực để đưa ra những sản phẩm và giải pháp có tính ứng dụng cao, giúp khách hàng
tối ưu hóa quy trình kinh doanh của họ.`}
            </div>
          </Typography.Text>
          <Typography.Text>
            <div className="my-4 text-lg font-semibold">
              {`
            Chúng tôi hiểu rằng thành công không chỉ đến từ việc làm hàng đầu mà còn từ sự
linh hoạt, sáng tạo và cam kết. Do đó, chúng tôi luôn đề cao tinh thần đồng đội,
khuyến khích mọi cá nhân trong tổ chức chia sẻ ý tưởng và đóng góp vào quá trình
sáng tạo.
            `}
            </div>
          </Typography.Text>
          <Typography.Text>
            <div className="my-4 text-lg font-semibold">{`
          TPM không chỉ là nơi làm việc mà còn là một cộng đồng, nơi mọi thành viên đều
được tạo điều kiện để phát triển cá nhân và chung. Chúng tôi đánh giá cao sự đa
dạng và tôn trọng, tạo ra một môi trường làm việc tích cực và đầy động lực.
          `}</div>
          </Typography.Text>
        </section>

        <section className="my-16">
          <Row gutter={[48, 48]} justify="center">
            <Col>
              <Row align="middle" gutter={[12, 12]}>
                <Col>
                  <div style={{ color: "#3172A9" }} className="text-5xl font-semibold">
                    5+
                  </div>
                </Col>
                <Col>
                  <div className="text-slate-500">năm</div>
                  <div className="text-slate-500">kinh nghiệm</div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" gutter={[12, 12]}>
                <Col>
                  <div style={{ color: "#3172A9" }} className="text-5xl font-semibold">
                    200+
                  </div>
                </Col>
                <Col>
                  <div className="font-semibold text-slate-500">dự án</div>
                  <div className="font-semibold text-slate-500">đã nghiệm thu</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # {`Dịch vụ`}
          </div>
          <Divider />
          <Row gutter={[48, 48]} align="middle">
            <Col sm={12} xs={24}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://images.ctfassets.net/szez98lehkfm/7g2sitSkiFvEKsqCwh2LnY/0d1a0347390c625abdea9fb27d035488/MyIC_Inline_73525"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/101">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/101">
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

            <Col sm={12} xs={24}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/102">
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
            <Col sm={12} xs={24}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://bcp.cdnchinhphu.vn/334894974524682240/2023/6/26/csdlqg-1687768866623578740455.jpg"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/102">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>

            <Col sm={12} xs={24}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://vina-aspire.com/wp-content/uploads/2022/06/1-3.png"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/103">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/103">
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

            <Col sm={12} xs={24}>
              <Row style={{ height: "100%" }} align="middle" justify="center">
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <Link href="/blog/104">
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
            <Col sm={12} xs={24}>
              <div className="container">
                <img
                  alt="banner"
                  className="image w-full rounded-xl"
                  src="https://smartindustry.vn/wp-content/uploads/2022/04/iot_istock_1215247403.jpg"
                />
                <div className="middle">
                  <Button type="primary" size="large" href="/blog/104">
                    Đọc thêm
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # {`Sản phẩm`}
          </div>
          <Divider />
          <Row gutter={[24, 24]} align="middle" justify="space-between">
            <Col sm={8} xs={24}>
              <div className="text-center flex flex-col justify-center items-center">
                <img
                  alt="banner"
                  className="w-8/12 rounded-xl mb-2"
                  src="https://nexcom.vn/upload_images/images/2021/12/28/smart-grid-technology.jpg"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  Smart metering services
                </div>
                <div className="text-md text-slate-500">Dịch vụ cung cấp năng lượng thông minh</div>
              </div>
            </Col>
            <Col sm={8} xs={24}>
              <div className="text-center flex flex-col justify-center items-center">
                <img
                  alt="banner"
                  className="w-8/12 rounded-xl mb-2"
                  src="https://vietnetco.vn/wp-content/uploads/2020/11/ung-dung-cua-iot-1.jpg"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  Smart energy consulting
                </div>
                <div className="text-md text-slate-500">Dịch vụ tư vấn năng lượng thông minh</div>
              </div>
            </Col>
            <Col sm={8} xs={24}>
              <div className="text-center flex flex-col justify-center items-center">
                <img
                  alt="banner"
                  className="w-8/12 rounded-xl mb-2"
                  src="https://kimnonggoldstar.vn/wp-content/uploads/2023/08/nong-nghiep-thong-minh-xu-the-tat-yeu-trong-tuong-lai-gan-kimnonggoldstar-vn-2.jpg"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  Smart farming solutions
                </div>
                <div className="text-md text-slate-500">Giải pháp nông nghiệp thông minh</div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # Đối tác chiến lược
          </div>
          <Divider />
          <div className="my-8 flex items-center justify-center text-center text-lg font-semibold">
            <div className="md:w-6/12 sm:w-10/12">
              Đồng hành với TPM Technology là những đối tác chuyên nghiệp. Cùng nhau chúng tôi sẽ giúp công trình của
              bạn trường tồn lâu dài và mang lại giá trị cao nhất
            </div>
          </div>
          <Row align="middle" justify="center">
            <Row gutter={[24, 24]} align="middle" justify="center">
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
