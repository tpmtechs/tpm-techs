const TYPE = {
  TITLE: "title",
  PARAGRAPH: "paragraph",
  LIST: "list",
  IMAGE: "image",
  VIDEO: "video",
}

export enum BlogType {
  SERVICE = "service",
  PROJECT = "project",
  READ_MORE = "read-more",
}

interface IContent {
  type: string
  content?: string
  items?: string[]
}

interface ICategory {
  title: string
  href?: string
}

interface IAuthor {
  name: string
  role?: string
  href?: string
  imageUrl?: string
}

interface IBlog {
  id: number
  title: string
  description: string
  contents: IContent[]
  image: string
  type?: string

  href?: string
  date?: string
  datetime?: string
  category?: ICategory
  author?: IAuthor
}

export const blogs: IBlog[] = [
  {
    id: 101,
    //title: "HỆ THỐNG TỰ ĐỘNG HÓA VÀ ĐIỀU KHIỂN"
    title: "自動化および制御システム",
    description:
      //"Giải pháp Quản lý Toàn diện của chúng tôi cung cấp các giải pháp phần mềm sáng tạo dành cho hệ thống tòa nhà thương mại và công nghiệp, cung cấp khả năng kiểm soát và giám sát hiệu quả để nâng cao hiệu suất hoạt động của tòa nhà."
      "当社のトータル管理ソリューションは、商業および産業用ビル システム向けの革新的なソフトウェア ソリューションを提供し、効果的な制御と監視を提供してビルのパフォーマンスを向上させます。",
    contents: [
      {
        type: "title",
        //content: "Hệ Thống Điều Khiển vào những năm 2020",
        content: "2020年代の制御システム",
      },
      {
        type: "paragraph",
        // content: `Hệ thống điều khiển (control systems) đã xuất hiện trong các cơ sở công nghiệp và
        // thương mại từ thế kỷ trước, nó bắt đầu trong cuộc cách mạng công nghiệp lần thứ
        // ba vào những năm 1950, sau khi kết thúc hai cuộc chiến tranh thế giới. Tuy nhiên,
        // với sự gia tăng của các thiết bị kết nối (connected device), phân tích dữ liệu lớn,
        // khủng hoảng năng lượng và các vấn đề bền vững về môi trường; hệ thống điều
        // khiển và tự động hóa khác đã phát triển mạnh mẽ trong hơn 10 năm qua. Một số
        // người gọi đây là kỷ nguyên mới, cuộc cách mạng công nghiệp lần thứ tư, Công
        // nghiệp 4.0, hay gần đây hơn là kỷ nguyên của công nghệ Internet Vạn Vật trong
        // Công Nghiệp (IOT).`,
        content: `制御システムは産業施設や産業施設に導入されています。
        貿易は前世紀以来行われており、第一次産業革命の頃に始まりました。
        3回は2つの世界大戦が終わった後の1950年代。 しかし、
        コネクテッドデバイス、ビッグデータ分析の台頭により、
        エネルギー危機と環境の持続可能性の問題。 コンディショニングシステム
        制御およびその他の自動化は、過去 10 年間で劇的に発展しました。 いくつかの
        人々はこれを新しい時代、第四次産業革命と呼びます、コング
        インダストリー 4.0、あるいは最近ではモノのインターネット技術の時代
        産業 (IOT)。`,
      },
      {
        type: "title",
        // content: `Bạn đã sẵn sàng thực hiện bước tiếp theo để đạt được năng suất và hiệu quả tốt hơn
        // chưa?`,
        content: `生産性と効率の向上に向けて次のステップに進む準備はできていますか?`,
      },
      {
        type: "paragraph",
        // content: `Hãy liên hệ ngay hôm nay để được tư vấn thêm về các giải pháp của TPM
        // Technology. Đội ngũ kỹ thuật viên của chúng tôi sẽ hỗ trợ từ lúc bắt đầu dự án đến
        // khi kết thúc để đảm bảo hiệu quả lâu dài.`,
        content: `TPM ソリューションに関する詳しいアドバイスが必要な場合は、今すぐお問い合わせください。
        テクノロジー。 当社の技術者チームがプロジェクトの開始から完了までサポートします
        最後に、長期にわたる結果を保証します。`,
      },
    ],
    image:
      "https://images.ctfassets.net/szez98lehkfm/7g2sitSkiFvEKsqCwh2LnY/0d1a0347390c625abdea9fb27d035488/MyIC_Inline_73525",
  },

  {
    id: 102,
    //title: "THIẾT BỊ KẾT NỐI",
    title: `接続デバイス`,
//     description: `TPM Technology có chuyên môn và công nghệ để cung cấp thông tin cảnh
// báo quý giá, phân tích dữ liệu và các hệ thống hiệu quả cho dự án của bạn, bất kể
// phạm vi của nó. Khám phá cách những thiết bị kết nối của chúng tôi có thể cách
// mạng hóa hoạt động của bạn.`,
    description: `TPMテクノロジーは現場情報を提供する専門知識と技術を持っています
    プロジェクトに関係なく、貴重なレポート、データ分析、効率的なシステムを提供します。
    その範囲。 接続されたデバイスがどのように機能するかをご覧ください
    業務をネットワーク化します。`,
    contents: [
      {
        type: "paragraph",
//         content: `Khi doanh nghiệp của bạn phát triển, năng lực của bạn trong việc thích ứng với các
// công nghệ để giúp doanh nghiệp tiếp tục hoạt động cũng sẽ tăng lên. Công nghệ
// TPM cung cấp một loạt các dịch vụ để đảm bảo năng lượng của bạn hoạt động
// thông minh hơn.`,
        content: `ビジネスが成長するにつれて、適応力も高まります
        ビジネスの継続を支援するテクノロジーも増加するでしょう。 テクノロジー
        TPM は、エネルギーの稼働を維持するためのさまざまなサービスを提供します
        より賢い。`,
      },
      {
        type: "title",
//         content: `Làm cho sức mạnh của bạn đi xa hơn cùng với
// các thiết bị được kết nối`,
        content: `あなたのパワーをさらに進化させましょう
        接続されたデバイス`,
      },
      {
        type: "paragraph",
//         content: `Bằng cách sử dụng các công nghệ được kết nối với nhau được gắn vào các thiết bị
// của bạn còn được gọi là internet vạn vật (IoT), bạn có thể cắt giảm các hóa đơn của
// mình và theo dõi các thay đổi khi chúng xảy ra trong thời gian thực. Từ kiểm soát
// độ ẩm và làm mát đến kiểm soát độ ẩm đến giám sát việc sử dụng nước, Công
// nghệ TPM xây dựng và điều chỉnh các giải pháp dựa trên yêu cầu của bạn.`,
        content: `デバイスに組み込まれた相互接続テクノロジーを使用することにより
        モノのインターネット (IoT) とも呼ばれ、請求額を削減できます
        自分自身で変更をリアルタイムで追跡できます。 コントロールから
        湿度と冷却から湿度制御、水使用量の監視、コング
        TPM テクノロジーは、お客様の要件に基づいてソリューションを構築および調整します。`,
      },
      {
        type: "paragraph",
//         content: `Đội ngũ chuyên gia của chúng tôi mang đến những kiến thức chuyên môn cần thiết
// để đưa doanh nghiệp của bạn phát triển trong tương lai đồng thời giảm mức tiêu
// thụ. Chúng tôi tích hợp hệ thống của mình vào các thiết bị hiện có của bạn; bạn sẽ
// không cần phải lo lắng về việc bắt đầu lại từ đầu và đầu tư số tiền lớn vào cơ sở hạ
// tầng mới.`,
        content: `当社の専門家チームが必要な専門知識を提供します
        支出を削減しながらビジネスの将来性を確保する
        受け取る。 当社のシステムを既存のデバイスに統合します。 あなたはするであろう
        ゼロからのスタートやインフラストラクチャへの多額の投資を心配する必要はありません
        新しいフロア。`,
      },
      {
        type: "paragraph",
        // content: `Chúng tôi cung cấp:`,
        content: `我々が提供します：`,
      },
      {
        type: "list",
        items: [
          // `Dịch vụ cung cấp năng lượng thông minh (Smart metering services)`,
          // `Dịch vụ tư vấn năng lượng thông minh (Smart energy consulting)`,
          // `Giải pháp nông nghiệp thông minh (Smart farming solutions)`,
          // `Dịch vụ phát triển thiết kế áp dụng AI vào công nghiệp`,
          // `Cloud and on-premise deployment`,
          `スマートメーターサービス`,
          `スマートエネルギーコンサルティングサービス（スマートエネルギーコンサルティング）`,
          `スマート農業ソリューション`,
          `AIを産業に応用した設計開発サービス`,
          `クラウドとオンプレミスの導入`,
        ],
      },
      {
        type: "paragraph",
//         content: `Bất kể quy mô của dự án, TPM Technology có thể cung cấp cho bạn thông tin chi
// tiết, phân tích và hệ thống để tiết kiệm tiền và làm việc hiệu quả hơn.`,
        content: `プロジェクトの規模に関係なく、TPM テクノロジーは詳細な情報を提供します。
        お金を節約し、より効率的に作業するための節約、分析、システム。`,
      },
      {
        type: "title",
        // content: `Quản lý năng lượng phù hợp với nhu cầu của bạn`,
        content: `ニーズに合わせて電力を管理`,
      },
      {
        type: "paragraph",
//         content: `Chúng tôi dành thời gian để tìm hiểu về doanh nghiệp của bạn, mức tiêu thụ năng
// lượng và cơ sở hạ tầng công nghệ hiện tại, sau đó lập một kế hoạch hành động.`,
        content: `お客様のビジネスとそのエネルギー消費について時間をかけて調査します。
        現在のテクノロジーインフラストラクチャとリソースを確認し、アクションプランを作成します。`,
      },
      {
        type: "paragraph",
//         content: `Cho dù bạn đang triển khai chỉ tiêu Môi trường – Xã hội – Quản trị (ESG) mới,
// muốn tiết kiệm chi phí hay đang tìm cách mở rộng hoạt động kinh doanh của mình
// một cách bền vững, đội ngũ của chúng tôi tập trung vào tính minh bạch và tính linh
// hoạt để phù hợp nhất có thể với các dự án ở mọi quy mô.`,
        content: `新しい環境、社会、ガバナンス (ESG) 指標を導入しているかどうか、
        コストを削減したい、またはビジネスの拡大を検討している
        持続可能な形で、私たちのチームは透明性と精神性に重点を置いています
        あらゆる規模のプロジェクトに最適な柔軟性を備えています。`,
      },
      {
        type: "paragraph",
//         content: `Các thiết bị được kết nối đang chứng kiến sự hấp dẫn trong các ngành công nghiệp.
// Các ứng dụng phổ biến ngày nay bao gồm nhà cửa và các thành phố thông minh,
// giám sát sản xuất năng lượng gió và năng lượng mặt trời cũng như theo dõi tàu cập
// nhật từng phút cho dịch vụ hậu cần toàn cầu (global logistics).`,
        content: `コネクテッド デバイスは業界全体で注目を集めています。
        現在人気のあるアプリケーションには、スマート ホームや都市、
        風力と太陽エネルギーの生産を監視し、船舶の到着を監視します
        グローバル物流サービスの最新情報を毎分更新します。`,
      },
      {
        type: "paragraph",
//         content: `Đối với doanh nghiệp của bạn — bất kể quy mô — lợi ích của việc giám sát thông
// minh và các thiết bị được kết nối được hỗ trợ bởi Internet bao gồm:`,
        content: `ビジネスの規模を問わず、インテリジェントな監視のメリットを享受できます。
        インターネットでサポートされるスマートフォンおよび接続デバイスには次のものがあります。`,
      },
      {
        type: "list",
        items: [
//           `Giám sát dựa trên ứng dụng có thể giúp giảm thiểu lỗi của con người`,
//           `Các phân tích và thông tin chi tiết trong tầm tay của bạn để giúp bạn
// hiểu chính xác chi phí của mình nằm ở đâu`,
//           `Thích ứng nhanh chóng của hệ thống sưởi, làm mát và độ ẩm với các
// điều kiện khí quyển`,
//           `Khả năng điều phối và điều chỉnh chiến lược tiêu thụ điện năng của
// bạn khi đang di chuyển`,
          `アプリベースの監視は人的エラーの削減に役立ちます`,
          `コストがどこにあるのかを正確に理解するのに役立つ分析と洞察をすぐに利用できます`,
          `暖房、冷房、湿度を大気条件に迅速に適応`,
          `外出先で電力消費戦略を調整および調整する機能`,
        ],
      },
      {
        type: "paragraph",
        // content: `Trung bình, khách hàng thấy được tiết kiệm ít nhất 15-20% thông qua hiệu suất.`,
        content: `平均して、お客様はパフォーマンスを通じて少なくとも15-20%の節約を実感しています。`,
      },
      {
        type: "title",
        // content: "Bắt đầu",
        content: `スタート`,
      },
      {
        type: "paragraph",
        // content: Bạn đã sẵn sàng thực hiện bước tiếp theo để tiết kiệm chi phí tiện ích và giảm tiêu // thụ năng lượng không cần thiết?,
        content: `次のステップを踏んで、公共料金のコストを節約し、不必要なエネルギーの消費を削減する準備はできていますか？`,
      },
      {
        type: "paragraph",
//         content: `Hãy liên hệ ngay hôm nay để được tư vấn và tìm hiểu thêm về các giải pháp tùy
// chỉnh của TPM Technology. `,
          content: `TPMテクノロジーのカスタムソリューションについてのアドバイスと詳細を知りたい場合は、今すぐお問い合わせください。`,
      },
      {
        type: "paragraph",
//         content: `Đội ngũ kỹ thuật viên của chúng tôi hỗ trợ từ đầu đến cuối để đảm bảo kết quả lâu
// dài. Tất cả các gói phần mềm (software) và phần cứng (hardware) được thiết kế để
// tiết kiệm chi phí, có thể mở rộng và an toàn.`,
        content: `当社の技術者チームは、結果が持続可能であることを確認するために、最初から最後までサポートします。すべてのソフトウェアおよびハードウェアパッケージは、コストを節約し、拡張可能で安全に設計されています。`,
      },
    ],
    image: "https://bcp.cdnchinhphu.vn/334894974524682240/2023/6/26/csdlqg-1687768866623578740455.jpg",
  },

  {
    id: 103,
    // title: "TƯ VẤN",
    title: `アドバイスする`,
//     description: `Hỗ trợ khách hàng trong việc đạt được quá trình chuyển đổi kỹ thuật số
// mượt mà và bền vững.`,
      description: `お客様のデジタルトランスフォーメーションの実現をサポート
      滑らかで耐久性があります。`,
    contents: [
      {
        type: "title",
        // content: "Giới thiệu",
        content: `紹介`,
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `Chuyển đổi kỹ thuật số là rất quan trọng để các doanh nghiệp duy trì tính cạnh
        // tranh và đáp ứng nhu cầu ngày càng tăng của khách hàng trong thời đại kỹ thuật số
        // ngày nay. Nó liên quan đến việc áp dụng các công nghệ kỹ thuật số và tận dụng dữ
        // liệu để tối ưu hóa quy trình, cải thiện trải nghiệm của khách hàng và thúc đẩy tăng
        // trưởng kinh doanh tổng thể. Tư vấn đóng một vai trò quan trọng trong việc hỗ trợ
        // khách hàng trong quá trình chuyển đổi này bằng cách cung cấp chuyên môn,
        // hướng dẫn và hỗ trợ.`,
        content: `デジタル転換は、現代のデジタル時代において企業が競争力を維持し、顧客のますます高まる要求に応えるために非常に重要です。これはデジタル技術を適用し、データを活用してプロセスを最適化し、顧客体験を向上させ、総合的なビジネス成長を促進することに関連しています。コンサルティングは、この変革の過程で顧客を専門的にサポートし、指導し、支援する重要な役割を果たします。`,
    },
    {
        type: TYPE.TITLE,
        // content: `Phân tích dự án`,
        content: `プロジェクトの分析`,
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `Để hỗ trợ khách hàng một cách hiệu quả trong hành trình chuyển đổi kỹ thuật số,
        // việc phân tích dự án kỹ lưỡng là điều cần thiết. Thực hiện theo các bước sau:`,
        content: `効果的に顧客をサポートするためには、デジタル転換の旅でのプロジェクトの注意深い分析が必要です。以下のステップに従って実行します：`,
    },
    {
        type: TYPE.LIST,
        // items: [
        //     `Phân tích nhu cầu của khách hàng: Hiểu mục tiêu kinh doanh, điểm yếu và
        //     mục tiêu của khách hàng. Tiến hành các cuộc họp và phỏng vấn với các bên
        //     liên quan chính để hiểu rõ hơn về tầm nhìn và kỳ vọng của họ.`,
        //     `Xác định các bên liên quan chính: Xác định các cá nhân hoặc bộ phận sẽ bị
        //     ảnh hưởng bởi quá trình chuyển đổi kỹ thuật số. Tương tác với họ để đánh
        //     giá các yêu cầu, thách thức và mối quan tâm của họ.`,
        //     `Tiến hành Phân tích Khoảng trống: So sánh khả năng hiện có của khách
        //     hàng với trạng thái mong muốn của họ. Xác định các lĩnh vực mà chuyển
        //     đổi kỹ thuật số có thể mang lại giá trị quan trọng nhất và giải quyết các
        //     khoảng trống về quy trình, công nghệ hoặc tài nguyên.`,
        // ],
        items: [
            `顧客のニーズを分析する：顧客のビジネス目標、弱点、および目標を理解します。関係者とのミーティングとインタビューを行い、彼らのビジョンと期待をより詳細に理解します。`,
            `主要な関係者を特定する：デジタル転換プロセスに影響を受ける個人や部門を特定します。彼らと連携して、彼らの要件、課題、および関心事を評価します。`,
            `ギャップ分析を実行する：顧客の現状の能力を望ましい状態と比較します。デジタル転換がプロセス、技術、またはリソースのギャップをどのように埋めるかを特定します。`,
        ],
    },
    {
        type: TYPE.TITLE,
        // content: "Xác định thông số kỹ thuật của dự án",
        content: `プロジェクトの技術仕様を確定する`,
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `Thông số kỹ thuật rõ ràng của dự án là rất quan trọng để chuyển đổi kỹ thuật số
        // hiệu quả. Hãy xem xét những điều sau：`,
        content: `プロジェクトの明確な技術仕様は、効果的なデジタル転換のために非常に重要です。次の点を考慮してください：`,
    },
    {
        type: TYPE.LIST,
        // items: [
        //     `Xác định mục tiêu: Xác định rõ ràng mục tiêu và kết quả mà khách hàng
        //     hướng tới đạt được thông qua chuyển đổi kỹ thuật số. Điều này giúp ưu tiên
        //     các tính năng và chức năng.`,
        //     `Ưu tiên các tính năng: Cộng tác với khách hàng để xác định các tính năng
        //     chính phù hợp với mục tiêu kinh doanh của họ. Sử dụng các khung như
        //     phương pháp MoSCoW (Phải có, Nên có, Có thể có, Sẽ không có thời gian
        //     này) để ưu tiên các nỗ lực phát triển.`,
        //     `Tính linh hoạt: Thiết kế lộ trình linh hoạt có thể thích ứng với các yêu cầu và
        //     ưu tiên thay đổi. Thường xuyên xem xét và đánh giá lại lộ trình để điều
        //     chỉnh các phản hồi và cơ hội mới xuất hiện。`,
        // ],
        items: [
            `目標を確定する：デジタル転換を通じて顧客が達成したい目標と結果を明確にします。これは機能と機能を優先するのに役立ちます。`,
            `機能を優先する：お客様と協力して、ビジネス目標に適した主要な機能を特定します。MoSCoWメソッド（Must have、Should have、Could have、Won't have this time）などのフレームワークを使用して、開発の努力を優先順位付けます。`,
            `柔軟性：柔軟な進行ルートを設計し、要件と優先順位が変更される可能性がある場合に適応できるようにします。頻繁に進行状況を見直し、フィードバックと新しい機会に対応します。`,
        ],
    },
    {
        type: TYPE.TITLE,
        // content: "Lựa chọn công nghệ phù hợp",
        content: `適切な技術の選択`,
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `Việc lựa chọn công nghệ phù hợp là rất quan trọng cho sự thành công của dự án
        // chuyển đổi kỹ thuật số. Hãy xem xét những điều sau：`,
        content: `適切な技術を選択することは、デジタル転換プロジェクトの成功に非常に重要です。以下の点を考慮してください：`,
    }, 
    {
      type: TYPE.LIST,
      // items: [
      //     `Đánh giá các tùy chọn: Đánh giá các tùy chọn công nghệ khác nhau dựa trên
      //     nhu cầu cụ thể, khả năng mở rộng, yêu cầu bảo mật và ngân sách của khách
      //     hàng. Xem xét các yếu tố như tính thân thiện với người dùng, khả năng tích
      //     hợp và hồ sơ theo dõi của nhà cung cấp。`,
      //     `Bằng chứng về Khái niệm: Tiến hành thử nghiệm bằng chứng về khái niệm
      //     (POC) với các công nghệ được đưa vào danh sách rút gọn. Điều này giúp
      //     đánh giá sự phù hợp với yêu cầu của khách hàng và xác nhận sự phù hợp
      //     trước khi cam kết đầu tư dài hạn。`,
      //     `Khả năng mở rộng và chi phí: Đảm bảo công nghệ được chọn có thể mở
      //     rộng theo nhu cầu ngày càng tăng của khách hàng. Hãy xem xét chi phí dài
      //     hạn cho việc bảo trì, nâng cấp và hỗ trợ để tránh mọi bất ngờ trong tương lai。`,
      // ],
      items: [
          `オプションを評価する：お客様の特定のニーズ、拡張性、セキュリティ要件、および予算に基づいて、さまざまな技術オプションを評価します。ユーザーフレンドリー性、統合能力、およびサプライヤーのトラックレコードなどの要素を考慮します。`,
          `概念の証明を行う：絞り込まれた技術オプションを使用してコンセプトの証明（POC）を実施します。これにより、お客様の要件に適合し、長期的な投資を確認する前に適合性を評価できます。`,
          `拡張性とコスト：選択した技術がお客様のますます高まるニーズに対応できるように拡張できることを確認します。将来の予測でのメンテナンス、アップグレード、サポートにかかる長期的なコストを考慮してください。`,
      ],
  },
  {
      type: TYPE.TITLE,
      // content: `Phần kết luận`,
      content: `結論部分`,
  },
  {
      type: TYPE.PARAGRAPH,
      // content: `Việc hỗ trợ khách hàng đạt được quá trình chuyển đổi kỹ thuật số suôn sẻ và bền
      // vững đòi hỏi một cách tiếp cận toàn diện. Bằng cách tiến hành phân tích kỹ lưỡng
      // dự án, xác định các thông số kỹ thuật rõ ràng của dự án, tạo lộ trình sản phẩm linh
      // hoạt và chọn công nghệ phù hợp, các doanh nghiệp có thể định hướng thành công
      // hành trình chuyển đổi kỹ thuật số của mình。`,
      content: `顧客がスムーズで持続可能なデジタル転換を達成するためには、包括的なアプローチが必要です。プロジェクトの注意深い分析を行い、プロジェクトの明確な技術仕様を確定し、柔軟な製品の進行ルートを作成し、適切な技術を選択することにより、企業は自身のデジタル転換の成功に向けて進むことができます。`,
  },
  {
      type: TYPE.PARAGRAPH,
      // content: `Hãy nhớ áp dụng lời khuyên được cung cấp trong hướng dẫn này vào thực tế và
      // điều chỉnh nó cho phù hợp với nhu cầu và yêu cầu riêng của từng khách
      // hàng. Chuyển đổi kỹ thuật số thành công cho phép các doanh nghiệp duy trì tính
      // cạnh tranh, nâng cao hiệu quả và mang lại trải nghiệm nâng cao cho khách hàng。`,
      content: `このガイドで提供されているアドバイスを実際のビジネスに適用し、それを各顧客の個別のニーズと要件に調整してください。成功裡にデジタル転換を実現することで、企業は競争力を維持し、効率を向上させ、顧客に向けて向上したエクスペリエンスを提供できます。`,
  },
  
    ],
    image: "https://vina-aspire.com/wp-content/uploads/2022/06/1-3.png",
  },

  {
    id: 104,
    // title: "HỖ TRỢ",
    title: `サポート`,
//     description: `Chúng tôi cung cấp dịch vụ bảo trì và hỗ trợ toàn diện, bao gồm bảo trì
// phòng ngừa và khắc phục, phân tích hiệu suất, giám sát máy chủ và ứng dụng, cải
// tiến liên tục và các mức hỗ trợ 1, 2 và 3. Mục tiêu của chúng tôi là đảm bảo hệ
// thống hoạt động ổn định và cung cấp hỗ trợ liên tục cho khách hàng.`,
    description: `保守を含めた総合的な保守・サポートサービスをご提供いたします。
    予防と修復、パフォーマンス分析、サーバーとアプリケーションの監視、改善
    継続的な進歩とレベル 1、2、および 3 のサポート。私たちの目標は、システムを保証することです。
    システムは安定して動作し、顧客に継続的なサポートを提供します。`,
    contents: [
      {
        type: TYPE.TITLE,
        // content: `Hợp đồng hỗ trợ là gì?`,
        content: `サポート契約とは何ですか？`,
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `Hợp đồng hỗ trợ là thỏa thuận giữa khách hàng và nhà thầu. Nó xác định các điều
        // khoản công việc mà nhà thầu phải thực hiện để đổi lấy tiền bồi thường từ khách
        // hàng. Thông tin cơ bản có trong hợp đồng dịch vụ là：`,
        content: `サポート契約はお客様と請負業者との合意書です。請負業者がお客様から補償金を得るために実行しなければならない業務条件を明示します。サービス契約に含まれる基本情報には次のものがあります：`,
    },
    {
        type: TYPE.LIST,
        // items: [
        //     `Thông tin chung về khách hàng và nhà thầu.`,
        //     `Các điều khoản và điều kiện của dịch vụ.`,
        //     `Mô tả rõ ràng về dịch vụ được cung cấp và thời hạn nó được cung cấp.`,
        //     `Phí dịch vụ và cách thức và thời điểm khách hàng phải thanh toán。`,
        // ],
        items: [
            `お客様および請負業者に関する一般的な情報。`,
            `サービスの契約条件と条件。`,
            `提供されるサービスの明確な説明と提供期間。`,
            `サービス料金とお客様が支払う方法と時期。`,
        ],
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `Có nhiều loại hợp đồng hỗ trợ trong bất kỳ lĩnh vực nào. Tiếp theo, chúng tôi sẽ
        // giải thích những thất bại bạn có thể mắc phải và cách ngăn chúng xảy ra. Chúng tôi
        // cũng sẽ tìm hiểu tầm quan trọng của hợp đồng dịch vụ và cách bạn có thể hưởng
        // lợi từ hợp đồng đó。`,
        content: `どの分野でもさまざまなサポート契約が存在します。次に、お客様が発生する可能性のある問題とそれを回避する方法について説明します。また、サービス契約の重要性とそれから得られる利点についても説明します。`,
    },
    {
        type: TYPE.TITLE,
        // content: `Vì sao chúng ta cần hợp đồng dịch vụ?`,
        content: `なぜサービス契約が必要なのでしょうか？`,
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `Hợp đồng dịch vụ được thực hiện để ngăn hệ thống của bạn có thể xảy ra sự cố và
        // giảm thời gian ngừng hoạt động của hệ thống khi sự cố xảy ra. Chúng tôi có thể
        // xác định 2 loại lỗi hệ thống：`,
        content: `サービス契約は、システムに障害が発生するのを防ぎ、障害が発生した場合のシステムの停止時間を短縮するために実施されます。システムの2つのエラータイプを特定できます：`,
    },
    {
        type: TYPE.LIST,
        // items: [
        //     `Suy thoái hệ thống: Đây thường là giai đoạn đầu tiên dẫn đến sự cố hệ
        //     thống. Trong giai đoạn này, hệ thống của bạn vẫn hoạt động nhưng nó
        //     không hoạt động ở trạng thái tốt nhất。`,
        //     `Sự cố hệ thống: Hệ thống hoàn toàn ngừng hoạt động và tất cả những gì bạn
        //     có thể làm là đợi sự cố được khắc phục để khôi phục lại。`,
        // ],
        items: [
            `システムの劣化：これは通常、システムの障害につながる最初の段階です。この段階では、システムはまだ動作していますが、最適な状態ではありません。`,
            `システムの障害：システムが完全に停止し、障害が解決されるのを待つしかありません。`,
        ],
    },
    
    {
      type: TYPE.PARAGRAPH,
      // content: `Tại TPM Technology, chúng tôi tin rằng tốt nhất là bạn nên hành động trước khi
      // sự cố xảy ra. Chúng tôi sẽ giải thích cho bạn 3 mức độ bảo trì và cách nó liên
      // quan đến việc quản lý tốt hệ thống của bạn。`,
      content: `TPM Technologyでは、問題が発生する前に行動するのが最善だと信じています。私たちは3つのメンテナンスレベルとそれがシステム管理とどのように関連しているかを説明します。`,
  },
  {
      type: TYPE.TITLE,
      // content: `Bảo dưỡng phòng ngừ`,
      content: `予防保守`,
  },
  {
      type: TYPE.PARAGRAPH,
      // content: `Loại bảo trì này được thực hiện trước khi sự cố xảy ra và định kỳ để tránh các sự
      // cố nghiêm trọng trong tương lai. Mục đích của nó là để làm giảm khả năng hệ
      // thống bị lỗi hoặc suy giảm chất lượng của hệ thống. Nó giúp tăng tuổi thọ cho hệ
      // thống và giảm thời gian ngừng hoạt động của hệ thống khi có sự cố。`,
      content: `このタイプの保守は問題が発生する前に定期的に行われ、将来の深刻な問題を回避するためです。その目的はシステムのエラーや品質の低下を減少させることです。これにより、システムの寿命が延び、問題が発生した場合のシステムの停止時間が短縮されます。`,
  },
  {
      type: TYPE.TITLE,
      // content: `Bảo trì sửa chữa`,
      content: `修理保守`,
  },
  {
      type: TYPE.PARAGRAPH,
      // content: `Khi các khiếm khuyết được tìm thấy trong hệ thống gây ra sự cố, việc bảo trì khắc
      // phục sẽ được thực hiện để đưa hệ thống trở lại hoạt động bình thường. Trong quá
      // trình thực hiện, tài sản được sửa chữa, phục hồi hoặc thay thế。`,
      content: `システムで問題が見つかり、障害が発生した場合、修理メンテナンスが行われ、システムが通常の動作に戻されます。実行中には、資産が修復、回復、または交換されます。`,
  },
  {
      type: TYPE.TITLE,
      // content: `Bảo trì hoàn hảo`,
      content: `完全保守`,
  },
  {
      type: TYPE.PARAGRAPH,
      // content: `Nâng cao chức năng hệ thống bằng cách triển khai các nội dung mới. Nhiệm vụ
      // của bảo trì hoàn hảo là cải thiện cách thức hoạt động của hệ thống theo nhu cầu của
      // khách hàng。`,
      content: `新しいコンテンツを展開してシステムの機能を向上させる。完全保守の役割は、システムの動作方法を顧客のニーズに合わせて改善することです。`,
  },
  {
      type: TYPE.PARAGRAPH,
      // content: `Bây giờ chúng ta đã hiểu rõ về 3 hình thức bảo trì cơ bản, chúng ta sẽ giải thích
      // một hợp đồng dịch vụ có thể mang lại lợi ích cho bạn như thế nào。`,
      content: `これで、基本的な3つの保守形式について理解しました。次に、サービス契約がどのように利益をもたらすかを説明します。`,
  },
  {
      type: TYPE.PARAGRAPH,
      // content: `Như chúng ta có thể thấy 2 hình thức bảo trì quan trọng nhất là bảo trì phòng ngừa
      // và bảo trì khắc phục. Một được thực hiện thường xuyên và một được thực hiện khi
      // một vấn đề được phát hiện. Vai trò của hợp đồng dịch vụ rất quan trọng trong 2
      // trường hợp vì nó giúp bạn duy trì hệ thống của mình ở mức tốt nhất và giảm thời
      // gian ngừng hoạt động của bạn xuống mức tối thiểu khi có sự cố xảy ra. Hợp đồng
      // dịch vụ là biện pháp bảo mật cần thực hiện để tiết kiệm thời gian và tiền bạc của
      // bạn. Nếu bạn chờ đợi một vấn đề xảy ra để hành động, sẽ quá muộn vì thiệt hại có
      // thể nghiêm trọng hơn và cần thêm thời gian để khắc phục。`,
      content: `私たちが見るように、最も重要な2つの保守形式は予防保守と修理保守です。予防保守は定期的に実施され、問題が発生したときに実施されます。サービス契約の役割は、システムを最適な状態で維持し、問題が発生した場合のシステムの停止時間を最小限に抑えるのに役立ちます。サービス契約は、時間とお金を節約するために実施する必要があるセキュリティ対策です。問題が発生するのを待つと、被害が深刻になり、解決には時間がかかる可能性があります。`,
  },
  
    ],
    image: "https://smartindustry.vn/wp-content/uploads/2022/04/iot_istock_1215247403.jpg",
  },
]

