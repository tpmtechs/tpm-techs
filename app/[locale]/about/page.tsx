"use client"

import {
  // Carousel,
  Col,
  Divider,
  Image,
  Row,
} from "antd"
import Link from "next/link"
import { type FC, useEffect, useRef, useState } from "react"
import "animate.css"
import MemberCard from "components/MemberCard"
import { BlogType } from "app/[locale]/blog/data"
import Post from "components/Post"

import "./index.css"
import { FormattedMessage, useIntl } from "react-intl"

interface Profile {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}
interface IProfiles {
  en: Profile[];
  ja: Profile[];
  vi: Profile[];
}

const profiles: IProfiles = {
  en: [
    {
      name: "Nguyễn Thiên Đức",
      role: "Giám đốc điều hành TPM",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/ceo-nguyen-thien-duc.jpeg?alt=media&token=826c1205-f5ab-4629-a168-7aacef5f22bd",
      description:
        "Giám đốc điều hành TPM kiêm giám đốc điều hành TPCONS, đại diện cho các công ty ĐẦU TƯ VÀ XÂY DỰNG ÂN NAM & Công Ty TNHH PHÁT TRIỂN NĂNG LƯỢNG SẠCH TPE",
    },
  ],
  ja: [
    {
      name: "Nguyễn Thiên Đức",
      role: "TPM Technology CEO",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/ceo-nguyen-thien-duc.jpeg?alt=media&token=826c1205-f5ab-4629-a168-7aacef5f22bd",
      description:
        "TPM CEO および TPCONS CEO、AN NAM INVESTMENT AND 建設会社および TPE CLEAN ENERGY DEVELOPMENT COMPANY LIMITED の代表",
    },
  ],
  vi: [
    {
      name: "Nguyễn Thiên Đức",
      role: "TPM Technology CEO",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/ceo-nguyen-thien-duc.jpeg?alt=media&token=826c1205-f5ab-4629-a168-7aacef5f22bd",
      description:
        "TPM CEO and TPCONS CEO, representing AN NAM INVESTMENT AND CONSTRUCTION companies & TPE CLEAN ENERGY DEVELOPMENT COMPANY LIMITED",
    },
  ],
}

