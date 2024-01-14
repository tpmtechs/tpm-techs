'use client'

import { CheckOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row } from "antd"
import { type FC, useEffect, useState  } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import urlcat from "urlcat"
import { BlogType } from "app/[locale]/blog/data"
import ServiceCard from "components/ServiceCard"
import Path from "config/path"


const Services: FC = () => {
  const {locale} = useIntl();

  const [blogs, setBlogs] = useState<IBlog[]>([])

  useEffect(() => {
    const load = async () => {
      const data = (await import(`app/[locale]/blog/blogs/${locale}`)).serviceBlogs.filter((blog: IBlog) => {
        return blog.type === BlogType.SERVICE
      })
      setBlogs(data)
    }

    load()
  }, [locale])

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT7.jpg?alt=media&token=0bc8fa7c-6a68-4d63-9ad4-e5b40e19b683')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl italic text-white">{`TPM Technology`}</div>
              <div className="text-5xl font-extrabold text-white"><FormattedMessage id="services.banner.title" /></div>
            </Col>
            <Col span={24}>
              <Row gutter={[24, 24]} align="middle" justify="start">
                <Col>
                  <Button type="primary" size="large" href="/contact">
                    <FormattedMessage id="services.banner.contact.us" />
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
            # <FormattedMessage id="services.title" />
          </div>
          <Divider />
          <div className="my-1 flex items-center justify-center text-center text-lg font-semibold text-primary">
            <div className="w-6/12 "><FormattedMessage id="services.subtitle" /></div>
          </div>
          <div className="my-1 flex items-center justify-center text-center text-4xl font-semibold">
            <div className="md:w-8/12 sm:w-full font-semibold"><FormattedMessage id="services.description" /></div>
          </div>

          <div className="my-8">
            <Row gutter={[48, 48]} align="middle" justify="center">
              {blogs.map((service) => {

                const href = urlcat(Path.BLOG_DETAIL, {
                  locale,
                  id: service.id
                })

                return (
                  <Col key={service.title}  xl={8} sm={12} xs={24}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      image={service.image}
                      href={href}
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
                <FormattedMessage id="services.criteria.subtitle" />
              </div>
              <div className="text-left text-4xl font-semibold text-white">
                <FormattedMessage id="services.criteria.title" />
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold"><FormattedMessage id="services.criteria.1.title" /></div>
                    <div>
                      <FormattedMessage id="services.criteria.1.description" />
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
                    <div className="mb-4 text-xl font-semibold"><FormattedMessage id="services.criteria.2.title" /></div>
                    <div>
                      <FormattedMessage id="services.criteria.2.description" />
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
                    <div className="mb-4 text-xl font-semibold"><FormattedMessage id="services.criteria.3.title" /></div>
                    <div>
                      <FormattedMessage id="services.criteria.3.description" />
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
                    <div className="mb-4 text-xl font-semibold"><FormattedMessage id="services.criteria.4.title" /></div>
                    <div>
                      <FormattedMessage id="services.criteria.4.description" />
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
                    <div className="mb-4 text-xl font-semibold"><FormattedMessage id="services.criteria.5.title" /></div>
                    <div>
                      <FormattedMessage id="services.criteria.5.description" />
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
