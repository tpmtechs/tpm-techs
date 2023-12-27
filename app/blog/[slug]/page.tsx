"use client"

import { blogs } from "../data"
import "./index.css"
import { Typography } from "antd"
const { Title, Paragraph } = Typography

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const blog = blogs.find((blog: any) => blog.id.toString() === params.slug)

  if (!blog)
    return (
      <div className="flex w-full flex-col items-center justify-center antialiased" style={{ marginTop: "66px" }}>
        <div style={{ maxWidth: 1280 }} className="mx-auto flex w-full max-w-screen-xl flex-col justify-between px-4 ">
          No data
        </div>
      </div>
    )

  return (
    <Typography>
      <div className="flex w-full flex-col items-center justify-center antialiased" style={{ marginTop: "66px" }}>
        <div style={{ maxWidth: 1280 }} className="mx-auto flex w-full max-w-screen-xl flex-col justify-between px-4 ">
          <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto my-24 w-full max-w-2xl">
            <figure>
              <img className="w-full rounded-xl" alt="image" src={blog?.image} />
            </figure>
            <header className="not-format mb-4 mt-10 lg:mb-6">
              <Title>{blog?.title}</Title>
            </header>
            <Paragraph>{blog.description}</Paragraph>

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
                    <Title level={3}>{content.content}</Title>
                  </div>
                )
              }
              return (
                <div key="content" className={content.type}>
                  <Paragraph>{content.content}</Paragraph>
                </div>
              )
            })}
          </article>
        </div>
      </div>
    </Typography>
  )
}

export default BlogDetail
