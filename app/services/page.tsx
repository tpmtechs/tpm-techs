import { CheckOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row } from "antd"
import { type FC } from "react"
import ServiceCard from "components/ServiceCard"


const services = [
  {
    title: "Iot trong chuỗi cung ứng hàng hóa",
    description:
      `Smart Logistic ngày càng phát triển mạnh mẽ trong thời đại công nghệ 4.0
để đem tới sự ưu việt trong việc quản lý chuỗi cung ứng hậu cần. Trong đó, công
nghệ IoT đóng vai trò vô cùng quan trọng để vận hành trơn tru. Tuy nhiên, không
phải ai cũng biết về công nghệ này. Chính vì vậy, bài viết bên dưới sẽ giúp bạn
hiểu thêm về nó!`,
    image: "https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-1.jpeg",
  },
  {
    title: "IoT trong chăm sóc sức khỏe",
    description:
      `Thiết bị chăm sóc sức khỏe thông minh là một trong những ứng dụng IoT
trong y tế phổ biến nhất. Hãy cùng tìm hiểu về cách Internet of Things thay đổi
lĩnh vực y tế - chăm sóc sức khỏe trong bài viết này.`,
    image: "https://www.elcom.com.vn/storage/uploads/images/6j4tXzXzopIsAmfhIB2gCKfFK91PWUOubJdTwVRk.jpg",
  },
  {
    title: "IoT trong nhà thông minh",
    description:
      `Giống như mạng Internet trước đây, công nghệ IoT đã tạo nên một “làn
sóng” trong mọi khía cạnh của cuộc sống, bao gồm sự ra đời của nhà thông minh.`,
    image: "https://images.cenhomes.vn/2019/03/nha-thong-minh.jpg",
  },
  {
    title: "IoT trong công nghiệp sản xuất",
    description:
      `IoT trong sản xuất (Internet of Things in Manufacturing) là một hệ thống
mạng lưới các thiết bị vật lý kết nối với nhau và với Internet nhằm tạo ra một môi
trường sản xuất thông minh, tự động hóa và tối ưu hóa quy trình sản xuất.`,
    image: "https://vti-solutions.vn/wp-content/uploads/2023/05/rpa-concept-with-blurry-hand-touching-screen-2048x1366.jpg",
  },
  {
    title: "IoT trong bán lẻ",
    description:
      `Các nhà bán lẻ hiện đại đều đang ứng dụng Internet of Things – IoT để
hoàn thiện hoạt động tại cửa hàng. Nhằm mục đích cải thiện trải nghiệm và thúc
đẩy giao dịch mua sắm của khách hàng.`,
    image: "https://digital.fpt.com/wp-content/uploads/2019/12/shutterstock_1714734415-1-scaled.jpg",
  },
  {
    title: "Iot trong nông nghiệp",
    description:
      `Công nghệ IoT trong nông nghiệp không chỉ giúp tối ưu hóa chi phí sản
xuất nông nghiệp mà còn giúp thúc đẩy thương mại và tăng sự an toàn cho cả
người sản xuất và người sử dụng sản phẩm`,
    image: "https://niptech.vn/images/ckeditor/images/iot%201.jpg",
  },
]

const Services: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/IOT7.jpg?alt=media&token=0bc8fa7c-6a68-4d63-9ad4-e5b40e19b683')] bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl text-white">
                {`Xây dựng tương lại, Khôi phục quá khứ`}
              </div>
              <div className="text-5xl font-extrabold text-white">
                {`Cung cấp các giải pháp sáng tạo và bền vững`}
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={[24, 24]} align="middle" justify="start">
                <Col>
                  <Button type="primary" size="large" href="/contact">
                    {`Liên hệ với chúng tôi`}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-60" />
      </section>

      <div style={{ maxWidth: 1280 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # {`Dịch vụ`}
          </div>
          <Divider />
          <div className="my-1 flex items-center justify-center text-center text-lg font-semibold text-primary">
            <div className="w-6/12 ">{`Dịch vụ tốt nhất!`}</div>
          </div>
          <div className="my-1 flex items-center justify-center text-center text-4xl font-semibold">
            <div className="w-8/12 font-semibold">{`
              Cung cấp dịch vụ hiệu suất cao cho nhiều ngành công nghiệp và công nghệ!
            `}</div>
          </div>

          <div className="my-8">
            <Row gutter={[48, 48]} align="middle" justify="center">
              {services.map((service: { title: string; description: string; image: string }) => {
                return (
                  <Col key={service.title} span={8}>
                    <ServiceCard title={service.title} description={service.description} image={service.image} />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="relative flex w-full items-center justify-center bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-2.jpg?alt=media&token=1eb8d70f-c57b-4350-ab09-bb161e9262fd')] bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row style={{ width: "100%" }} gutter={[48, 48]} align="middle">
            <Col span={12}>
              <div className="text-left text-lg font-semibold text-gamboge">
                {`Xây dựng tương lại, Khôi phục quá khứ`}
              </div>
              <div className="text-left text-4xl font-semibold text-white">
                {`Sản phẩm đáng tin cây, hiệu quả và kỹ thuật tiên tiến!`}
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Tối Ưu Hóa Hiệu Suất Với IoT`}</div>
                    <div>
                      {`Hệ thống thông minh của chúng tôi không chỉ kiểm soát chất lượng mà còn tối
ưu hóa hiệu suất, giúp doanh nghiệp của bạn tiết kiệm chi phí và thời gian một
cách đáng kể.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Kiểm Soát Chất Lượng Hiệu Quả`}</div>
                    <div>
                      {`Chúng tôi nâng cao giá trị sản phẩm của mình bằng cách kiểm soát chất lượng một cách hiệu quả.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Đảm Bảo Sự Hài Lòng 100%`}</div>
                    <div>
                      {`Một cách tiếp cận tích hợp để cung cấp các dịch vụ kỹ thuật cho phép khách hàng của chúng tôi được hưởng lợi từ thương mại và hậu cần.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`An Toàn và Bảo Mật Vững Chắc`}</div>
                    <div>
                      {`Với cam kết đặt sự an toàn và bảo mật lên hàng đầu, sản phẩm IoT của chúng
tôi giúp bảo vệ dữ liệu quan trọng của bạn, đồng thời giảm thiểu rủi ro liên quan
đến an ninh mạng.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-white">
                <Row>
                  <Col span={2}>
                    <CheckOutlined className="text-2xl" />
                  </Col>
                  <Col span={22}>
                    <div className="mb-4 text-xl font-semibold">{`Trải Nghiệm Người Dùng Xuất Sắc`}</div>
                    <div>
                      {`Hệ thống của chúng tôi không chỉ đảm bảo chất lượng sản phẩm mà còn tạo ra
trải nghiệm người dùng xuất sắc, giúp nâng cao sự hài lòng và tạo ra một sự kết
nối mạnh mẽ giữa doanh nghiệp và khách hàng.`}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-70" />
      </section>
    </div>
  )
}

export default Services