export const posts: IBlog[] = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/NL4.jpg?alt=media&token=666d6d47-9db7-44bd-97e9-733558fbf56c",
    id: 201,
    //title: "Towards clean energy, for a green era",
    title: `クリーンエネルギーへ、グリーン時代へ`,
    href: "#",
    //description: "Towards clean energy, for a green era",
    description: `クリーンエネルギーへ、グリーン時代へ`,
    //date: "Mar 16, 2020",
    date: "2020年3月16日",
    //datetime: "2020-03-16",
    datetime: "2020-03-16",
    //category: { title: "Năng lượng sạch", href: "#" },
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      //name: "Michael Foster",
      name: "マイケル・フォスター",
      //role: "Co-Founder / CTO",
      role: "共同創業者 / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.VIDEO,
        content: 'https://www.youtube.com/embed/jy1Q-VlgNdA?si=7P0Z8mXy9CF7KF_a'
      }
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-2.jpg?alt=media&token=b8247869-76be-4c25-b824-e17f5b9585ee",
    id: 202,
    //title: "TALK SHOW ENVIRONMENT & SUSTAINABLE DESIGN.",
    title: "トークショー環境と持続可能なデザイン。",

    href: "#",
//     description: `Sự kiện Talk show tại Đại học Hoa Sen đã tạo nên một không khí truyền cảm
// hứng và sáng tạo, khi CEO Nguyễn Thiên Đức của TPCons làm diễn giả chính.
// Với sự hiện diện của một nhà lãnh đạo năng động và tầm nhìn chiến lược, buổi Talk show không chỉ là một cơ hội để sinh viên đổi mới kiến thức mà còn là nguồn
// động viên mạnh mẽ cho sự sáng tạo và khởi nghiệp trong tương lai.`,
    description: `ホアセン大学でのトークショーイベントは感動的な雰囲気を醸し出しました
    TPCons の CEO、Nguyen Thien Duc が基調講演者だったときのインスピレーションと創造性。
    ダイナミックなリーダーと戦略的ビジョンの存在により、トークショーは学生にとって知識を更新する機会であるだけでなく、知識の源でもあります。
    将来の創造性と起業家精神を強く奨励します。`,
    //date: "Mar 16, 2020",
    date: "2020年3月16日",
    datetime: "2020-03-16",
    //category: { title: "Năng lượng sạch", href: "#" },
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
       //name: "Michael Foster",
       name: "マイケル・フォスター",
       //role: "Co-Founder / CTO",
       role: "共同創業者 / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.PARAGRAPH,
        // content: `Sự kiện Talk show tại Đại học Hoa Sen đã tạo nên một không khí truyền cảm hứng và sáng tạo,
        // khi CEO Nguyễn Thiên Đức của TPCons làm diễn giả chính. Với sự hiện diện của một nhà lãnh đạo năng động
        // và tầm nhìn chiến lược, buổi Talk show không chỉ là một cơ hội để sinh viên đổi mới kiến thức mà còn là
        // nguồn động viên mạnh mẽ cho sự sáng tạo và khởi nghiệp trong tương lai。`,
        content: `ホアセン大学のトークショーイベントは、Nguyễn Thiên Đức氏（TPConsのCEO）がメインスピーカーを務め、刺激的で創造的な雰囲気を作り出しました。ダイナミックで戦略的なビジョンを持つリーダーの存在により、トークショーは知識を革新する機会だけでなく、将来の創造性と起業への強力な動機となりました。`,
    },
    {
        type: TYPE.PARAGRAPH,
        // content: `CEO của TPCons, một đơn vị hàng đầu trong lĩnh vực xây dựng hệ thống năng
        // lượng mặt trời, đã chia sẻ về hành trình xây dựng và phát triển doanh nghiệp. Bằng
        // những câu chuyện và kinh nghiệm thực tế, anh đã truyền động lực và tầm quan
        // trọng của việc đổi mới và chấp nhận thách thức trong môi trường kinh doanh hiện
        // đại。`,
        content: `TPConsのCEOである太陽光発電システム構築分野のリーダーは、事業の構築と発展について共有しました。実際のストーリーや経験を通じて、彼は革新とビジネス環境の中での課題への対処の重要性を伝えました。`,
    },
    
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-001.jpg?alt=media&token=496cbcda-9576-4fbd-b8b4-870db9e5d237`,
      },
      {
        type: TYPE.PARAGRAPH,
        // content: `TPCons, đồng hành với Đại học Hoa Sen trong việc phát triển mô hình giáo
        // dục và nâng cao chất lượng đào tạo. Sự hỗ trợ này không chỉ giúp sinh viên tiếp
        // cận công nghệ tiên tiến mà còn tạo ra cơ hội thực tập và học hỏi trong môi trường
        // thực tế。`,
        content: `TPConsはホアセン大学と連携し、教育モデルの開発とトレーニング品質の向上を支援しています。このサポートは、学生が先進技術に触れるだけでなく、実際の環境でのインターンシップと学習の機会を創出します。`,
    },
    
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-003.jpg?alt=media&token=d8fd3110-9561-4bd3-9dc9-48a4781952a7`,
      },
      {
        type: TYPE.PARAGRAPH,
        // content: `Talk show là một dịp quý báu, không chỉ để truyền đạt kiến thức mà còn để xây
        // dựng cộng đồng sinh viên chủ động và sáng tạo. Sự hiện diện của TPCons không
        // chỉ là một đối tác tài trợ mà còn là một nguồn động viên mạnh mẽ cho sự phát triển
        // toàn diện của sinh viên Đại học Hoa Sen, góp phần xây dựng tương lai rạng ngời
        // và bền vững。`,
        content: `トークショーは貴重な機会であり、知識を伝えるだけでなく、主体的で創造的な学生コミュニティを構築するためのものです。TPConsの存在は、単なるスポンサーパートナーだけでなく、Hoa Sen大学学生の包括的な発展に対する強力な励ましでもあり、輝かしい未来と持続可能な未来の構築に貢献しています。`,
    },
    
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-002.jpg?alt=media&token=d514eda2-6a88-4501-b28b-d0270e4025c1`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-3.jpg?alt=media&token=a37ef272-f798-4588-b63d-f0146e9e0014",
    id: 203,
    //title: `Exploring Energy Innovations: PTCons Invited by Huawei to
