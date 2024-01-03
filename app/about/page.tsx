"use client"

import { Carousel, Col, Divider, Image, Row } from "antd"
import { type FC } from "react"
import "animate.css"
import MemberCard from "components/MemberCard"

const profiles = [
  {
    name: "Nguyễn Thiên Đức",
    role: "Giám đốc điều hành TPM",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/ceo-nguyen-thien-duc.jpeg?alt=media&token=826c1205-f5ab-4629-a168-7aacef5f22bd",
    description:
      "CEO",
  },
  {
    name: "PGS.TS Ngô Hà Quang Thịnh ",
    role: "P. Giám đốc điều hành TPM",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/anonymous.jpeg?alt=media&token=2b944d6e-3fbe-4a7b-a95e-d2ec7bd484ac",
    description:
      `Chuyên gia tư vấn IoT, với kiến thức sâu rộng và sự
chuyên nghiệp, đang đồng hành cùng doanh nghiệp trong
việc áp dụng các giải pháp IoT tiên tiến và hiệu quả.`,
  },
]

const About: FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT4.jpg?alt=media&token=cad8d884-d3cb-41d0-9226-f6990b6d0279')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl italic text-white">About</div>
              <div className=" text-7xl font-extrabold text-white">TPM Technology, Inc.</div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-50" />
      </section>

      <div style={{ maxWidth: 1280 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # {`Công ty TPM - Tiên Phong Trong Lĩnh Vực Internet of Things (IoT)`}
          </div>
          <Divider />
          <Row align="middle">
            <Col span={12}>
              <div className="text-justify text-base font-medium">
                {`
                TPM, hoặc Tinh Phẩm Mới, đặt chân chạy đua với thời đại công nghiệp 4.0, là một
đơn vị đột phá chuyên sâu trong lĩnh vực Internet of Things (IoT). Với đam mê
sáng tạo và cam kết mang đến giải pháp tiên tiến, chúng tôi không chỉ là một công
ty, mà còn là một nhóm người tập trung vào việc biến những ý tưởng táo bạo thành
hiện thực.
                `}
              </div>
            </Col>
            <Col span={12}>
              <Row align="middle" justify="center">
                <Image
                  preview={false}
                  width={240}
                  alt="tpm-techs-logo"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
                />
              </Row>
            </Col>
          </Row>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-mabel bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280 }} className="z-40 flex w-full items-center justify-start">
          <Row style={{ width: "100%" }} align="middle" gutter={[24, 24]}>
            <Col span={12}>
              <div className="text-2xl italic text-primary">TPM Technology</div>
              <div className=" text-5xl font-extrabold text-primary">
                {`
                  Sứ Mệnh và Tầm Nhìn
                `}
              </div>
            </Col>
            <Col span={12}>
              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="my-2 text-2xl font-semibold">
                  {`
                    Sứ Mệnh và Tầm Nhìn:
                  `}
                </div>
                <div className=" text-xl text-slate-500">
                  {`
                  Chúng tôi đặt ra sứ mệnh tạo ra những sản phẩm và dịch vụ IoT mang tính đột phá,
giúp nâng cao hiệu suất và tối ưu hóa quy trình kinh doanh cho khách hàng. Tầm
nhìn của chúng tôi không chỉ giới hạn trong việc phát triển kỹ thuật số, mà còn là
việc định hình một tương lai thông minh và bền vững cho cộng đồng.
                  `}
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  {`Đội Ngũ Chuyên Gia`}
                </div>
                <div className="my-2 text-xl text-slate-500">
                  {`Sức mạnh của TPM nằm ở đội ngũ chuyên gia đa ngành, những người không chỉ
có kinh nghiệm sâu rộng về IoT mà còn đầy tinh thần năng động và sáng tạo.
Chúng tôi đặt niềm tin vào sự đa dạng ý kiến và sự đồng thuận để tạo ra những sản
phẩm có thể thách thức và thay đổi thế giới.`}
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  {`Sản Phẩm và Giải Pháp`}
                </div>
                <div className="my-2 text-xl text-slate-500">
                  {`TPM tự hào về sự đa dạng trong danh mục sản phẩm, từ các thiết bị cảm biến
thông minh cho đến các nền tảng phần mềm hiện đại. Chúng tôi không chỉ cung cấp giải pháp chuẩn mà còn tập trung vào phát triển sản phẩm tùy chỉnh, tương
thích với mọi nhu cầu đặc biệt của khách hàng.`}
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  {`Chất Lượng và Hiệu Suất`}
                </div>
                <div className="my-2 text-xl text-slate-500">
                  {`Chúng tôi cam kết đưa ra sản phẩm và dịch vụ có chất lượng cao nhất, được đánh
giá cao về tính ổn định, an toàn và độ tin cậy. Tính hiệu quả của giải pháp của
chúng tôi không chỉ giúp khách hàng tiết kiệm chi phí mà còn tăng cường sự cạnh
tranh của họ trong thị trường ngày càng khốc liệt.`}
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  {`Trách Nhiệm Xã Hội và Bền Vững`}
                </div>
                <div className="my-2 text-xl text-slate-500">
                  {`Chúng tôi không chỉ xem xét mình là một doanh nghiệp, mà còn là một thành viên
của cộng đồng xã hội. Trong mọi hành động, chúng tôi đều hướng tới việc góp
phần vào sự phát triển bền vững và bảo vệ môi trường. Chúng tôi tin rằng sự thành
công của chúng tôi không chỉ đo lường bằng doanh số kinh doanh mà còn bằng
ảnh hưởng tích cực đối với xã hội.`}
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  {`Cuối cùng`}
                </div>
                <div className="my-2 text-xl text-slate-500">
                  {`TPM không chỉ là một doanh nghiệp IoT, mà là một nguồn động viên và đối tác
chiến lược cho sự phát triển của khách hàng. Chúng tôi không ngừng đổi mới để
đồng hành cùng doanh nghiệp trong cuộc cách mạng số, xây dựng cầu nối giữa ý
tưởng và hiện thực, và góp phần vào việc xây dựng một tương lai thông minh và
bền vững.`}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <div style={{ maxWidth: 1280 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # People
          </div>
          <Divider />
          <div className="my-8 flex items-center justify-center text-center text-4xl font-semibold">
            <div className="w-6/12 ">5+ năm kinh nghiệm</div>
          </div>
          <div className="my-8 flex items-center justify-center text-center text-lg font-semibold">
            <div className="w-5/6">
              {`
              TPM tự hào có đội ngũ nhân viên với hơn 5 năm kinh nghiệm chuyên sâu trong
lĩnh vực IoT. Điều này chứng tỏ sự ổn định và chuyên nghiệp của chúng tôi trong
việc đưa ra giải pháp và dịch vụ IoT đẳng cấp. Các chuyên gia giàu kinh nghiệm
của chúng tôi không chỉ mang đến sự hiểu biết sâu rộng về công nghệ mà còn là
nguồn động viên và định hình sự đổi mới trong ngành.
              `}
            </div>
          </div>
          <div className="my-8">
            <Row gutter={[24, 24]} justify="center">
              {profiles.map((profile: any) => {
                return (
                  <Col key={profile.name} span={7}>
                    <MemberCard profile={profile} />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-mabel bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280 }} className="my-16 w-full">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # {`Tìm hiểu thêm`}
          </div>
          <Divider />

          <Carousel afterChange={onChange} autoplay autoplaySpeed={1000}>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default About
