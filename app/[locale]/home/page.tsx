"use client"

/* eslint-disable @next/next/no-img-element */
import { Button, Carousel, Col, Divider, Row, Typography } from "antd"
import { FC, useEffect, useState } from "react"
import "animate.css"
import "./index.css"
import { FormattedMessage, useIntl } from "react-intl"
import urlcat from "urlcat"
import Path from "config/path"
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
  const { locale } = useIntl()


  const [blogs, setBlogs] = useState<IBlog[]>([])

  useEffect(() => {
    const load = async () => {
      const data = (await import(`app/[locale]/blog/blogs/${locale}`)).blogs
      setBlogs(data)
    }

    load()
  }, [locale])

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <div className="w-full">
        <Carousel autoplay autoplaySpeed={2000}>
          <div>
            <section
              style={{ width: "100vw" }}
              className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT1.jpg?alt=media&token=48f7566c-0163-47e3-aa6b-d4a31cec8dc0')] bg-cover bg-center bg-no-repeat"
            >
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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
              <div
                style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
                className="z-40 flex w-full items-center justify-start"
              >
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-5xl font-extrabold text-white">TPM Technology</div>
                    {/* <div className="text-5xl font-extrabold text-white">Since 2023.</div> */}
                    <div className="text-2xl text-white">
                      <FormattedMessage id="home.banner.description" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[24, 24]} align="middle" justify="start">
                      <Col>
                        <Button size="large" href={urlcat(Path.ABOUT, {locale})}>
                          <FormattedMessage id="home.banner.learn.more.about.tpm" />
                        </Button>
                      </Col>

                      <Col>
                        <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                          <FormattedMessage id="common.contact.us" />
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

      <div style={{ maxWidth: 1280, padding: "0 32px" }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # <FormattedMessage id="common.about" />
          </div>
          <Divider />
          <Typography.Text>
            <div className="my-4 text-lg font-semibold">
              <FormattedMessage id="home.about.title" />
            </div>
          </Typography.Text>
          <Typography.Text>
            <div className="text-lg font-semibold">
              <FormattedMessage id="home.about.paragraph.1" />
            </div>
          </Typography.Text>
          <Typography.Text>
            <div className="my-4 text-lg font-semibold">
              <FormattedMessage id="home.about.paragraph.2" />
            </div>
          </Typography.Text>
          <Typography.Text>
            <div className="my-4 text-lg font-semibold">
              <FormattedMessage id="home.about.paragraph.3" />
            </div>
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
                  <div className="text-slate-500">
                    <FormattedMessage id="home.about.year" />
                  </div>
                  <div className="text-slate-500">
                    <FormattedMessage id="home.about.of.experience" />
                  </div>
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
                  <div className="font-semibold text-slate-500">
                    <FormattedMessage id="home.about.projects" />
                  </div>
                  <div className="font-semibold text-slate-500">
                    <FormattedMessage id="home.about.acceptanced" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # <FormattedMessage id="common.services" />
          </div>
          <Divider />
          <Row gutter={[48, 48]} align="middle">
            {blogs.map((blog: IBlog, index: number) => {
              if (index % 2 === 0) {
                return (
                  <Row key="blog" gutter={[48, 48]} align="middle">
                    <Col sm={12} xs={24}>
                      <div className="container">
                        <img alt="banner" className="image w-full rounded-xl" src={blog.image} />
                        <div className="middle">
                          <Button
                            type="primary"
                            size="large"
                            href={urlcat(Path.BLOG_DETAIL, {
                              locale,
                              id: blog.id,
                            })}
                          >
                            <FormattedMessage id="home.services.read.more" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} xs={24}>
                      <Row style={{ height: "100%" }} align="middle" justify="center">
                        <Row gutter={[12, 12]}>
                          <Col span={24}>
                            <Link
                              href={urlcat(Path.BLOG_DETAIL, {
                                locale,
                                id: blog.id,
                              })}
                            >
                              <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                                {blog.title}
                              </div>
                            </Link>
                          </Col>
                          <Col span={24}>
                            <div className="text-xl text-slate-500">{blog.description}</div>
                          </Col>
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                )
              }

              return (
                <Row key="blog" gutter={[48, 48]} align="middle">
                  <Col sm={12} xs={24}>
                    <Row style={{ height: "100%" }} align="middle" justify="center">
                      <Row gutter={[12, 12]}>
                        <Col span={24}>
                          <Link
                            href={urlcat(Path.BLOG_DETAIL, {
                              locale,
                              id: blog.id,
                            })}
                          >
                            <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                              {blog.title}
                            </div>
                          </Link>
                        </Col>
                        <Col span={24}>
                          <div className="text-xl text-slate-500">{blog.description}</div>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col sm={12} xs={24}>
                    <div className="container">
                      <img alt="banner" className="image w-full rounded-xl" src={blog.image} />
                      <div className="middle">
                        <Button
                          type="primary"
                          size="large"
                          href={urlcat(Path.BLOG_DETAIL, {
                            locale,
                            id: blog.id,
                          })}
                        >
                          <FormattedMessage id="home.services.read.more" />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              )
            })}
          </Row>
        </section>

        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # <FormattedMessage id="home.products" />
          </div>
          <Divider />
          <Row gutter={[24, 24]} align="middle" justify="space-between">
            <Col sm={8} xs={24}>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  alt="banner"
                  className="mb-2 w-8/12 rounded-xl"
                  src="https://nexcom.vn/upload_images/images/2021/12/28/smart-grid-technology.jpg"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  <FormattedMessage id="home.smart.metering.services" />
                </div>
                <div className="text-md text-slate-500">
                  <FormattedMessage id="home.smart.metering.services.description" />
                </div>
              </div>
            </Col>
            <Col sm={8} xs={24}>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  alt="banner"
                  className="mb-2 w-8/12 rounded-xl"
                  src="https://vietnetco.vn/wp-content/uploads/2020/11/ung-dung-cua-iot-1.jpg"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  <FormattedMessage id="home.smart.energy.consulting" />
                </div>
                <div className="text-md text-slate-500">
                  <FormattedMessage id="home.smart.energy.consulting.description" />
                </div>
              </div>
            </Col>
            <Col sm={8} xs={24}>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  alt="banner"
                  className="mb-2 w-8/12 rounded-xl"
                  src="https://kimnonggoldstar.vn/wp-content/uploads/2023/08/nong-nghiep-thong-minh-xu-the-tat-yeu-trong-tuong-lai-gan-kimnonggoldstar-vn-2.jpg"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  <FormattedMessage id="home.smart.farming.solutions" />
                </div>
                <div className="text-md text-slate-500">
                  <FormattedMessage id="home.smart.farming.solutions.description" />
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/*................................... Bảng tin........................................ */}
        <section className="my-16">
            <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
              # <FormattedMessage id="home.strategic.news" />
            </div>
            <Divider />
            <div className="my-8 flex flex-wrap justify-center">
              <div className="sm:w-10/12 md:w-6/12 text-center text-justify">
                <FormattedMessage id="home.strategic.partnership.campuchia" />
              </div>
              <div className="flex flex-col items-center justify-center text-center mx-4 my-4 sm:w-full md:w-1/3">
                <img
                  alt="banner"
                  className="mb-2 w-full rounded-xl"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/newscampuchia1.jpg?alt=media&token=462e82b9-eb29-4233-a384-31d1ce0a017f"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  {/* <FormattedMessage id="home.smart.farming.solutions" /> */}
                </div>
                <div className="text-md text-slate-500">
                  {/* <FormattedMessage id="home.smart.farming.solutions.description" /> */}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center mx-4 my-4 sm:w-full md:w-1/3">
                <img
                  alt="banner"
                  className="mb-2 w-full rounded-xl"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/newscampuchia.jpg?alt=media&token=a4b907c8-9ed5-44e8-8692-2279761de84e"
                />
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  {/* <FormattedMessage id="home.smart.farming.solutions" /> */}
                </div>
                <div className="text-md text-slate-500">
                  {/* <FormattedMessage id="home.smart.farming.solutions.description" /> */}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center mx-4 my-4 sm:w-full md:w-1/3">
                <img
                  alt="banner"
                  className="mb-2 w-full rounded-xl"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/newscampuchia2.jpg?alt=media&token=fe6d54cf-1bcf-402e-a837-df8f1d329372"
                />
                {/* <div className="text-md text-slate-500">
                  <FormattedMessage id="newscampuchia.solutions.description2" />
                </div>
                <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
                  <FormattedMessage id="newscampuchia.solutions.description1" />
                </div> */}
              </div>
            </div>
          </section>
          {/*................................... Bảng tin........................................ */}

          
              
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # <FormattedMessage id="home.strategic.partnership" />
          </div>
          <Divider />
          <div className="my-8 flex items-center justify-center text-center text-lg font-semibold">
            <div className="sm:w-10/12 md:w-6/12">
              <FormattedMessage id="home.strategic.partnership.description" />
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