const About: FC = () => {
  const ref = useRef<any>([])
  const { locale = 'en' } = useIntl()
  const [height, setHeight] = useState(0)

  // const onChange = (currentSlide: number) => {
  //   console.log(currentSlide)
  // }

  const [blogs, setBlogs] = useState<IBlog[]>([])

  

  useEffect(() => {
    const load = async () => {
      const data = (await import(`app/[locale]/blog/blogs/${locale}`)).serviceBlogs.filter((blog: IBlog) => {
        return blog.type === BlogType.READ_MORE
      })
      setBlogs(data)
    }

    load()
  }, [locale])

  useEffect(() => {
    setHeight(ref?.current?.clientWidth / 1.778)
  }, [ref])

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT4.jpg?alt=media&token=cad8d884-d3cb-41d0-9226-f6990b6d0279')] bg-cover bg-center bg-no-repeat"
      >
        <div
          style={{ maxWidth: 1280, padding: "0 32px", height: 600 }}
          className="z-40 flex w-full items-center justify-start"
        >
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl italic text-white">
                <FormattedMessage id="about.banner.subtitle" />
              </div>
              <div className="text-3xl font-extrabold text-white md:text-7xl">TPM Technology, Inc.</div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-50" />
      </section>

      <div style={{ maxWidth: 1280, padding: "0 32px" }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # <FormattedMessage id="about.introduction.title" />
          </div>
          <Divider />
          <Row align="middle">
            <Col sm={12} xs={24}>
              <div className="text-justify text-base font-medium">
                <FormattedMessage id="about.introduction.description" />
              </div>
            </Col>
            <Col sm={12} xs={24}>
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
        <div style={{ maxWidth: 1280, padding: "0 32px" }} className="z-40 flex w-full items-center justify-start">
          <Row style={{ padding: "32px 0" }} align="middle" gutter={[24, 24]}>
            <Col sm={12} xs={24}>
              <div className="text-2xl italic text-primary">TPM Technology</div>
              <div className=" text-5xl font-extrabold text-primary">
                <FormattedMessage id="about.mission.and.vision" />
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="my-2 text-2xl font-semibold">
                  <FormattedMessage id="about.mission.and.vision" />
                </div>
                <div className=" text-justify text-xl text-slate-500">
                  <FormattedMessage id="about.mission.and.vision.description" />
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  <FormattedMessage id="about.team.of.experts" />
                </div>
                <div className="my-2 text-justify text-xl text-slate-500">
                  <FormattedMessage id="about.team.of.experts.description" />
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  <FormattedMessage id="about.products.and.solutions" />
                </div>
                <div className="my-2 text-justify text-xl text-slate-500">
                  <FormattedMessage id="about.products.and.solutions.description" />
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  <FormattedMessage id="about.quality.and.performance" />
                </div>
                <div className="my-2 text-justify text-xl text-slate-500">
                  <FormattedMessage id="about.quality.and.performance.description" />
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  <FormattedMessage id="about.social.responsibility.and.sustainability" />
                </div>
                <div className="my-2 text-justify text-xl text-slate-500">
                  <FormattedMessage id="about.social.responsibility.and.sustainability.description" />
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  <FormattedMessage id="about.final" />
                </div>
                <div className="my-2 text-justify text-xl text-slate-500">
                  <FormattedMessage id="about.final.description" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-white bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: "0 32px" }} className="z-40 flex w-full items-center justify-start">
          <Row style={{ padding: "32px 0", width: "100%" }} align="middle" gutter={[24, 24]}>
            <Col sm={12} xs={24}>
              <Row align="middle" justify="center">
                <Link href="https://tpcgroup.net.vn" target="_blank">
                  <Image
                    preview={false}
                    width={240}
                    alt="TPC-logo"
                    src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/logo-tpc-8.jpg?alt=media&token=de415049-e698-457d-9f2c-7a8778df04d3"
                  />
                </Link>
              </Row>
            </Col>
            <Col sm={12} xs={24}>
              <div className="text-justify text-base font-medium">
                <FormattedMessage id="about.tpc.description.1" />
                {` `}
                <Link href="https://tpcgroup.net.vn" target="_blank">
                  TPCONS
                </Link>
                {` `}
                {``}
                <FormattedMessage id="about.tpc.description.2" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <div style={{ maxWidth: 1280, padding: "0 32px" }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # <FormattedMessage id="about.people" />
          </div>
          <Divider />
          <div className="my-8 flex items-center justify-center text-center text-4xl font-semibold">
            <div className="sm:w-full md:w-6/12">
              5+ <FormattedMessage id="about.people.year.of.experience" />
            </div>
          </div>
          <div className="my-8 flex items-center justify-center text-justify text-lg font-semibold">
            <div className="sm:w-full md:w-10/12">
              <FormattedMessage id="about.people.description" />
            </div>
          </div>
          <div className="my-8">
            <Row gutter={[24, 24]} justify="center">
              {
                // @ts-ignore
                !!locale  &&  profiles?.[locale]?.map((profile: Profile) => {
                  return (
                    <Col key={profile.name} sm={7} xs={24}>
                      <MemberCard profile={profile} />
                    </Col>
                  )
                })
              }
            </Row>
          </div>
        </section>
      </div>
      <div style={{ maxWidth: 1280, padding: "0 32px" }} className="w-full ">
        <section className="pb-16 pt-2">
          <div id="video" ref={ref} style={{ height: height, width: "100%" }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jy1Q-VlgNdA?si=mSX6LkQBejhZPm8A&mute=1&loop=1&autoplay=1&amp;controls=0&amp;rel=0&amp;disablekb=0&amp;modestbranding=1&amp;showinfo=0&amp;preload=true&amp;playsinline=1&amp;iv_load_policy=3&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcaztus.vn&amp;widgetid=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-mabel bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: "0 32px" }} className="my-16 w-full">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # <FormattedMessage id="about.learn.more" />
          </div>
          <Divider />
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {blogs.map((blog) => {
              return (
                <div className="w-full" key={blog.id}>
                  <Post key={blog.id} post={blog} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
