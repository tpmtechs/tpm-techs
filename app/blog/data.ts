const TYPE = {
  title: "title",
  paragraph: "paragraph",
  list: "list",
  image: "image",
}

interface IContent {
  type: string;
  content?: string;
  items?: string[];
}

interface IBlog {
  id: number;
  title: string;
  description: string;
  contents: IContent[] ;
  image: string;
}

export const blogs: IBlog[] = [
  {
    id: 1,
    title: "HỆ THỐNG TỰ ĐỘNG HÓA VÀ ĐIỀU KHIỂN",
    description:
      "Giải pháp Quản lý Toàn diện của chúng tôi cung cấp các giải pháp phần mềm sáng tạo dành cho hệ thống tòa nhà thương mại và công nghiệp, cung cấp khả năng kiểm soát và giám sát hiệu quả để nâng cao hiệu suất hoạt động của tòa nhà.",
    contents: [
      {
        type: "title",
        content: "Hệ Thống Điều Khiển vào những năm 2020",
      },
      {
        type: "paragraph",
        content: `Hệ thống điều khiển (control systems) đã xuất hiện trong các cơ sở công nghiệp và
        thương mại từ thế kỷ trước, nó bắt đầu trong cuộc cách mạng công nghiệp lần thứ
        ba vào những năm 1950, sau khi kết thúc hai cuộc chiến tranh thế giới. Tuy nhiên,
        với sự gia tăng của các thiết bị kết nối (connected device), phân tích dữ liệu lớn,
        khủng hoảng năng lượng và các vấn đề bền vững về môi trường; hệ thống điều
        khiển và tự động hóa khác đã phát triển mạnh mẽ trong hơn 10 năm qua. Một số
        người gọi đây là kỷ nguyên mới, cuộc cách mạng công nghiệp lần thứ tư, Công
        nghiệp 4.0, hay gần đây hơn là kỷ nguyên của công nghệ Internet Vạn Vật trong
        Công Nghiệp (IOT).`,
      },
      {
        type: "title",
        content: `Bạn đã sẵn sàng thực hiện bước tiếp theo để đạt được năng suất và hiệu quả tốt hơn
        chưa?`,
      },
      {
        type: "paragraph",
        content: `Hãy liên hệ ngay hôm nay để được tư vấn thêm về các giải pháp của TPM
        Technology. Đội ngũ kỹ thuật viên của chúng tôi sẽ hỗ trợ từ lúc bắt đầu dự án đến
        khi kết thúc để đảm bảo hiệu quả lâu dài.`,
      },
    ],
    image:
      "https://images.ctfassets.net/szez98lehkfm/7g2sitSkiFvEKsqCwh2LnY/0d1a0347390c625abdea9fb27d035488/MyIC_Inline_73525",
  },

  {
    id: 2,
    title: "THIẾT BỊ KẾT NỐI",
    description: `TPM Technology có chuyên môn và công nghệ để cung cấp thông tin cảnh
báo quý giá, phân tích dữ liệu và các hệ thống hiệu quả cho dự án của bạn, bất kể
phạm vi của nó. Khám phá cách những thiết bị kết nối của chúng tôi có thể cách
mạng hóa hoạt động của bạn.`,
    contents: [
      {
        type: "paragraph",
        content: `Khi doanh nghiệp của bạn phát triển, năng lực của bạn trong việc thích ứng với các
công nghệ để giúp doanh nghiệp tiếp tục hoạt động cũng sẽ tăng lên. Công nghệ
TPM cung cấp một loạt các dịch vụ để đảm bảo năng lượng của bạn hoạt động
thông minh hơn.`,
      },
      {
        type: "title",
        content: `Làm cho sức mạnh của bạn đi xa hơn cùng với
các thiết bị được kết nối`,
      },
      {
        type: "paragraph",
        content: `Bằng cách sử dụng các công nghệ được kết nối với nhau được gắn vào các thiết bị
của bạn còn được gọi là internet vạn vật (IoT), bạn có thể cắt giảm các hóa đơn của
mình và theo dõi các thay đổi khi chúng xảy ra trong thời gian thực. Từ kiểm soát
độ ẩm và làm mát đến kiểm soát độ ẩm đến giám sát việc sử dụng nước, Công
nghệ TPM xây dựng và điều chỉnh các giải pháp dựa trên yêu cầu của bạn.`,
      },
      {
        type: "paragraph",
        content: `Đội ngũ chuyên gia của chúng tôi mang đến những kiến thức chuyên môn cần thiết
để đưa doanh nghiệp của bạn phát triển trong tương lai đồng thời giảm mức tiêu
thụ. Chúng tôi tích hợp hệ thống của mình vào các thiết bị hiện có của bạn; bạn sẽ
không cần phải lo lắng về việc bắt đầu lại từ đầu và đầu tư số tiền lớn vào cơ sở hạ
tầng mới.`,
      },
      {
        type: "paragraph",
        content: `Chúng tôi cung cấp:`,
      },
      {
        type: "list",
        items: [
          `Dịch vụ cung cấp năng lượng thông minh (Smart metering services)`,
          `Dịch vụ tư vấn năng lượng thông minh (Smart energy consulting)`,
          `Giải pháp nông nghiệp thông minh (Smart farming solutions)`,
          `Dịch vụ phát triển thiết kế áp dụng AI vào công nghiệp`,
          `Cloud and on-premise deployment`,
        ],
      },
      {
        type: "paragraph",
        content: `Bất kể quy mô của dự án, TPM Technology có thể cung cấp cho bạn thông tin chi
tiết, phân tích và hệ thống để tiết kiệm tiền và làm việc hiệu quả hơn.`,
      },
      {
        type: "title",
        content: `Quản lý năng lượng phù hợp với nhu cầu của bạn`,
      },
      {
        type: "paragraph",
        content: `Chúng tôi dành thời gian để tìm hiểu về doanh nghiệp của bạn, mức tiêu thụ năng
lượng và cơ sở hạ tầng công nghệ hiện tại, sau đó lập một kế hoạch hành động.`,
      },
      {
        type: "paragraph",
        content: `Cho dù bạn đang triển khai chỉ tiêu Môi trường – Xã hội – Quản trị (ESG) mới,
muốn tiết kiệm chi phí hay đang tìm cách mở rộng hoạt động kinh doanh của mình
một cách bền vững, đội ngũ của chúng tôi tập trung vào tính minh bạch và tính linh
hoạt để phù hợp nhất có thể với các dự án ở mọi quy mô.`,
      },
      {
        type: "paragraph",
        content: `Các thiết bị được kết nối đang chứng kiến sự hấp dẫn trong các ngành công nghiệp.
Các ứng dụng phổ biến ngày nay bao gồm nhà cửa và các thành phố thông minh,
giám sát sản xuất năng lượng gió và năng lượng mặt trời cũng như theo dõi tàu cập
nhật từng phút cho dịch vụ hậu cần toàn cầu (global logistics).`,
      },
      {
        type: "paragraph",
        content: `Đối với doanh nghiệp của bạn — bất kể quy mô — lợi ích của việc giám sát thông
minh và các thiết bị được kết nối được hỗ trợ bởi Internet bao gồm:`,
      },
      {
        type: "list",
        items: [
          `Giám sát dựa trên ứng dụng có thể giúp giảm thiểu lỗi của con người`,
          `Các phân tích và thông tin chi tiết trong tầm tay của bạn để giúp bạn
hiểu chính xác chi phí của mình nằm ở đâu`,
          `Thích ứng nhanh chóng của hệ thống sưởi, làm mát và độ ẩm với các
điều kiện khí quyển`,
          `Khả năng điều phối và điều chỉnh chiến lược tiêu thụ điện năng của
bạn khi đang di chuyển`,
        ],
      },
      {
        type: "paragraph",
        content: `Trung bình, khách hàng thấy được tiết kiệm ít nhất 15-20% thông qua hiệu suất.`,
      },
      {
        type: "title",
        content: "Bắt đầu",
      },
      {
        type: "paragraph",
        content: `Bạn đã sẵn sàng thực hiện bước tiếp theo để tiết kiệm chi phí tiện ích và giảm tiêu
thụ năng lượng không cần thiết?`,
      },
      {
        type: "paragraph",
        content: `Hãy liên hệ ngay hôm nay để được tư vấn và tìm hiểu thêm về các giải pháp tùy
chỉnh của TPM Technology. `,
      },
      {
        type: "paragraph",
        content: `Đội ngũ kỹ thuật viên của chúng tôi hỗ trợ từ đầu đến cuối để đảm bảo kết quả lâu
dài. Tất cả các gói phần mềm (software) và phần cứng (hardware) được thiết kế để
tiết kiệm chi phí, có thể mở rộng và an toàn.`,
      },
    ],
    image: "https://bcp.cdnchinhphu.vn/334894974524682240/2023/6/26/csdlqg-1687768866623578740455.jpg",
  },

  {
    id: 3,
    title: "TƯ VẤN",
    description: `Hỗ trợ khách hàng trong việc đạt được quá trình chuyển đổi kỹ thuật số
mượt mà và bền vững.`,
    contents: [
      {
        type: "title",
        content: "Giới thiệu",
      },
      {
        type: TYPE.paragraph,
        content: `Chuyển đổi kỹ thuật số là rất quan trọng để các doanh nghiệp duy trì tính cạnh
tranh và đáp ứng nhu cầu ngày càng tăng của khách hàng trong thời đại kỹ thuật số
ngày nay. Nó liên quan đến việc áp dụng các công nghệ kỹ thuật số và tận dụng dữ
liệu để tối ưu hóa quy trình, cải thiện trải nghiệm của khách hàng và thúc đẩy tăng
trưởng kinh doanh tổng thể. Tư vấn đóng một vai trò quan trọng trong việc hỗ trợ
khách hàng trong quá trình chuyển đổi này bằng cách cung cấp chuyên môn,
hướng dẫn và hỗ trợ.`,
      },
      {
        type: TYPE.title,
        content: `Phân tích dự án`,
      },
      {
        type: TYPE.paragraph,
        content: `Để hỗ trợ khách hàng một cách hiệu quả trong hành trình chuyển đổi kỹ thuật số,
việc phân tích dự án kỹ lưỡng là điều cần thiết. Thực hiện theo các bước sau:`,
      },
      {
        type: TYPE.list,
        items: [
          `Phân tích nhu cầu của khách hàng: Hiểu mục tiêu kinh doanh, điểm yếu và
mục tiêu của khách hàng. Tiến hành các cuộc họp và phỏng vấn với các bên
liên quan chính để hiểu rõ hơn về tầm nhìn và kỳ vọng của họ.`,
          `Xác định các bên liên quan chính: Xác định các cá nhân hoặc bộ phận sẽ bị
ảnh hưởng bởi quá trình chuyển đổi kỹ thuật số. Tương tác với họ để đánh
giá các yêu cầu, thách thức và mối quan tâm của họ.`,
          `Tiến hành Phân tích Khoảng trống: So sánh khả năng hiện có của khách
hàng với trạng thái mong muốn của họ. Xác định các lĩnh vực mà chuyển
đổi kỹ thuật số có thể mang lại giá trị quan trọng nhất và giải quyết các
khoảng trống về quy trình, công nghệ hoặc tài nguyên.`,
        ],
      },
      {
        type: TYPE.title,
        content: "Xác định thông số kỹ thuật của dự án",
      },
      {
        type: TYPE.paragraph,
        content: `Thông số kỹ thuật rõ ràng của dự án là rất quan trọng để chuyển đổi kỹ thuật số
hiệu quả. Hãy xem xét những điều sau:`,
      },
      {
        type: TYPE.list,
        items: [
          `Xác định mục tiêu: Xác định rõ ràng mục tiêu và kết quả mà khách hàng
hướng tới đạt được thông qua chuyển đổi kỹ thuật số. Điều này giúp ưu tiên
các tính năng và chức năng.`,
          `Ưu tiên các tính năng: Cộng tác với khách hàng để xác định các tính năng
chính phù hợp với mục tiêu kinh doanh của họ. Sử dụng các khung như
phương pháp MoSCoW (Phải có, Nên có, Có thể có, Sẽ không có thời gian
này) để ưu tiên các nỗ lực phát triển.`,
          `Tính linh hoạt: Thiết kế lộ trình linh hoạt có thể thích ứng với các yêu cầu và
ưu tiên thay đổi. Thường xuyên xem xét và đánh giá lại lộ trình để điều
chỉnh các phản hồi và cơ hội mới xuất hiện.`,
        ],
      },
      {
        type: TYPE.title,
        content: `Lựa chọn công nghệ phù hợp`,
      },
      {
        type: TYPE.paragraph,
        content: `Việc lựa chọn công nghệ phù hợp là rất quan trọng cho sự thành công của dự án
chuyển đổi kỹ thuật số. Hãy xem xét những điều sau:`,
      },
      {
        type: TYPE.list,
        items: [
          `Đánh giá các tùy chọn: Đánh giá các tùy chọn công nghệ khác nhau dựa trên
nhu cầu cụ thể, khả năng mở rộng, yêu cầu bảo mật và ngân sách của khách
hàng. Xem xét các yếu tố như tính thân thiện với người dùng, khả năng tích
hợp và hồ sơ theo dõi của nhà cung cấp.`,
          `Bằng chứng về Khái niệm: Tiến hành thử nghiệm bằng chứng về khái niệm
(POC) với các công nghệ được đưa vào danh sách rút gọn. Điều này giúp
đánh giá sự phù hợp với yêu cầu của khách hàng và xác nhận sự phù hợp
trước khi cam kết đầu tư dài hạn.`,
          `Khả năng mở rộng và chi phí: Đảm bảo công nghệ được chọn có thể mở
rộng theo nhu cầu ngày càng tăng của khách hàng. Hãy xem xét chi phí dài
hạn cho việc bảo trì, nâng cấp và hỗ trợ để tránh mọi bất ngờ trong tương lai.`,
        ],
      },
      {
        type: TYPE.title,
        content: `Phần kết luận`,
      },
      {
        type: TYPE.paragraph,
        content: `Việc hỗ trợ khách hàng đạt được quá trình chuyển đổi kỹ thuật số suôn sẻ và bền
vững đòi hỏi một cách tiếp cận toàn diện. Bằng cách tiến hành phân tích kỹ lưỡng
dự án, xác định các thông số kỹ thuật rõ ràng của dự án, tạo lộ trình sản phẩm linh
hoạt và chọn công nghệ phù hợp, các doanh nghiệp có thể định hướng thành công
hành trình chuyển đổi kỹ thuật số của mình.`,
      },
      {
        type: TYPE.paragraph,
        content: `Hãy nhớ áp dụng lời khuyên được cung cấp trong hướng dẫn này vào thực tế và
điều chỉnh nó cho phù hợp với nhu cầu và yêu cầu riêng của từng khách
hàng. Chuyển đổi kỹ thuật số thành công cho phép các doanh nghiệp duy trì tính
cạnh tranh, nâng cao hiệu quả và mang lại trải nghiệm nâng cao cho khách hàng`,
      },
    ],
    image: "https://vina-aspire.com/wp-content/uploads/2022/06/1-3.png",
  },

  {
    id: 4,
    title: "HỖ TRỢ",
    description: `Chúng tôi cung cấp dịch vụ bảo trì và hỗ trợ toàn diện, bao gồm bảo trì
phòng ngừa và khắc phục, phân tích hiệu suất, giám sát máy chủ và ứng dụng, cải
tiến liên tục và các mức hỗ trợ 1, 2 và 3. Mục tiêu của chúng tôi là đảm bảo hệ
thống hoạt động ổn định và cung cấp hỗ trợ liên tục cho khách hàng.`,
    contents: [
      {
        type: TYPE.title,
        content: `Hợp đồng hỗ trợ là gì?`,
      },
      {
        type: TYPE.paragraph,
        content: `Hợp đồng hỗ trợ là thỏa thuận giữa khách hàng và nhà thầu. Nó xác định các điều
khoản công việc mà nhà thầu phải thực hiện để đổi lấy tiền bồi thường từ khách
hàng. Thông tin cơ bản có trong hợp đồng dịch vụ là:`,
      },
      {
        type: TYPE.list,
        items: [
          `Thông tin chung về khách hàng và nhà thầu.`,
          `Các điều khoản và điều kiện của dịch vụ.`,
          `Mô tả rõ ràng về dịch vụ được cung cấp và thời hạn nó được cung cấp.`,
          `Phí dịch vụ và cách thức và thời điểm khách hàng phải thanh toán.`,
        ],
      },
      {
        type: TYPE.paragraph,
        content: `Có nhiều loại hợp đồng hỗ trợ trong bất kỳ lĩnh vực nào. Tiếp theo, chúng tôi sẽ
giải thích những thất bại bạn có thể mắc phải và cách ngăn chúng xảy ra. Chúng tôi
cũng sẽ tìm hiểu tầm quan trọng của hợp đồng dịch vụ và cách bạn có thể hưởng
lợi từ hợp đồng đó.`,
      },
      {
        type: TYPE.title,
        content: `Vì sao chúng ta cần hợp đồng dịch vụ?`,
      },
      {
        type: TYPE.paragraph,
        content: `Hợp đồng dịch vụ được thực hiện để ngăn hệ thống của bạn có thể xảy ra sự cố và
giảm thời gian ngừng hoạt động của hệ thống khi sự cố xảy ra. Chúng tôi có thể
xác định 2 loại lỗi hệ thống:`,
      },
      {
        type: TYPE.list,
        items: [
          `Suy thoái hệ thống: Đây thường là giai đoạn đầu tiên dẫn đến sự cố hệ
thống. Trong giai đoạn này, hệ thống của bạn vẫn hoạt động nhưng nó
không hoạt động ở trạng thái tốt nhất.`,
          `Sự cố hệ thống: Hệ thống hoàn toàn ngừng hoạt động và tất cả những gì bạn
có thể làm là đợi sự cố được khắc phục để khôi phục lại.`,
        ],
      },
      {
        type: TYPE.paragraph,
        content: `Tại TPM Technology, chúng tôi tin rằng tốt nhất là bạn nên hành động trước khi
sự cố xảy ra. Chúng tôi sẽ giải thích cho bạn 3 mức độ bảo trì và cách nó liên
quan đến việc quản lý tốt hệ thống của bạn.`,
      },
      {
        type: TYPE.title,
        content: `Bảo dưỡng phòng ngừ`,
      },
      {
        type: TYPE.paragraph,
        content: `Loại bảo trì này được thực hiện trước khi sự cố xảy ra và định kỳ để tránh các sự
cố nghiêm trọng trong tương lai. Mục đích của nó là để làm giảm khả năng hệ
thống bị lỗi hoặc suy giảm chất lượng của hệ thống. Nó giúp tăng tuổi thọ cho hệ
thống và giảm thời gian ngừng hoạt động của hệ thống khi có sự cố.`,
      },
      {
        type: TYPE.title,
        content: `Bảo trì sửa chữa`,
      },
      {
        type: TYPE.paragraph,
        content: `Khi các khiếm khuyết được tìm thấy trong hệ thống gây ra sự cố, việc bảo trì khắc
phục sẽ được thực hiện để đưa hệ thống trở lại hoạt động bình thường. Trong quá
trình thực hiện, tài sản được sửa chữa, phục hồi hoặc thay thế.`,
      },
      {
        type: TYPE.title,
        content: `Bảo trì hoàn hảo`,
      },
      {
        type: TYPE.paragraph,
        content: `Nâng cao chức năng hệ thống bằng cách triển khai các nội dung mới. Nhiệm vụ
của bảo trì hoàn hảo là cải thiện cách thức hoạt động của hệ thống theo nhu cầu của
khách hàng.`,
      },
      {
        type: TYPE.paragraph,
        content: `Bây giờ chúng ta đã hiểu rõ về 3 hình thức bảo trì cơ bản, chúng ta sẽ giải thích
một hợp đồng dịch vụ có thể mang lại lợi ích cho bạn như thế nào.`,
      },
      {
        type: TYPE.paragraph,
        content: `Như chúng ta có thể thấy 2 hình thức bảo trì quan trọng nhất là bảo trì phòng ngừa
và bảo trì khắc phục. Một được thực hiện thường xuyên và một được thực hiện khi
một vấn đề được phát hiện. Vai trò của hợp đồng dịch vụ rất quan trọng trong 2
trường hợp vì nó giúp bạn duy trì hệ thống của mình ở mức tốt nhất và giảm thời
gian ngừng hoạt động của bạn xuống mức tối thiểu khi có sự cố xảy ra. Hợp đồng
dịch vụ là biện pháp bảo mật cần thực hiện để tiết kiệm thời gian và tiền bạc của
bạn. Nếu bạn chờ đợi một vấn đề xảy ra để hành động, sẽ quá muộn vì thiệt hại có
thể nghiêm trọng hơn và cần thêm thời gian để khắc phục.`,
      },
    ],
    image: "https://smartindustry.vn/wp-content/uploads/2022/04/iot_istock_1215247403.jpg",
  },
]
