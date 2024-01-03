import { type FC } from "react"
import { Col, Row } from "antd"
import Link from "antd/es/typography/Link"
import { posts } from "app/blog/data"

export const Post: FC<{ post: any }> = ({ post }) => {
  return (
    <article key={post?.id} className="flex max-w-xl flex-col items-start">
      <div className="flex items-center gap-x-4 text-xs">
        {!!post?.date && (
          <time dateTime={post?.datetime} className="text-gray-500">
            {post?.date}
          </time>
        )}

        {!!post?.category && (
          <a
            href={post?.category?.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post?.category?.title}
          </a>
        )}
      </div>
      <div className="group relative">
        <img
          className="mt-4 w-full rounded-xl object-cover"
          style={{ height: 200, width: 380 }}
          src={post?.image}
          alt="post-image"
        />
        <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/blog/${post?.id}`}>
            <span className="absolute inset-0" />
            <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
              {post?.title}
            </div>
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post?.description}</p>
      </div>
      {/* <div className="relative mt-8 flex items-center gap-x-4">
        <img src={post?.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={post?.author.href}>
              <span className="absolute inset-0" />
              {post?.author.name}
            </a>
          </p>
          <p className="text-gray-600">{post?.author.role}</p>
        </div>
      </div> */}
    </article>
  )
}

const Projects: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT8.jpg?alt=media&token=3d91aee2-0004-4618-a5b8-eec38b326c64')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl text-white">TPM Technology</div>
              <div className="text-5xl font-extrabold text-white">Our Projects</div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
      </section>

      <div style={{ maxWidth: 1280 }} className="w-full">
        <div className="py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
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