//Shenzhen.`,
    title: `エネルギーイノベーションの探求：ファーウェイが深センに招待したPTCons。`,
    href: "#",
    description: `世界的な技術リーダーであるファーウェイは、画期的な取り組みで、
    エネルギー技術分野の著名なプレーヤーである PTCons への特別招待
    深センの施設の独占ツアーに参加してください。 このツアーは
    PTCon が最先端の進歩を掘り下げるまたとない機会
    エネルギー技術とクリーンエネルギーソリューション、ファーウェイの取り組みを紹介
    持続可能な発展へ。`,
    date: "2020年3月16日",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "マイケル・フォスター",
      role: "共同創業者 / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.PARAGRAPH,
        content: `このツアーは、PTCon をファーウェイの研究と研究の中心に浸ることを目的としています。
        開発への取り組み、企業の進歩を直接体験することができます。
        エネルギー革新。 世界が環境問題に取り組む中、
        PTCon と Huawei との協力は、
        技術的ソリューションを通じて差し迫った問題に対処します。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-101.jpg?alt=media&token=b65362af-dc46-4082-a6e0-a4107ea9f5e7`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `ファーウェイの技術拠点である深センがこの背景として機能する
        変革的な経験。 世界的なイノベーションの中心地として知られる深セン
        PTCon がテクノロジーの交差点を目撃するのに最適な環境を提供します
        そして持続可能性。 最先端の研究所から革新的な研究所まで
        製造施設の包括的な眺めを提供するツアーが用意されています。
        エネルギー効率の高いソリューションを開発するファーウェイの卓越性。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-102.jpg?alt=media&token=e7526986-a3a7-4a34-a8bc-d07585f65034`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `ツアーの焦点は単なる観察を超えて、PTCon にさまざまな情報を提供します。
        ファーウェイの主要な専門家とのインタラクティブなセッションに参加するチャンス
        研究者たち。 これらのセッションは知識交換を促進するように設計されており、
        アイデアや洞察を共有できる協力的な環境を促進する
        得た。 PTCons はファーウェイの技術的専門知識から恩恵を受けるだけではありません
        成功を通して得た豊富な経験からも
        世界中でクリーン エネルギー ソリューションを導入しています。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-103.jpg?alt=media&token=b0634c18-1fde-43f9-8a08-1b7737579b43`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `このツアーでは、以下に至るまでのファーウェイのエネルギー技術ポートフォリオに焦点を当てます。
        再生可能エネルギー源からスマート グリッド ソリューションまで。 参加者が期待できるのは、
        太陽光発電、エネルギー貯蔵、およびエネルギー貯蔵における画期的な進歩を目撃してください。
        インテリジェントなエネルギー管理システム。 持続可能性に対するファーウェイの取り組み
        環境に優しい実践は、ケーススタディや現実世界を通じて強調されます。
        アプリケーションに統合するための貴重な洞察を PTCon に提供します。
        取り組み。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-104.jpg?alt=media&token=4776970b-2790-4864-9bed-f77428ad3088`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `結論として、PTCons による深センのファーウェイ施設視察は、
        技術革新と環境意識の融合。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-105.jpg?alt=media&token=6b3980e8-5d57-4b10-a796-898e0d426df2`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-4.jpg?alt=media&token=53ebb0c6-1714-4ed2-a292-de1dc2c44c4a",
    id: 204,
    title: `再生可能エネルギーに関するEAI国際会議
    そして持続可能な製造。`,
    href: "#",
    description: `Tpcons投資建設株式会社がゴールドスポンサーになれることを嬉しく思います -
    再生可能エネルギーと持続可能な製造に関するEAI国際会議のゴールドスポンサー
    ホーチミン市のベトナム国立大学工科大学にて。`,
    date: "2020年3月16日",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "マイケル・フォスター",
      role: "共同創業者 / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-201.jpg?alt=media&token=e5a493f1-614d-4d46-a6d4-e4a2cd1246f9`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-202.jpg?alt=media&token=43f5391b-ffe9-43e8-9bbb-0b230b0b7e10`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-203.jpg?alt=media&token=cf096dfa-ff55-4a21-9199-0348e9475c8b`,
      },
    ],
  },

  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-5.jpg?alt=media&token=36e64239-57f8-4a85-8516-d1de619d02cb",
    id: 205,
    title: `クリーンな再生可能エネルギー`,
    href: "#",
    description: `
    Tpcons Investment and Construction Company Limited はその独自性と名声を証明しています
    屋上太陽光発電システムの構築分野での評判。
    Tpcons はプロ意識と長年の経験により、多くのプロジェクトを実施してきました。
    再生可能エネルギーの利用促進とエネルギー削減に貢献するユニークなソリューション
    環境への悪影響を最小限に抑えます。`,
    date: "2020年3月16日",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "マイケル・フォスター",
      role: "共同創業者 / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.PARAGRAPH,
        content: `Tpcons が実施する各屋上太陽光発電プロジェクトはその重要性を反映しています
        クリーンで持続可能なエネルギー源への移行の重要性。 これまで、
        TPCONSは住宅地から商業地まで多様な規模のプロジェクトを多数実施
        中小企業から大規模組織まで。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-301.jpg?alt=media&token=170b8bf3-9c4c-413d-b4ed-3871d84153ae`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `これらのプロジェクトは、地域社会にクリーンな電力をもたらすだけでなく、
        国家エネルギーシステムへの圧力を軽減します。 統合における創造性
        太陽エネルギーを建物の屋上に取り込み、居住空間と作業空間を作り出しました
        環境に優しく、企業のコスト削減を支援し、同時に貢献します
        環境を保護するための世界的な取り組みの一環です。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-302.jpg?alt=media&token=2985aedd-f671-4251-b31a-8effcb455a91`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `さらに、Tpcons は企業や組織の活動を継続的にサポートします。
        クリーンなエネルギー源への移行。 この会社は、効率的な屋上太陽光発電システムを構築および維持することにより、
        再生可能エネルギーへの切り替えは、将来の選択であるだけでなく、
        コミュニティと企業にとっての現在の利益の源。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-303.jpg?alt=media&token=b5fb02eb-21c9-4ca9-b3ba-83e695368fec`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-304.jpg?alt=media&token=e708dcb3-d5c6-4b7d-a0ee-0718007230bf`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-305.jpg?alt=media&token=d7d047ee-96d2-4d80-bc5d-c160cbf2047e`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-306.jpg?alt=media&token=42d0858c-6120-4f46-8a46-400c062aa3d7`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-307.jpg?alt=media&token=e5fb3c24-ffcf-4a58-be9f-ef95c0fff73f`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-6.jpg?alt=media&token=54c72117-bbaa-4ef6-aa52-436eeef0acb8",
    id: 206,
    title: `クチの屋上太陽光発電の開所式`,
    href: "#",
    description: `容量2,003kWpの屋上太陽光発電プロジェクトの起工式はその一歩
    サイゴン - クチ醸造所のエネルギー源への転換における画期的な進歩
    きれいな量。`,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-401.jpg?alt=media&token=8438a0f6-c0f9-430a-94a4-3f1ece6c5eac`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: ` このプロジェクトは、太陽光発電分野の第一人者である信頼できる請負業者、Tpcons Investment and Construction Company Limited によって信頼されています。 投資家と請負業者が協力することで、効率的な電力システムを実現し、持続可能性を高め、温室効果ガスを削減すると同時に、製造業におけるグリーンで持続可能な開発基準を促進することが約束されています。.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-402.jpg?alt=media&token=96502a5e-82d3-4a93-8764-d29be0399416`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-403.jpg?alt=media&token=238a62b3-7821-4dbe-a6f2-84883e363b2d`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-7.jpg?alt=media&token=ea8df76b-bcd2-404f-a696-5d51695c192e",
    id: 207,
    title: `クアンガイの屋上太陽光発電プロジェクトの起工式が厳かに執り行われた.`,
    href: "#",
    description: `サイゴンビール株式会社のエネルギー変革の旅における重要な一歩を踏み出しました。 このプロジェクトは、環境と社会に関する戦略的ビジョンを実証しながら、クリーンで持続可能なエネルギー源を使用するという企業の取り組みを強調しています。`,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-502.jpg?alt=media&token=fe03dd9c-9470-4cbc-a637-e8b0abf8d843`,
      },

      {
        type: TYPE.PARAGRAPH,
        content: `Tpcons Investment and Construction Company Limited は、太陽光発電システムの構築において豊富な経験を持つ信頼できるパートナーです。 投資家と請負業者の協力は効果的なプロジェクトの創出を約束し、クリーン エネルギーの目標と温室効果ガスの削減に向けた取り組みの重要なステップとなります。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-504.jpg?alt=media&token=0a7b836b-1556-4e09-986d-e9284aeb2908`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `このプロジェクトは経済的利益をもたらすだけでなく、環境バランスの維持にも貢献し、持続可能で環境に優しい産業を生み出すことが期待されています。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-505.jpg?alt=media&token=871d6412-81b0-47c1-8409-6388f708f63d`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `このプロジェクトは経済的利益をもたらすだけでなく、環境バランスの維持にも貢献し、持続可能で環境に優しい産業を生み出すことが期待されています。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-503.jpg?alt=media&token=3193a283-02e9-44fb-a3fc-b899f1b8e130`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-506.jpg?alt=media&token=129b4c81-d6e1-4f7d-a518-968e644ea1d1`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-8.jpg?alt=media&token=2d9041ae-265b-4458-b293-06b1122cda76",
    id: 208,
    title: `TPC、サベコ、SPグループ間の契約調印式について`,
    href: "#",
    description: `Tpcons Investment and Construction Company Limited は、SABECO、SPgroup、および PTC の間で契約調印式が完了したことを発表します。`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-601.jpeg?alt=media&token=5b724df9-7451-445e-8ec8-9c164a5c5804`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `#TPC #SABECO #SPgroup #CleanEnergy #GreenERA #SustainableLiving
