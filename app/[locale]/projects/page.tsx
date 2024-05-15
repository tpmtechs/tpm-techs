'use client'

import { Col, Divider, Row } from "antd"
import { type FC, useEffect, useState  } from "react"
import { useIntl } from "react-intl"
import Post from "components/Post"

const Projects: FC= () => {

  const intl = useIntl();
  const { formatMessage ,locale} = intl
  const [posts, setPosts] = useState<IBlog[]>([]);

  useEffect(() => {
    const load = async () => {
        const data = (await import(`app/[locale]/blog/blogs/${locale}`)).posts;
        setPosts(data);
    }

    load()
  },[locale])

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT8.jpg?alt=media&token=3d91aee2-0004-4618-a5b8-eec38b326c64')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl italic text-white">TPM Technology</div>
              <div className="text-5xl font-extrabold text-white">{formatMessage({id: 'common.projects' })}</div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
      </section>

      <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
        <div className="py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
              # {formatMessage({id: 'projects.category.internet.of.things' })}
            </div>
            <Divider />
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts
                .filter((post) => {
                  return post?.category?.title === formatMessage({id: 'projects.category.internet.of.things' })
                })
                .map((post) => (
                  <Post key={post?.id} post={post} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
        <div className="py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
              # {formatMessage({id: 'projects.category.clean.energy' })}
            </div>
            <Divider />
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts
                .filter((post) => {
                  return post?.category?.title === formatMessage({id: 'projects.category.clean.energy' })
                })
                .map((post) => (
                  <Post key={post?.id} post={post} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects




                
              