/* eslint-disable @next/next/no-img-element */
import Link from "antd/es/typography/Link"
import { type FC } from "react"
import { useIntl } from "react-intl"
import urlcat from "urlcat"
import Path from "config/path"
import { AndroidOutlined, AppleOutlined, DownloadOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from "antd"
import { FormattedMessage } from "react-intl"
const Post: FC<{ post: any }> = ({ post }) => {
  const { locale } = useIntl();
  const href = urlcat(Path.BLOG_DETAIL, {
    locale,
    id: post.id,
  })

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
          alt="post"
        />
        <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={href}>
            <span className="absolute inset-0" />
            <div style={{ color: "#3172A9" }} className="text-xl font-semibold">
              {post?.title}
            </div>
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post?.description}</p>
        {post?.driveLink && (
          <div className="mt-4">
            <a href={post.driveLink} target="_blank" rel="noopener noreferrer" >
              <Button icon={<DownloadOutlined />} type="primary" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff', color: '#fff' }}>
                <FormattedMessage id="products.icon.download" />
              </Button>
            </a>
            <a href={post.documentLink} target="_blank" rel="noopener noreferrer">
              <Button icon={<EditOutlined />} type="primary" style={{ backgroundColor: '#85a5ff', borderColor: '#85a5ff', color: '#fff', marginLeft: '15px' }}>
                <FormattedMessage id="products.icon.document" />
              </Button>
            </a>
          </div>
        )}
        {post?.android && (
          <div className="mt-4">
            <a href={post.android} target="_blank" rel="noopener noreferrer" >
              <Button icon={<AndroidOutlined />} type="primary" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff', color: '#fff' }}>
                <FormattedMessage id="products.icon.android" />
              </Button>
            </a>
            <a href={post.ios} target="_blank" rel="noopener noreferrer">
              <Button icon={<AppleOutlined />} type="primary" style={{ backgroundColor: '#000000', borderColor: '#000000', color: '#fff', marginLeft: '15px' }}>
              <FormattedMessage id="products.icon.appstore" />
              </Button>
            </a>
            <a href={post.apk} target="_blank" rel="noopener noreferrer">
              <Button icon={<EditOutlined />} type="primary" style={{ backgroundColor: '#85a5ff', borderColor: '#85a5ff', color: '#fff', marginLeft: '15px' }}>
              <FormattedMessage id="products.icon.fileapk" />
              </Button>
            </a>
          </div>
        )}
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

export default Post;