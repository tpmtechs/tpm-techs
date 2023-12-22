import { CheckOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row } from "antd"
import ServiceCard from "components/ServiceCard"
import { type FC } from "react"

const services = [
  {
    title: "Petroleum & Gas Energy",
    description:
      "Petroleum and natural gas are nonrenewable sources of energy, a liquid found underground that can be used to make gasoline.",
  },
  {
    title: "Petroleum & Gas Energy",
    description:
      "Petroleum and natural gas are nonrenewable sources of energy, a liquid found underground that can be used to make gasoline.",
  },
  {
    title: "Petroleum & Gas Energy",
    description:
      "Petroleum and natural gas are nonrenewable sources of energy, a liquid found underground that can be used to make gasoline.",
  },
  {
    title: "Petroleum & Gas Energy",
    description:
      "Petroleum and natural gas are nonrenewable sources of energy, a liquid found underground that can be used to make gasoline.",
  },
  {
    title: "Petroleum & Gas Energy",
    description:
      "Petroleum and natural gas are nonrenewable sources of energy, a liquid found underground that can be used to make gasoline.",
  },
  {
    title: "Petroleum & Gas Energy",
    description:
      "Petroleum and natural gas are nonrenewable sources of energy, a liquid found underground that can be used to make gasoline.",
  },
]

const Services: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-2.jpg?alt=media&token=1eb8d70f-c57b-4350-ab09-bb161e9262fd')] bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl text-white">Building The Future, Restoring The Past</div>
              <div className="text-5xl font-extrabold text-white">Providing Innovative & Sustainable Solutions</div>
            </Col>
            <Col span={24}>
              <Row gutter={[24, 24]} align="middle" justify="start">
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

      <div style={{ maxWidth: 1280 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-bold">
            # Services
          </div>
          <Divider />
          <div className="my-1 flex items-center justify-center text-center text-lg font-semibold text-primary">
            <div className="w-6/12 ">The Best Industry And Company Services!</div>
          </div>
          <div className="my-1 flex items-center justify-center text-center text-4xl font-semibold">
            <div className="w-6/12 font-semibold">Provides High Performance Services For Multiple Industries & Technologies!</div>
          </div>

          <div className="my-8">
            <Row gutter={[48, 48]} align="middle" justify="center">
              {services.map((service: { title: string; description: string }) => {
                return (
                  <Col key={service.title}>
                    <ServiceCard title={service.title} description={service.description} />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-2.jpg?alt=media&token=1eb8d70f-c57b-4350-ab09-bb161e9262fd')] bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row style={{ width: "100%" }} gutter={[48, 48]} align="middle">
            <Col span={12}>
              <div className="text-left text-lg font-semibold text-gamboge">
                Building The Future, Restoring The Past
              </div>
              <div className="text-left text-4xl font-semibold text-white">
                Reliable, Effective &Technically Advanced Products!
              </div>
            </Col>
            <Col span={12}>
              <div className="text-left text-white">
                Industic Engineering has been built on engineering excellence crafted through unstinted dedication to
                quality, innovation and a constant objective to serve the global market & decade young industry
                expertise.
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl">Quality Control System</div>
                    <div>
                      We enhance our industry operations by relieving you of the worries associated with freight
                      forwarding.
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl">100% Satisfaction Guarantee</div>
                    <div>
                      An integrated approach to providing engineering services allows our clients to benefit from the
                      commercial and logistical advantages.
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl">Quality Control System</div>
                    <div>
                      We enhance our industry operations by relieving you of the worries associated with freight
                      forwarding.
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">100% Satisfaction Guarantee</div>
                    <div>
                      An integrated approach to providing engineering services allows our clients to benefit from the
                      commercial and logistical advantages.
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-70" />
      </section>
    </div>
  )
}

export default Services
