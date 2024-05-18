"use client"

import { useEffect, useRef, useState } from "react"
import "./index.css"
import { Image, Spin, Typography } from "antd"
import { useIntl } from "react-intl"
import { Col, Row } from 'antd';
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

  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = () => {
    if (blog?.category?.title === "Download" && windowSize.width > 768) {
      return (
          <div>
            <div className="flex w-full flex-col items-center justify-center ">
            <section
              style={{ width: "100vw" }}
              className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Untitled%20design%20products.gif?alt=media&token=b2315cfb-7a7d-44cd-bfe1-f2bb3e9140ce')] bg-cover bg-center bg-no-repeat"
              >
              <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <div className="text-2xl italic text-white">TPM Technology</div>
                    <div className="text-5xl font-extrabold text-white">{blog?.description}</div>
                  </Col>
                </Row>
              </div>
              <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
            </section>  
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <Image 
              style={{ height: "50vh", width: "30vw", objectFit: "cover", marginTop: "5%" }} 
              preview={true} 
              className="w-full rounded-xl" 
              alt="image" 
              src={blog?.image} 
            />

            <div>
              <Paragraph style={{ fontWeight: 'bold', fontSize: '25px', marginTop: "25px" }}>{blog?.description}</Paragraph>
              {blog?.contents?.map((content: any) => { 
                if (content.type === "title") 
                  return (
                    <div key="content" className={content.type}>
                      <Paragraph style={{ fontSize: '12px' }}>
                        {content.content}
                      </Paragraph>
                    </div>
                  )
              })}
            </div>
          </div>

          {blog?.contents?.map((content: any) => { 
             if (content.type === "image") {
              return (
                <div key="content" className={content.type}>
                  <div className="flex items-center justify-center py-2">
                    <Image style={{ height: "100vh", width: "100vw",  objectFit: "contain"}} preview={false} className="w-full rounded-xl" alt="image" src={content?.content} />
                  </div>
                </div>
              )
            }
            
          })}
          {/* {blog.driveLink && (
            <Paragraph>
              <a href={blog.driveLink} target="_blank" rel="noopener noreferrer">Download from Google Drive</a>
            </Paragraph>
          )}
          {blog?.documentLink && (
            <Paragraph>
              <a href={blog.documentLink} target="_blank" rel="noopener noreferrer">View Document</a>
            </Paragraph>
          )} */}
          
        </div>
      )
    }else if (blog?.category?.title === "Download" && windowSize.width < 768) {
      return (
        <div>
        <div className="flex w-full flex-col items-center justify-center ">
          <section
            style={{ width: "100vw" }}
            className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Untitled%20design%20products.gif?alt=media&token=b2315cfb-7a7d-44cd-bfe1-f2bb3e9140ce')] bg-cover bg-center bg-no-repeat"
          >
            <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
              <Row gutter={[24, 24]}>
                <Col span={24}>
                  <div className="text-2xl italic text-white">TPM Technology</div>
                  <div className="text-sm font-extrabold text-white">{blog?.description}</div>
                </Col>
              </Row>
            </div>
            <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
          </section>  
        </div>
    
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5%' }}>
          <Image 
            style={{ height: "50vh", width: "100%", objectFit: "cover" }} 
            preview={true} 
            className="rounded-xl" 
            alt="image" 
            src={blog?.image} 
          />
          <div style={{ marginTop: "25px" }}>
            <Paragraph style={{ fontWeight: 'bold', fontSize: '25px' }}>{blog?.description}</Paragraph>
            {blog?.contents?.map((content: any) => { 
              if (content.type === "title") 
                return (
                  <div key="content" className={content.type}>
                    <Paragraph style={{ fontSize: '12px' }}>
                      {content.content}
                    </Paragraph>
                  </div>
                )
            })}

            {blog?.contents?.map((content: any) => { 
              if (content.type === "list") 
                return (
                  <div key="content" className={content.type}>
                    <Paragraph style={{ fontSize: '12px', textAlign: 'center' }}>
                      {content.content}
                    </Paragraph>
                  </div>
                )
            })}
          </div>
        </div>
          {/* {blog.driveLink && (
            <Paragraph>
              <a href={blog.driveLink} target="_blank" rel="noopener noreferrer">Download from Google Drive</a>
            </Paragraph>
          )}
          {blog?.documentLink && (
            <Paragraph>
              <a href={blog.documentLink} target="_blank" rel="noopener noreferrer">View Document</a>
            </Paragraph>
          )} */}
          
        </div>
      )
    } else {
      return (
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
                </div>
              )
            } else if (content.type === "video") {
              return (
                <div key="content">
                  <div id="video" style={{ height: height, width: "100%" }}>
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
            }
            return (
              <div key="content" className={content.type}>
                <Paragraph className="text-justify">{content.content}</Paragraph>
              </div>
            )
          })}
        </article>
      )
    }
  }

  return (
    <Spin spinning={loading}>
      <Typography>
        <div className="flex w-full flex-col items-center justify-center antialiased" style={{ marginTop: "66px" }}>
          <div
            ref={ref}
            style={{ maxWidth: 1280, padding: "0 32px" }}
            className="mx-auto flex w-full max-w-screen-xl flex-col justify-between px-4 "
          >
            {renderContent()}
          </div>
        </div>
      </Typography>
    </Spin>
  )
}

export default BlogDetail