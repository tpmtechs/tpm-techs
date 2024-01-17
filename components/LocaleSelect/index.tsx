'use client'

import { DownOutlined } from "@ant-design/icons"
import { Avatar, Col, Dropdown, MenuProps, Row, Space } from "antd"
import { usePathname, useRouter } from 'next/navigation'
import { FC } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import { setLocale } from "utils/utils"

const getCurrentPath = (path: string, newLocale: string) => {
  const pathArr = path.split('/');
  pathArr.splice(1, 1, newLocale)
  return pathArr.join('/');
}

const LocaleSelect: FC = () => {
  const { locale } = useIntl()
  const router = useRouter();
  const pathname = usePathname()
 
  const items = [
  {
    key: "vi",
    label: (
      <Row align="middle" justify="start" gutter={[12, 12]} onClick={() => {
        setLocale('vi')
        router.push(getCurrentPath(pathname, 'vi'))
      }}>
        <Col>
          <Avatar
            size="small"
            src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/vi-logo.png?alt=media&token=0ad353ba-258b-4906-86bc-58de3b130b9a"
          />
        </Col>
        <Col>
          <FormattedMessage id="common.vietnamese" />
        </Col>
      </Row>
    ),
  },
  {
    key: "en",
    label: (
      <Row align="middle" justify="start" gutter={[12, 12]} onClick={() => {
        setLocale('en')
        router.push(getCurrentPath(pathname, 'en'))
      }}>
        <Col>
          <Avatar
            size="small"
            src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/en-logo.png?alt=media&token=cdc7b80a-e000-4927-a8ea-30791017cd2a"
          />
        </Col>
        <Col>
          <FormattedMessage id="common.english" />
        </Col>
      </Row>
    ),
  },
  {
    key: "ja",
    label: (
      <Row align="middle" justify="start" gutter={[12, 12]} onClick={() => {
        setLocale('ja')
        router.push(getCurrentPath(pathname, 'ja'))
      }}>
        <Col>
          <Avatar
            size="small"
            src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/ja-logo.png?alt=media&token=0bc2eaf2-3cd0-40c8-8bc7-29824876699b"
          />
        </Col>
        <Col>
          <FormattedMessage id="common.japanese" />
        </Col>
      </Row>
    ),
  },
]

  const selectedLocale = items.find((item: any) => item?.key === locale)

  return (
    <Dropdown menu={{ items }} trigger={["hover"]}>
      <div>
        <Space>
          {selectedLocale?.label}
          <DownOutlined />
        </Space>
      </div>
    </Dropdown>
  )
}

export default LocaleSelect