#CleanEnergy #GreenEra #SustainableFuture #RenewableEnergy #GoGreen
#EnvironmentalResponsibility #CleanTech #GreenRevolution #EcoFriendly`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-9.jpg?alt=media&token=f9a6cc37-2b5d-4367-9323-fcba48eaa6d2",
    id: 209,
    title: `ソーラーパーク太陽光発電工場。`,
    href: "#",
    description: `評判の良い請負業者としての評判を持つ TPC は、再生可能エネルギーの分野で最もダイナミックなプロジェクトの 1 つであるダウティエン 1 およびダウティエン 2 のソーラーパーク太陽光発電所に同行し、完了させました。ここが旅の重要な転換点です。エネルギー変換と環境保護。`,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.PARAGRAPH,
        content: `ベトナムで太陽エネルギーの潜在力が大きい地域の一つであるダウティエン地域に位置するソーラーパークは、クリーンエネルギー供給の有望なプロジェクトであるだけでなく、太陽エネルギーの開発と持続可能な開発に対するTPCの取り組みの証でもあります。 広い敷地に建設されたこのプロジェクトは、地域社会と周辺地域のクリーン エネルギーに対する需要の高まりに応える上で重要な役割を果たしています。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-601.jpg?alt=media&token=c85c6c31-8f87-4e41-b6ed-d3500751d5f6`,
      },
      {
        type: TYPE.PARAGRAPH,
          content: `TPC は、導入プロセスにおいて、エネルギー生産効率を最適化するために、最先端の技術と最も効率的な機器を使用することに重点を置いてきました。 同時に、安全性と環境保護対策が統合されており、プロジェクトがエネルギー上の利益をもたらすだけでなく、周囲の自然に影響を与えないことが保証されています。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-602.jpg?alt=media&token=5a672da0-9734-49e5-bcc6-7956f12e0e3a`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `ソーラーパーク太陽光発電所は、クリーンな電気を生成するだけでなく、温室効果ガスの削減にも貢献し、気候変動の影響の軽減にも貢献します。 これはエネルギー源であるだけでなく、戦略的プロジェクトでもあり、再生可能エネルギーを国の電力供給の重要な部分にしています。`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `ダウ ティエン 1 とダウ ティエン 2 のソーラー パークは、クリーンで持続可能なエネルギー源への移行の重要性を示しています。 TPC は再生可能エネルギー産業の発展に積極的に貢献し、社会と環境の両方にとって持続可能な未来を築く決意と責任について他の企業を指導してきました。`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-10.jpg?alt=media&token=d4e2eda6-cfc9-47e7-9a98-bd816ab960e3",
    id: 210,
    title: `ダウティエンの太陽光発電プロジェクト`,
    href: "#",
    description: `ダウティエンの太陽光発電プロジェクトが注目を集めている
    ベトナムのエネルギー産業を専攻。 素晴らしい規模と戦略的な立地を備えたこのプロジェクトは、再生可能エネルギーによる国内の電力供給に大きく貢献することが期待されています。 このプロジェクトの投資家は、エネルギー生産を最適化し、環境への影響を軽減するために、先進技術を組み込んだ最新のシステムを構築するという目標を設定しました。 このプロジェクトは、地域の持続可能な発展を促進する強力な原動力となることが期待されています。`,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-701.jpg?alt=media&token=7800b846-9140-4b0c-bda3-57c38deb1e2e`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-702.jpg?alt=media&token=a8831955-6fd0-4761-97e0-55a7687f2c3e`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-703.jpg?alt=media&token=b7d5de88-9d11-4066-b9c8-41b6ceb286dc`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-704.jpg?alt=media&token=401a3640-d350-42a7-a784-caa89cdb5da9`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `プロジェクトの請負業者は Tpcons Investment and Construction Company Limited です。`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-11.jpg?alt=media&token=9c874e9a-b915-4985-88be-7e89b69358ae",
    id: 211,
    title: `タンビンにおける太陽光発電プロジェクト`,
    href: "#",
    description: `2019年に完了したタンビンの太陽光発電プロジェクトは、投資家MEDIPHAR CNC Tan Binhと請負業者TPConsの成功と効果的な協力関係の証です。 このプロジェクトは重要な再生可能電力源を生み出し、産業が環境に与える影響を最小限に抑えることに貢献しました。`,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "クリーンエネルギー", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    contents: [
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-801.jpg?alt=media&token=3404a7e1-b586-417e-b7c9-53bb3c43e530`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `医療分野で評判の高い投資家である MEDIPHAR CNC Tan Binh は、持続可能性戦略の重要な部分として太陽エネルギーの利用を選択しました。 このプロジェクトは運営コストの削減に役立つだけでなく、MEDIPHAR CNC Tan Binh の社会的および環境的責任への取り組みを実証するものでもあります。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-802.jpg?alt=media&token=2fe79ee5-fd3c-4bc5-890b-e6087a1235ef`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `太陽光エネルギーシステム建設の分野で高い経験と専門知識を持つTPCons Investment and Construction Company Limitedが請負業者の役割を引き受けました。 プロジェクトの実施は厳密に行われ、システムの安全性とパフォーマンスが保証されます。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-803.jpg?alt=media&token=17b2108c-72ee-4dc4-a6bf-21bd324eadfe`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `このプロジェクトはクリーン エネルギー源であるだけでなく、投資家と請負業者間の協力が成功し、地域社会と企業の両方に持続可能な価値を生み出していることの証でもあります。 MEDIPHAR CNC Tan Binh と TPCons のエネルギー部門におけるイノベーションは、ベトナムの持続可能な発展に重要な貢献をしてきました。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-804.jpg?alt=media&token=b046e689-4088-49bb-a9a2-7e650b0f6be0`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-805.jpg?alt=media&token=fb4a47e6-2e9f-4ac9-83f0-696ac355c680`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-806.jpg?alt=media&token=f440da89-a585-44fc-903a-1c6d9f1a1088`,
      },
    ],
  },

  // Iot
  {
    id: 212,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Internet of Things", href: "#" },
    title: `EtherCATベアリング技術を活用した多軸コントローラの開発`,
    description: `従来方式：パルス信号で複数のモータを制御 新方式：ネットワーク信号で複数のモータを制御`,
    image: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture1_IOT.png?alt=media&token=deddcf5f-f915-4765-8315-ba6e17f0dd04`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `プロジェクト名：EtherCATネットワーク技術を活用した多軸コントローラの開発`,
      },
      {
        type: TYPE.TITLE,
        content: `従来方式：複数のモーターをパルス信号で制御`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          Pulse-based motion controller
          `,
      },
      {
        type: TYPE.LIST,
        items: [
          `制御ケーブルは非常にかさばり、高価です`,
          `1台のコントローラーで最大4～8台のモーターを制御可能 `,
          `遅延時間が長く、同期制御が保証されない`,
          `センサーはホストコンピュータに送信されなければなりません`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture2_IOT.png?alt=media&token=5a841b0f-12ad-4a6f-9dc3-1ec1aaf5f96b`,
      },
      {
        type: TYPE.TITLE,
        content: `新方式：ネットワーク信号を利用して複数のモーターを制御`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Network-based motion controller`,
      },
      {
        type: TYPE.LIST,
        items: [
          `LANケーブルを使用します。非常にコンパクトで安価で入手しやすいです。`,
          `最大 64 台のモーターのコントローラーで同期制御を保証 `,
          `ラグタイムがないか、ほとんどありません`,
          `センサーはサーボドライバーに送信されます（モーターの近くに配置されているため、長い配線は必要ありません）。`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture3_IOT.png?alt=media&token=48faaa6a-a3e2-4942-8299-2fcdfa684fc1`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `完全なシステムには以下が含まれます。`,
      },
      {
        type: TYPE.LIST,
        items: [
          `コンピュータに接続された 1 つのマスター モーション コントローラ`,
          `スレーブ タイプには、サーボ ドライバー (モーターの制御に使用) と I/O (入出力: センサーからの信号の受信に使用) が含まれます。`,
          `1つのネットワークには最大64のスレーブが存在します`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture4_IOT.png?alt=media&token=07615029-1ba3-4d34-a308-66d8e6f4e287`,
      },
    ],
  },
  {
    id: 213,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Internet of Things", href: "#" },
    title: `工業生産における人間とロボットのコラボレーション ソリューション`,
    description: `AI モデルは人々に関する情報を収集するために使用されます`,
    image: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture5_IOT.png?alt=media&token=ad708b63-4f24-4eac-b674-ee8430d9759e`,
    contents: [
      {
        type: TYPE.LIST,
        items: [
          `AI モデルは人々に関する情報を収集するために使用されます `,
          `運用エンジニアがホストコンピュータ経由でシステムを監視`,
          `衝突の危険性を検出して警告します`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture6_IOT.png?alt=media&token=a1fa4186-d274-406e-bcf8-353ae1815900`,
      },
      {
        type: TYPE.LIST,
        items: [
          `Windowsオペレーティングシステム上で動作する制御プログラム`,
          `プログラムはホスト コンピュータにインストールされます `,
          `警告LED: 赤、黄、青 `,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture7_IOT.png?alt=media&token=943a1da6-3230-4e80-9f81-b71d0a31ca4b`,
      },
    ],
  },
  {
    id: 214,
    date: "行進 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Internet of Things", href: "#" },
    title: `貨物移動ロボット用の人工知能アプリケーション`,
    description: `最大500kgの荷物を積載可能、無線接続と遠隔監視が可能な移動ロボット`,
    image: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture8_IOT.png?alt=media&token=c25c45e3-030f-410b-aa9c-6165f92fb867`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `移動式貨物ロボットシステムへの人工知能の応用`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture8_IOT.png?alt=media&token=c25c45e3-030f-410b-aa9c-6165f92fb867`,
      },
      {
        type: TYPE.LIST,
        items: [
          `移動ロボットは最大500kgまで荷物を積載可能`,
          `事前にプログラムされた軌道に従って移動します`,
          `ロボットは無線接続と遠隔監視が可能です`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture9.1_IOT.png?alt=media&token=16f1558e-de3d-4c55-915b-c1192d295654`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        知能移動ロボットコントローラの構造
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture11_IOT.png?alt=media&token=033c5113-c624-4d86-93ea-22413265f5b5`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `画像処理技術による識別結果`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture10_IOT.png?alt=media&token=9aa4fb32-965e-4480-8165-f11c6a9769f4`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `人間の周りの空間のモデル`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture12_IOT.png?alt=media&token=aac3e151-f8ea-4cf0-a7e5-697e6f4302a0`,
      },
    ],
  },
]

