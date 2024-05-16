"use client"

import { useEffect, useRef, useState } from "react"
import "./index.css"
import { Image, Spin, Typography } from "antd"
import { useIntl } from "react-intl"
const { Title, Paragraph } = Typography

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const { locale } = useIntl()
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>()
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(ref?.current?.clientWidth / 1.778)
  }, [ref])
  const blog = blogs.find((blog: any) => blog.id.toString() === params.slug)

  useEffect(() => {
    const load = async () => {
      const { blogs, posts, serviceBlogs } = await import(`app/[locale]/blog/blogs/${locale}`)
      setBlogs([...blogs, ...posts, ...serviceBlogs])
      setLoading(false)
    }

    setLoading(true)
    load()
  }, [locale])

  return (
    <Spin spinning={loading}>
      <Typography>
        <div className="flex w-full flex-col items-center justify-center antialiased" style={{ marginTop: "66px" }}>
          <div
            ref={ref}
            style={{ maxWidth: 1280, padding: "0 32px" }}
            className="mx-auto flex w-full max-w-screen-xl flex-col justify-between px-4 "
          >
            <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto my-24 w-full max-w-2xl">
              
              <figure>{blog?.image && <img className="w-full rounded-xl" alt="image" src={blog?.image} />}</figure>
              <header className="not-format mb-4 mt-10 lg:mb-6">
                <Title>{blog?.title}</Title>
              </header>
              <Paragraph>{blog?.description}</Paragraph>

              {blog?.contents?.map((content: any) => {
                if (content.type === "list") {
                  return (
                    <div key="content" className="paragraph">
                      <ul>
                        {content.items.map((item: string) => (
                          <li key="list-item">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                } else if (content.type === "title") {
                  return (
                    <div key="content" className={content.type}>
                      <Title className="text-justify" level={3}>
                        {content.content}
                      </Title>
                    </div>
                  )
                } else if (content.type === "image") {
                  return (
                    <div key="content" className={content.type}>
                      <div className="flex items-center justify-center py-2">
                        <Image className="w-full rounded-xl" alt="image" src={content?.content} />
                      </div>
                      {/* <img className="w-full rounded-xl" alt="image" src={content?.content} /> */}
                    </div>
                  )
                } else if (content.type === "video") {
                  return (
                    <div key="content">
                      <div id="video"  style={{ height: height, width: "100%" }}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={content.content}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )
                } else if (blog?.category.title === "Download") {
                  return (
                    <div >
                      DOWNLOAD DA Checkin
                    </div>
                  )
                } 
                return (
                  <div key="content" className={content.type}>
                    <Paragraph className="text-justify">{content.content}</Paragraph>
                  </div>
                )
              })}
            </article>
          </div>
        </div>
      </Typography>
    </Spin>
  )
}

export default BlogDetail
