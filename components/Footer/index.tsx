'use client'

import { FacebookFilled, GithubFilled, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons"
import { Button, Col, Divider, Image, Input, Row, Select } from "antd"
import dayjs from "dayjs"
import Link from "next/link"
import { type FC ,useState } from "react"
import { FormattedMessage, useIntl } from "react-intl";
import "./index.css"
import urlcat from "urlcat"
import Map from "components/Map"
import Path from "config/path"
import LocaleSelect from "components/LocaleSelect"

enum FormType {
  NAME = "name",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
  FIELD = "field",
}

interface IFormData {
  name?: string
  phoneNumber?: string
  email?: string
  field?: string
}

const Footer: FC = () => {
  const { formatMessage, locale } = useIntl()
  const [values, setValues] = useState<IFormData>({
    name: formatMessage({id: "footer.support.name"}),
    phoneNumber: formatMessage({id: "footer.support.email"}),
    email: formatMessage({id: "footer.support.phone.number"}),
    field: formatMessage({id: "footer.support.field"}),
  })

  const body = encodeURIComponent(
    `${formatMessage({id: "footer.support.name"})}: ` +
      `${values?.name}` +
      `\n${formatMessage({id: "footer.support.email"})}: ` +
      values?.email +
      `\n${formatMessage({id: "footer.support.phone.number"})}: ` +
      `${values?.phoneNumber}` +
      `\n${formatMessage({id: "footer.support.content"})}: ${formatMessage({id: "footer.support.message"})} ${values?.field}`
  )

  const mailtoHref = `mailto:tpm.techs@gmail.com?subject=[TPM Technology] - ${formatMessage({id: "footer.support.subject"})}&body=${body}`

  const handleChange = (type: string, e: any) => {
    setValues({
      ...values,
      [type]: e?.target?.value || "",
    })
  }

  const handleSelect = (value: string) => {
    setValues({
      ...values,
      field: value,
    })
  }

  return (
    <div className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-primary-700 to-primary-800 pb-6 text-white">
      <section
        style={{ width: "100vw" }}
        className="relative flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Untitled%20design%20TPM%203.gif?alt=media&token=838240e8-b463-45ab-a015-fe007c359403')] bg-cover bg-center bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, padding: '0 32px', height: 400}} className="z-40 flex w-full items-center justify-start">
          <div className="w-full">
            <Row align="middle" justify="center">
              <Col sm={8} xs={24}>
                <Row gutter={[16, 16]} justify="center">
                  <Col className="text-center font-semibold">
                    <div className="text-4xl text-white"><FormattedMessage id="footer.support.title" /></div>
                    <div className="text-base text-white"><FormattedMessage id="footer.support.subtitle" /></div>
                  </Col>
                  <Col span={24}>
                    <Input onChange={(e) => handleChange( FormType.NAME , e) } size="large" placeholder={formatMessage({id: "footer.support.name"})} />
                  </Col>
                  <Col span={24}>
                    <Input onChange={(e) => handleChange( FormType.PHONE_NUMBER , e) } size="large" placeholder={formatMessage({id: "footer.support.phone.number"})} />
                  </Col>
                  <Col span={24}>
                    <Input onChange={(e) => handleChange( FormType.EMAIL , e) } size="large" placeholder={formatMessage({id: "footer.support.email"})} />
                  </Col>
                  <Col span={24}>
                    <Select
                      onChange={handleSelect}
                      style={{ width: "100%" }}
                      size="large"
                      placeholder={formatMessage({id: "footer.support.field"})}
                      options={[
                        { value: formatMessage({id: "footer.support.field.internet.of.things"}), label:  formatMessage({id: "footer.support.field.internet.of.things"}) },
                        { value: formatMessage({id: "footer.support.field.recycled.energy"}), label:  formatMessage({id: "footer.support.field.recycled.energy"}) },
                        { value: formatMessage({id: "footer.support.field.other"}), label:  formatMessage({id: "footer.support.field.other"}) },
                      ]}
                    />
                  </Col>
                  <Col span={24}>
                    <Button href={mailtoHref} style={{ width: "100%" }} size="large" type="primary" target="_blank">
                      <FormattedMessage id="footer.support.submit" />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ height: 400 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-25" />
      </section>

      <div className="footer-container w-full">
        <div className="pt-12">
          <Row gutter={[48, 48]} justify="space-between" align="middle">
            <Col sm={7} xs={24}>
              <div className="flex items-center justify-center rounded-xl bg-white">
                <Image
                  preview={false}
                  width={120}
                  alt="tpm-techs-logo"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
                />
              </div>
              <div className="mt-2 text-center">“<FormattedMessage id="common.slogan" />”</div>
            </Col>
            <Col sm={6} xs={12}>
              <Row gutter={[12, 12]}>
                <Col span={24}><FormattedMessage id="common.address" />: <FormattedMessage id="common.address.detail" /></Col>
                <Col span={24}><FormattedMessage id="common.email" />: <FormattedMessage id="common.email.detail" /></Col>
                <Col span={24}><FormattedMessage id="common.hotline" />: <FormattedMessage id="common.hotline.detail" /></Col>
                <Col span={24}><LocaleSelect /></Col>
              </Row>
            </Col>
            <Col sm={3} xs={12}>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <Link className="text-primary" href={urlcat(Path.HOME, {locale})}>
                  <FormattedMessage id="common.home" />
                </Link>
                </Col>
                <Col span={24}>
                  <Link className="text-primary" href={urlcat(Path.ABOUT, {locale})}>
                  <FormattedMessage id="common.about" />
                </Link>
                </Col>
                <Col span={24}>
                  <Link className="text-primary" href={urlcat(Path.SERVICES, {locale})}>
                  <FormattedMessage id="common.services" />
                </Link>
                </Col>
                <Col span={24}>
                  <Link className="text-primary" href={urlcat(Path.PROJECTS, {locale})}>
                  <FormattedMessage id="common.projects" />
                </Link>
                </Col>
                
                <Col span={24}>
                  <Link className="text-primary" href={urlcat(Path.CONTACT, {locale})}>
                    <FormattedMessage id="common.contact.us" />
                    </Link>
                </Col>

                <Col span={24}>
                  <Link className="text-primary" href={urlcat(Path.NEWS, {locale})}>
                  <FormattedMessage id="common.news" />
                </Link>
                </Col>
                
                <Col span={24}>
                  <Link className="text-primary" href={urlcat(Path.PRODUCTS, {locale})}>
                  <FormattedMessage id="common.products" />
                </Link>
                </Col>

              </Row>
            </Col>
            <Col sm={8} xs={24}>
              <Map
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "12px",
                }}
              />
            </Col>
          </Row>
        </div>
        <Divider style={{ borderColor: "#3172A9" }} />
        <div>
          <Row justify="space-between" align="middle" gutter={[12, 12]}>
            <Col sm={12} xs={24}>
              <Row align="middle" justify={{ xs: 'center', sm: 'start' }}>&#169; {dayjs().year()} TPM Technology. <FormattedMessage id="common.all.rights.reserved" /></Row>
            </Col>
            <Col sm={12} xs={24}>
              <Row gutter={[12, 12]} align="middle" justify={{ xs: 'center', sm: 'end' }}>
                <Col>
                  <Button type="link" href="#">
                    <LinkedinFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
                <Col>
                  <Button type="link" href="#">
                    <TwitterSquareFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
                <Col>
                  <Button type="link" href="https://www.facebook.com/profile.php?id=61559082667204">
                    <FacebookFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
                <Col>
                  <Button type="link" href="#">
                    <GithubFilled style={{ fontSize: 28 }} />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Footer
