const TYPE = {
  TITLE: "title",
  PARAGRAPH: "paragraph",
  LIST: "list",
  IMAGE: "image",
}

interface IContent {
  type: string;
  caption?: string;
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

const blogs: IBlog[] = [
    {
        id: 1,
        title: "IoT là gì? Định nghĩa và các ứng dụng của IoT trong cuộc sống",
        description: `IoT, viết tắt của "Internet of Things," có nghĩa là kết nối các đồ vật hàng
ngày của chúng ta với một mạng internet chung để chúng có thể giao tiếp và hoạt
động cùng nhau.`,
        image: 'https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-7.png',
        contents: [
            {
                type: TYPE.TITLE,
                content: 'IoT là gì?',
            },
            {
                type: TYPE.TITLE,
                content: 'Định nghĩa',
            },
            {
                type: TYPE.PARAGRAPH,
                content: `IoT, viết tắt của "Internet of Things," có nghĩa là kết nối các đồ vật hàng ngày của
chúng ta với một mạng internet chung để chúng có thể giao tiếp và hoạt động cùng
nhau. Điều này giống như khi bạn và bạn bè trò chuyện thông qua tin nhắn, chiếc
đèn, tủ lạnh, hay thậm chí là chiếc xe hơi của bạn sẽ có thể nhận lệnh từ điện thoại
thông minh hoặc điều khiển.`
            },
        ]
    }
]

export default blogs;