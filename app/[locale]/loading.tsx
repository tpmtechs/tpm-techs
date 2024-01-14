"use client";

import { Col, Image, Row, Spin } from "antd"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="loading bg-matel h-screen w-screen">
      <Row style={{ height: "100vh", width: "100vw" }} align="middle" justify="center">
        <Col>
          <Row justify="center">
            <Image
              preview={false}
              width={120}
              alt="tpm-techs-logo"
              src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
            />
          </Row>
          <Row justify="center">
            <Spin size="large" spinning={true} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}
