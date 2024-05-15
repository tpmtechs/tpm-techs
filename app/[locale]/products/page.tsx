"use client"

/* eslint-disable @next/next/no-img-element */

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Col, Layout, Menu, Row, theme } from 'antd';
import type { MenuProps } from 'antd';
import { FC, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Post from 'components/Post';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<FormattedMessage id="products.IT.AI" />, '1', <PieChartOutlined />),
  getItem(<FormattedMessage id="products.EtherCat" />, '2', <DesktopOutlined />),
  getItem(<FormattedMessage id="products.file" />, '9', <FileOutlined />,[
    getItem(<span style={{ color: '#fff' }}><FormattedMessage id="products.app" /></span>, '4'),
    getItem(<span style={{ color: '#fff' }}><FormattedMessage id="products.board" /></span>, '5'),
  ]),
];

const Products: FC = () => {

  const intl = useIntl();
  const { formatMessage, locale } = intl;
  const [posts, setPosts] = useState<IBlog[]>([]);
  
  useEffect(() => {
    const load = async () => {
      const data = (await import(`app/[locale]/blog/blogs/${locale}`)).posts;
      setPosts(data);
    }

    load();
  }, [locale]);

  const [selectedContent, setSelectedContent] = useState("");
  const [selectedContent1, setSelectedContent1] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1']);

  const handleMenuClick = (id: string) => {
    setSelectedKeys([id]);
    if (id === "1") {
      setSelectedContent("internet.of.things");
      setSelectedContent1("IT & AI");
    } else if (id === "2") {
      setSelectedContent("clean.energy");
      setSelectedContent1("EtherCat");
    }
    else if (id === "4"){
      setSelectedContent("Applications");
      setSelectedContent1("Applications");
    }
    else if (id === "5"){
      setSelectedContent("Download");
      setSelectedContent1("Software");
    }
  };

  const getContent = () => {
    switch (selectedContent) {
      case "internet.of.things":
        return (
          <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
            <div className="py-12 sm:py-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
                  # {formatMessage({ id: 'projects.category.internet.of.things' })}
                </div> */}
                {/* <Divider /> */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {posts
                    .filter((post) => {
                      return post?.category?.title === formatMessage({ id: 'products.it.ai' })
                    })
                    .map((post) => (
                      <Post key={post?.id} post={post} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "clean.energy":
        return (
          <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
            <div className="py-12 sm:py-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
                  # {formatMessage({ id: 'projects.category.clean.energy' })}
                </div> */}
                {/* <Divider /> */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {posts
                    .filter((post) => {
                      return post?.category?.title === formatMessage({ id: 'products.ethercat' })
                    })
                    .map((post) => (
                      <Post key={post?.id} post={post} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
        case "Download":
          return (
            <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
              <div className="py-12 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  {/* <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
                    # {formatMessage({ id: 'projects.category.internet.of.things' })}
                  </div> */}
                  {/* <Divider /> */}
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts
                      .filter((post) => {
                        return post?.category?.title === formatMessage({ id: 'products.download' })
                      })
                      .map((post) => (
                        <div key={post?.id}>
                          <Post post={post} />
                          <div className="mt-4">  
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
          case "Applications":
          return (
            <div style={{ maxWidth: 1280, padding: '0 32px' }} className="w-full">
              <div className="py-12 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  {/* <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
                    # {formatMessage({ id: 'projects.category.internet.of.things' })}
                  </div> */}
                  {/* <Divider /> */}
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts
                      .filter((post) => {
                        return post?.category?.title === formatMessage({ id: 'products.applications' })
                      })
                      .map((post) => (
                        <div key={post?.id}>
                          <Post post={post} />
                          <div className="mt-4">  
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
      default:
        return <div>{selectedContent}</div>;
    }
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  

  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
        <section
          style={{ width: "100vw" }}
          className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Untitled%20design%20products.gif?alt=media&token=b2315cfb-7a7d-44cd-bfe1-f2bb3e9140ce')] bg-cover bg-center bg-no-repeat"
          >
          <div style={{ maxWidth: 1280, padding: '0 32px', height: 600 }} className="z-40 flex w-full items-center justify-start">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <div className="text-2xl italic text-white">TPM Technology</div>
                <div className="text-5xl font-extrabold text-white">{formatMessage({id: 'common.products' })}</div>
              </Col>
            </Row>
          </div>
          <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
        </section>  
      </div>
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({ key }) => handleMenuClick(key)} />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer, textAlign: 'center' }}>
              <FormattedMessage id="products.header" />
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{selectedContent1}</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {getContent()}
            

              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>  
  )
}

export default Products;
