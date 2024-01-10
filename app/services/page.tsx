import { CheckOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row } from "antd"
import { type FC } from "react"
import ServiceCard from "components/ServiceCard"
import { BlogType, serviceBlogs } from "app/blog/data"

const Services: FC = () => {
  const services = serviceBlogs.filter((blog) => {
    return blog?.type === BlogType.SERVICE
  })

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT7.jpg?alt=media&token=0bc8fa7c-6a68-4d63-9ad4-e5b40e19b683')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl text-white">{`Xây dựng tương lại, Khôi phục quá khứ`}</div>
              <div className="text-5xl font-extrabold text-white">{`Cung cấp các giải pháp sáng tạo và bền vững`}</div>
            </Col>
            <Col span={24}>
              <Row gutter={[24, 24]} align="middle" justify="start">
                <Col>
                  <Button type="primary" size="large" href="/contact">
                    {`Liên hệ với chúng tôi`}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
      </section>

      <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # {`Dịch vụ`}
          </div>
          <Divider />
          <div className="my-1 flex items-center justify-center text-center text-lg font-semibold text-primary">
            <div className="w-6/12 ">{`Dịch vụ tốt nhất!`}</div>
          </div>
          <div className="my-1 flex items-center justify-center text-center text-4xl font-semibold">
            <div className="md:w-8/12 sm:w-full font-semibold">{`
              Cung cấp dịch vụ hiệu suất cao cho nhiều ngành công nghiệp và công nghệ!
            `}</div>
          </div>

          <div className="my-8">
            <Row gutter={[48, 48]} align="middle" justify="center">
              {services.map((service) => {
                return (
                  <Col key={service.title}  xl={8} sm={12} xs={24}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      image={service.image}
                      href={`/blog/${service.id}`}
                    />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-2.jpg?alt=media&token=1eb8d70f-c57b-4350-ab09-bb161e9262fd')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: '0 32px' }} className=" z-40 flex w-full items-center justify-start">
          <Row style={{ padding: '32px 0' }} gutter={[48, 48]} align="middle" justify={{xs: 'center', sm: 'start'}}>
            <Col sm={12} xs={24}>
              <div className="text-left text-lg font-semibold text-gamboge">
                {`Xây dựng tương lại, Khôi phục quá khứ`}
              </div>
              <div className="text-left text-4xl font-semibold text-white">
                {`Sản phẩm đáng tin cây, hiệu quả và kỹ thuật tiên tiến!`}
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Tối Ưu Hóa Hiệu Suất Với IoT`}</div>
                    <div>
                      {`Hệ thống thông minh của chúng tôi không chỉ kiểm soát chất lượng mà còn tối
ưu hóa hiệu suất, giúp doanh nghiệp của bạn tiết kiệm chi phí và thời gian một
cách đáng kể.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Kiểm Soát Chất Lượng Hiệu Quả`}</div>
                    <div>
                      {`Chúng tôi nâng cao giá trị sản phẩm của mình bằng cách kiểm soát chất lượng một cách hiệu quả.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Đảm Bảo Sự Hài Lòng 100%`}</div>
                    <div>
                      {`Một cách tiếp cận tích hợp để cung cấp các dịch vụ kỹ thuật cho phép khách hàng của chúng tôi được hưởng lợi từ thương mại và hậu cần.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`An Toàn và Bảo Mật Vững Chắc`}</div>
                    <div>
                      {`Với cam kết đặt sự an toàn và bảo mật lên hàng đầu, sản phẩm IoT của chúng
tôi giúp bảo vệ dữ liệu quan trọng của bạn, đồng thời giảm thiểu rủi ro liên quan
đến an ninh mạng.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Trải Nghiệm Người Dùng Xuất Sắc`}</div>
                    <div>
                      {`Hệ thống của chúng tôi không chỉ đảm bảo chất lượng sản phẩm mà còn tạo ra
trải nghiệm người dùng xuất sắc, giúp nâng cao sự hài lòng và tạo ra một sự kết
nối mạnh mẽ giữa doanh nghiệp và khách hàng.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="absolute inset-0 z-30 w-full bg-black bg-opacity-70" />
      </section>
    </div>
  )
}

export default Services
