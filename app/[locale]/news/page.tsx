"use client"

/* eslint-disable @next/next/no-img-element */
import { Button, Carousel, Col, Divider, Row, Typography } from "antd"
import { FC, useEffect, useState, useRef } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import urlcat from "urlcat"
import Path from "config/path"
import { BlogType } from "app/[locale]/blog/data"
import Post from "components/Post"
import React from 'react';


const news: FC= () => {

  const intl = useIntl();
  const { formatMessage ,locale} = intl
  const [posts, setPosts] = useState<IBlog[]>([]);

  const [blogs, setBlogs] = useState<IBlog[]>([])

  const ref = useRef<any>([])
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(ref?.current?.clientWidth / 1.778)
  }, [ref])
  

  useEffect(() => {
    const load = async () => {
      const data = (await import(`app/[locale]/blog/blogs/${locale}`)).serviceBlogs.filter((blog: IBlog) => {
        return blog.type === BlogType.READ_MORE
      })
      setBlogs(data)
    }

    load()
  }, [locale])

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Untitled%20design.gif?alt=media&token=f7b173cb-626a-4149-a95e-6c24b2530f46')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl italic text-white">TPM Technology</div>
              <div className="text-5xl font-extrabold text-white">{formatMessage({id: 'common.news' })}</div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
      </section>

      <div style={{ maxWidth: 1280, padding: "0 32px" }} className="w-full">
        {/*................................... Bảng tin........................................ */}
        <section className="my-16">
              <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
                # <FormattedMessage id="home.strategic.news" />
              </div>
              <Divider />
              <div className="my-8 flex flex-wrap justify-center">
                <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4"> {/* Thêm class và style để điều chỉnh vị trí */}
                  <time className="text-gray-500 block sm:inline"> {/* Sử dụng block và inline để hiển thị thẻ time và nội dung ngang nhau */}
                    Mar 16, 2024
                  </time>
                </div>
                  
                <div className="sm:w-10/12 md:w-6/12 text-justify">
                  {formatMessage({ id: 'home.strategic.partnership.campuchia' }).split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  {/* <FormattedMessage id="home.strategic.partnership.campuchia" /> */}
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
          </div>
          <section
              style={{ width: "100vw" }}
              className="flex w-full items-center justify-center bg-mabel bg-cover bg-no-repeat"
            >
              <div style={{ maxWidth: 1280, padding: "0 32px" }} className="my-16 w-full">
                {/* <Divider /> */}
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

            <div style={{ maxWidth: 1280, padding: "0 32px" }} className="w-full ">
              <section className="pb-16 pt-2">
                <div id="video"  ref={ref} style={{ height: height, width: "100%" }}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PoBu6NAOfgE?si=fEwJwlfD-mkaXmCG&amp;controls=0&amp;rel=0&amp;disablekb=0&amp;modestbranding=1&amp;showinfo=0&amp;preload=true&amp;playsinline=1&amp;iv_load_policy=3&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcaztus.vn&amp;widgetid=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </section>
            </div>
      </div>
  )
}

export default news