export const serviceBlogs: IBlog[] = [
  {
    id: 300,
    type: BlogType.READ_MORE,
    title: "IoTとは何ですか? 生活におけるIoTの定義と応用",
    description: `IoT とは、「Internet of Things」の略で、日常の物体を共通のインターネットに接続して、通信して連携できるようにすることを意味します。`,
    image: "https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-7.png",
    contents: [
      {
        type: TYPE.TITLE,
        content: "IoTとは何ですか?",
      },
      {
        type: TYPE.TITLE,
        content: "定義する",
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT とは、「Internet of Things」の略で、日常の物体を共通のインターネットに接続して、通信して連携できるようにすることを意味します。 これは、あなたと友人がテキスト メッセージでチャットしているときと同じで、あなたのランプ、冷蔵庫、さらには車さえもスマートフォンやリモコンからコマンドを受信できるようになります。
                
        そのおかげで、スケジュールに従って照明をオン/オフしたり、食品の期限が切れたら冷蔵庫に通知したり、車の渋滞回避を支援したりするなど、多くの興味深いことを自動的に行うことができます。
                `,
      },
      {
        type: TYPE.TITLE,
        content: `IoT誕生の歴史`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT の歴史はインターネットの発展と密接に関係しています。 なぜなら、コンピュータ同士が接続できるのはネットワークのおかげだからです。 スマートフォンやタブレットが今日の生活に欠かせないものになるにつれて、他のデバイスも徐々にこの巨大なネットワークに接続されています。

        2000年代にはIoTが注目され投資が大きく伸び、多くの革新的なプロジェクトが発表されました。 さらに、Wi-Fi や Bluetooth などのワイヤレス テクノロジーの出現により、接続が簡単になりました。 現在、ロボット掃除機、スマートホーム、スマート冷蔵庫など、IoTを活用した便利な製品が数多く登場しています。

        一般に、IoT は技術革新により徐々に発展してきた技術であり、現在ではデジタルトランスフォーメーション時代の重要な要素となっています。
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-3.png`,
      },
      {
        type: TYPE.TITLE,
        content: `IoTの重要性`,
      },
      {
        type: TYPE.TITLE,
        content: `日常生活の中で`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        すべてのものを結び付ける目に見えない糸のように、モノのインターネット (IoT) は生活を魔法に変えました。 IoT は生活を容易にするだけでなく、人間と機械の間のインタラクションが空間と時間に制限されなくなる新しい世界を生み出します。

        IoT はエネルギーと時間を節約します。 反復的なジョブや多大な追跡作業が必要なジョブは、IoT によって実行されるようになりました。 たとえば、スマート水やりセンサーは、日中の水やりの量と時間を正確に水やりしたり、暗くなると自動的にライトをオンにしたり、冷蔵庫内の食品の期限が近づいていることを知らせたりするのに役立ちます。

        IoT はコミュニティのアップグレードにも役立ち、交通を規制し、都市全体の渋滞を緩和するプロセスに参加できます。 あるいは、街路灯のオン/オフ、信号機の制御を行い、家庭のエネルギーを節約します。

        IoT はまだ十分に活用されていない大きな可能性を秘めており、人間の強さと知性が達成されると、もちろん良い方向に、私たちの生活を完全に変える特別なマイルストーンになることが約束されています。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-4.png`,
      },
      {
        type: TYPE.TITLE,
        content: `Trong doanh nghiệp`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        もちろん、モノのインターネット (IoT) は、企業が成長し、テクノロジーの継続的な変革に追いつくための絶好の機会も提供します。IoT がすでにビジネスに重要なメリットをもたらしている方法を以下に示します。
                    • 運用の最適化: センサーと接続されたデバイスは、パフォーマンス、機器のステータス、在庫ステータスに関するリアルタイム データの収集に役立ちます。
                    • 顧客エクスペリエンスの向上: サービス業界のコネクテッド デバイスは、顧客の好みを追跡し、関連する情報と提案を提供することで、パーソナライズされたエクスペリエンスを作成し、顧客のニーズをより適切に満たすことができます。
                    • 予知メンテナンス: IoT を使用すると、企業はデバイスのパフォーマンスを監視し、故障する前にメンテナンスや修理が必要になる時期を予測できます。
                    • セキュリティと監視の強化: リモート接続と監視により、危険な状況や侵害を防止し、迅速に対応できます。
                    • AI と機械学習でデータに基づいて行動する: 過去に収集されたデータと傾向を活用して、顧客の行動やイベントが収益に与える影響などを予測できます。
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-9.png`,
      },
      {
        type: TYPE.TITLE,
        content: `IoTの仕組みと運用`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        モノのインターネット (IoT) は、インターネットを介してデバイスやオブジェクトをリンクするネットワークです。 これらのデバイスまたはオブジェクトにはセンサーと接続チップが装備されており、データを収集してサーバーまたは制御エンジンに情報を送信できます。 IoT は 3 つの主なステップで機能します
                    • ステップ 1: データを収集する: IoT デバイスには、周囲の環境から情報を収集するセンサーが装備されています。 センサーは、ｐｇサーマルセンサーであってもよい。 8度、湿度、光、空気の質、その他多くのパラメータ。 収集されたセンサーデータはコンピューター言語にデジタル化されます。
                    • ステップ 2: データ送信: データは、インターネット、または Wi-Fi、Bluetooth、Zigbee、さらにはモバイル ネットワークなどの無線接続テクノロジを介して、IoT デバイスからサーバーに送信されます。 データはリアルタイムで、またはスケジュールされた設定に従って送信されます。
                    •ステップ 3: 処理とアプリケーション: サーバーまたは中央プラットフォームは IoT デバイスからデータを受信し、情報を処理します。 このデータを分析して、傾向の予測、運用状況、問題の警告などの有益な情報を生成できます。
                    つまり、IoT は、スマート デバイスがインターネット経由で相互に接続して対話する情報ネットワークを構築し、データの収集と共有を可能にして、さまざまな分野で人間の生産性と経験を向上させます。
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-5.png`,
      },
      {
        type: TYPE.TITLE,
        content: `IoTのメリットとデメリット`,
      },
      {
        type: TYPE.TITLE,
        content: `アドバンテージ`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        モノのインターネット (IoT) は、生活やさまざまな分野に多くの重要な利点をもたらします。 IoT には次のような利点があります。
                  • パフォーマンスの向上: IoT により、デバイスのアクティビティとステータスをリアルタイムで監視できます。 これにより、プロセスが最適化され、生産性が向上し、時間とリソースが節約されます。
                  • エネルギーの節約: IoT はエネルギー使用量の監視と制御に役立ちます。 たとえば、スマート システムは自動的に照明を消したり、温度を調整したり、デバイスの電力消費を管理したりできます。
                  • 顧客エクスペリエンスの強化: IoT により、企業は顧客の個人データと行動に基づいてサービスをカスタマイズして提供し、より優れた、よりパーソナライズされたエクスペリエンスを生み出すことができます。
                  • リモート管理: IoT により、デバイスとプロセスのリモート管理と制御が可能になります。 これは、危険な環境やアクセスが困難な環境にあるデバイスの監視と制御に特に役立ちます。 ページ。 9
                  • セキュリティの強化: IoT は、デバイスとネットワークに包括的な監視とセキュリティを提供し、脅威アクティビティの検出と防止に役立ちます。
                  • 新しいイノベーション: IoT は、スマート デバイスとデータの組み合わせに基づいて新しい製品やサービスを作成する機会を開きます。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `欠陥`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT は完璧なテクノロジーではなく、次のような克服する必要がある顕著な欠点もあります。
                    • 個人情報の漏洩: デバイスは非常に詳細な個人情報を収集する可能性があるため、プライバシー侵害に対する懸念が深刻な問題となっています。
                    • データ品質: IoT は、さまざまなソースから大量のデータを収集します。 ただし、データは必ずしも正確で信頼できるとは限りません。 不正確なデータは誤った決定につながる可能性があります。
                    • 複雑な接続と相互作用: 何百万ものデバイスが相互に接続されている場合、IoT ネットワークは複雑になり、管理が困難になることがあります。 これには、複雑で高性能なネットワーク管理システムが必要です。
                    • インターネットへの依存: IoT が機能するには、インターネットへの常時接続が必要です。 ネットワークが中断されたり、問題が発生したりすると、IoT デバイスが役に立たなくなる可能性があります。
                    • 導入コスト: IoT システムの導入には、インフラストラクチャとソフトウェアの両方に多額の投資が必要となる場合があります。 企業は、投資能力と期待される利益を慎重に検討する必要があります。
                    • データ管理の複雑さ: IoT デバイスからの大量のデータには、強力なデータ管理および分析システムが必要です。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `IoTの応用`,
      },
      {
        type: TYPE.TITLE,
        content: `Trong ngành sản xuất xe, công nghiệp ô tô`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        車両製造および自動車業界では、IoT が画期的なアプリケーションをもたらしました。 スマート センサーと接続は、コンポーネントの追跡から状態予測まで、サプライ チェーンをより効果的に管理するのに役立ちます。 IoT システムは車両の品質とメンテナンスをリアルタイムでチェックすることにも役立ち、それによってパフォーマンスを最適化し、車両の寿命を延ばします。

        IoT を使用して製造された車両からデータを収集することは、デザインとユーザー エクスペリエンスの向上にも役立ちます。 これは、IoT がこの業界に大きな変化をもたらし、画期的な発展をもたらしたことを証明しています。
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-6.png`,
      },
      {
        type: TYPE.TITLE,
        content: `建設業界では`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        建設業界にとって、IoT はスマート ホームやスマート ビルディング プロジェクトに参加する際に多くの貢献をします。

        IoT により、照明、サーモスタット、セキュリティ デバイス、その他のホーム デバイスなどのホーム デバイスをインターネットに接続できるようになります。 これにより、遠隔制御と管理が可能になり、エネルギーを節約し、セキュリティを強化します。 ユーザーは携帯電話または音声でデバイスを制御できるため、安全で便利な体験が生まれます。

        スマートシティでは、IoT は交通管理、エネルギー、廃棄物管理、その他都市生活の多くの側面で重要な役割を果たしています。 センサーと関連する監視システムは、交通の流れ、空気の質、エネルギー使用に関するデータの収集に役立ちます。 これは住民の生活の質の向上に役立ちます。

        IoT は建設プロジェクトにも大いに役立ち、建設プロジェクトの進捗状況、ステータス、パフォーマンスを監視できるようになります。 スマートセンサーと監視システムは、材料の精度、完成時間、装置のパフォーマンスの測定に役立ちます。 これは、建設プロセスを最適化し、スケジュールの遵守を確保し、建設品質を管理するのに役立ちます。
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-7.png`,
      },
      {
        type: TYPE.TITLE,
        content: `業界内
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT は産業界でその利点が証明されており、生産と工場管理の方法に革命をもたらしています。 製造プロセスの追跡と最適化から装置の監視と保守に至るまで、IoT は製造のパフォーマンスと効率の向上に貢献してきました。

        収集されたデータは、問題の予測とリソースの最適化に役立ち、それによって損失を最小限に抑え、需要を満たす能力を高めます。 これらは、IoT が産業の持続可能な開発とイノベーションを促進する上で重要な役割を果たしていることを証明しています。
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-10.png`,
      },
      {
        type: TYPE.TITLE,
        content: `Trong ngành bán lẻ`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        小売業界では、IoT が新しいアプローチをもたらしました。 スマートセンサーは在庫管理に役立ち、詳細な製品情報を提供します。 強力なアシスタントとして、IoT は購入者の電話に直接製品に関する詳細情報を提供します。

        ぴったりの商品のご提案から、産地や特徴などの情報まで、お買い物がもっと楽しくなります。 自動化により注文から配送までのプロセスが改善され、効率的でダイナミックな販売環境が構築されます。
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-11.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `上記の記事では、IoT とは何かを説明するとともに、個人生活やコミュニティ生活におけるその素晴らしい応用例を読者に紹介しています。`,
      },
    ],
  },
  {
    id: 301,
    type: BlogType.READ_MORE,
    title: `2023 年の産業用 IoT トレンド`,
    description: `
    IoT（モノのインターネット）技術は、
    近年、産業トレンドは大きく発展しています。 そして2023年には
    今年は産業用IoTにとって有望な年です……`,
    image: `https://eco-smart.biz/wp-content/uploads/2023/03/digital-marketing-agency.png`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `2023 年の産業用 IoT トレンド
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT（モノのインターネット）技術がトレンドになっている
        産業は近年大きく発展しました。 そして2023年は
        産業用IoTにとって有望な年となる。
        2023 年には、多くの注目すべき産業用 IoT トレンドが出現します。 そこには
        IoT と人工知能などの他のテクノロジーを組み合わせることができます。
        ブロックチェーン、クラウドなど、業界向けの新しいソリューションを作成します。
        それに伴い、IoT アプリケーションも大幅に拡大し、発展していきます。
        製造、輸送、エネルギー、ヘルスケア分野でのアプリケーションが含まれます。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.thegioimaychu.vn/blog/wp-content/uploads/2021/01/TheGioiMayChu-Blog-Image-IoT-trends.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        増大する市場の需要に応えるために、企業は明確に理解する必要があります。
        2023 年の優れた産業用 IoT トレンドを応用できるようにする
        最新のソリューションにより生産性が向上し、コストが削減され、柔軟性が向上します。
        作業者の安全を確保します。
   
        2023 年には、企業が注目する 5 つの注目すべき産業用 IoT トレンドがあります。
        注意すべき点は次のとおりです。

              1.産業用IoTにおけるセキュリティと情報セキュリティの強化
              2. IoTと人工知能を組み合わせて生産性と効率を向上
              製造
              3. IoTをプラットフォームなどのサービスビジネスモデルに活用
              サービス（PaaS）
              4. IoT エッジ コンピューティング ソリューションと IoT のクラウドへの統合
              5. 医療および健康分野における IoT アプリケーション。
              こうした傾向により、企業は新しいソリューションを適用できるようになります
              生産性を向上させ、市場での競争力を高めるための最新かつ最先端の製品です。`,
      },
    ],
  },
  {
    id: 302,
    type: BlogType.READ_MORE,
    title: `2023 年の IoT 開発の見通しとトレンド`,
    description: `モノのインターネット (IoT) テクノロジーは開発ゼロの状態にあります
    やめてください。 非常に短期間で、IoT はアプリケーション ツールから変わりました
    現時点では使用制限とセキュリティ関連の問題……。`,
    image: `https://rtc.edu.vn/wp-content/uploads/2023/10/Tuong-lai-cua-su-phat-trien-IOT.png`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `2023年のIoTの展望と開発動向
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        モノのインターネット (IoT) テクノロジーは絶え間なく進化しています。
        非常に短期間で、IoT はツールからアプリケーションへと変化しました。
        制限やセキュリティ関連の問題が解決され、IoT は今や 1 つのものになりました
        世界的な現象であり、大企業の 48% が使用しています。

        以前は、IoT と M2M は低帯域幅のアプリケーションと関連付けられることが多かったですが、
        同様のデータ使用を必要とする通信機器や計測機器など
        比較的低いため、中央サービスが分析するための比較的無害なデータが提供されます。
        事業の蓄積。 2023 年には、さらなるレベルに移行します。 しましょう
        どのような IoT の発展とトレンドが予想されるかを確認する
        2023年。

          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://rtc.edu.vn/wp-content/uploads/2023/10/Tuong-lai-cua-su-phat-trien-IOT.png`,
      },
      {
        type: TYPE.TITLE,
        content: `2023 年の 5 つの IoT トレンド`,
      },
      {
        type: TYPE.TITLE,
        content: `アプリケーションの帯域幅が高くなる`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `最近まで、IoT はアプリケーションが使用するデータの種類と量によって制限されていました。
        それを使用すれば対処できます。 しかし、2023 年には数セントになるでしょう。
        IoT は、大容量のデータを使用する高帯域幅アプリケーションの分野に移行しつつあります
        大きなデータはより高速に送信されます。 そしてこれは大幅な拡大につながります
        テクノロジーの可能性について説明します。`,
      },
      {
        type: TYPE.TITLE,
        content: `リアルタイムデータ処理`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        帯域幅が増えると、機能も向上します。 だから私たちはもっともっと見るでしょう
        多くの企業は IoT を使用して、一元化されたサービスを使用してリアルタイムでデータを処理しています
        中央。 IoT テクノロジーの主な問題の 1 つは、膨大な量のデータです。
        作成されました。

        機械学習 (ML) とマシンツーマシン (M2M) 処理が実装されていますが、
        データ分析を高速化しますが、収集と収集の間にはまだ遅延が必要です
        ほとんどの分野でのデータ処理/分析。 2023 年にはさらに押し上げられるだろう
        さまざまなシナリオでのリアルタイム分析に優れています。
        ビデオも含めて。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `ドローンと自律型機械の応用
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        2022 年 11 月、Science Direct はモノのインターネットに関する記事を公開しました
        物体。 記事の内容は、操作を自動で実行できるものについて言及しています
        子供の介入なしで AI アルゴリズムを使用する必要がある
        人々。 現在まで、これを実現できるアプリケーションはほとんどありません。 しかし、
        この分野では、今年を通じて顕著な成長が見込まれるでしょう。

        今後普及が見込まれる最大の成長分野の 1 つ
        短期間のうちに輸送と物流部門が増加します。 通常、いつ
        このことについて話す人が最初に思い浮かべるのは、AGV 自動運転車です。 次は家です
        スマート倉庫。 自動フォークリフトから自動ラックシステムへ
        それらの施設で人間が行う作業を完全に置き換えます。

        Amazon の将来の収益性モデル全体が以下に基づいていることは誰もが知っています。
        この分野での早期採用者になることについて。 考慮する
        2022 年 6 月、Amazon Robotics は 520,000 台を超えるマシンを
        世界中の倉庫および配送センター。
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://rtc.edu.vn/wp-content/uploads/2023/10/Xu-huong-phat-trien-cua-IoT-1.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `アプリケーションの監視`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT は、天気予報からテーブルの使用状況まで、多くの監視アプリケーションに使用されています
        仕事とレジオネラ菌のコンプライアンス。 しかし明らかに欠けているのはメリットです
        監視テクノロジーは重要な決定を自動的に行うことができます
        品質を高めます。

        人工知能 (AI) および ML テクノロジーをデータ容量と組み合わせて活用します。
        IoT の進歩により、真に自律的な監視の機会が開かれ、管理者が解放されます
        不必要な警告を防ぎ、システムの中断を防ぎます。
        必要なサービスやプロセス。

          `,
      },
      {
        type: TYPE.TITLE,
        content: `高度なセキュリティ`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        セキュリティは IoT にとってますます弱点となっています。 進行中
        初期のアプリケーションを開発する場合、セキュリティの問題は残念です。 そして、
        システムが補完され、開発され、さらに多くの脆弱性が発見され、残されます
        ハッカーの侵入口が増える可能性があります。

        これは、サイバーセキュリティがこれまでも、そしてこれからも IoT の最優先事項であり続けることを意味します。 どちらもフィールドで
        新しいテクノロジーでは、セキュリティ、接続性、統合を優先する開発に重点が置かれます。
        古いシステム。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `まとめ`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `長年にわたる急速な発展により、モノのインターネット (IoT) は
        現在の生活やビジネスにおいて無視できない事実
        壮大な。 IoT は、私たちが周囲の世界と対話する方法を変えました。 ステップオーバー
        2023 年、IoT は引き続き力強い成長を遂げ、トレンドや発展がもたらされる
        約束に満ちています。
          `,
      },
    ],
  },
  {
    id: 303,
    type: BlogType.READ_MORE,
    title: `IoTセンサーとは何ですか? センサーの種類と用途`,
    description: `今日のデジタル時代のIoT (モノのインターネット) センサーは変化しています
    私たちの周囲の世界との関わり方を、強力に、あるいはそうでなく変える
    開発をやめる。`,
    image: `https://iboss.vn/wp-content/uploads/2018/08/Google-Cloud-Looks-to-Streamline-IoT-Management-App-Developer-Magazine_0yq4xr07.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `IoTセンサーとは何ですか? センサーの種類と用途`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `今日のデジタル時代のIoT (モノのインターネット) センサーは変化しています
        私たちの周囲の世界との関わり方を強力かつ強力に変革します
        常に発展しています。 これらはユーザーを支援する重要なツールです
        環境やデバイスから情報を収集し、接続してデータを共有する
        この資料はインターネット経由で入手できます。`,
      },
      {
        type: TYPE.TITLE,
        content: `Cảm biến IoT là gì?`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT (モノのインターネット) センサーは、接続されたデバイスまたはセンサー システムです
        インターネットに接続して周囲の環境から情報やデータを収集し、
        次に、この情報を処理および追跡するために他のサーバーまたはデバイスに送信します。
        遠くから。 システム構築に重要な役割を果たすIoTセンサー
        リアルタイムデータの収集を可能にする、物理世界に関連する情報ネットワーク
        温度、湿度、光、物質などのさまざまなソースからリアルタイムかつ自動的に
        風量、振動、圧力、場所、その他多くの要因。

        IoT センサーは、Wi-Fi、
        アプリケーションに応じて、Bluetooth、LoRaWan、Sigfox、Zingbee、その他多くのプロトコル
        特定のツールと技術的要件。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://savvycom.vn/wp-content/uploads/2023/07/4-Vi-Du-Ve-IoT-Tao-Nen-Dot-Pha-Trong-Cuoc-Song-Hang-Ngay.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `IoTセンサー技術のメリット
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT センサーの主な利点の 1 つは、データを送信できることです。
        無線。 これは、遠隔地またはアクセスが困難な場所に設置されていることを意味します
        閉じる、クラウド経由でデータをセンターまたはサーバーに送信することは可能です
        雲。

        IoT センサーを使用すると、さまざまなソースからのデータを簡単に取得できるようになります。
        を分析して、使用されている分野に応じてプロセスを改善できます。
        センサーからのデータが IoT 分析の成長を可能にする
        継続的に収集されるすべての情報は、業界の改善に役立つため、
        さまざまな活動。

        データセンサーはデータに依存するため、企業からの需要が高い
        うまく機能し、段階的に改善されます。 IoT プロトコルを考慮する必要がある
        デバイスのパフォーマンスを最大限に向上させて使用できます。
        IoT センサーのもう 1 つの利点は、環境を簡単に分析できることです。
        簡単。 スマートホーム、農業、ヘルスケアで使用可能
        健康、生産、輸送。

        たとえば、IoT センサーはスマート ホーム システムで使用できます。
        部屋の温度と湿度、さらには空気の質も監視するスマートな機能
        ガス。 工場の温度監視にIoTセンサーを導入した別の事例
        そして機械の圧力。 こうすることで破損や事故を防ぐことができます
        人命への潜在的な影響。

        農業では、ワイヤレス IoT センサーを使用して温度を監視できます
        水循環を改善しながら土壌水分と植物の成長を促進します
        フィット。
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://media-cdn-v2.laodong.vn/storage/newsportal/2022/6/30/1062472/Anh-Chup-Man-Hinh-20-03.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `IoTセンサーの種類`,
      },
      {
        type: TYPE.TITLE,
        content: `温度センサー`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        これらのセンサーは温度を測定し、次のような多くのアプリケーションで使用されます。
        温度制御、HVAC システム、医療機器。 使用できます
        ウェアラブル、ヘルスケア、産業用IoT、スマートビルディングなど
        明るい。

        IoT 温度センサーは、熱源から放出される熱量を測定し、これらを分析できます。
        このソースの急激な変化をデータ化します。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `
        特定範囲内の動きを検知して使用するセンサーです。
        セキュリティカメラ、盗難警報器、ウェアラブルフィットネスデバイスなどのアプリケーションで
        わかった。

        例: 走ったりジャンプしたりしている場合、モーション センサーは運動の種類を測定できます。
        実行され、IoT デバイスを介して以下のユーザーにデータを提供します
        消費カロリーのデータ形式。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `近接センサー`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        これらのセンサーは物体や人の存在を検出して使用されます。
        アクセス制御システム、ロボット、セキュリティ システムなどのアプリケーションで使用されます。
        すべての車。`,
      },
      {
        type: TYPE.TITLE,
        content: `Gia tốc kế`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `加速度計は、物体の加速度と重力の変化を検出できます。
        これらは通常、航空機や艦隊に搭載されています。
        このテクノロジーのもう 1 つの人気のあるアプリケーションはスマートフォンです。
        明るい。 たとえば、加速度計は携帯電話が直立位置にあるかどうかを検出します。
        横向きに設定し、それに応じて電話の画像を調整します。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `ジャイロスコープ`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `このタイプのセンサーは主にスマートフォンで使用されており、
        物体の方向と角速度を測定し、維持します。 彼らは家族よりも確かな存在です
        タコメーターは傾きと水平方向を測定できるため
        もちろん、サイズや用途が異なる他のタイプのジャイロスコープもあります
        飛行機、カーナビ、ロボット、デジタルカメラ、ゲームなどで異なる
        モバイルプレイ。`,
      },
      {
        type: TYPE.TITLE,
        content: `湿度センサー`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        これらのセンサーは空気中の湿度を測定します。 体系的に使用されています
        暖房、換気口、エアコン。 IoT 湿度センサーの一般的な用途は、気象監視、室内空気質の病気の監視です。
        病院、ホテル、スマートホーム。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `圧力センサー`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        これらのセンサーは、気体や液体の圧力変化を測定します。 変化があったとき
        圧力の変化に応じてセンサーが IoT デバイスに情報を送信し、その情報が表示されます
        アプリケーションまたはソフトウェアに表示され、管理者が情報を把握できるようになります。
        突然の変化。

        このタイプの IoT センサーは、潜在的な漏洩の監視を管理するために使用できます。
        あらゆる施設の水システムまたはタンク内の液体。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `光センサー`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        これらの IoT センサーは、光の強度と色を測定します。
        照明制御やセキュリティシステムなどの用途に使用されます。
        安全保障と農業。

        光センサーは、ソリューションに適応するための非常に便利なデバイスの 1 つです
        環境内の照明状態を監視する必要がある場合の IoT ソリューション
        違う。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `光学センサー`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        光学センサーは、強度などの光の変化を検出できます。
        波、周波数、偏波。

        これらのセンサーは、モバイル業界、特に次の分野で非常に人気があります。
        車は自動で運転することができます。 さらに、光学センサーは電気にも使用されています。
        スマートフォンが受光する光の強さを調整し、
        写真を撮ると、人が外出しているときに画面の明るさを自動的に調整します
        または建物内。

        光センサーはIoT製品のエネルギー節約に役立ちます
        ユーザー情報を表示するために使用する光の量を調整します。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `赤外線センサー
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        これらの IoT センサーは赤外線を発し、唇を識別することができます。
        周囲の学校。 さらに、熱を検出して分析することもできます。
        物体、動物、人が発するエネルギー。

        赤外線センサーの用途は医療機器や器具で非常に一般的です
        ユーザーが自分の血流と圧力を記録できるようにするため、着用します。 もし、あんたが
        スマートウォッチまたはスマートブレスレットをお持ちの場合は、センサーが装備されています
        赤外線。
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/2j2c2Ho1vsKz1OKpKEa3LGgj01JRLdYxrmRK0Xks.jpg
          
          `,
      },
      {
        type: TYPE.TITLE,
        content: `IoTセンサーの応用
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT (モノのインターネット) センサーは世界との関わり方を変えました
        その周り。 インターネットに接続して受信できるセンサーです。
        環境や他のデバイスからデータを収集、送信、分析します。 ここにあります
        日常生活やさまざまな分野におけるIoTセンサーの応用例
        違う：
          `,
      },
      {
        type: TYPE.TITLE,
        content: `スマートホーム (スマートホーム):
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        • エネルギー管理: IoT センサーは、電力と水の消費量を監視するのに役立ちます。
        これにより、エネルギー使用が最適化され、コストが節約されます。
        • 安心・安全：警報センサー、監視カメラ、煙センサー
        インシデントが検出されたときに携帯電話にアラートを送信する機能
        試す。
        • リモコン：照明、温度、家電製品を制御できます。
        離れた家族をスマートフォンで。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `健康管理:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        • 健康状態のモニタリング: IoT センサーは心拍数、血圧、血糖値、
        個人の健康状態を監視するためにデータを医師または医療システムに送信します。
        • スマートメディスン: センサーは医薬品の正しい使用を監視できます。
        必要に応じてリマインダーを送信します

          `,
      },
      {
        type: TYPE.TITLE,
        content: `スマート農業:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        • 作物管理: センサーが土壌水分、温度、植物の成長を測定します。
        農家が作物をより効果的に管理できるようにします。
        • 自動灌漑: センサーが状況に基づいて散水システムを制御します。
        天候と土壌水分。

          `,
      },
      {
        type: TYPE.TITLE,
        content: `インダストリー 4.0:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        • 予知保全: センサーが機械や生産設備の状態を監視し、
        障害とメンテナンスの時間を予測します。
        • 在庫管理: センサーはチェーン内の商品の循環を追跡するのに役立ちます。
        供給を促進し、在庫管理を最適化します。
        • スマートな交通手段:
        • 交通監視: センサーは交通の流れに関する情報を記録します。
        特にリアルタイムでは。
        • 自動運転車: センサーと GPS システムにより自動運転車が可能になります。
        周囲の環境を認識し、車両を安全に制御します。
        • 資産運用管理：
        • 位置追跡: GPS センサーは、車などのモバイル資産の管理に役立ちます。
        コンテナや産業機器など。
        • セキュリティ: センサーは、許可されていない動きや動きがある場合に警告します。
        財産詐欺。

          `,
      },
      {
        type: TYPE.TITLE,
        content: `環境と天然資源:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        • 環境監視: センサーは空気、水、土壌の品質を監視します。
        環境を守るベルト。
        • 希少動物の保護: センサーは外観と動きの監視に役立ちます
        希少な動物や植物を保護するために移動すること。
        • エネルギー管理：
        • 省エネ: センサーが省エネ機器のパフォーマンスを監視します。
        エネルギーを分析し、エネルギー使用を最適化する方法を提案します。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `スマートシティ:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        • スマートトラフィック: センサーは交通の流れとトラフィックの管理に役立ちます
        街路照明と公共交通機関システムを最適化します。
        • 環境管理: センサーは空気と水の質を監視するのに役立ちます。
        廃棄物と水の管理も行います。
  まとめると、IoT センサー アプリケーションは接続性と最適化を推進してきました。
  生活や産業のさまざまな側面で、社会に大きな利益をもたらします。
  利便性と環境保護。
          `,
      },
      {
        type: TYPE.TITLE,
        content: `まとめ
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT センサーは、環境や環境からデータを収集する上で重要な役割を果たします。
        デバイスにより、重要な情報を取得し、プロセスを最適化できるようになります
        さまざまな分野で。
          `,
      },
    ],
  },
  {
    type: BlogType.SERVICE,
    id: 304,
    title: `商品サプライチェーンにおけるIoT`,
    description: `スマート ロジスティクスは 4.0 テクノロジー時代にますます力強く成長しています
    優れた物流サプライチェーン管理を実現します。 その中でも公立
    IoT技術は業務を円滑に進める上で非常に重要な役割を果たします。 ただし、いいえ
    このテクノロジーについては誰もが知っています。 そこで、以下の記事が参考になります
    それについてもっと理解してください！
      `,
    image: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-1.jpeg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `スマート物流におけるIoTテクノロジーの役割`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマート ロジスティックは 4.0 テクノロジー時代にますます力強く成長しています
        物流サプライチェーン管理の卓越性を目指します。 その中でもIoT技術は、
        スムーズな運転のために非常に重要な役割を果たします。 ただし、全員ではありません
        このテクノロジーについて知っています。 そこで、以下の記事を読むとさらに詳しく理解できると思います！
            `,
      },
      {
        type: TYPE.TITLE,
        content: `スマート物流におけるIoTの役割`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT - モノのインターネットは、接続されたデバイスとオブジェクトのシステムです
        インターネット。 これにより、オブジェクトとデバイスが相互にデータを収集し、交換できるようになります。
        より正確に言うと、IoT はインターネットの価値をあらゆるものに広げ、インターネットのインテリジェント化を促進します。
        よりインテリジェントに。

        現在、IoT はプロセスを実現するためにスマート ロジスティクスに適用されることがよくあります。
        最適な操作性。 では、IoTのメリットとは何でしょうか?`,
      },
      {
        type: TYPE.TITLE,
        content: `コストを削減する`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマート ロジスティクスでは、IoT アプリケーションが在庫管理手数料のすべてのコストを削減します。
        在庫からメンテナンス費用まで。 したがって、労働力と利便性の最適な利用を確保します。
        ユーティリティと収納スペース。

        つまり、物流システムは資源を無駄にせず、コストを削減します。
        利益を管理し、増加させます。`,
      },
      {
        type: TYPE.TITLE,
        content: `リアルタイム追跡`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        このテクノロジーを使用すると、製品や設備を迅速かつ正確に追跡できます
        サプライチェーンを移動するときよりも。

        GPS モニターなどの IoT デバイスは、出荷場所からすべてを追跡できます
        貨物の現在の温度を把握し、役立つ最新情報を提供します。
        スマート ロジスティックのマネージャーは、自社のサプライ チェーンがどのように運営されているかを理解しています。

        リアルタイム追跡は、特に高額商品の場合に非常に役立ちます
        または温度に敏感な商品。 バッチ・チェーン・オブ・カストディのすべての段階
        IoTデータとデバイス登録を使用して店舗を正確にマッピング
        バッグ。 IoT デバイスは、貨物がヒートゾーンを離れたときに自動的にフラグを立てることができます
        安全性。`,
      },
      {
        type: TYPE.TITLE,
        content: `シームレスなワークフロー`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-2.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT を使用すると、倉庫への、または倉庫からのサプライ チェーンのフローを監視できます。 そこから、
        管理者はロボットを使用して特定の商品を遅滞なくピックアップできます。
        または、収集されたデータを使用して、最適なレイアウトと構成を決定することもできます。
        倉庫用。

        さらに、書類の管理にも多くの時間がかかります。
        操作する。 EDI電子データ交換ツールとIoTを組み合わせて活用することで、
        企業は最も煩雑な事務処理を自動化できます。
        ドライバーの運送業者の保証金の確認など
        船荷証券をロードまたは処理します。

        したがって、シームレスなワークフローを維持することが容易になります。`,
      },
      {
        type: TYPE.TITLE,
        content: `スケーラビリティの向上`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT アプリケーションは、あらゆる平方メートルのストレージ スペースを最適化するのに役立ちます。 データあり
        過去のデータから、時間、空間、インフラ、ヘッドを計算できます
        規模を拡大するには投資が必要です。

        さらに、IoT により、企業のネットワーク システム内で 1 つの倉庫を別の倉庫と統合できます。
        より発展した産業。
            `,
      },
      {
        type: TYPE.TITLE,
        content: `予測精度の向上`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマートロジスティクスでは、IoT によりデータ収集活動が大幅に改善されます。 それはのためです
        常時または一定の間隔でデータを収集できるため、コストの節約に役立ちます
        手動収集よりも時間がかかります。 したがって、影響を最小限に抑えることができます
        データ収集における人的ミスの可能性。

        ただし、IoT テクノロジーにはソフトウェアとバックエンド ソリューションを伴う必要もあります
        互換性がある。 IoT システムは需要予測ソフトウェアと並行して設計する必要があります
        IoTデータを確実に有効活用するためのロジスティックスを提供します。

            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-3.jpeg`,
      },
      {
        type: TYPE.TITLE,
        content: `高度な自動化`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT は人間の介入なしに機械とデバイスを接続します
        これは、倉庫機能の自動化と向上に有利です。
        そこから、ビジネス計画を迅速に展開し、利益目標を達成できます。
        利益。

        たとえば、顧客が自動化されたビジネスでオンライン注文をしたとします。
        倉庫業務を効率化します。 顧客が注文する前に、ラックシステムは
        倉庫のインテリジェンスは、次の方法で製品の在庫状況を検出しました。
        計量皿。 そのおかげで、受注残が発生するリスクはありません。

        自動ピッキングシステムはコンピュータと機械搬送システムからピッキング命令を受け取ります
        商品はベルトコンベアに乗って梱包ステーションに送られます。 荷物の発送中
        顧客に届けると、IoT センサーが荷物を追跡し、荷物が確実に梱包されていることを確認します。
        慎重に扱われます。

            `,
      },
      {
        type: TYPE.TITLE,
        content: `スマート物流におけるIoTの活用`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマート物流チェーンでは、IoT テクノロジーが一般的に適用されることがよくあります
        次のような一部のデバイスでは:
              • スマート ラックは在庫レベルを自動的に検出します。
              ページ。 29
              • スマート温度計とサーモスタット。
              • スマートな車両とデバイス。
              • スマート EDI システムにより、認証情報と管理情報が自動的に検証されます。
              書類仕事。
              • スマートビルディングオートメーションシステム。
              • ロボットの自動化。

            `,
      },
      {
        type: TYPE.TITLE,
        content: `IoT のユースケースを特定する`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        各ビジネスの IoT システムは通常異なります。 それは場合によるので
        目的とニーズに応じて適切なテクノロジーを導入します。 決定する
        適切な IoT ユースケースについては、次の各質問に順番に答えてください。
              • サプライチェーンのどこで最も速く、最も正確なデータを収集する必要がありますか?
              応答？
              • 当社のサプライチェーンにはどのような時代遅れのテクノロジーが存在しますか?
              友達？
              • 需要予測に最も関連するデータはどれですか?
              • サプライチェーンに影響を与える地理的および物流的要因は何ですか?
              適切なユースケースを正しく特定することで効率の向上に貢献します
              スマートロジスティクスの

            `,
      },
      {
        type: TYPE.TITLE,
        content: `TPMはスマート物流にIoT技術を提供します`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマート物流におけるIoTテクノロジーの重要な役割は否定できません
        受け取る。 完全かつ円滑なサプライチェーンが不可欠です
        これらの最新テクノロジー。

            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-4.jpeg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        チェーンにテクノロジー ソリューションを提供するための信頼できる住所が必要な場合
        サプライヤーをお持ちの場合は、すぐに TPM にご連絡ください。 5年以上の経験を持ち、
        オートメーション業界において、当社は多くの国内外の大企業とパートナーであることを誇りに思っています。
        水。

        TPMに来れば、スタッフからアドバイスや献身的なサポートを受けるだけではありません
        当社の専門家は専門的にソリューションを提供します
        最適なソリューションを最適なコストで提供します。

        つまり、IoT技術がなければスマート物流は効率が低下する
        結果が得られ、運用中に多くの困難に遭遇します。 だからこそ企業は、
        サプライチェーンを完成させるIoT技術を検討・確立する。 記事に期待
        上記を書くと、IoT の役割を完全に理解するのに役立ちます。

            `,
      },
    ],
  },
  {
    id: 305,
    type: BlogType.SERVICE,
    title: ` ヘルスケアにおけるIoT`,
    description: `スマートヘルスケアデバイスはIoTアプリケーションの1つです
    医学で最も人気があります。 モノのインターネットがどのように変化しているかを学びましょう
    この記事では医療 - ヘルスケア分野について説明します。
      `,
    image: `https://www.elcom.com.vn/storage/uploads/images/6j4tXzXzopIsAmfhIB2gCKfFK91PWUOubJdTwVRk.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `医療における IoT の最良の応用 - ヘルスケア
        強い`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマート ヘルスケア デバイスは、ヘルスケアにおける IoT アプリケーションの 1 つです
        最も人気のある。 モノのインターネットが医療分野をどのように変えているかを学びましょう -
        この記事ではヘルスケアについて説明します。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/6j4tXzXzopIsAmfhIB2gCKfFK91PWUOubJdTwVRk.jpg
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        モノのインターネット - モノのインターネットは、何度も言及されている画期的なテクノロジーです。
        過去10年以内に。 この技術のおかげで、スマートデバイスが次々と登場しています
        生命は人間の生活に不可欠であり、不可欠なものとなっています。

        現代社会では携帯電話やスマートウォッチがよく使われています。 日
        現在、IoT デバイスは小売業や物流業から小売業に至るまで、ほぼすべての業界に導入されています。
        製造。

        しかし、医療におけるモノのインターネットについて聞いたことがありますか? 薬が立たない
        実際、それは最も先進的な活動分野の 1 つです。 そうではない
        企業が IoT デバイスの力を利用して、
        医師と患者に、より効果的な製品とソリューションを提供します。

        医療およびヘルスケア分野における IoT システム導入の範囲は非常に印象的です。
        専門家は世界のIoMT（Internet of Medical Things）市場が拡大すると予想している
        2032 年までに最大 9,500 億ドルに達する大幅な成長。
       
        1. 医療におけるモノのインターネットとは何ですか?
        簡単に言えば、モノのインターネットはデバイスの使用を表す概念です
        サポートされている環境でデータを収集するためのスマート デバイスとセンサー
        高度なソフトウェアによって。

        機械はまだ多くの分野で人間を超えることはできませんが、
        データ分析は間違いなく彼らの強みです。 部分的または完全な IoT の使用
        データセットと関連プロセスの追跡を自動化できます。 もの
        これは医療活動に不可欠です。

        では、医療におけるモノのインターネットとは何でしょうか?また、それは業界にどのような革命をもたらすことができるのでしょうか?
        このキャリアはどのようなものですか？

        IoTのアイデアを医療に応用し、輸送時の保管温度を向上
        ワクチンと薬剤は遠隔制御され、患者は自分の症状を正確に監視します
        さまざまな種類の病気に対処するために、薬を正しく、最も効果的に使用する必要があります。
        医師の診察の予約など。磁気モニタリング機能のおかげでこれらすべてが可能になります。
        シームレスな医療技術機器とは程遠い。

        2. IoMTのメリット

        世界の医療システムは常に進化し、改善されていますが、
        は依然として大きな課題に直面しています。 ただ道を見つけるだけではない
        新しい病気や古くから存在する難病の治療だけでなく、
        限られた理解、人間による症状の特定と監視の失敗、
        病気を予防するための習慣を身につけましょう。
       
        では、IoT は医療およびヘルスケア分野にどのようなメリットをもたらすのでしょうか。

        2.1. 遠隔医療

        ヘルスケアにおける IoT の最も目に見える利点の 1 つは、
        医師はクライアントの健康状態を監視します。 お客様は下記までご連絡いただけます
        いつでも、どこからでもサポートが受けられます。

        これにより、診察と治療のプロセスがより便利になり、タイムリーなケアが提供されるだけでなく、
        救急医療だけでなく、田舎でも人々がより簡単に医療にアクセスできる機会でもあります
        中心部から離れた住宅街。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/WqgKOAjSvMQiBM2W1bTGELz0vFG5bV8cFmQ5RYae.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        2.2. 病気の予防

        治療よりも予防​​が大切です。 そこで、ヘルスケアIoTソリューションが提供するのは、
        監視ツールは、顧客が自分の健康状態を積極的に監視できるように支援します。
        習慣を調整し、ライフスタイルを改善し、問題の兆候を早期に検出します
        根本的な健康状態。

        2.3. 検査や治療にかかる費用と手間を軽減

        IoT を活用した医療機器とセンサーは、患者の健康状態の監視に役立ちます
        積極的に健康を維持できるため、専門家に相談する必要が少なくなります。
        同時に、アプリケーションやデバイスの助けを借りて大量のデータが収集されます。
        スマートヘルスケアにより専門医への訪問がより効率的になり、
        医師は必要な情報のほとんどを手元に持っているため、より迅速に対応できます。

        2.4. 医療データにアクセスできる

        以前は、医療機関に行ったり医師の診察を受けたり、多くの住宅設備が必要でした。
        自宅で血圧、心拍数、血糖値、血中酸素濃度などを測定できます。
        しかし今では、時計のようなコンパクトで便利な IoMT デバイスを使用できるようになり、
        上記のすべての指標を定期的に監視するにはストラップを使用してください。 それに加えて、各人の健康状態を追跡するための明確な個人統計がアプリで提供されます。
        人々。
       
        2.5. 高度な診断

        IoT ヘルスケア デバイスは健康に関連するほぼすべてのものを追跡できるため、
        一般的な健康状態を把握できるため、異常や症状を発見しやすくなります。
        これは医師が患者の健康状態を完全に把握するのに役立ちます
        潜在的な病気をより迅速かつ正確に特定して診断します。

        2.6. より良い健康管理

        IoMT は個人だけでなく組織の医療ニーズにも対応します
        世界中の組織とシステム。 例: 一部の医療 IoT デバイスは分析に役立ちます
        健康状態、流行に関する世界的な統計を収集します。

        2.7. 薬物治療の改善

        薬物療法は治療プロセスの重要な部分です。 とても大切なこと
        重要なことは、患者が定期的に薬を服用し、薬がうまく作用していることを確認することです
        姓。 IoT 健全性監視システムは効率を最大化するように設計されています
        薬物治療コース。

        2.8. 研究支援

        IoMTは一次医療データを収集することで研究に利用可能
        正確、無制限。 そのおかげで、科学者は複雑なタスクに集中できます
        この情報を手動で収集、編集、分析するよりも複雑です。

        3. 医療における最高の IoT アプリケーション - 今日のヘルスケア

        3.1. インターネット オブ ボディ (IoB - インターネット オブ ボディ)

        Internet of Body テクノロジーは、人体を医療データのソースとして使用します。 の
        IoB デバイスは、生体認証、生理学的データ、または行動データを収集し、それらのデータを複数のデバイス間で共有します。
        バックエンドインフラストラクチャを活用したIoTネットワーキング、ストレージ、分析
        通常はモバイル アプリケーションを通じてエンド ユーザーに送信されます。
        IoBスマートデバイスは外付け可能（スマートウォッチ、ストラップ）
        手首など)、体内に取り付けられたもの (人工臓器システム、インプラント、補綴物)
        スマート、...) または身体と融合 (デジタル医療)。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/6BOqpDygCY1vwXoCsrqnfa3sVva9tDaohQ4WESXh.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        この技術により、医師は顧客の健康状態を常に監視し、診断を行うことができます。
        より正確で慢性疾患の患者をサポートします。 いくつかの明らかな例
        IoB デバイスの詳細:

        ブレスレット
        スマートウォッチとスマートバンドはヘルスケアテクノロジーとみなされます
        最も人気のあるIoTヘルス。 物理的な目的だけでなく使用することもできます
        教育、健康指標の追跡だけでなく、関連情報の収集にも使用されます。
        他のデバイス。

        このタイプのスマート デバイスの標準的なヘルスケア機能には次のものがあります。
        歩数カウント、心拍数モニタリング、睡眠モニタリング。 さらに、最新の設備
        心拍数、血中酸素飽和度、皮膚温度、生理周期に関する情報を収集できます
        月経期間や気分追跡ツールとしても使用できます。

        イヤホン

        補聴器は最新技術でどんどん改良されています
        聴覚に問題のある人々の生活を改善します。 盗聴装置
        Bluetooth 経由で他のデバイスに接続し、世界中の音に簡単に調整できるようになりました。
        スマートフォンですぐに。

        スマートデジタル医療

        科学者と医療専門家は完全な医療機器を導入しようとしている
        錠剤サイズのカプセルに入っています。 過去10年間、これらの家は
        米国マサチューセッツ工科大学の科学者が食用センサーを研究
        従来の診断方法を置き換えるために。

        彼らの発明の 1 つは、センサーとバクテリアが詰まった小さなカプセルです。
        胃腸の問題を診断するために内視鏡の代わりに使用されます。
        特に出血。

        グルコースモニタリング

        糖尿病は世界中で非常に一般的な病気です。 たくさんの組織
        血糖値を監視する方法の改善に継続的に取り組んでいます
        血。

        たとえば、米国のヘルスケア企業であるアボットは、一連のソリューションを開発しました。
        風邪を含む糖尿病患者の健康管理
        非侵襲的なセンサーは血糖値を監視し、タイムリーな警告を提供します。

        気分を変えるエネルギーパッチ

        これはカフェインの優れた代替品です。 パッチは写真の波形を作成します
        人間の神経系に影響を与え、静けさ、心の平安を生み出し、集中力を高めます。
        中央。 この方法は 30,000 を超える研究によって安全であることが証明されています
        救援。

        3.2. スマートホスピタル

        IoMT により、医療スタッフはより効率的に業務を遂行でき、緊密な連携を確立できます。
        専門家、医師、技術スタッフとの連携を図り、患者様にご満足いただき、医療機器の寿命を延ばすサービスを提供します。
              • 予知保全: IoMT は、保守ではなく予知保全のアプローチを進歩させます。
              医療機械や機器のトラブルシューティングを行い、中断を避けて正常に動作することを確認します。
              プロセスを利用してコストを節約し、健康に影響を与えるリスクを制限します
              忍耐強い。
              • IoT 接続デバイス: の機能に簡単にアクセスできます。
              医療機器を管理し、モバイル アプリケーションを通じて医療機器と対話します。 いくつかの設定
              病院の IoMT サポート デバイスには、除細動器や注射器が含まれます
              霧、酸素ポンプ、車椅子、その他の監視装置。
              • 資産、スタッフ、患者の管理: すべての機器、器具、
              スタッフ間の共同プロセスと患者の状態監視が可能になります。
              病院や医療施設はこの課題を克服する方法を見つける必要があります。 IoT対応
              センサー、タグ、バッジ、医療技術デバイスに基づく追跡サポート
              接続が異なります。
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/CLflMcNaCz9UW7rkfCR1y4wIwl85PVbFtK6OAKrS.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        3.3. スマートラボ

        大量の科学データを処理し、機器と消耗品を定期的に管理します
        研究室のスタッフは疲弊し、多くのエラーを引き起こしました。 それが理由です
        なぜ科学者はこれらのタスクを自動システムに委任しようとするのでしょうか? ヨウ素
        健康では機能しています。

        IoT システムは、退屈で反復的なアクティビティを自動化します。 銅
        同時に、さまざまなデバイスの状態を管理し、通話をトリガーします
        メンテナンスの問題や室内の追加アイテムのリクエストに対処するためのビデオ
        実験、緊急事態に関する警告の送信など。

        3.4. 慢性疾患の管理

        慢性疾患を持つ患者には継続的なサポートが必要です。 IoMT開発者
        患者が自分の健康状態、投薬などを監視できるようにするテクノロジー機器を提供します。
        彼らが遭遇する問題。
        患者は病気の初期の兆候を検出し、症状が現れたときに警告を受けることができます
        すぐに医師に連絡するのは悪いです。 送信監視方式とは異なります。
        スマートヘルスケアシステムと機器はモニタリングと治療プロセスを保証し、
        これにより、慢性疾患を抱える多くの患者の命を救うことができます。

        3.5. 手術ロボット

        世界の一流の外科医がエンジニアや公的開発者と協力
        精度を活かしてロボットに知識や技能を伝える技術。
        最も複雑なプロセスを実行する機械。 そこで今日、IoT ロボット
        自動化によっては、人間よりも優れた手術を実行できる場合もあります。
        ロボット手術はより速く、より正確で、侵襲性が低いことが証明されています
        痛みがより強く、傷跡が少なく、感染リスクが低く、回復時間が短縮されます。
        より機能的な回復。
        これは、ほとんどの典型的な種類の手術に当てはまります。 一般外科以外にも
        一般に、医師は心臓、脊椎、消化器、胸部、付属の手術を行う際にもロボットを利用します。
        泌尿器科と泌尿器科。

        3.6. リハビリテーション

        多くの場合、リハビリテーションが治療の最終段階となります。
        ただし、この重要な時期には長い時間がかかる可能性があり、患者はサポートとサポートを必要としています
        継続的な指導。 医療IoTデバイスが早期回復促進に貢献
        より速く、より安全に。

        開発者は医師が患者とつながり、フォローアップするプラットフォームを作成しました
        健康監視システムを活用したリハビリテーションのプロセス
        AIoT。 患者ごとに個別の回復戦略が確立され、前向きに管理されます
        スマートセンサーによって監視されるパフォーマンスベースのプロセスと、
        統計AI。

        結論する

        上で述べたヘルスケアにおける IoT アプリケーションは、その仕組みのほんの一例にすぎません。
        医療分野におけるモノのインターネットの影響。 企業や開発者にとって、
        IoT は、創造性を表現し、技術の進歩を適用するための無数の機会を開きます
        テクノロジーは人間の生活の重要な部分を改善することを目的としています。
          `,
      },
    ],
  },
  {
    id: 306,
    type: BlogType.SERVICE,
    title: `スマートホームにおけるIoT`,
    description: `以前のインターネットと同様に、IoT テクノロジーは「レーン」を作成しました。
    スマートホームの誕生をはじめ、生活のあらゆる面で「波」を生み出します。
      `,
    image: `https://images.cenhomes.vn/2019/03/nha-thong-minh.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `スマートホームにおけるモノのインターネットアプリケーション`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `かつてのインターネットと同様に、IoT テクノロジーはあらゆる面で「波」を生み出しています。
        スマートホームの誕生を含む生活の変化。
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/sATLXaIF9BV2oTV7EHuOYzomP6pC4a75h4DIdQHa.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `モノのインターネット (モノのインターネット - IoT とも呼ばれます) は、多くのものを「革命」させました
        人間の生活のさまざまな側面。 特に、ある分野では、
        現在、最大かつ最も人気のある IoT アプリケーションはスマート ホームです。

        IoT はシンプルで伝統的な住宅を現代的な生活空間に変えました
        よりも。 家庭内のデバイスが相互に接続され、制御機能が強化されます
        制御し、家に住む際の利便性、効率性、最適性を生み出します。

        この記事では、家庭におけるIoTの役割と仕組みについて詳しく説明します。
        関連技術やメリットについても触れながら、スマートに
        「未来から来た家」への期待。

        1. スマートホームにおけるIoTの役割

        スマート ホームについて話すとき、IoT テクノロジーに触れないことは不可能です。
        完全に接続されたモダンな生活環境。 以下は役割の一部です
        スマートホームにおけるIoTの主な機能:

        自動運転：

        IoTにより、家庭内のさまざまなデバイスの制御と自動化が可能になります
        照明や暖房からセキュリティシステムや設備までシームレスに実現
        エンターテインメント。 したがって、これらのデバイスは相互に情報を交換できるため、
        高い利便性、効率性、省エネ性を実現。

        リモートアクセス監視:

        スマート ホームにおける IoT の最も重要な利点の 1 つは、機能です。
        デバイスの遠隔制御と監視。 スマートフォンでワンタッチで
        または、Web サイトをクリックするだけで、住宅所有者は次のような場合でも設定を管理および調整できます。
        照明のオン/オフ、温度調整、防犯カメラの確認など、家にいないとき...
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/wUsevQitQk0FGPjN0FclvcDoe3C9RIFfWyXIJWFU.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        省エネ：
        上記の利点により、IoT は内部エネルギー使用を最適化できます
        スマートホーム。 センサー、データ分析、自動化を使用することで
        自動化により、スマートデバイスは以下に基づいてエネルギー消費を調整できます。
        地域、時間帯、行動、個人の好みなどのいくつかの要素
        使用。

        熱制御、照明システム、スマートエレクトロニクスが設計されています
        周囲の環境に容易に適応できるデザインです。 これは住宅所有者がコストを削減するのに役立ちます
        不要な電気代や水道代を削減し、より持続可能な生活環境を提供します。

        セキュリティと安全性を向上:

        住宅内外のセキュリティ監視システムが相互に接続され、
        AIカメラ、スマートドアロック、モーション測定センサーなど、
        リアルタイムおよびビデオアラートを提供します。 これにより、住宅所有者は監視することができます。
        遠くから間接的に家を守ります。

        IoT は火災警報器や一酸化炭素検知器などと統合することもできます
        状況が発生した場合に自動的に応答し、即座に通知するその他の安全装置
        緊急事態。

        パーソナライズされたエクスペリエンス:

        IoT テクノロジーにより、ユーザー エクスペリエンスのカスタマイズとパーソナライズが可能になります
        スマートホームで。 ユーザーの好みや行動を知ることで、
        IoT システムは、各個人のニーズに応じてホームデバイスを予測および調整できます
        (体温、照明、部屋で再生されている音楽プレイリストなどに基づく温度)。

        2. IoT はスマート ホームでどのように機能しますか?

        スマート ホームでは、IoT はデバイス、センサー、その他のデバイスのネットワークを通じて動作します。
        ポートは相互に接続されています。 このネットワークにより、一方向の通信と制御が可能になります。
        家の隅々までシームレスに。

        デバイス接続:

        スマート ホーム内の IoT 対応デバイスはプロトコルを通じて相互に通信します
        Wi-Fi、Bluetooth、Zigbee、Z-Waveなどのワイヤレス、コントローラー付属
        暖房、照明、家電製品、防犯カメラなどの機器
        センサー、組み込みプロセッサー、無線接続モジュールを搭載。

        データの収集と送信:

        スマートデバイスに組み込まれたセンサーを使用して、システムはデータを収集できます
        家庭環境に関するデータ。 動きなどの要素を検出できます。
        温度、湿度、光の強さ。 収集されたデータは 1 つに送信されます
        エアネットワークを介したスマートホームシステムのハブまたはセントラルゲートウェイ
        ワイヤー。

        中央データ処理:

        中央システム (ハブ) は、スマート ホームの「心臓」として機能します。 ここで、悪よ
        さまざまなセンサーからのデータが合成および処理され、住宅所有者はそこから情報を提供できます。
        賢明な決断。 ハブは、実行するデバイスまたは特殊なソフトウェアです。
        サーバーまたはクラウド プラットフォーム上で。
       
        制御と自動化:

        事前に設定されたルールに基づいて、ハブは互換性のあるデバイスにコマンドを送信します。
        応答。 例: モーションセンサーが異常な動きを検出した場合、
        庭では、中央システムがセキュリティ システムを起動するか、そのエリアの照明を点灯します。 これら
        このコマンドにより、スマート ホームの操作を自動化できます。
        さまざまな機能を簡単に制御します。

        ユーザーとの対話:

        ユーザーは多くのインターフェイスを通じてスマート ホーム システムと対話できます。
        さまざまな種類のモバイル アプリケーション、Web サイトなど。これらのインターフェイスにより、住宅所有者は次のことを行うことができます。
        デバイスをリモートで監視および制御し、設定を柔軟に調整し、通知を受け取ります。
        これにより、住宅所有者はどこからでも簡単に住宅を監視、管理できるようになり、利便性が高まります。
        柔軟性、つまり自分の生活空間をより高度にコントロールできることで、
        よりスマートな生活環境を。
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/uaSc0vA9syIqBry5jyB8oUCitLSwJWya1NmpuMsn.png
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        3. IoTスマートホーム技術
       
        センサー：

        センサー技術は唇のデータ収集に重要な役割を果たします
        人生の学校。 動き、温度、湿度、光の強さなどを検出できます。
        これらのセンサーは貴重な情報を提供し、自動化に役立ちます
        スマートホームのさまざまな機能がよりスムーズかつ便利に行われます。

        AIアシスタント:

        Amazon AlexaやGoogleアシスタントなどのAI音声アシスタントは、
        今日のスマートホームでは普及しつつあります。 このツールにより、
        ユーザーは音声コマンドを使用してデバイスを制御し、タスクを実行します
        直感的なハンズフリー制御を体験してください。
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/ycUMpR2rSp0K0lcTB5bDoYiXC4ZuBfPVcUshbde2.png
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマートデバイス:

        冷蔵庫、洗濯機、オーブンなどのIoT対応デバイスが提供可能
        中央システムと通信し、ステータスとエネルギー消費に関する情報を提供します。
        数量、または期限に応じてメンテナンスが必要になる場合があります。

        セキュリティシステム:

        スマートセキュリティカメラ、ドアロック、モーションセンサーがアラートを送信可能
        リアルタイムのライブビデオを住宅所有者のデバイスに送信し、モニタリングと
        遠くから家を守ります。

        4. IoTスマートホームオートメーションの未来

        スマートホームは将来有望な開発分野の一つです
        IoT テクノロジーは常に革新、進歩、完成を続けています。 可能性が期待できる
        異なるメーカーのデバイス間の接続性が向上しました。 これ
        よりシームレスな統合と互換性が実現し、住宅所有者が拡張しやすくなります。
        スマート ホーム システムをさらにカスタマイズします。

        さらに、AI アルゴリズムが収集されたデータを分析し、予測能力を向上させます。
        予測と自動化。 たとえば、システムは人間の行動パターンを学習できます。
        ユーザーの個人的な好みに基づいて設定を自動的に調整します。

        IoT エコシステムは、より多くの IoT 対応デバイスとともに成長し続けます。 始まり
        この範囲には、家族生活のさまざまな側面が含まれます。
        健康状態モニタリング、キッチン家電、ホームエンターテイメントなど、利便性がさらに向上します。
        そして効率性。

        ただし、接続デバイスの数が増えると、保証も増加することに注意してください。
        データのセキュリティとプライバシーはさらに重要になります。 での開発
        将来的には、暗号化方式と認証プロトコルの実装に焦点を当てます。
        ユーザーの機密情報を保護するための強力な強制。

        結論する

        モノのインターネットは伝統的な住宅をスマートな生活空間に変えました
        スマートフォンとデバイスは相互に接続されます。 IoTテクノロジーにより、住宅所有者は楽しむことができます
        強化された自動化、制御、利便性、エネルギー節約。

            `,
      },
    ],
  },
  {
    id: 307,
    type: BlogType.SERVICE,
    title: `製造業におけるIoT`,
    description: `製造におけるIoT (製造におけるモノのインターネット) はシステムです
    環境を作成するために相互およびインターネットに接続された物理デバイスのネットワーク
    スマートな製造、生産プロセスの自動化、最適化。
      `,
    image: `https://vti-solutions.vn/wp-content/uploads/2023/05/rpa-concept-with-blurry-hand-touching-screen-2048x1366.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `製造業におけるIoTの定義`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        製造業におけるIoT（Internet of Things in Manufacturing）とは、ネットワークシステムのことです。
        環境を作成するために相互に接続され、インターネットに接続された物理デバイスのメッシュ
        スマートな製造、生産プロセスの自動化、最適化。

        製造業ではセンサーを介して生産設備や機械をつなぐIoT
        変数、プロセッサ、ネットワーク。 これらのデバイスにはデータを収集し、送信する機能があります。
        情報を交換し、相互に交流し、生産、管理、プロセスの改善に役立ちます
        リモート監視、パフォーマンスの最適化、プロセスの柔軟性の向上
        製造。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://vti-solutions.vn/wp-content/uploads/2023/05/rpa-concept-with-blurry-hand-touching-screen-2048x1366.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        製造における IoT により、デバイスや機械が自動的にデータを送信できるようになります
        動作、動作条件、およびシステムに対するその他の重要なパラメータ
        プロダクションマネージャー。 このデータは整理、分析され、情報に変換されます
        管理者が実稼働システムの運用を理解し、推奨事項を作成するのに役立ちます。
        賢明な意思決定と製造プロセスの改善。

        たとえば、製造における IoT により、デバイスの遠隔監視と制御が可能になります。
        機械の原材料と完成品の量を監視し、エラーを自動的に通知します
        およびインシデントを予測し、メンテナンスと機器のアップグレードのニーズを予測し、生産プロセスを最適化します。
        そしてサプライチェーン管理。

        製造業におけるIoTの発展により、企業は生産性を向上させることができます
        生産性の向上、製品品質の向上、エラーとリスクの最小化、管理の最適化
        運用コストを削減し、スマートで柔軟な製造環境を構築します。
        そして効率性。`,
      },
      {
        type: TYPE.TITLE,
        content: `IoT は製造業においてどのような役割を果たしますか?
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `製造業においてIoT（モノのインターネット）は重要な意味と役割を担っており、
        それらは大きな利益をもたらし、生産的な環境を作り出します
        インテリジェンス、自動化、最適化。 以下はその意味と主な役割の一部です
        製造業におけるIoT:`,
      },
      {
        type: TYPE.TITLE,
        content: `生産プロセスを自動化する
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT により、企業は生産設備や機械を接続して制御できるようになります
        インターネットを通じて。 これにより、生産プロセスを自動化できる可能性が生まれ、
        人間の介入を排除し、制御の自動化を促進します。
        生産活動の監督・管理`,
      },
      {
        type: TYPE.TITLE,
        content: `生産パフォーマンスを最適化する
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoTにより、センサーを介して生産設備や機械からデータを収集できます
        変数と監視システム。 このデータは分析され、賭けに使用できます。
        パフォーマンスを評価し、無駄の原因を特定し、プロセスを改善する方法を見つける
        生産工程。 これにより、運用の最適化、生産性の向上、時間の短縮が可能になります。
        ダウンタイムを短縮し、リソースを節約します。
            `,
      },
      {
        type: TYPE.TITLE,
        content: `サプライチェーンマネジメント
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT はサプライチェーンのあらゆる側面の包括的な追跡と管理を提供します
        応答。 輸送中の商品の位置や状況の追跡から、
        ストレージと倉庫管理を最適化するために、IoT はビジネスの改善に役立ちます
        サプライチェーンのプロセスを改善し、損失と過剰在庫を削減し、在庫を増加させます。
        市場のニーズに柔軟かつ迅速に対応します。        
            `,
      },
      {
        type: TYPE.TITLE,
        content: `IoT はセキュリティと安全性の向上に役立ちます
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT は製造環境のセキュリティと安全性の向上に役立ちます。 感情
        変数および監視システムは、作業環境を監視し、検出し、
        リスク、事故、安全違反を警告します。 さらにIoTも増えるかもしれない
        情報セキュリティを強化し、重要なデータを保護し、攻撃を防ぎます
        通信網。                    
            `,
      },
      {
        type: TYPE.TITLE,
        content: `スマートな実稼働環境を構築する
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `製造における IoT は、デバイスと機械間の接続と相互作用をもたらします
        インターネットを介して機械に接続し、スマートな生産環境を構築します。 唇の中で
        この分野では、デバイスが情報を交換し、自動的に調整および改善することができます。
        柔軟で効率的な生産プロセス。 これはビジネスに役立ちます
        スマートでダイナミックかつ応答性の高い作業環境を構築できます
        市場の変化と顧客の要求に迅速に対応します。                   
            `,
      },
      {
        type: TYPE.TITLE,
        content: `生産におけるIoTの適用`,
      },
      {
        type: TYPE.TITLE,
        content: `生産プロセスを自動化する`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `リモート監視と制御: IoT により、デバイスとデバイスの監視と制御が可能になります。
        インターネット接続を介したリモート生産機械。 おかげで経営者もエンジニアも
        実稼働システムのパフォーマンスを監視し、リモートで調整できます。
        時間を節約し、柔軟性を高めます。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://vti-solutions.vn/wp-content/uploads/2023/05/hand-touching-screen-rpa-concept-2048x1367.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `製造装置の追跡と管理: 製造現場の IoT デバイスは、
        機械や設備の状態、動作、性能を監視するために使用されます。
        製造。 データはセンサーから収集され、管理システムに送信されます。
        問題を認識し、メンテナンスとアップグレードの必要性を予測し、使用量と使用期間を最適化します。
        デバイスの寿命。`,
      },
      {
        type: TYPE.TITLE,
        content: `生産パフォーマンスを最適化する`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `データを自動的に収集して分析する: IoT により、データを自動的に収集できます。
        製造プロセスにおけるさまざまなソース (センサー、機械、
        監視システム。 このデータを分析して、パフォーマンスを監視し、問題を特定し、プロセスを改善する方法を見つけるために役立つ情報に変換できます。
        生産工程。
       
        設備の予測メンテナンスとアップグレード: 製造現場の IoT デバイスが収集できる
        生産設備の性能や状態に関するデータを収集します。 糞便を通して
        IoT はデータを分析することで、必須のメンテナンスとアップグレードの必要性を予測して警告できます。
        問題が発生する前に、マシンのダウンタイムを最小限に抑え、継続性を確保します。
        生産工程で継続的に行われます。
            `,
      },
      {
        type: TYPE.TITLE,
        content: `サプライチェーンマネジメント`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        貨物の追跡と管理: 製造における IoT の使用が可能
        商品の位置、状態、輸送を追跡するために使用されます。 センサー
        監視システムは場所、温度、湿度、パラメータに関する情報を送信できます。
        物品の輸送プロセスの改善、損失の削減、
        製品の品質保証。

        保管・倉庫管理の最適化：IoTを活用した最適化が可能
        保管と倉庫管理。 センサーと監視システムが役立ちます
        在庫を追跡し、商品の場所とステータスに関する情報を提供します。
        ピッキングと注文のプロセスを最適化し、効率と信頼性を確保します
        在庫管理。

        製造におけるこれらの IoT アプリケーションは、パフォーマンスの向上と強化に役立ちます
        柔軟に市場の変化に迅速に対応し、ダウンタイムを最小限に抑える
        生産プロセスにおけるダウンタイムと無駄。
        AI および IoT ソリューションの適用に関するサポートについては、お問い合わせください`,
      },
    ],
  },
  {
    id: 308,
    type: BlogType.SERVICE,
    title: `小売業におけるIoT`,
    description: `現代の小売業者はすべて、モノのインターネット (IoT) を適用しています。
    店舗運営を完了します。 体験と楽しさの向上を目指す
    顧客のショッピングトランザクションをプッシュします。
      `,
    image: `https://digital.fpt.com/wp-content/uploads/2019/12/shutterstock_1714734415-1-scaled.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `小売ビジネスにおける IoT について学ぶ`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        現代の小売業者はモノのインターネット (IoT) を完璧に適用しています
        店舗で営業しております。 エクスペリエンスを向上させ、取引を促進することを目的としています
        顧客の買い物。 IoT技術は小売業界に革命を起こすと言われています。
        それは多くの革新と新しい機会をもたらします。 従来の運用方法に代わって、
        顧客サービス、サプライチェーンを改善するだけでなく、他の多くのチャネルを開拓します。 筋肉について
        基本的には、インターネットを通じて「あらゆるもの」を接続するネットワークです。 統合されることが多い
        センサーやIoTゲートウェイなどの接続デバイス。 通信、分割が可能
        一連のネットワーク全体でデータを収集し、共有します。 クラウドプラットフォーム（クラウドサーバー）とは
        ビジネスに役立つ洞察を提供します。`,
      },
      {
        type: TYPE.TITLE,
        content: `IoT テクノロジーは小売業界にどのような変化をもたらしましたか?`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        最新テクノロジーの販売プロセスへの適用は劇的に変化しました
        ポール。 具体的には：
            • ショッピング体験を迅速かつ便利に改善します。
            • ロボットや人工知能 (AI) などの最新の自動化テクノロジーを使用します。
            小売業者の業務合理化を支援してきました。 これは最適化に役立ちます
            販売プロセス、スタッフの最適化、管理コスト。
            • 在庫を追跡し、サプライチェーン管理を改善します。
            • 多くのオンライン支払い方法も一般的に適用されています。
            たとえば、モバイルウォレットの使用は消費者の間で普及しています。
            現在。
            • さらに、広く使用されているリモート購入方法もあります。
            製品は正常に適用されました。`,
      },
      {
        type: TYPE.TITLE,
        content: `小売業におけるIoTアプリケーション`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `顧客や企業の期待に応えるために。 TPM はいくつかの機能を導入します
        今日の小売業界向けの IoT ソリューション。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `自動販売機`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://xandatechnologies.com/wp-content/uploads/2021/03/Self-Service-kiosk.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        自動販売・自動発注・自動決済を行う商品です。 製品
        これは、F&B ストア、レストラン チェーン、空港、駅に非常に適しています。
        船、…

        タッチスクリーン技術により、顧客は希望の製品を直接選択できます
        オンラインで支払いを希望します。 さらに、キオスクは他の多くの機能もサポートしています。 かろうじて
        制限: 形式の広告コンテンツ: 倉庫から取得した画像、テキスト、ビデオ
        エンタープライズメディア。 要件や項目に応じて製品を設計します
        お客様の使用目的。`,
      },
      {
        type: TYPE.TITLE,
        content: `自動待機システム`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `これは、キューを管理および最適化するためのソリューションです。 待ち時間を減らすために
        顧客により良いショッピングやサービス体験を提供します。 これは役に立ちます
        顧客満足度を向上させ、ロイヤルティを高めます。

            • チケットプリンターを使用してその場で注文番号を取得します。 または、リモートから注文番号を取得します。
            インターネットに接続できるスマートフォン、タブレットなどのデバイス。
            • キューを自動的に管理: LED ボードに注文番号を表示し、顧客を招待/電話します。
            順番が来ると商品がカウンターに到着します。…
            • 待ち時間、来店回数、サービスに関する店舗情報
            顧客が使用するもの。
            • このデータはサービスのパフォーマンス分析、リソースの予測に使用されます。
            必要な力を強化し、サービスプロセスを最適化します。
            • …
      TPMではシンプルなソリューションから統合ソリューションまでを提供します
      多くの現代的な機能。 お客様のご要望や使用目的に応じて
      私たちが特別にデザインする製品。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://atpro.com.vn/wp-content/uploads/2023/09/xep-hang-tu-dong-tai-quay-nganh-fb-min-768x414.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `分散型冷蔵車両の温湿度管理ソリューション `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `食品、医薬品、カシューナッツに敏感な商品などの業界向け
        環境条件。 複数台の冷凍車両の温度・湿度を一括管理するソリューション
        どこにいても時間と分散が非常に重要です。 安全性と品質を確保するために、
        適切な環境条件下での商品。

        最新のテクノロジーにより、車内の温度と湿度は常に設定範囲内に保たれます。
        置く。 これら 2 つの値がしきい値を超えると、SMS または電子メールで警告が自動的に送信されます。`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://atpro.com.vn/wp-content/uploads/2023/10/iot-trong-nganh-kinh-doanh-ban-le2-768x372.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `スマートな倉庫管理`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT は倉庫管理におけるテクノロジー投資の 1 つと考えられています。 この解決策
        衣料品店、靴、ハンドバッグ、スーパーマーケットなどに非常に適しています。追跡番号
        在庫を管理し、従業員を適切な製品の場所に案内します。 貢献する
        顧客サービスプロセスを迅速に改善するための一環です。 また、経営陣は、
        優れた倉庫は、スタッフの検索時間と顧客の待ち時間を最適化します。
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://atpro.com.vn/wp-content/uploads/2023/10/iot-trong-nganh-kinh-doanh-ban-le3-768x514.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `エピローグ`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `小売業界の将来は IoT テクノロジーの発展と関係しています。
        新しい技術の適用は、効率と普及の点で多くの大きな利点をもたらします。
        顧客体験だけでなく利益も増加します。 多くのチャンスをもたらすことを約束します
        小売業や製造業向け。 ビジネスが一歩ずつ前進できるようサポート
        小売業における IoT ソリューションについてまだご質問がある場合。

        TPM のホットライン番号にご連絡ください。お客様のサポートとサービスを提供いたします。
        ビジネスに適したソリューションを迅速に提供します。
              `,
      },
    ],
  },
  {
    type: BlogType.SERVICE,
    id: 309,
    title: `農業におけるヨウ素`,
    description: `農業におけるIoTテクノロジーは生産コストの最適化に役立つだけではありません
    農業生産だけでなく、貿易の促進やすべての人々の安全性の向上にも役立ちます
    製品メーカーとユーザー`,
    image: `https://niptech.vn/images/ckeditor/images/iot%201.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `農業向け IoT アプリケーション: 避けられないトレンド`,
      },
      {
        type: TYPE.TITLE,
        content: `農業におけるIoTテクノロジーはコストの最適化に役立つだけではありません
        農業生産コストだけでなく、貿易の促進にも役立ちます。
        生産者とユーザーの両方の安全性を向上
        製品
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        ベトナムは世界最大の農業生産国の一つであり、
        年間生産量は常に高く安定しています。 しかし、ベトナムもまた、
        気候変動の影響を大きく受けている国の一つ。 銅
        農業生産プロセスがまだ同期的で一貫性がなかった時代、製品は
        ベトナムの農業は、利用可能な市場にアクセスする際に多くの困難に直面しています
        高品質。 ベトナムは農業生産プロセスの変化を必要としている
        製品の品質を最適化し、運用上のソリューションを提供する業界
        農業はもはや環境や気象要因にあまり依存しません。     
              `,
      },
      {
        type: TYPE.TITLE,
        content: `農産物の最適化
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT（モノのインターネット）を活用したスマートシステムを開発します。
        動物) 農業用、作物の成長と環境条件を監視できる
        今日、必須の任務と考えられている農業学校では、生産者が受講できるようになっている
        農産物のライフサイクルを予測、監視、管理します。

        予測によると、2030 年までに 5,000 億台のデバイスが IoT に接続されるようになるでしょう。IoT がもたらすもの
        多くの機会により、業界は新しい戦略やモデルを作成して提示できるようになります。
        アイデアを実現します。 IoT は複数の分野の組み合わせであり、1 つの世界に向かって進んでいます
        スマート、あらゆるものに効率的かつ迅速にアクセスできる
        素早く。

        IoT技術を農業に応用すると、農業に比べて優れたメリットが得られる
        天候への迅速な対応、生産性の最適化、分析などの従来のコラボレーション
        土地、灌漑、害虫駆除などの要因を計算します。      
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://kilala.vn/data/emagazine/images/vol45/iot-nongnghiep/img_content_03.jpg
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoTテクノロジーの農業への応用が革命を起こした
        農業産業: 環境条件の制御と規制に役立ちます
        栽培および管理のための家畜エリアにおける家畜および植物の成長
        温度、湿度、空気の質、土壌の質、品質のパラメータ
        水源...測定と分析のためのセンサーとコンピューターシステムを介して
        その通り。

              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%201.jpg
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        ベトナムは農業が古くからある分野なので強いです
        世界の他の地域と比較したベトナムの優れた点は、その生産経験と
        農業は何世代にもわたって受け継がれてきました。 ただし、これもそのうちの1つです
        条件などの要因が重なった場合の我が国農業の弱点
        動植物の成長、農薬の使用時期と使用量
        肥料、収穫時期、各輸出市場および地域に必要な基準
        製品を消費者にどのように配布するか...まだ大部分が検討中です
        生産者一人ひとりの経験と感覚に基づいて作られています。 品質につながる
        農産物の量が均一ではなく、市場に合わせるのが難しい
        難しい学校。 生産者は生産コストと流通方法を最適化していない
        資源や農業生産活動に影響が及ぶことが多い
        天候、気候、病気の要因によって異なります。 これが現実と困難です
        ベトナムの農業には常に存在し、はっきりと目に見えます
        IoT技術の登場で経営手法は一変
        農業における生産。 IoT テクノロジーは重要かつ影響力のある役割を果たしています
        製造、ヘルスケア、メディア、エネルギーに至るまでの多くのセクターと産業
        農業部門さえも。 IoT テクノロジーには接続システムが含まれます
        センサー、車両、モバイルデバイスなどのスマートオブジェクトを活用
        リモートデータ収集、インテリジェントな分析、ユーザーコミュニケーション。 等しい
        センサー技術とIoT技術を農業にどのように導入するか
        伝統的な農法のあらゆる側面を変えます。 IoT技術
        農業では、時間の短縮など従来の農業に比べて優れた利点があります。
        天候への対応、生産性の最適化、次のような要因の分析と計算
        土地、灌漑、害虫駆除。 IoT技術の応用
        農業は農業産業に革命をもたらしました。
        農業分野へのIoTの学習、研究、応用は非常に人気があります
        世界中の多くの国がその推進に興味を持っています。 IoT技術の活用
        農業活動に応用することで、
        国を新たなレベルへ。

        農業におけるIoTの優れた応用例としては、以下のものが挙げられます。
        次のようになります。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `家畜の成長のための環境条件を制御および調整し、
        作物および畜産地域の植物`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%202.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT技術により、動植物の生育条件はもはや完璧ではなくなりました
        すべては天気次第です。 環境パラメータは直接的な影響を及ぼします
        温度、湿度、空気の質など、家畜や作物に直接影響を与える
        土壌の質と水質はセンサーと機械で制御できるようになりました
        正確に測定して分析します。 スマートなIoTシステムも可能
        それに応じて農業条件を改善および調整する方法を提案する
        それぞれの品種や作物の生育過程に適しています。`,
      },
      {
        type: TYPE.TITLE,
        content: `農業生産活動に必要な資源（土地資源・水資源）と資源の最適配分を支援`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%203.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        土地と水はどちらも有限な資源なので、使用量を計算するのはあなた次第です
        これらのリソースを最適化することが非常に必要です。 IoT技術を活用して
        センサー、リアルタイム監視システム、ソフトウェアが含まれます
        農家の検査、回収、堆肥化をスマートにサポート
        実際のデータを分析して、土地と水資源の利用を最適化します。 具体的にははい
        要因としては、土地面積あたりの最適な植物密度、湿度、土壌容量が挙げられます。
        土壌の保水力、作物への灌漑水の必要量など
        これらのパラメータは、農家が資源利用効率を高めるのに役立ちます
        土地と水が大幅に増加しました。`,
      },
      {
        type: TYPE.TITLE,
        content: `労働力の最適化`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        スマート マシンのサポートが得られれば、時間と労力は不要になります。
        農家は減るだろう。 これは、これらを適用する場合に避けられない利点です
        農業を中心としたあらゆる分野における4.0テクノロジー革命の成果
        一般的には、人材の量を最適化することです。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `肥料、化学物質、薬剤の時間と投与量を制御し、最適化します。
        農薬を使用する必要がある`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%204.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        ベトナムの農業の欠点の一つは、その使用です。
        現在、製造プロセスにおける化学物質の準備は厳密に管理されていません
        厳密には、開発を確実にするために投与量は正確に計算されていません。
        製品を化学残留物から守りながら、植物の成長を促進します。 その上、
        施肥や農薬散布はほとんどが手作業で行われます。
        人間に関係するものであり、これは人間の健康に害を及ぼすだけではありません
        労働力だけでなく生態環境にも影響を与えます。 IoTテクノロジーを活用して
        農業、使用時間と投与量の計算と管理
        肥料、化学物質、殺虫剤は最も正確に適用されます。 これら
        精密ノズルや噴霧装置を備えた自動運転車などの新たな工法
        無人化学灌漑…要素を確保するために徐々に適用されています
        使用時間、投与量、および人間の健康に対する安全性と
        生態学的環境。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `収穫時期を制御して最高の製品品質を実現`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `収量と利益を最大化するには、適切な収穫時期を選択してください
        農業活動にとって大きな意味を持っています。 センサーを備えたIoTシステム
        オンラインから取得したデータを予測できる変数およびインテリジェントな分析ソフトウェア
        そこから農家が収量と生産高を予測できるようにする作物飼料
        最高の収量を得るために、いつ収穫するかを計画し決定します。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `全国の他の IoT システムとの接続と同期を支援します。
        消費者に製品を届けるための商業活動を促進する`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%205.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        インターネットの参加により、さまざまな分野のIoTシステムが存在します
        接続して一緒に仕事をすることができます。 農業活動では、
        生産工程だからこそIoT技術で業務の推進・支援も可能
        倉庫などの実際の用途を通じた製品の保存と消費
        スマート ストレージ、スマート ディストリビューション ストア、または購入アプリケーション
        頭いい。 全員で商品を持ち込める商業活動を推進します
        最高の品質の農業を消費者に届けます。
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Kết luận`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        IoT テクノロジーを農業分野に適用するメリットから、
        上記の分析と指摘から、次のような結論を導き出すことができます。 ベトナムの農業にとって
        Nam は開発のペースに遅れずに標準を満たすことができます
        世界中の主要市場で厳格に行われており、この分野での IoT テクノロジーの応用
        農業部門は非常に必要です。 農業におけるIoT技術はそれだけではありません
        農業生産コストの最適化に役立つだけでなく、貿易や貿易の促進にも役立ちます。
        メーカーと製品ユーザーの両方の安全性を高めます。 セントって言ってもいいよ
        農業におけるIoT技術の応用は徐々にトレンドになりつつある
        客観性が弱い。
              `,
      },
    ],
  },
]
