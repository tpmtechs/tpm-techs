import { Button, Col, Image, Row } from "antd"
import Link from "next/link"
import { FC } from "react"
import { FormattedMessage, useIntl } from "react-intl";
import "./index.css"
import urlcat from "urlcat"
import LocaleSelect from "components/LocaleSelect";
import MenuDrawer from "components/MenuDrawer"
import Path from "config/path"


const Header: FC = () => {
  const { locale } = useIntl()

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-center bg-white">
      <div className="header-container w-full ">
        <Row style={{ width: "100%" }} justify="space-between" align="middle">
          <Col lg={4} md={3} xs={10}>
            <Link href={urlcat(Path.HOME, {locale})}>
              <Image
                preview={false}
                width={60}
                alt="tpm-techs-logo"
                src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
              />
            </Link>
          </Col>
          <Col lg={20} md={21} xs={0}>
            <Row gutter={[48, 48]} align="middle" justify="end">
              <Col>
                <Link className="text-primary" href={urlcat(Path.HOME, {locale})}>
                  <FormattedMessage id="common.home" />
                </Link>
              </Col>
              <Col>
                <Link className="text-primary" href={urlcat(Path.ABOUT, {locale})}>
                  <FormattedMessage id="common.about" />
                </Link>
              </Col>
              <Col>
                <Link className="text-primary" href={urlcat(Path.SERVICES, {locale})}>
                  <FormattedMessage id="common.services" />
                </Link>
              </Col>
              <Col>
                <Link className="text-primary" href={urlcat(Path.PROJECTS, {locale})}>
                  <FormattedMessage id="common.projects" />
                </Link>
              </Col>
              <Col>
                <Button type="primary" size="large" href={urlcat(Path.CONTACT, {locale})}>
                  <FormattedMessage id="common.contact.us" />
                </Button>
              </Col>
              <Col>
                <LocaleSelect  />
              </Col>
            </Row>
          </Col>
          <Col lg={0} md={0} xs={10}>
            <Row justify="end" align="middle">
              <MenuDrawer />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
