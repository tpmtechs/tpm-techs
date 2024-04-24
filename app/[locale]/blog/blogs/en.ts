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
    title: "AUTOMATION AND CONTROL SYSTEM",
    description:
      "Our Total Management Solutions provide innovative software solutions for commercial and industrial building systems, providing effective control and monitoring to enhance building performance. home.",
    contents: [
      {
        type: "title",
        content: "Control Systems in the 2020s",
      },
      {
        type: "paragraph",
        content: `Control systems have appeared in industrial facilities and
        trade since the last century, it began during the 1st industrial revolution
        three in the 1950s, after the end of two world wars. However,
        with the rise of connected devices, big data analytics,
        energy crisis and environmental sustainability issues; conditioning system
        Control and other automation have developed dramatically over the past 10 years. Some
        People call this a new era, the fourth industrial revolution, Cong
        Industry 4.0, or more recently, the era of Internet of Things technology
        Industry (IOT).`,
      },
      {
        type: "title",
        content: `You're ready to take the next step toward better productivity and efficiency
        Not yet?`,
      },
      {
        type: "paragraph",
        content: `Please contact us today for more advice on TPM solutions
        Technology. Our team of technicians will support from project start to completion
        at the end to ensure long lasting results.`,
      },
    ],
    image:
      "https://images.ctfassets.net/szez98lehkfm/7g2sitSkiFvEKsqCwh2LnY/0d1a0347390c625abdea9fb27d035488/MyIC_Inline_73525",
  },

  {
    id: 102,
    title: "CONNECTION DEVICE",
    description: `TPM Technology has the expertise and technology to provide scene information
    Valuable reporting, data analysis and efficient systems for your project, regardless
    its scope. Discover how our connected devices can be
    Networkize your operations.`,
    contents: [
      {
        type: "paragraph",
        content: `As your business grows, so will your ability to adapt
        Technology to help businesses continue to operate will also increase. Technology
        TPM offers a range of services to keep your energy running
        smarter.`,
      },
      {
        type: "title",
        content: `Make your power go further with
        connected devices`,
      },
      {
        type: "paragraph",
        content: `By using interconnected technologies embedded in devices
        also known as the internet of things (IoT), you can cut your bills
        yourself and track changes as they happen in real time. From control
        humidity and cooling to humidity control to water usage monitoring, Cong
        TPM technology builds and tailors solutions based on your requirements.`,
      },
      {
        type: "paragraph",
        content: `Our team of experts brings the necessary expertise
        to future-proof your business while reducing spending
        receive. We integrate our system into your existing devices; you will
        No need to worry about starting from scratch and investing large amounts of money in infrastructure
        new floor.`,
      },
      {
        type: "paragraph",
        content: `We provide:`,
      },
      {
        type: "list",
        items: [
          `Smart metering services`,
           `Smart energy consulting service`,
           `Smart farming solutions`,
           `Design development service applying AI to industry`,
           `Cloud and on-premise deployment`,
        ],
      },
      {
        type: "paragraph",
        content: `Regardless of the size of the project, TPM Technology can provide you with detailed information
        savings, analysis and systems to save money and work more efficiently.`,
      },
      {
        type: "title",
        content: `Manage power to suit your needs`,
      },
      {
        type: "paragraph",
        content: `We take the time to learn about your business and its energy consumption
        current technology infrastructure and resources, then create an action plan.`,
      },
      {
        type: "paragraph",
        content: `Whether you are implementing new Environmental, Social, Governance (ESG) metrics,
        Want to save costs or are looking to expand your business
        sustainably, our team focuses on transparency and spirituality
        flexible to best suit projects of all sizes.`,
      },
      {
        type: "paragraph",
        content: `Connected devices are seeing traction across industries.
        Popular applications today include smart homes and cities,
        monitor wind and solar energy production as well as monitor ship arrivals
        Every minute updates for global logistics services.`,
      },
      {
        type: "paragraph",
        content: `For your business—no matter the size—the benefits of intelligent monitoring
        Smartphones and connected devices supported by the Internet include:`,
      },
      {
        type: "list",
        items: [
          `App-based monitoring can help reduce human error`,
          `Analytics and insights at your fingertips to help you
          Understand exactly where your costs lie`,
          `Rapid adaptation of heating, cooling and humidity to the
          atmospheric conditions`,
          `Ability to coordinate and adjust your power consumption strategy
          you while on the move`,
        ],
      },
      {
        type: "paragraph",
        content: `On average, customers see at least 15-20% savings through efficiency.`,
      },
      {
        type: "title",
        content: "Begin",
      },
      {
        type: "paragraph",
        content: `You're ready to take the next step to save on utility costs and reduce expenses
        Consuming unnecessary energy?`,
      },
      {
        type: "paragraph",
        content: `Contact us today for advice and to learn more about customized solutions
        edited by TPM Technology.`,
      },
      {
        type: "paragraph",
        content: `Our team of technicians provides end-to-end support to ensure long-lasting results
        long. All software and hardware packages are designed to
        Cost-effective, scalable and secure.`,
      },
    ],
    image: "https://bcp.cdnchinhphu.vn/334894974524682240/2023/6/26/csdlqg-1687768866623578740455.jpg",
  },

  {
    id: 103,
    title: "ADVISE",
    description: `Support customers in achieving digital transformation
    smooth and durable.`,
    contents: [
      {
        type: "title",
        content: "Introduce",
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Digital transformation is critical for businesses to stay competitive
        compete and meet the growing needs of customers in the digital age
        Nowadays. It involves applying digital technologies and leveraging data
        materials to optimize processes, improve customer experience and drive increases
        Overall sales manager. Consulting plays an important role in providing support
        customers during this transition by providing expertise,
        guidance and support.`,
      },
      {
        type: TYPE.TITLE,
        content: `Project analysis`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `To effectively support customers in their digital transformation journey,
        Thorough project analysis is essential. Follow these steps:`,
      },
      {
        type: TYPE.LIST,
        items: [
          `Analyze customer needs: Understand business goals, pain points and
          customer's goals. Conduct meetings and interviews with parties
          key relevance to better understand their vision and expectations.`,
          `Identify key stakeholders: Identify the individuals or departments that will be affected
          affected by digital transformation. Interact with them to fight
          evaluate their requirements, challenges and concerns.`,
          `Conduct a Gap Analysis: Compare your guests' existing capabilities
          goods with their desired status. Identify the fields that transfer
          Digital transformation can deliver the most significant value and solve the problems
          process, technology or resource gaps.`,
        ],
      },
      {
        type: TYPE.TITLE,
        content: "Determine project specifications",
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Clear project specifications are critical for digital transformation
        effective. Consider the following:`,
      },
      {
        type: TYPE.LIST,
        items: [
          `Identify goals: Clearly define the goals and results that customers
          towards achieving through digital transformation. This helps with prioritization
          features and functions.`,
          `Prioritize features: Collaborate with customers to identify features
          that aligns with their business goals. Use frameworks like
          MoSCoW method (Must have, Should have, Could have, Wouldn't have time
          this) to prioritize development efforts.`,
          `Flexibility: Design flexible roadmaps that can adapt to requirements and
          Priority changes. Regularly review and re-evaluate the roadmap to adjust
          Adjust feedback and emerging opportunities.`,
        ],
      },
      {
        type: TYPE.TITLE,
        content: `Choose the right technology`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Choosing the right technology is critical to the success of the project
        digital transformation. Consider the following:`,
      },
      {
        type: TYPE.LIST,
        items: [
          `Evaluate options: Evaluate different technology-based options
          your specific needs, scalability, security requirements, and budget
          row. Consider factors such as user-friendliness and integration
          supplier's case and track record.`,
          `Proof of Concept: Conduct proof-of-concept testing
          (POC) with shortlisted technologies. This helps
          Evaluate compliance with customer requirements and confirm compliance
          before committing to a long-term investment.`,
          `Scalability and cost: Make sure the technology chosen is open
          expanding according to growing customer needs. Consider long-term costs
          for maintenance, upgrades and support to avoid any future surprises.`,
        ],
      },
      {
        type: TYPE.TITLE,
        content: `Conclusion`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Helping customers achieve a smooth and durable digital transformation
        Sustainability requires a comprehensive approach. By conducting a thorough analysis
        project, define clear project specifications, create a flexible product roadmap
        Activating and choosing the right technology, businesses can navigate success
        your digital transformation journey.`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Remember to put the advice provided in this guide into practice and
        tailor it to each guest's unique needs and requirements
        row. Successful digital transformation allows businesses to stay relevant
        compete, improve efficiency and deliver enhanced customer experiences`,
      },
    ],
    image: "https://vina-aspire.com/wp-content/uploads/2022/06/1-3.png",
  },

  {
    id: 104,
    title: "SUPPORT",
    description: `We provide comprehensive maintenance and support services, including maintenance
    prevention and remediation, performance analysis, server and application monitoring, improvement
    Continuous advancement and support levels 1, 2 and 3. Our goal is to ensure system
    The system operates stably and provides continuous support to customers.`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `What is a support contract?`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The support contract is an agreement between the customer and the contractor. It defines things
        the amount of work the contractor must perform in exchange for compensation from the customer
        row. Basic information contained in the service contract is:`,
      },
      {
        type: TYPE.LIST,
        items: [
          `General information about customers and contractors.`,
          `Terms and conditions of service.`,
          `Clear description of the service provided and the period for which it is provided.`,
          `Service fee and how and when the customer must pay.`,
        ],
      },
      {
        type: TYPE.PARAGRAPH,
        content: `There are many types of support contracts in any field. Next, we will
        explains the failures you can make and how to prevent them from happening. We
        will also learn the importance of service contracts and how you can benefit
        benefit from that contract.`,
      },
      {
        type: TYPE.TITLE,
        content: `Why do we need a service contract?`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Service contracts are in place to prevent possible crashes of your system and
        Reduce system downtime when problems occur. We can
        Identify 2 types of system errors: `,
       },
      {
        type: TYPE.LIST,
        items: [
          `System degradation: This is usually the first stage leading to system failure
system. During this period, your system still works but it
not working at its best.`,
          `System crash: The system is completely down and all you
What you can do is wait for the problem to be fixed to restore.`,
        ],
      },
      {
        type: TYPE.PARAGRAPH,
        content: `At TPM Technology, we believe it's best to act first
incidents. We will explain to you the 3 levels of maintenance and how they relate
regarding good management of your system.`,
      },
      {
        type: TYPE.TITLE,
        content: `Preventive maintenance`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `This type of maintenance is performed before problems occur and periodically to avoid problems
serious incident in the future. Its purpose is to reduce system capacity
System failure or deterioration of system quality. It helps increase the lifespan of the system
system and reduce system downtime when problems occur.`,
      },
      {
        type: TYPE.TITLE,
        content: `Maintenance and repair`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `When defects are found in the system that cause problems, maintenance is required
Recovery will be performed to return the system to normal operation. In too
process, the asset is repaired, restored or replaced.`,
      },
      {
        type: TYPE.TITLE,
        content: `Perfect maintenance`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Enhancing system functionality by implementing new content. Mission
of perfect maintenance is to improve the way the system operates according to your needs
customer.`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Now that we have a clear understanding of the three basic types of maintenance, let's explain
How a service contract can benefit you.`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `As we can see the 2 most important forms of maintenance are preventive maintenance
and corrective maintenance. One is done often and one is done when
a problem is detected. The role of service contracts is very important in 2
case because it helps you maintain your system at its best and reduces downtime
Keep your downtime to a minimum when something goes wrong. Contract
service is a security measure to take to save your time and money
Friend. If you wait for a problem to occur to take action, it will be too late because the damage is already done
It can be more serious and need more time to fix.`,
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
    title: "Towards clean energy, for a green era",
    href: "#",
    description: "Towards clean energy, for a green era",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
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
    title: "TALK SHOW ENVIRONMENT & SUSTAINABLE DESIGN.",
    href: "#",
    description: `The Talk show event at Hoa Sen University created an inspiring atmosphere
    inspiration and creativity, when CEO Nguyen Thien Duc of TPCons was the keynote speaker.
    With the presence of a dynamic leader and strategic vision, the Talk show is not only an opportunity for students to renew their knowledge but also a source of knowledge.
    Strong encouragement for future creativity and entrepreneurship.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
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
        content: `The Talk show event at Hoa Sen University created an inspirational and creative atmosphere, when TPCons CEO Nguyen Thien Duc was the main speaker. With the presence of a dynamic leader and strategic vision, the Talk show is not only an opportunity for students to renew their knowledge but also a strong source of encouragement for creativity and entrepreneurship in the future. hybrid.`,
      },
      {
        type: TYPE.PARAGRAPH,
         content: `CEO of TPCons, a leading unit in the field of building power systems
        solar energy, shared about the journey of building and developing a business. Equal
        With stories and practical experiences, he imparts motivation and importance
        The importance of innovation and accepting challenges in the current business environment
        great.`,
       },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-001.jpg?alt=media&token=496cbcda-9576-4fbd-b8b4-870db9e5d237`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `TPCons, accompanying Hoa Sen University in developing educational models
education and improve training quality. This support not only helps students continue
Access to advanced technology but also create opportunities to practice and learn in the environment
reality.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-003.jpg?alt=media&token=d8fd3110-9561-4bd3-9dc9-48a4781952a7`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Talk show is a valuable opportunity, not only to impart knowledge but also to build
Build a proactive and creative student community. The presence of TPCons no
is not only a sponsoring partner but also a strong source of encouragement for development
comprehensive development of Hoa Sen University students, contributing to building a bright future
and sustainable.`,
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
    title: `Exploring Energy Innovations: PTCons Invited by Huawei to
Shenzhen.`,
    href: "#",
    description: `In a groundbreaking initiative, Huawei, a global technology leader, has extended
a special invitation to PTCons, a prominent player in the energy technology sector,
for an exclusive tour of their facilities in Shenzhen. This tour promises to be a
unique opportunity for PTCons to delve into the cutting-edge advancements in
energy technology and clean energy solutions, showcasing Huawei's commitment
to sustainable development.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
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
        content: `The tour aims to immerse PTCons in the heart of Huawei's research and
development efforts, providing a firsthand experience of the company's strides in
energy innovation. As the world grapples with environmental challenges, this
collaboration between PTCons and Huawei signifies a collective endeavor to
address pressing issues through technological solutions.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-101.jpg?alt=media&token=b65362af-dc46-4082-a6e0-a4107ea9f5e7`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Shenzhen, Huawei's technological hub, serves as the backdrop for this
transformative experience. Renowned as a global center for innovation, Shenzhen
provides the perfect setting for PTCons to witness the intersection of technology
and sustainability. From state-of-the-art research laboratories to innovative
manufacturing facilities, the tour is poised to offer a comprehensive view of
Huawei's prowess in developing energy-efficient solutions.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-102.jpg?alt=media&token=e7526986-a3a7-4a34-a8bc-d07585f65034`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The focus of the tour extends beyond mere observation, offering PTCons the
chance to engage in interactive sessions with Huawei's leading experts and
researchers. These sessions are designed to facilitate knowledge exchange,
fostering a collaborative environment where ideas can be shared and insights
gained. PTCons stands to benefit not only from Huawei's technological expertise
but also from the wealth of experience garnered through successful
implementations of clean energy solutions worldwide.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-103.jpg?alt=media&token=b0634c18-1fde-43f9-8a08-1b7737579b43`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The tour will spotlight Huawei's portfolio of energy technologies, ranging from
renewable energy sources to smart grid solutions. Participants can expect to
witness groundbreaking advancements in solar power, energy storage, and
intelligent energy management systems. Huawei's commitment to sustainability
and eco-friendly practices will be underscored through case studies and real-world
applications, providing PTCons with valuable insights to integrate into their own
initiatives.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-104.jpg?alt=media&token=4776970b-2790-4864-9bed-f77428ad3088`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `In conclusion, the PTCons' tour of Huawei's facilities in Shenzhen represents a
convergence of technological innovation and environmental consciousness.`,
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
    title: `EAI INTERNATIONAL CONFERENCE ON RENEWABLE ENERGY
AND SUSTAINABALE MANUFACTURING.`,
    href: "#",
    description: `Tpcons Investment and Construction Company Limited is pleased to be a gold sponsor -
    Gold Sponsor in the EAI international conference on renewable energy and sustainable manufacturing
    at Polytechnic University - Vietnam National University, Ho Chi Minh City.`,
         date: "Mar 16, 2020",
         datetime: "2020-03-16",
         category: { title: "Clean Energy", href: "#" },
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
    title: `Clean Renewable Energy`,
    href: "#",
    description: `
 Tpcons Investment and Construction Company Limited has proven its uniqueness and prestige
its reputation in the field of building rooftop solar power systems.
With professionalism and long experience, Tpcons has implemented many projects
unique, contributing to promoting the use of renewable energy sources and reducing
minimize negative impacts on the environment.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
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
        content: `Each rooftop solar power project implemented by Tpcons reflects its importance
importance of transitioning to clean and sustainable energy sources. Up to now,
Tpcons has implemented many projects with diverse scales, from residential and commercial areas
small businesses to large organizations.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-301.jpg?alt=media&token=170b8bf3-9c4c-413d-b4ed-3871d84153ae`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `These projects not only bring clean electricity to the community but also
reduce pressure on the national energy system. Creativity in integration
Solar energy into rooftop buildings has created living and working spaces
being environmentally friendly, helping businesses reduce costs and at the same time contribute
part in global efforts to protect the environment.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-302.jpg?alt=media&token=2985aedd-f671-4251-b31a-8effcb455a91`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `In addition, Tpcons also persistently supports businesses and organizations in their actions
transition to clean energy sources. By building and maintaining efficient rooftop solar systems, this company has proven that the
Switching to renewable energy is not only the choice of the future but also the
Current source of benefits for the community and businesses.`,
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
    title: `COMMISSIONING CEREMONY OF ROOFTOP SOLAR POWER AT CU CHI`,
    href: "#",
    description: `The groundbreaking ceremony of the rooftop solar power project with a capacity of 2,003kWp is a step
Saigon - Cu Chi Brewery's breakthrough in converting to energy sources
clean quantity.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
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
        content: `The project is trusted to be assigned to a reputable contractor - Investment and Construction Company Limited
built Tpcons, a leading expert in the field of solar power. Cooperation between owners
The investor and contractor promise to bring an efficient electrical system, increasing durability
sustainable and reduce greenhouse gas emissions, while promoting green and sustainable development criteria
sustainability in the manufacturing industry.`,
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
    title: `Groundbreaking ceremony of rooftop solar power project in Quang Ngai
    took place solemnly.`,
         href: "#",
         description: `Marks an important step in our energy transition journey
    Saigon Beer Joint Stock Company. The project emphasizes the business's commitment to using clean and sustainable energy sources, while demonstrating its strategic vision.
    their environmental and social strategies.`,
         date: "Mar 16, 2020",
         datetime: "2020-03-16",
         category: { title: "Clean Energy", href: "#" },
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
        content: `Tpcons Investment and Construction Company Limited, is a reputable and experienced partner
specializes in building solar power systems. Cooperation between investors
and the contractor promises to create an effective project, which is also an important step
on the journey towards clean energy goals and reduced greenhouse gas emissions.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-504.jpg?alt=media&token=0a7b836b-1556-4e09-986d-e9284aeb2908`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `It is expected that the project will not only bring economic benefits but also contribute
maintaining environmental balance, creating a sustainable and eco-friendly industry
environmentally friendly.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-505.jpg?alt=media&token=871d6412-81b0-47c1-8409-6388f708f63d`,
      },
      {
        type: TYPE.PARAGRAPH,
         content: `It is expected that the project will not only bring economic benefits but also contribute
maintaining environmental balance, creating a sustainable and eco-friendly industry
environmentally friendly.`,
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
    title: `CONTRACT SIGNING CEREMONY BETWEEN TPC, SABECO & SPGROUP`,
    href: "#",
    description: `Tpcons Investment and Construction Company Limited would like to announce the contract signing ceremony between
SABECO, SPgroup and PTC completed.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
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
    title: `NHÀ MÁY ĐIỆN MẶT TRỜI SOLAR PARK.`,
    href: "#",
    description: `TPC, with its reputation as a reputable contractor, has accompanied and completed one of the projects
    The most dynamic projects in the field of renewable energy - Solar power plants
    Solar Park at Dau Tieng 1 and Dau Tieng 2. This is an important turning point
    in the journey of energy conversion and environmental protection.`,
         date: "Mar 16, 2020",
         datetime: "2020-03-16",
         category: { title: "Clean Energy", href: "#" },
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
        content: `Located in Dau Tieng area, one of the areas with energy potential
        Large solar power in Vietnam, Solar Park is not only a promising project in terms of supply
        clean energy but also a testament to TPC's commitment to sustainable development
        solid. Built on a large area, this project plays an important role
        in meeting the growing need for clean energy for communities and
        neighboring area.`,
               },
               {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-601.jpg?alt=media&token=c85c6c31-8f87-4e41-b6ed-d3500751d5f6`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `During the implementation process, TPC has focused on using advanced technology
The most advanced and efficient equipment to optimize energy production efficiency.
At the same time, safety and environmental protection measures have been integrated and guaranteed
that the project not only brings energy benefits but also does not cause damage
affect the surrounding nature.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-602.jpg?alt=media&token=5a672da0-9734-49e5-bcc6-7956f12e0e3a`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Solar Park solar power plant not only generates clean electricity but also
Contribute to reducing greenhouse gases, helping to reduce the impact of climate change
Queen. It is not only a source of energy but also a meaningful project
strategy, making renewable energy an important part of the supply
national electricity.`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Solar Park at Dau Tieng 1 and Dau Tieng 2 is a testament to its importance
        of the transition to clean and sustainable energy sources. TPC contributed
        Actively participate in the development of renewable energy industry, guidance
        show other businesses the determination and responsibility in building one
        sustainable future for both society and the environment.`,
               },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-10.jpg?alt=media&token=d4e2eda6-cfc9-47e7-9a98-bd816ab960e3",
    id: 210,
    title: `Solar power project in Dau Tieng`,
    href: "#",
    description: `The solar power project in Dau Tieng is attracting attention
major in Vietnam's energy industry. With impressive scale and strategic location,
This project promises to make a major contribution to the national electricity supply from renewable sources
create. The investor of the project has set the goal of building a modern, combined system
advanced technology, to optimize energy production and reduce environmental impact. It is expected that the project will be a strong driving force to promote sustainable development in the country
area.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
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
        content: `The project with the contractor is Tpcons Investment and Construction Company Limited.`,
      },
    ],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/post-11.jpg?alt=media&token=9c874e9a-b915-4985-88be-7e89b69358ae",
    id: 211,
    title: `Solar power project in Tan Binh`,
    href: "#",
    description: `Solar power project in Tan Binh, completed in 2019, is one
demonstrates the success and effective companionship between investors
MEDIPHAR CNC Tan Binh and contractor TPCons. This project has created a source
Renewable electricity is important, contributing to minimizing the impact of the public sector
industry to the environment.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Clean Energy", href: "#" },
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
        content: `Investor MEDIPHAR CNC Tan Binh, a reputable unit in the medical field,
has chosen to use solar energy as an important part of its strategy
its sustainability. The project not only helps reduce operating costs but also demonstrates
MEDIPHAR CNC Tan Binh's commitment to social and environmental responsibility
school.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-802.jpg?alt=media&token=2fe79ee5-fd3c-4bc5-890b-e6087a1235ef`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `TPCons Investment and Construction Company Limited, with experience and expertise
        senior in the field of solar energy system construction, has assumed the leading role
        contractor. Project implementation is carried out strictly, ensuring safety
        and system performance.`,
               },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/image-803.jpg?alt=media&token=17b2108c-72ee-4dc4-a6bf-21bd324eadfe`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The project is not only a source of clean energy but also a demonstration of integration
        Successful cooperation between investors and contractors, creating sustainable value for the whole community
        community and businesses. MEDIPHAR's innovation in the energy sector
        CNC Tan Binh and TPCons have made an important contribution to the sustainable development of
        Vietnam.`,
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
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Internet of Things", href: "#" },
    title: `DEVELOPMENT OF A MULTI-AXIS CONTROLLER USING ETHERCAT BEARING TECHNOLOGY`,
    description: `Conventional method: Controlling multiple motors with pulse signals and New method: Controlling multiple motors with network signals`,
    image: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture1_IOT.png?alt=media&token=deddcf5f-f915-4765-8315-ba6e17f0dd04`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `Project name: Developing a multi-axis controller using EtherCAT network technology`,
      },
      {
        type: TYPE.TITLE,
        content: `Conventional method: Controlling multiple motors with pulse signals`,
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
          `Control cables are quite bulky and expensive`,
          `One controller maximum 4-8 motors are controlled`,
          `High delay time, synchronous control is not guaranteed`,
          `The sensor MUST be transmitted to the host computer`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture2_IOT.png?alt=media&token=5a841b0f-12ad-4a6f-9dc3-1ec1aaf5f96b`,
      },
      {
        type: TYPE.TITLE,
        content: `New method: Controlling multiple motors using network signals`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Network-based motion controller`,
      },
      {
        type: TYPE.LIST,
        items: [
          `Use LAN cable, quite compact, cheap and easy to find`,
          `One controller of up to 64 motors is guaranteed synchronous control`,
          `No or very little delay`,
          `The sensor is transmitted to the servo driver (located near the motor so it does not require long wires)`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture3_IOT.png?alt=media&token=48faaa6a-a3e2-4942-8299-2fcdfa684fc1`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Complete system includes:`,
      },
      {
        type: TYPE.LIST,
        items: [
          `1 master motion controller connected to the computer`,
          `Slave types include servo drivers (used to control motors) and I/O (Input/Output: used to receive signals from sensors)`,
          `There is a maximum of 64 slaves in 1 network`,
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
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Internet of Things", href: "#" },
    title: `COLLABORATION SOLUTIONS BETWEEN PEOPLE AND ROBOT IN INDUSTRIAL PRODUCTION`,
    description: `AI model used to collect information about people`,
    image: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture5_IOT.png?alt=media&token=ad708b63-4f24-4eac-b674-ee8430d9759e`,
    contents: [
      {
        type: TYPE.LIST,
        items: [
          `AI models are used to collect information about people`,
          `Operation engineer monitors the system via host computer`,
          `Any risk of collision is detected and warned`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture6_IOT.png?alt=media&token=a1fa4186-d274-406e-bcf8-353ae1815900`,
      },
      {
        type: TYPE.LIST,
        items: [
          `Operation control program on Windows operating system`,
          `The program is installed on the host computer`,
          `Warning LED: red, yellow and blue`,
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
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Internet of Things", href: "#" },
    title: `ARTIFIED INTELLIGENCE APPLICATION FOR CARGO MOBILE ROBOT`,
    description: `Mobile robot capable of loading goods up to 500kg, capable of wireless connection and remote monitoring`,
    image: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture8_IOT.png?alt=media&token=c25c45e3-030f-410b-aa9c-6165f92fb867`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `Application of artificial intelligence for mobile cargo robot system`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture8_IOT.png?alt=media&token=c25c45e3-030f-410b-aa9c-6165f92fb867`,
      },
      {
        type: TYPE.LIST,
        items: [
          `Mobile robot capable of loading goods up to 500kg`,
          `Move according to pre-programmed trajectory`,
          `Robot capable of wireless connection and remote monitoring`,
        ],
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture9.1_IOT.png?alt=media&token=16f1558e-de3d-4c55-915b-c1192d295654`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            Structure of intelligent mobile robot controller
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture11_IOT.png?alt=media&token=033c5113-c624-4d86-93ea-22413265f5b5`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Recognition results using image processing techniques`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture10_IOT.png?alt=media&token=9aa4fb32-965e-4480-8165-f11c6a9769f4`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Space model around humans`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/Picture12_IOT.png?alt=media&token=aac3e151-f8ea-4cf0-a7e5-697e6f4302a0`,
      },
    ],
  },
  {
    id: 215,
    date: "Apr 22, 2024",
    datetime: "2024-04-22",
    category: { title: "Internet of Things", href: "#" },
    title: `The solution utilizes artificial intelligence and the Internet of Things for applications on mobile devices.`,
    description: `The camera module detects dirt and alerts the level of surface dirt.`,
    image: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/z5373684133797_048de6024bc99eae29ea4dcd264c61c2.jpg?alt=media&token=e62d5fda-297b-4d6b-9847-f2326d587e2c`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `The device`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The integrated camera module brings intelligence and efficiency to quality management in the industrial adhesive manufacturing process. By combining camera technology and artificial intelligence, we provide a comprehensive solution for recognizing the level of dirt and analyzing dust on the surface of adhesive rolls, along with environmental parameters such as temperature and humidity.`,  
      },
      {
        type: TYPE.TITLE,
        content: `Features and benefits`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/hinhosd2.jpg?alt=media&token=f33a8c8c-0b9e-48ce-be1d-20c10ef6d2ea`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Detecting dirt level: Our module has the capability to recognize the level of dirt on the surface of the adhesive roll, thereby providing accurate and detailed information about the cleanliness status of the product. `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/AI_0001.jpg?alt=media&token=fea9fac1-0baa-452e-b2a5-ffaff035c37a`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Analysis of dust on the surface: Using artificial intelligence, we can analyze and classify various types of dust without human intervention. This helps optimize the quality control process and minimize errors.`,   
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/AI_0002.gif?alt=media&token=69eb612c-3ef0-4262-838a-ec28a9c027a0`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Integration of AI to recognize new types of dust: Our module not only identifies common types of dust but also has the ability to learn and recognize newly emerging types of dust on the surface of the adhesive roll, ensuring that the inspection process is always up-to-date and effective.`,   
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/3.gif?alt=media&token=34930a62-01b4-4132-8840-68e59e29b809`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Predicting time to reach dirt threshold: Our system utilizes historical data and prediction algorithms to estimate the time required for the dirt level to reach the threshold predetermined by the user. This enables users to plan and implement preventive measures in a timely manner, avoiding undesirable consequences.`,      
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Optimizing quality management process: Predicting the time for dirt level helps optimize the quality management process, reducing the time and effort users need to spend on frequent inspections, while ensuring that the product always meets the highest quality standards.`,
     
      },
      {
        type: TYPE.TITLE,
        content: `mobile application`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/app_01.png?alt=media&token=5ec3bb00-ed8e-4e8b-9976-ca3676dac8b6`,

      },
      {
        type: TYPE.TITLE,
        content: `Integrated multifunctional screen `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/app_02.png?alt=media&token=b70ca346-799c-40d0-b5dc-2eaa0df45ce3`,

      },
      {
        type: TYPE.TITLE,
        content: `Management screen, displaying integrated module-equipped machines`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/app_003.png?alt=media&token=ba783292-3cc4-4eef-86a1-156c84dfff81`,
        
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Alerts via mobile app: Information about predicted time to reach dirt threshold will also be provided through the mobile app, enabling users to conveniently reference and plan from anywhere. Information about the cleanliness status of the adhesive roll and environmental indices will be easily accessible through the mobile app. Users can receive immediate alerts upon detection of issues, allowing them to intervene promptly and minimize the risk of errors.`,
      },
      {
        type: TYPE.TITLE,
        content: `The screen displays detailed parameters collected and calculated from the module.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/app_004.png?alt=media&token=5b24c994-2b85-44a6-99b2-ca381c36429f`,
      },
      {
        type: TYPE.TITLE,
        content: `The screen displays statistical quantities in an abstract chart format.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/app_005.png?alt=media&token=d1367843-dfc3-442a-a09f-6001df055fa0`,
      },
      {
        type: TYPE.TITLE,
        content: `The screen displays alerts when the user-defined thresholds are reached.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/app_006.png?alt=media&token=8cf01941-cc37-4610-b6b5-0173e01bc956`,
      },

      {
        type: TYPE.PARAGRAPH,
        content: `
        The project to develop an integrated camera AI module for detecting dust and alerting dirt levels on the mobile application will provide a comprehensive solution for quality management in the industrial production process. This helps optimize the quality control process, minimize errors, and ensure that the product always meets the highest quality standards. `,
      },

    ],
  },
]

export const serviceBlogs: IBlog[] = [
  {
    id: 300,
    type: BlogType.READ_MORE,
    title: "What is IoT? Definition and applications of IoT in life",
    description: `IoT, short for "Internet of Things," means connecting everyday devices
        our day with a common internet so they can communicate and function
        move together.`,
    image: "https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-7.png",
    contents: [
      {
        type: TYPE.TITLE,
        content: "What is IoT?",
      },
      {
        type: TYPE.TITLE,
        content: "Definition",
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT, short for "Internet of Things," means the connection of everyday objects
                We have a common internet so they can communicate and work together
                together. This is like when you and your friends chat through text messages, pcs
                Your lights, refrigerator, or even your car will be able to receive commands from your phone
                intelligent or controlled.
               
                Thanks to that, they can automatically do many interesting things, such as turning lights on and off according to schedule
                program, notifies the refrigerator when food is about to expire, and even helps the car
                avoid congestion.
                `,
      },
      {
        type: TYPE.TITLE,
        content: `History of IoT`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              The history of IoT is closely linked to the development of the Internet. Because thanks
              A new network of computers can connect to each other. When smartphones and machines
              Tablets have become an indispensable part of today's lives and devices
              Others are also gradually connected to this giant network.

              In the 2000s, IoT received attention and investment grew strongly, with many projects
              creation has been announced. Plus the advent of wireless technologies such as
              Wi-Fi and Bluetooth have made connectivity easier. Today we can
              see many convenient products with the presence of IoT such as vacuum cleaner and home robots
              smart, smart refrigerator,...

              Overall, IoT is a technology that is developed in small steps over time
              thanks to technological innovations and now, it has become an important part
              important in the era of digital transformation.
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-3.png`,
      },
      {
        type: TYPE.TITLE,
        content: `Importance of IoT`,
      },
      {
        type: TYPE.TITLE,
        content: `In everyday life`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              Like invisible wires connecting everything together, Internet of Things (IoT)
              has turned life into a miracle. IoT doesn't just make life easy
              easier, but also creates a new world where interaction between people and
              Machines are no longer limited by space and time.

              IoT saves your energy and time. Repetitive jobs
              or spending a lot of effort on tracking, has now been done by IoT. For example sensors
              Smart watering helps to water the exact amount of water and time of day,
              automatically turns on the light when it gets dark, signaling that food is about to expire in the refrigerator, etc.

              IoT also helps upgrade the community, it can participate in the process of regulating traffic
              traffic and reduce congestion throughout the city. Or turn street lights on and off, control them
              Traffic lights, energy saving for households.

              With huge potential yet to be fully exploited, IoT promises to become a pillar
              Special milestones completely change our lives, of course in direction
              positive when people's energy and mind are freed up to focus on learning and studying
              work at its best.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-4.png`,
      },
      {
        type: TYPE.TITLE,
        content: `In business`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              The Internet of Things (IoT) of course also offers businesses opportunities
              gold to develop and keep up with the continuous transformation of technology.Here it is
              Ways in which IoT is already bringing important benefits to businesses:
                    • Optimize operations: Sensors and connected devices help collect data
                    Real-time performance, equipment status, and inventory status.
                    • Enhancing customer experience: connected devices in the service industry
                    can track customer preferences and provide appropriate information and suggestions,
                    create a personalized experience and meet customer needs in a good way
                    than.
                    • Predictive maintenance: IoT allows businesses to monitor the performance of equipment
                    equipment and predict when they need maintenance or repair before they fail.
                    • Enhanced security and monitoring: Remote connection and monitoring helps prevent
                    Prevent and react quickly to dangerous or dangerous situations
                    violation.
                    • Act on data with AI and machine learning: The facts and the coins
                    Directions that have been collected in the past can be exploited to predict behavior
                    customers or the impact of the event on revenue, etc.
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-9.png`,
      },
      {
        type: TYPE.TITLE,
        content: `Structure and operation of IoT`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              The Internet of Things (IoT) is a network of interconnected devices and objects
              Internet. These devices or objects are equipped with sensors and connection chips, for
              allows them to collect data and send information to a server or controller.
                IoT works in 3 main steps
                    • Step 1: Collect data: IoT devices are equipped with sensors to collect
                    Collect information from the surrounding environment. The sensor can be a thermal sensor
                    pg. 8
                    temperature, humidity, light, air quality and many other parameters. Data
                    Collected sensors will be digitized into computer language.
                    • Step 2: Data transmission: Data is transmitted from the IoT device to the machine
                    server via the internet or wireless connection technologies such as Wi-Fi, Bluetooth, Zigbee, or even mobile networks. Data is transmitted in
                    real-time or scheduled installation.
                    • Step 3: Processing and application: Server or central platform receives data
                    from IoT devices and process information. This data can be segmented
                    analyze to generate useful information, such as predicting trends and operating status
                    alarm, or warning of a problem.
              In short, IoT creates an information network to which smart devices connect and
              interact with each other via the internet, allowing data to be collected and shared for improvement
              improve productivity and human experience across a variety of sectors.
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-5.png`,
      },
      {
        type: TYPE.TITLE,
        content: `Advantages and disadvantages of IoT`,
      },
      {
        type: TYPE.TITLE,
        content: `Advantages`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              Internet of Things (IoT) brings many important advantages to life and activities
              different areas. Advantages of IoT can include:
                  • Enhanced performance: IoT enables real-time monitoring of operations and
                  device status. This helps optimize processes, improve productivity,
                  Save time and resources.
                  • Energy savings: IoT can help monitor and control usage
                  energy. For example, smart systems can automatically turn off and adjust lights
                  temperature, or manage the device's power consumption.
                  • Enhance customer experience: IoT allows businesses to customize
                  and provide services based on customers' personal and behavioral data, create
                  create a better and more personalized experience.
                  • Remote management: IoT allows remote management and control of devices and processes
                  submit. This is especially useful in monitoring and controlling devices
                  in dangerous or difficult to reach environments.
                  pg. 9
                  • Enhanced security: IoT can provide comprehensive security and monitoring for
                  devices and networks, helping to detect and prevent threat activities.
                  • New innovation: IoT opens up opportunities to create new products and services based on
                  the combination of smart devices and data
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Disadvantages`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              IoT is not a perfect technology, it also has very disadvantages
              Worth noting and needing to be remedied are:
                    • Revealing personal information: Because devices can collect personal information
                    very detailed, so concerns about privacy invasion are a serious problem
                    sore.
                    • Data quality: IoT collects large amounts of data from a variety of sources.
                    However, the data is not always accurate and reliable. Data
                    Inaccuracy can lead to wrong decisions.
                    • Complex connections and interactions: IoT networks can be complex and difficult to manage
                    when there are millions of devices connected to each other. This requires system management
                    Complex network management and high performance.
                    • Dependence on the internet: IoT requires a constant connection to the internet to
                    work. When the network is interrupted or has problems, IoT devices can become...
                    so it's useless.
                    • Implementation costs: Implementing an IoT system can require large investments
                    both infrastructure and software. Businesses must consider carefully
                    investment capacity and expected benefits.
                    • Complexity in data management: Large amount of data required by IoT devices
                    Ask for a powerful data management and analysis system.
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Applications of IoT`,
      },
      {
        type: TYPE.TITLE,
        content: `In the vehicle manufacturing industry, automobile industry`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              In the vehicle manufacturing and automotive industry, IoT has brought groundbreaking applications
              break. Smart sensors and connectivity help manage supply chains more effectively,
              from component tracking to condition forecasting. IoT systems also help with inspections
              vehicle quality and maintenance in real time, thereby optimizing performance and increasing
              vehicle lifespan.

              Using IoT to collect data from manufactured vehicles also helps improve design and performance
              user experience. This proves that IoT has created significant change and
              bringing breakthrough development in this industry.
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-6.png`,
      },
      {
        type: TYPE.TITLE,
        content: `In the construction industry`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              For the construction industry, IoT has many contributions when it comes to home projects
              smart or smart construction.

              IoT allows connecting devices in the home such as lights, temperature, and security devices
              and other home devices with internet connection. This creates control and
              Remote management, helps save energy and enhance security. Users can
              Control devices via mobile phone or voice, creating experiences
              Safe and convenient experience.

              In smart cities, IoT plays an important role in traffic management
              communications, energy, waste management and many other aspects of urban life
              town. Sensors and associated monitoring systems help collect traffic data
              traffic, air quality and energy use. This helps improve
              quality of life of residents.

              IoT also helps a lot in construction projects, it allows tracking
              progress, status and performance of construction works. Sensors and systems
              Smart monitoring system helps measure the accuracy of materials and time
              completion and operability of the device. This helps optimize regulation
              construction process, ensuring compliance with progress and controlling project quality.
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-7.png`,
      },
      {
        type: TYPE.TITLE,
        content: `In the industry
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              IoT has proven its advantages in the industry, creating a revolution
              network in production and factory management. From monitoring and optimization processes
              manufacturing processes to equipment monitoring and maintenance, IoT has helped improve performance and
              efficiency of production.

              The collected data helps predict problems and optimize resources, thereby reducing them
              minimize losses and increase the ability to meet demand. These things prove it
              IoT plays an important role in promoting sustainable and innovative development
              in industry.
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-10.png`,
      },
      {
        type: TYPE.TITLE,
        content: `In the retail industry`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              In the retail sector, IoT has brought new approaches. The sensor
              Smart help manage inventory and provide detailed information about products
              Products. As a powerful assistant, IoT provides detailed product information immediately
              at the buyer's phone.

              From suggesting suitable products to providing information about origin and quality
              features, the shopping experience becomes more enjoyable. Automation improves processes
              from ordering to delivery, creating an efficient and dynamic sales environment.
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://didongmoi.com.vn/data/cms-image/iot-la-gi/IoT-la-gi-11.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The above article explains what IoT is as well as introduces readers to its applications
              Its great uses in both personal and community life.`,
      },
    ],
  },
  {
    id: 301,
    type: BlogType.READ_MORE,
    title: `Industrial IoT Trends in 2023`,
     description: `
       IoT (Internet of Things) technology has become one of the
       Industrial trends have developed strongly in recent times. And 2023 will
       is a promising year for industrial IoT……..`,
    image: `https://eco-smart.biz/wp-content/uploads/2023/03/digital-marketing-agency.png`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `Industrial IoT trends in 2023
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT (Internet of Things) technology has become a trend
          Industry has developed strongly in recent times. And 2023 will be
          a promising year for industrial IoT.
          In 2023, there are many notable industrial IoT trends that will emerge. There
          can be a combination of IoT with other technologies such as artificial intelligence,
          blockchain, cloud,... to create new solutions for industries.
          Along with that, IoT applications will also expand and develop significantly, including
          including applications in the manufacturing, transportation, energy and medical sectors.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.thegioimaychu.vn/blog/wp-content/uploads/2021/01/TheGioiMayChu-Blog-Image-IoT-trends.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        To meet the increasing demands of the market, businesses need to understand clearly
        Outstanding industrial IoT trends of 2023 to be able to apply them
        Latest solutions and improve production productivity, reduce costs, increase flexibility
        operate and ensure safety for workers.
   
        In 2023, there are five notable industrial IoT trends that businesses
        What needs to be noted are:

              1. Enhance security and information security in industrial IoT
              2. Combination of IoT and artificial intelligence to improve productivity and efficiency
              manufacture
              3. Use IoT in service business models such as Platform as a
              Service (PaaS)
              4. IoT Edge Computing solution and integrating IoT into the cloud
              5. IoT applications in the field of medicine and health.
              With these trends, businesses can apply new solutions
              latest and most advanced to enhance productivity and compete in the market.`,
    },
  ],
},
  {
    id: 302,
    type: BlogType.READ_MORE,
    title: `IoT development prospects and trends in 2023`,
     description: `Internet Of Things (IoT) technology is in a zero state of development
       cease. In a very short period of time, IoT has transformed from an application tool
       Limited usage and security related issues are up to now…….`,
    image: `https://rtc.edu.vn/wp-content/uploads/2023/10/Tuong-lai-cua-su-phat-trien-IOT.png`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `Prospects and development trends of IoT in 2023
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          Internet Of Things (IoT) technology is in a constant state of evolution.
          In a very short period of time, IoT has transformed from a tool with an application
          limitations and security-related issues, IoT has now become one
          global phenomenon, used by 48% of large businesses.

          Previously, IoT and M2M were often associated with low bandwidth applications,
          such as telecommunications and measurement equipment that require similar data usage
          relatively low, providing relatively benign data for central services to analyze
          business accumulation. In 2023, it will move to another level. Let's
          See what IoT developments and trends we can expect to see
          2023.

          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://rtc.edu.vn/wp-content/uploads/2023/10/Tuong-lai-cua-su-phat-trien-IOT.png`,
      },
      {
        type: TYPE.TITLE,
        content: `Five IoT trends for 2023`,
      },
      {
        type: TYPE.TITLE,
        content: `Apps with higher bandwidth`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Until recently, IoT was limited by the type and volume of data used by applications
          its uses can handle it. But in 2023, we are seeing cents
          IoT is moving into the field of higher bandwidth applications with large data volumes
          Larger data is transmitted at a higher speed. And this leads to significant expansion
          Tell the potential of technology.`,
      },
      {
        type: TYPE.TITLE,
        content: `Real-time data processing`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          With higher bandwidth, capabilities increase. So we will see more and more
          Many companies use IoT to process data in real time using centralized services
          central. One of the main problems with IoT technology is the huge amount of data
          was created.

          Although machine learning (ML) and machine-to-machine (M2M) processing have been implemented
          to speed up data analysis, but still require a delay between collection
          and data processing/analysis in most fields. In 2023, there will be a push
          greater for real-time analysis in a variety of scenarios,
          including videos.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Applications of drones and autonomous machines
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          In November 2022, Science Direct published an article about the Internet of Things
          object. The content of the article refers to things that can automatically perform operations
          needed using AI algorithms without child intervention
          People. To date, there are very few applications capable of achieving this. However,
          There will be notable growth in this sector as they move through the year.

          One of the biggest growth areas we will see prevail
          within a short period of time is the transport and logistics sector. Usually when
          people talk about this, the first thought is AGV autonomous vehicle. Next is home
          smart warehouse. From automatic forklifts to automatic racking systems aim
          completely replace the work that humans do in those facilities.

          Everyone knows that Amazon's entire future profitability model is based on
          on being early adopters in the field. Take into account
          June 2022, Amazon Robotics has deployed more than 520,000 machines to
          Warehousing and distribution centers around the world.
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://rtc.edu.vn/wp-content/uploads/2023/10/Xu-huong-phat-trien-cua-IoT-1.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `Application Monitor`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          IoT has been used for many monitoring applications from weather to table usage
          work and Legionella compliance. But what is clearly missing is merit
          Surveillance technology can make important decisions automatically
          increase quality.

          Leverage artificial intelligence (AI) and ML technologies, combined with data capacity
          Advances in IoT will open up opportunities for truly autonomous monitoring, liberating managers
          from unnecessary warnings and prevent any disruption to the system
          necessary services or processes.

          `,
      },
      {
        type: TYPE.TITLE,
        content: `Advanced security`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          Security has become an increasing weakness for IoT. In process
          developing initial applications, security issues are a pity. And when the
          The system is supplemented and developed, more vulnerabilities are discovered and left behind
          more potential entry points for hackers.

          Meaning that cybersecurity has been and will remain the number one priority for IoT. Both in the field
          new technology, where the focus will be on development that prioritizes security, connectivity and integration
          old systems.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Summary`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Over the years of rapid development, the Internet of Things (IoT) has become
          A fact that is very present and cannot be ignored in current life and business
          grand. IoT has changed the way we interact with the world around us. Step over
          In 2023, IoT continues to grow strongly, bringing with it trends and developments
          full of promise.
          `,
      },
    ],
  },
  {
    id: 303,
    type: BlogType.READ_MORE,
    title: `What is an IoT sensor? Sensor types and applications`,
    description: `IoT (Internet Of Things) sensors in today's digital age are changing
      change the way we interact with the world around us, powerfully and not
      stop growing.`,
    image: `https://iboss.vn/wp-content/uploads/2018/08/Google-Cloud-Looks-to-Streamline-IoT-Management-App-Developer-Magazine_0yq4xr07.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `What is an IoT sensor? Sensor types and applications`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT (Internet Of Things) sensors in today's digital age are changing
          powerfully and powerfully transform the way we interact with the world around us
          constantly developing. They are important tools to help users
          Collect information from the environment and devices, then connect and share data
          this document via the Internet.`,
      },
      {
        type: TYPE.TITLE,
        content: `What is an IoT sensor?`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          IoT (Internet of Things) sensors are connected devices or sensor systems
          connect to the Internet to collect information and data from the surrounding environment,
          then transmits this information to other servers or devices for processing and tracking
          from far away. IoT sensors play an important role in creating a system
          information network related to the physical world, allowing the collection of real-time data
          real time and automatically from different sources such as temperature, humidity, light, substances
          air volume, vibration, pressure, location, and many other factors.

          IoT sensors can transmit data through many connection protocols such as Wi-Fi,
          Bluetooth, LoRaWan, Sigfox, Zingbee and many other protocols depending on the application
          Specific tools and technical requirements.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://savvycom.vn/wp-content/uploads/2023/07/4-Vi-Du-Ve-IoT-Tao-Nen-Dot-Pha-Trong-Cuoc-Song-Hang-Ngay.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `Benefits of IoT sensor technology
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          One of the main advantages of IoT sensors is their ability to transmit data
          wireless. This means they are placed in remote or difficult to reach locations
          close, it is still possible to transmit data back to the center or server through the cloud
          cloud.

          IoT sensors are what makes data from various sources easier, then yes
          can be analyzed to improve processes according to the field in which they are being used.
          Data from sensors is what enables the growth of IoT analytics
          in the industry, as all the information collected continuously is useful to improve the
          different activities.

          Data sensors are highly demanded by businesses because they depend on data
          works well and makes incremental improvements. You need to consider IoT protocols
          can best enhance the performance of your devices and use them.
          Another benefit of IoT sensors is the ability to easily analyze the environment
          easy. They can be used in smart homes, agriculture, and health care
          health, production and transportation.

          For example, Internet Of Things sensors can be used in smart home systems
          smart to monitor the temperature and humidity of the room, even air quality
          gas. Another case of IoT sensors in factories for temperature monitoring
          and machine pressure. This can prevent damage or accidents
          potential impact on human life.

          In agriculture, wireless IoT sensors can be used to monitor temperature
          soil moisture and plant growth, while improving the water cycle
          Fit.
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://media-cdn-v2.laodong.vn/storage/newsportal/2022/6/30/1062472/Anh-Chup-Man-Hinh-20-03.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `Types of IoT sensors`,
      },
      {
        type: TYPE.TITLE,
        content: `Temperature sensor`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          These sensors measure temperature and are used in many applications, including
          temperature control, HVAC systems and medical equipment. They can be used
          in wearables, healthcare, industrial IoT and smart buildings
          bright.

          IoT temperature sensors can measure the amount of heat emitted from a source, analyzing these
          sudden change in this source and convert it into data.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `
          This sensor detects movement within a specific range and is used
          in applications such as security cameras, burglar alarms and wearable fitness devices
          Okay.

          For example: If you are running or jumping, the motion sensor can measure the type of exercise
          is performing and through the IoT device, providing data to the users below
          Calories burned data format.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Proximity sensor`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          These sensors detect the presence of objects or people and are used
          used in applications such as access control systems, robots and security systems
          all cars.`,
      },
      {
        type: TYPE.TITLE,
        content: `Accelerometer`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Accelerometer can detect the acceleration level and change in gravity of an object.
          They are commonly installed on aircraft and fleets.
          Another popular application of this technology is for smartphones
          bright. For example the accelerometer will detect whether your phone is in an upright position or not
          landscape, then adjust the phone image accordingly.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Gyroscope`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `This type of sensor is mainly used in smartphones, they have
          measure and maintain an object's direction and angular speed. They are more definite than family
          tachometers because they can measure tilt and horizontal direction
          Of course, there are other types of gyroscopes with different sizes and applications
          different in airplanes, car navigation systems, robots, digital cameras, games
          play mobile.`,
      },
      {
        type: TYPE.TITLE,
        content: `Humidity sensor`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          These sensors measure humidity in the air. They are used systemically
          heating, vents and air conditioning. Common applications of IoT humidity sensors are weather monitoring, indoor air quality monitoring for diseases
          hospitals, hotels and smart homes.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Pressure sensor`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          These sensors measure pressure changes in gases and liquids. When there is a change
          changes in pressure, the sensor sends information to the IoT device and this information is displayed
          displayed in applications or software, allowing managers to know about
          sudden changes.

          This type of IoT sensor can be used to manage the monitoring of potential leaks
          liquids in water systems or tanks in any facility.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Light sensor`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          These Internet Of Things sensors measure the intensity and color of light.
          They are used in applications such as lighting control and security systems
          security and agriculture.

          Light sensors are one of the very useful devices to adapt to the solution
          your IoT solution if you need to monitor lighting conditions in environments
          different.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Optical sensor`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          Optical sensors can detect some changes in light such as intensity,
          wave, frequency and polarization.

          These sensors are very popular in the mobile industry, especially for these
          The car is capable of driving itself. Additionally, optical sensors are used in electricity
          smartphone to adjust the light intensity received by the phone, to
          take a photo and to automatically adjust the brightness of the screen when the person is outside
          or inside the building.

          Optical sensors help IoT products save energy because of them
          Adjusts the amount of light to use to display user information.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Infrared sensor
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          These IoT sensors emit infrared light that allows them to identify lips
          surrounding school. Besides, they can also detect and analyze heat
          energy emitted by objects, animals or people.

          Infrared sensor applications are very common in medical devices and appliances
          worn, as they allow the user to record his or her blood flow and pressure. If you
          If you have a smart watch or smart bracelet, it will be equipped with sensors
          infrared.
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/2j2c2Ho1vsKz1OKpKEa3LGgj01JRLdYxrmRK0Xks.jpg
          
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Applications of IoT sensors
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT (Internet Of Things) sensors have changed the way we interact with the world
          around. They are sensors capable of connecting to the Internet, allowing reception
          Collect, transmit and analyze data from the environment and other devices. Here it is
          Some applications of IoT sensors in daily life and many fields
          different:
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Smart Homes:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              • Energy management: IoT sensors help monitor electricity and water consumption, from
              That optimizes energy usage and saves costs.
              • Security and safety: Alarm sensors, surveillance cameras and smoke sensors
              of the ability to send alerts to your mobile phone when an incident is detected
              try.
              • Remote control: You can control lighting, temperature and home appliances
              Remote family via SmartPhone.

          `,
      },
      {
        type: TYPE.TITLE,
        content: `Healthcare:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
                • Health monitoring: IoT sensors measure heart rate, blood pressure, blood sugar and
                Send data to your doctor or health system to monitor your personal health.
                • Smart medicine: Sensors can monitor the correct use of pharmaceuticals
                and send reminders when needed

          `,
      },
      {
        type: TYPE.TITLE,
        content: `Smart Agriculture:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
                • Crop management: Sensors measure soil moisture, temperature and plant growth
                Helps farmers manage crops more effectively.
                • Automatic irrigation: Sensors control the watering system based on conditions
                weather and soil moisture.

          `,
      },
      {
        type: TYPE.TITLE,
        content: `Industry 4.0:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
                • Predictive maintenance: Sensors monitor the condition of machinery and production equipment,
                Predict failures and maintenance times.
                • Inventory management: Sensors help track the circulation of goods in the chain
                supply, thereby optimizing inventory management.
                • Smart Transportation:
                • Traffic monitoring: Sensors record information about traffic flow,
                especially in real time.
                • Autonomous vehicles: Sensors and GPS systems make autonomous vehicles capable
                recognize the surrounding environment and control the vehicle safely.
                • Asset Management:
                • Location tracking: GPS sensors help manage mobile assets such as cars,
                containers and industrial equipment.
                • Security: Sensors warn when there is unauthorized movement or
                property fraud.

          `,
      },
      {
        type: TYPE.TITLE,
        content: `Environment and natural resources:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
                • Environmental monitoring: Sensors monitor air, water and soil quality
                belt to protect the environment.
                • Protect rare animals: Sensors help monitor appearance and movement
                movement of rare animals or plants to protect them.
                • Energy management:
                • Energy saving: Sensors monitor the performance of energy-saving devices
                energy and suggest ways to optimize energy use.
         
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Smart Cities:
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
                • Smart Traffic: Sensors help manage traffic flow and traffic
                Optimize street lighting and public transportation systems.
                • Environmental management: Sensors help monitor air and water quality,
                along with waste and water management.
          Taken together, IoT sensor applications have driven connectivity and optimization
          in many aspects of life and industry, bringing great benefits to the
          convenience and environmental protection.
          `,
      },
      {
        type: TYPE.TITLE,
        content: `Summary
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          IoT sensors play an important role in collecting data from the environment and
          devices, allowing us to capture important information and optimize processes
          In many different areas.
          `,
      },
    ],
  },
  {
    type: BlogType.SERVICE,
    id: 304,
    title: `Iot in the commodity supply chain`,
    description: `Smart Logistic is growing stronger in the 4.0 technology era
      to deliver excellence in logistics supply chain management. Among them, public
      IoT technology plays an extremely important role for smooth operations. However, no
      Everyone knows about this technology. Therefore, the article below will help you
      understand more about it!
      `,
    image: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-1.jpeg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `The role of IoT technology in Smart Logistics`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            Smart Logistic is increasingly growing strongly in the 4.0 technology era
            to excellence in logistics supply chain management. Among them, IoT technology
            plays an extremely important role for smooth operation. However, not everyone
            know about this technology. Therefore, the article below will help you understand more about it!
            `,
      },
      {
        type: TYPE.TITLE,
        content: `The role of IoT in Smart Logistics`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            IoT - Internet of Things is a system of connected devices and objects
            Internet. Thereby allowing objects and devices to collect and exchange data with each other.
            More precisely, IoT spreads the value of the Internet to everything, helping it become intelligent
            more intelligent.

            Today, IoT is often applied in Smart Logistics to bring about process
            optimal operation. So what are the benefits of IoT?`,
      },
      {
        type: TYPE.TITLE,
        content: `Cost reduction`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            In Smart Logistics, IoT applications help reduce all costs from inventory management fees
            inventory to maintenance costs. Thus, ensuring optimal use of labor and convenience
            utilities and storage space.

            In other words, the logistics system will not waste resources, reducing costs
            manage and increase profits.`,
      },
      {
        type: TYPE.TITLE,
        content: `Real-time tracking`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            With this technology, you can track products and equipment quickly and accurately
            than as they move through the supply chain.

            IoT devices like GPS monitors can track everything from the location of the shipment
            to the current temperature of the shipment, providing up-to-the-minute information to help you
            Smart Logistic managers understand how their supply chain operates.

            Real-time tracking is extremely useful, especially for high-value items
            or temperature-sensitive goods. All stages in the batch chain of custody
            Stores are accurately mapped using IoT data and device registration
            bag. IoT devices can automatically flag when a shipment has left the heat zone
            safety.`,
      },
      {
        type: TYPE.TITLE,
        content: `Seamless Workflow`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-2.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            IoT allows monitoring the flow of the supply chain to and from the warehouse. From that,
            Managers can use robots to pick up specific goods without delay,
            or the data collected can be used to determine the best layout and configuration
            for warehouse.

            In addition, managing paperwork also consumes a lot of time in the process
            operate. By using EDI electronic data exchange tool combined with IoT,
            businesses can automate their most cumbersome paperwork,
            such as verifying a driver's freight broker bond
            Load or process bills of lading.

            Hence, it becomes easier to maintain a seamless workflow.`,
      },
      {
        type: TYPE.TITLE,
        content: `Increased scalability`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            IoT applications help optimize every square meter of storage space. With the data
            Data in the past, you can calculate time, space, infrastructure and head
            investment needed to increase scale.

            In addition, IoT can integrate one warehouse with another warehouse within the business's network system
            more developed industry.
            `,
      },
      {
        type: TYPE.TITLE,
        content: `Improving forecast accuracy`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            In Smart Logistics, IoT significantly improves data collection activities. It's for
            allows data to be collected at all times or at certain intervals, helping to save money
            more time than manual collection. Therefore, it minimizes the impact
            of human error in data collection.

            However, IoT technology also needs to be accompanied by software and backend solutions
            Compatible. The IoT system should be designed in parallel with demand forecasting software
            logistics to ensure that IoT data is used effectively.

            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-3.jpeg`,
      },
      {
        type: TYPE.TITLE,
        content: `Greater automation`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            IoT connects machines and devices together without human intervention
            people, this is advantageous in automating and improving warehouse capabilities.
            From there, you can quickly deploy your business plan and achieve your profit goals
            profit.

            For example, a customer places an online order with an automated business
            streamline your warehouse operations. Before the customer places an order, the rack system
            The warehouse's intelligence detected the product's availability through
            a weighing pan. Thanks to that, there is no risk of a backlog of orders.

            The automatic picking system receives picking orders from the computer and the mechanical transfer system
            Items go onto the conveyor belt to the packaging station. While the package is being shipped
            to the customer, an IoT sensor tracks the package and ensures that the package
            handled with care.

            `,
      },
      {
        type: TYPE.TITLE,
        content: `Applications of IoT in Smart Logistics`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            In the smart logistics chain, IoT technology is often commonly applied
            in some devices such as:
                  • Smart racks automatically detect inventory levels.
                  pg. 29
                  • Smart thermometers and thermostats.
                  • Smart vehicles and devices.
                  • Smart EDI system automatically verifies authentication and management information
                  Paperwork.
                  • Smart building automation system.
                  • Robot automation.

            `,
      },
      {
        type: TYPE.TITLE,
        content: `Identifying IoT use cases`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            The IoT system in each business will generally be different. Because it depends
            Purpose and need will have appropriate technology deployment. To determine
            For the right IoT use case, answer each of the following questions in turn:
                  • Where in the supply chain do you need to collect the fastest and most accurate data?
                  response?
                  • What outdated technologies exist in our supply chain?
                  Friend?
                  • Which data is most relevant to your demand forecast?
                  • What geographical and logistical factors will affect your supply chain?
                  Correct identification of appropriate use cases will contribute to improving efficiency
                  of Smart Logistics.

            `,
      },
      {
        type: TYPE.TITLE,
        content: `TPM provides IoT technology in Smart Logistics`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            The important role of IoT technology in Smart Logistics is undeniable
            receive. A complete and smooth supply chain is absolutely indispensable
            these modern technologies.

            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://pnctech.vn/wp-content/uploads/2022/11/smart-logistic-4.jpeg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            If you are in need of a reputable address to provide technology solutions for the chain
            If you have a supplier, please contact TPM immediately. With more than 5 years of experience in
            In the automation industry, we are proud to be partners with many large domestic and foreign corporations
            water.

            Coming to TPM, you will not only receive advice and dedicated support from the staff
            Professionally, our experts also bring you solutions
            suitable solution with the most optimal cost.

            In short, Smart Logistic without IoT technology will reduce efficiency
            results and encounter many difficulties during operation. That's why businesses should
            consider and establish IoT technology to complete the supply chain. Hope with the article
            Writing above will help you fully understand the role of IoT.

            `,
      },
    ],
  },
  {
    id: 305,
    type: BlogType.SERVICE,
    title: `IoT in healthcare`,
    description: `Smart healthcare devices are one of the IoT applications
      Most popular in medicine. Let's learn about how the Internet of Things is changing
      medical - health care field in this article.
      `,
    image: `https://www.elcom.com.vn/storage/uploads/images/6j4tXzXzopIsAmfhIB2gCKfFK91PWUOubJdTwVRk.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `The best applications of IoT in medicine - health care
          healthy`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          Smart healthcare devices are one of the IoT applications in healthcare
          most popular. Let's learn about how the Internet of Things is changing the healthcare sector -
          health care in this article.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/6j4tXzXzopIsAmfhIB2gCKfFK91PWUOubJdTwVRk.jpg
          `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          Internet of Things - The Internet of Things is a breakthrough technology, mentioned many times
          within the past decade. Thanks to this technology, smart devices have continuously come out
          life, becoming essential and indispensable for human life.

          Mobile phones and smart watches are commonly found in modern society. Day
          Today, IoT devices are deployed in almost every industry, from retail and logistics to
          manufacture.

          But have you ever heard of the Internet of Things in healthcare? Medicine does not stand
          yen and in fact it is one of the most advanced fields of activity. Are not
          Is it any wonder that companies are using the power of IoT devices to give
          doctors and patients with more effective products and solutions.

          The scope of IoT system deployment in the medical and healthcare sector is very impressive.
          Experts expect the global IoMT (Internet of Medical Things) market to increase
          Strong growth up to 950 billion USD by 2032.
         
          1. What is the Internet of Things in healthcare?
          Simply put, Internet of Things is a concept that represents the use of devices
          Smart devices and sensors to collect data in a supported, environment
          by advanced software.

          Machines cannot yet outperform humans in many areas, but collecting
          and data analysis is definitely their strength. With IoT, partial or complete
          datasets and the tracking of related processes can be automated. Thing
          This is essential for health care activities.

          So what is the Internet of Things in healthcare and how can it revolutionize the industry?
          What is this career like?

          By applying IoT ideas to medicine, storage temperature during transportation
          Vaccines and medications are controlled remotely, patients accurately monitor their symptoms
          many different types of diseases, use medicine correctly and most effectively without
          make an appointment to see a doctor, etc. All of that is possible thanks to magnetic monitoring capabilities
          far from seamless of medical technology devices.

          2. Benefits of IoMT

          Although constantly evolving and improving, the global healthcare system
          are still facing major challenges. It's not just about finding a way
          treat new diseases or incurable diseases that have existed for a long time, but also the problem of
          limited understanding, human failure to identify and monitor symptoms,
          Maintain habits to prevent disease.
         
          So, what benefits does IoT bring to the medical and healthcare field:

          2.1. Remote health care

          One of the most visible advantages of IoT in healthcare is the opportunity to
          The doctor monitors the client's health condition. Customers can contact to
          Get help anytime, from anywhere.

          This not only makes the medical examination and treatment process more convenient and provides timely care
          emergency care but also an opportunity for people to access healthcare more easily, even in rural areas
          Residential area far from the center.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/WqgKOAjSvMQiBM2W1bTGELz0vFG5bV8cFmQ5RYae.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          2.2. Disease prevention

          Prevention is better than cure. So, healthcare IoT solutions provide
          monitoring tools, helping customers proactively monitor their health status,
          Adjust habits, improve lifestyle and detect early signs of problems
          underlying health.

          2.3. Reduce costs and effort for medical examination and treatment

          IoT-powered medical devices and sensors help patients monitor their health status
          proactive health, less need to consult experts.
          At the same time, extensive data is collected with the help of application, devices
          Smart healthcare makes visits to specialists more efficient,
          more quickly because the doctor has most of the necessary information at hand.

          2.4. Medical data is accessible

          Previously, people had to go to a medical facility, see a doctor, or need a lot of housing equipment
          home to measure blood pressure, heart rate, sugar or blood oxygen levels,...
          But now, they can use compact and convenient IoMT devices like watches,
          strap to monitor all of the above indicators regularly. On top of that, clear personal statistics will be provided in the app to track each person's health
          People.
         
          2.5. Advanced diagnostics

          Because IoT healthcare devices can track almost anything related to health
          general health, so detecting any abnormalities and symptoms will be easier.
          This helps doctors get a complete picture of the patient's health status
          Identify and diagnose potential diseases more quickly and accurately.

          2.6. Better healthcare management

          IoMT not only serves the health care needs of individuals but also of organizations
          organizations and systems globally. For example: Some medical IoT devices help with analysis
          health status, collecting global statistics on epidemics.

          2.7. Improved drug treatment

          Drug therapy is an important part of the treatment process. So important thing
          The important thing is to make sure the patient takes the medicine regularly and that the medicine is working well
          Surname. IoT health monitoring systems are designed to help maximize efficiency too
          drug treatment course.

          2.8. Research support

          IoMT can be used in research by collecting primary medical data
          exact, unlimited. Thanks to that, scientists focus on complex tasks
          more complicated than collecting, compiling and analyzing this information manually.

          3. The best IoT applications in medicine - health care today

          3.1. Internet of Bodies (IoB - Internet of Bodies)

          Internet of Bodies technology uses the human body as a source of medical data. The
          IoB devices collect biometric, physiological, or behavioral data, which are then shared across
          IoT networking, storage and analytics with the help of backend infrastructure and
          sent to the end user, usually through a mobile application.
          IoB smart devices can be worn externally (smart watches, straps
          wrist,...), internally mounted (artificial organ systems, implants, prosthetics
          smart,,...) or merged with the body (digital medicine).`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/6BOqpDygCY1vwXoCsrqnfa3sVva9tDaohQ4WESXh.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          This technology allows doctors to monitor customers' health at all times and make diagnoses
          more accurate and supportive for patients with chronic diseases. Some obvious examples
          more about IoB devices:

          Bracelet
          Smart watches and smart bands are considered health care technology
          The most popular IoT health. They can be used not only for physical purposes
          education, tracking health indicators but also used to collect information linked to
          Other devices.

          Standard health care functions of this type of smart device include:
          Step counting, heart rate monitoring, sleep monitoring. In addition, modern equipment
          can collect information about heart rate, blood oxygen saturation, skin temperature and period
          menstrual period, and can also be used as a mood tracking tool.

          Earphone

          Hearing aids are increasingly being improved with the latest technology
          Improve the lives of people with hearing problems. Listening device
          Now connect to other devices via Bluetooth, easily adjusting to the world's sounds
          right on your smartphone.

          Smart digital medicine

          Scientists and medical experts are trying to bring in complete medical equipment
          in a pill-sized capsule. Over the past decade, these houses
          Scientists at the Massachusetts Institute of Technology, USA have researched edible sensors
          to replace traditional diagnostic methods.

          One of their inventions is a small capsule filled with sensors and bacteria
          is used instead of an endoscope to diagnose gastrointestinal problems,
          especially bleeding.

          Glucose monitoring

          Diabetes is a very common disease worldwide. Lots of organizations
          has been continuously working to improve the method of monitoring glucose levels
          blood.

          For example, Abbott, the US healthcare company, has developed a series of solutions
          Health care for people with diabetes, including colds
          Non-invasive sensor helps monitor blood sugar levels and provide timely warnings.

          Mood-changing energy patch

          This is a great alternative to caffeine. The patch creates photo waveforms
          affects the human nervous system, creating calmness, peace of mind and enhancing concentration
          central. This method has been proven safe by more than 30 thousand studies
          rescue.

          3.2. Smart hospital

          IoMT allows medical staff to operate more efficiently, establishing close collaboration
          between experts, doctors and technical staff, as well as providing services that satisfy patients and prolong the life of medical equipment and instruments.
                • Predictive maintenance: IoMT advances the approach of predictive maintenance instead of maintenance
                Troubleshoot and ensure medical machinery and equipment operate well, avoiding interruptions
                use process, save costs and limit risks affecting health
                patient.
                • IoT connected devices: Allows easy access to the features of
                medical devices and interact with them through mobile applications. Some settings
                IoMT support devices in hospitals include defibrillators and injectors
                fog, oxygen pumps, wheelchairs and other monitoring equipment.
                • Asset, staff and patient management: Tracking all equipment, instruments,
                Collaborative process between staff and patient status monitoring becomes
                a challenge that requires hospitals and medical facilities to find ways to overcome it. IoT support
                tracking support based on sensors, tags, badges and medical technology devices
                connected differently.
          `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/CLflMcNaCz9UW7rkfCR1y4wIwl85PVbFtK6OAKrS.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        3.3. Smart laboratory

        Process large amounts of scientific data, manage equipment and supplies regularly
        exhausted laboratory staff and caused many errors. That's why
        Why do scientists seek to delegate these tasks to automated systems? Iodine
        in health is working.

        IoT systems automate boring, repetitive activities. Copper
        At the same time, it manages the status of various devices, triggering phone calls
        and videos to address maintenance issues and requests for additional items in the room
        experiments, send warnings about emergencies,...

        3.4. Chronic disease management

        Patients with chronic diseases need ongoing support. IoMT developers
        provides technology equipment to help patients monitor their health, medications and other
        problems they encounter.
        Patients can detect early signs of disease and be warned when symptoms appear
        bad to promptly contact a doctor. Unlike the transmission monitoring method
        Smart health care systems and equipment ensure monitoring and treatment processes,
        This can save the lives of many patients with chronic diseases.

        3.5. Surgical robots

        The world's leading surgeons have collaborated with engineers and public developers
        technology to pass on their knowledge and skills to robots, taking advantage of the precision of
        machinery to carry out the most complex processes. So today, IoT robots
        Automation can perform some surgeries even better than humans.
        Robotic surgery is proven to be faster, more accurate, and less invasive
        more painful, less scarring, lower risk of infection and less recovery time
        more functional recovery.
        This applies to most typical types of surgery. Besides general surgery
        In general, doctors also rely on robots when performing heart, spine, digestive, thoracic, and accessory surgeries
        urology and urology.

        3.6. Rehabilitation

        In many cases, rehabilitation is the final stage of treatment.
        However, this critical period can take a long time, and patients need support and support
        continuous guidance. Medical IoT devices contribute to promoting quick recovery
        faster and safer.

        Developers have created a platform where doctors connect with patients and follow up
        their rehabilitation process with the help of a health monitoring system
        AIoT. Individual recovery strategies are established for each patient and managed prospectively
        performance-based process monitored by smart sensors as well as metrics by
        Statistical AI.

        Conclude

        The IoT applications in healthcare mentioned above are just some examples of how it works
        The impact of the Internet of Things in the medical field. For businesses and developers,
        IoT opens up countless opportunities to express their creativity and apply technological advances
        Technology aims to improve an important part of human life.
        `,
    },
    ],
  },
  {
    id: 306,
    type: BlogType.SERVICE,
    title: `IoT in smart home`,
     description: `Like the Internet before it, IoT technology has created a “lane
       waves” in every aspect of life, including the birth of smart homes.
       `,
    image: `https://images.cenhomes.vn/2019/03/nha-thong-minh.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `Internet of Things applications in smart homes`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Like the Internet before it, IoT technology has created a "wave" in every aspect
            of life, including the birth of smart homes.
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/sATLXaIF9BV2oTV7EHuOYzomP6pC4a75h4DIdQHa.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The Internet of Things (also known as Internet of Things - IoT) has "revolutionized" a lot
            different aspects of human life. In particular, one of the fields
            The largest and most popular IoT application today is smart home.

            IoT has turned simple, traditional houses into modern living spaces
            than. Devices in the home are connected to each other to enhance control capabilities
            control, creating convenience, efficiency, and optimality when living in the house.

            This article will delve into the role and how IoT works in the home
            smart, while also mentioning relevant technologies and merits
            Expectations of "the house from the future."

            1. The role of IoT in smart homes

            When talking about smart homes, it is impossible not to mention IoT technology because it creates a...
            Modern, fully connected living environment. Below are some of the roles
            Key features of IoT in smart homes:

            Automatic control:

            IoT allows control and automation of various devices in a home
            seamless way, from lighting and heating to security systems and equipment
            entertainment. Thus, these devices can exchange information with each other, helping to lift
            High convenience, efficiency and energy saving.

            Remote access monitoring:

            One of the most important benefits of IoT in smart homes is capabilities
            Remote control and monitoring of devices. With just one touch on your smart phone
            or with a click on the website, homeowners can manage and adjust settings even when
            not at home such as: turning on/off lights, adjusting the temperature, checking security cameras,...
            `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://www.elcom.com.vn/storage/uploads/images/wUsevQitQk0FGPjN0FclvcDoe3C9RIFfWyXIJWFU.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Energy saving:
        With the above advantages, IoT can optimize internal energy use
        Smart Homes. By using sensors, data analysis and automation
        automation, smart devices can adjust energy consumption based on
        Several factors such as region, time of day, behavior, and preferences of the person
        use.

        Thermal controls, lighting systems and smart electronics are designed
        The design can easily adapt to the surrounding environment. This helps homeowners reduce costs
        unnecessary electricity and water bills, providing a more sustainable living environment.

        Increase security and safety:

        Security monitoring systems inside/outside the house are connected to each other,
        such as AI cameras, smart door locks, motion measurement sensors,
        Provides real-time and video alerts. Thereby, the homeowner can monitor,
        indirectly protect the house from afar.

        IoT can also integrate with fire alarms, CO detectors, and more
        Other safety equipment to automatically respond and give immediate notification in case of a situation
        emergency situation.

        Personalized experience:

        IoT technology enables customization and personalization of user experiences
        in the smart home. By learning about user preferences and behaviors,
        IoT systems can predict and adjust home devices according to each individual's needs
        (temperature based on body temperature, lighting, music playlist playing in the room,...).

        2. How does IoT work in smart homes?

        In smart homes, IoT operates through a network of devices, sensors, and other devices
        ports are connected together. This network allows one-way communication and control
        seamless every corner of the house.

        Device connection:

        IoT-enabled devices in smart homes communicate with each other through a protocol
        wireless such as Wi-Fi, Bluetooth, Zigbee or Z-Wave, controller included
        heating, lighting systems, home appliances, security cameras,... These devices
        equipped with sensors, embedded processor and wireless connection module.

        Data collection and transmission:

        Using sensors embedded in smart devices, the system can collect data
        data about the family environment. They can detect factors such as movement,
        temperature, humidity, light intensity. The collected data will be transmitted to one
        hub or central gateway in the smart home system through the air network
        wire.

        Central data processing:

        The central system (hub) acts as the "heart" of the smart home. Here, evil
        Data from many different sensors is synthesized and processed, from which the homeowner can provide information
        wise decision. A hub can be a device or specialized software that runs
        on a server or cloud platform.
       
        Control and automation:

        Based on pre-set rules, the hub will send commands to compatible devices
        response. For example: If a motion sensor detects unusual movement in the
        yard, the central system activates the security system or turns on the lights in that area. These
        This command allows smart home operations to be automated, simultaneously
        Easily control many different functions.

        Interaction with users:

        Users can interact with the smart home system through many interfaces
        different types of mobile applications, websites, etc. These interfaces allow homeowners
        Monitor and control devices remotely, flexibly adjust settings, receive notifications.
        Thereby, the homeowner can easily monitor and manage the house from anywhere, bringing convenience
        flexibility, a higher degree of control over one's own living space, creates
        a smarter living environment.
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
        3. IoT smart home technology
  
        Sensor:

        Sensor technology plays an important role in collecting lip data
        school of life. It can detect motion, temperature, humidity, light intensity,...
        These sensors provide valuable information, thereby helping with automation
        Various functions in the smart home take place more smoothly and conveniently.

        AI Assistant:

        AI voice assistants such as Amazon Alexa or Google Assistant have
        becoming popular in smart homes today. This tool allows
        Users control the device and perform tasks using voice commands
        Experience intuitive, hands-free control.
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
             Smart device:

             IoT-enabled devices, such as refrigerators, washing machines, or ovens, are deliverable
             communicate with the central system and provide information about status and energy consumption
             quantity or require maintenance when due.

             Security system:

             Smart security cameras, door locks, and motion sensors can send alerts
             in real-time and live video to the homeowner's device, allowing monitoring and
             Protect your home from afar.

             4. The future of IoT smart home automation

             In the future, smart homes are one of the promising fields of development
             IoT technology is constantly innovating, progressing and perfecting. We can expect the possibility
             Improved connectivity between devices from different manufacturers. This
             will result in more seamless integration and compatibility, making it easier for homeowners to expand
             and customize your smart home system further.

             Besides, AI algorithms can analyze collected data, increasing prediction capabilities
             prediction and automation. For example, the system can learn human behavior patterns
             user and automatically adjusts settings based on personal preferences.

             The IoT ecosystem will continue to grow, with more IoT-enabled devices. The opening
             This breadth will include many different aspects of family life, incl
             Health monitoring, kitchen appliances, home entertainment,... further enhance convenience
             and efficiency.

             However, it should be noted that as the number of connected devices increases, so does the guarantee
             Data security and privacy will become even more important. Development in
             The future will focus on implementing encryption methods and authentication protocols
             Strong enforcement to protect sensitive user information.

             Conclude

             The Internet of Things has transformed traditional houses into smart living spaces
             Smartphones and devices are connected to each other. With IoT technology, homeowners can enjoy
             enhanced automation, control, convenience and energy savings.

             `,
       },
    ],
  },
  {
    id: 307,
    type: BlogType.SERVICE,
    title: `IoT in the manufacturing industry`,
     description: `IoT in manufacturing (Internet of Things in Manufacturing) is a system
       network of physical devices connected to each other and to the Internet to create an environment
       Smart manufacturing, automation and optimization of production processes.
       `,
    image: `https://vti-solutions.vn/wp-content/uploads/2023/05/rpa-concept-with-blurry-hand-touching-screen-2048x1366.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `Definition of IoT in manufacturing`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
          IoT in manufacturing (Internet of Things in Manufacturing) is a network system
          mesh of physical devices connected to each other and to the Internet to create an environment
          Smart manufacturing, automation and optimization of production processes.

          In the manufacturing industry, IoT connects production equipment and machinery through sensors
          variables, processors, and networking. These devices have the ability to collect data and transmit
          exchange information, and interact with each other, helping to improve production, management and processes
          Remote monitoring, optimize performance, and increase process flexibility
          production.`,
     },
      {
        type: TYPE.IMAGE,
        content: `https://vti-solutions.vn/wp-content/uploads/2023/05/rpa-concept-with-blurry-hand-touching-screen-2048x1366.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
            With IoT in manufacturing, devices and machines can automatically transmit data
            operation, operating conditions, and other important parameters to the system
            production manager. This data is organized, analyzed and transformed into information
            Useful to help management understand the operation of the production system, thereby making recommendations
            Smart decisions and improvements in manufacturing processes.

            For example, IoT in manufacturing can enable remote monitoring and control of devices
            machinery, monitor the amount of raw materials and finished products, and automatically notify about errors
            and incidents, forecast maintenance and equipment upgrade needs, and optimize production processes
            and supply chain management.

            With the development of IoT in manufacturing, businesses can increase productivity
            productivity, enhance product quality, minimize errors and risks, and optimize management
            and reduce operating costs, and create a smart, flexible manufacturing environment
            and effective.`,
      },
      {
        type: TYPE.TITLE,
        content: `What role does IoT play in manufacturing
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT (Internet of Things) has meaning and an important role in the manufacturing industry,
             they bring significant benefits and create a productive environment
             intelligence, automation and optimization. Below are some of its meanings and main roles
             IoT in manufacturing:`,
      },
      {
        type: TYPE.TITLE,
        content: `Automation of production processes
        `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT allows businesses to connect and control production equipment and machinery
        through the Internet. This creates the possibility of automating the production process,
        helps eliminate human intervention and increase automation in control,
        Supervise and manage production activities`,
      },
      {
        type: TYPE.TITLE,
        content: `Optimize production performance
             `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT allows data collection from production equipment and machinery through sensors
        variables and monitoring systems. This data can be analyzed and used for betting
        Evaluate performance, identify causes of waste and find ways to improve processes
        production process. This helps optimize operations, increase productivity, and reduce time
        downtime and save resources.
            `,
      },
      {
        type: TYPE.TITLE,
        content: `Supply chain management
            `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT provides comprehensive tracking and management of all aspects of the supply chain
        response. From tracking the location and status of goods during transportation,
        To optimizing storage and warehouse management, IoT helps businesses improve
        supply chain processes, reduce loss and excess inventory, and increase
        Flexibility and quick response in meeting market needs.
        `,
      },
      {
        type: TYPE.TITLE,
        content: `IoT enhances security and safety
        `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT can help improve security and safety in manufacturing environments. Feelings
            Variable and monitoring systems can monitor the working environment, detect and
            warn of risks, incidents and safety violations. Furthermore, IoT may also increase
            Enhance information security, protect important data and prevent attacks
            network.
            `,
          },
          {
            type: TYPE.TITLE,
            content: `Create a smart manufacturing environment
                `,
          },
          {
            type: TYPE.PARAGRAPH,
            content: `IoT in manufacturing brings connectivity and interaction between devices and machines
                machinery through the Internet, creating a smart production environment. In the lips
                In this field, devices can exchange information, automatically adjust and improve
                flexible and efficient production process. This helps businesses
                can create a smart, dynamic and responsive working environment
                respond quickly to market changes and customer requirements.
                `,
          },
          {
            type: TYPE.TITLE,
            content: `Applications of IoT in manufacturing`,
          },
          {
            type: TYPE.TITLE,
            content: `Automation of production processes`,
          },
          {
            type: TYPE.PARAGRAPH,
            content: `Remote monitoring and control: IoT allows monitoring and control of devices and
                Remote production machinery via Internet connection. Thanks to that, managers and engineers
                can monitor production system performance and make adjustments remotely,
                save time and increase flexibility.`,
          },
      {
        type: TYPE.IMAGE,
        content: `https://vti-solutions.vn/wp-content/uploads/2023/05/hand-touching-screen-rpa-concept-2048x1367.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Manufacturing equipment tracking and management: IoT devices in manufacturing can be
            used to monitor the status, operation and performance of machines and equipment
            manufacture. Data is collected from sensors and sent to the management system, which helps
            Recognize problems, predict maintenance and upgrade needs, and optimize usage and age
            device's lifespan.`,
      },
      {
        type: TYPE.TITLE,
        content: `Optimize production performance`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `Automatic data collection and analysis: IoT allows automatic collection of data from
            various sources in the manufacturing process, including sensors, machines and
            monitoring system. This data can be analyzed and transformed into useful information to monitor performance, identify problems and find ways to improve processes.
            production process.
           
            Predictive equipment maintenance and upgrades: IoT devices in manufacturing can collect
            Collect data about the performance and status of production equipment. Through feces
            Analyzing data, IoT can predict and warn about the need for essential maintenance and upgrades
            before problems occur, helping to minimize machine downtime and ensure continuity
            continuously in the production process.
            `,
      },
      {
        type: TYPE.TITLE,
        content: `Supply Chain Management`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Track and manage freight: IoT in manufacturing can be used
        Used to track the location, condition and transportation of goods. The sensor
        and the monitoring system can send information about location, temperature, humidity and parameters
        of goods, helping to improve transportation processes, reduce losses and
        Product quality assurance.

        Optimize storage and warehouse management: IoT can be applied for optimization
        storage and warehouse management. Sensors and monitoring systems can help along
        track inventory, provide information about the location and status of goods, and
        Optimize the picking and ordering process, ensuring efficiency and reliability
        inventory management.

        These applications of IoT in manufacturing help improve and enhance performance
        Be flexible and respond quickly to market changes, and minimize downtime
        downtime and waste in the production process.
        Contact us for support in applying AI & IoT solutions`,
      },
    ],
  },
  {
    id: 308,
    type: BlogType.SERVICE,
    title: `IoT in retail`,
     description: `Modern retailers are applying Internet of Things - IoT to
       Complete store operations. Aims to improve experience and enjoyment
       Push customer shopping transactions.
       `,
    image: `https://digital.fpt.com/wp-content/uploads/2019/12/shutterstock_1714734415-1-scaled.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `Learn about IoT in the retail business`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Modern retailers are applying the Internet of Things - IoT to perfection
        operates at the store. Aims to improve the experience and promote transactions
        customer shopping. IoT technology is said to revolutionize the retail industry.
        It brings many innovations and new opportunities. Replacing the traditional way of operating,
        improve customer service, supply chain as well as open many other channels. About muscle
        Basically, this is a network connecting "all things" through the Internet. Often integrated
        sensors and connected devices such as IoT gateways. Allows communication, division
        collect and share data across a series of networks. And cloud platform (cloud server)
        provide useful insights for businesses.`,
      },
      {
        type: TYPE.TITLE,
        content: `How has IoT technology changed the retail industry?`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              The application of modern technology to sales processes has changed dramatically
              pole. Specifically:
                  • Improve shopping experiences quickly and conveniently.
                  • With current automation technologies such as robots and artificial intelligence (AI).
                  Has been helping retailers streamline operations. This helps with optimization
                  sales processes, staff optimization and management costs.
                  • Track inventory, improve supply chain management.
                  • Many online payment methods have also been commonly applied.
                  For example, using mobile wallets has become popular among consumers
                  Currently.
                  • In addition, there are also remote purchasing methods that have been widely used
                  The product was applied successfully.`,
      },
      {
        type: TYPE.TITLE,
        content: `IoT applications in retail business`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `To meet the expectations of customers and businesses. TPM introduces several
              IoT solutions for today's retail industry.
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Vending Kiosk`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://xandatechnologies.com/wp-content/uploads/2021/03/Self-Service-kiosk.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
              This is a product used for automatic sales/ordering and automatic payment. Product
              This is very suitable for F&B stores, restaurant chains, airports, and train stations
              ship,…

              With touch screen technology, customers can directly select the desired product
              want and pay online. In addition, kiosk also supports many other features. Barely
              Limit: advertising content in formats: images, text, videos retrieved from the warehouse
              Enterprise media. Products are designed according to requirements and items
              customer's intended use.`,
      },
      {
        type: TYPE.TITLE,
        content: `Automatic queuing system`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `This is a solution for managing and optimizing queues. To reduce waiting time
              and create a better shopping or service experience for customers. This helps
              Improve customer satisfaction and create loyalty.

                  • Take order numbers on the spot using a ticket printer. Or get the order number remotely through
                  Devices such as smartphones, tablets,... with internet connection.
                  • Automatically manage queue: display order number on LED board, invite/call customers
                  The goods arrive at the counter when it's their turn,…
                  • Store information about waiting time, number of visits, and services
                  that customers use.
                  • This data is used for service performance analysis, resource prediction
                  necessary force and optimize service processes.
                  • …
            At TPM we provide from simple solutions to integrated solutions
            Many modern features. Depending on the customer's requirements and purpose of use
            products that we will design specifically.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://atpro.com.vn/wp-content/uploads/2023/09/xep-hang-tu-dong-tai-quay-nganh-fb-min-768x414.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `Distributed refrigerated vehicle temperature and humidity management solution`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `For industries such as food, pharmaceuticals or cashew-sensitive goods
              environmental conditions. Solution for managing temperature and humidity in multiple refrigerated vehicles together
              time and dispersion everywhere is very important. To ensure the safety and quality of
              goods under suitable environmental conditions.

              With modern technology, the temperature and humidity in the car are always within the set range
              put. If these two values exceed the threshold, a warning will automatically be sent via SMS or Email.`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://atpro.com.vn/wp-content/uploads/2023/10/iot-trong-nganh-kinh-doanh-ban-le2-768x372.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `Smart warehouse management`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `IoT is considered one of the technology investments in warehouse management. This solution
              Very suitable for clothing stores, shoes, handbags, supermarkets, etc. Tracking number
              inventory and guide employees to the right product location. Contribute
              part to improve the customer service process quickly. Also, the management
              Good warehouse optimizes staff searching time as well as customers' waiting time.
              `,
      },
      {
        type: TYPE.IMAGE,
        content: `https://atpro.com.vn/wp-content/uploads/2023/10/iot-trong-nganh-kinh-doanh-ban-le3-768x514.jpg`,
      },
      {
        type: TYPE.TITLE,
        content: `Conclusion`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `The future of the retail industry will be associated with the development of IoT technology.
              The application of new technologies brings many significant benefits in terms of efficiency and spread
              customer experience as well as increased profits. Promises to bring many opportunities
              for the retail and manufacturing industries. Helping businesses step forward step by step
              If you still have questions about IoT solutions in the retail business.

              Please contact TPM's hotline number, we will support and serve customers
              quickly and provide solutions suitable for businesses.
              `,
      },
    ],
  },
  {
    type: BlogType.SERVICE,
    id: 309,
    title: `Iodine in agriculture`,
    description: `IoT technology in agriculture not only helps optimize production costs
    agricultural production but also helps promote trade and increase safety for all
    product manufacturers and users`,
    image: `https://niptech.vn/images/ckeditor/images/iot%201.jpg`,
    contents: [
      {
        type: TYPE.TITLE,
        content: `IoT applications for agriculture: An inevitable trend`,
      },
      {
        type: TYPE.TITLE,
        content: `IoT technology in agriculture doesn't just help optimize costs
        agricultural production costs but also helps promote trade and
        Increase safety for both producers and users
        Products
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Vietnam is one of the largest agricultural producing countries in the world, with products
        Annual output always remains high and stable. However, Vietnam is also
        one of the countries being heavily affected by climate change; copper
        At a time when the agricultural production process was still not synchronous and consistent, the products
        Vietnamese agriculture is facing many difficulties when accessing available markets
        high quality. Vietnam needs changes in agricultural production processes
        industry to optimize product quality, as well as have operational solutions
        Agriculture is no longer too dependent on environmental and weather factors. 
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Optimize agricultural products
              `,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Develop a smart system using IoT (Internet of Things).
        animals) for agriculture, can monitor crop growth and environmental conditions
        Farming schools, considered an essential task today, allow growers to attend
        predict, monitor and manage the life cycle of agricultural products.

        According to predictions, there will be 500 billion devices connected to IoT by 2030. IoT brings
        many opportunities allow industries to create new strategies and models to present
        actualize ideas. IoT is a multi-sector combination and is moving towards one world
        smart, where everything can be accessed efficiently, quickly
        quickly.

        Applying IoT technology in agriculture has outstanding advantages compared to farming
        Traditional collaborations such as promptly responding to weather, optimizing productivity, and analyzing
        Calculate factors such as land, irrigation and pest control.
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
        The application of IoT technology in agriculture has created a revolution
        in the agricultural industry: Helps control and regulate environmental conditions
        growth for livestock and plants in cultivation and livestock areas for control
        parameters of temperature, humidity, air quality, soil quality, quality
        water sources... through sensor and computer systems for measurement and analysis
        exactly.
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
        In Vietnam, agriculture is a field that has existed for a long time, so it is strong
        of Vietnam compared to other regions in the world is its production experience and
        Farming is passed down from many generations. However, this is also one of the
        Weaknesses of our country's agriculture, when factors such as conditions
        growth of animals and plants, time and dosage of pesticide use
        fertilizer, harvest time, required criteria for each export market and region
        How to distribute products to consumers... is still largely being worked out
        according to the experience and sense of each individual producer. Leading to quality
        of agricultural products is not uniform, it is difficult to meet the market
        difficult school. Producers have not optimized production costs and distribution methods
        resources, and agricultural production activities are often affected
        by weather, climate, and disease factors. These are the realities and difficulties
        is always present and clearly visible in agriculture in Vietnam
        The emergence of IoT technology has completely changed management methods
        production in agriculture. IoT technology plays an important and influential role
        many sectors and industries, from manufacturing, healthcare, media, energy
        even the agricultural sector. IoT technology includes a connectivity system
        smart objects such as sensors, vehicles, mobile devices to proceed
        Remote data collection, intelligent analysis, and user communication. Equal
        How to deploy sensor technology and IoT technology in agriculture
        changing every aspect of traditional farming methods. IoT technology
        In agriculture, there are outstanding advantages compared to traditional farming such as time
        respond to weather, optimize productivity, analyze and calculate factors such as
        land, irrigation and pest control. The application of IoT technology in
        agriculture has created a revolution in the agricultural industry. Therefore, the
        Learning, researching and applying IoT to the agricultural sector is very popular
        Many countries around the world are interested in promoting it. Exploitation of IoT technology
        to put into application in agricultural activities, will bring the agriculture of
        a country to a new level.

        Some outstanding applications of IoT when used in agriculture can be mentioned
        comes as follows:
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Control and adjust environmental conditions for livestock growth,
        plants in crop and livestock areas`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%202.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `With IoT technology, the growing conditions of animals and plants are no longer perfect
        It all depends on the weather. Environmental parameters have a direct influence
        directly to livestock and crops such as temperature, humidity, air quality, etc
        Soil quality and water quality can now be controlled by sensors and machines
        measure and analyze accurately. A smart IoT system is also possible
        to propose methods to improve and adjust farming conditions accordingly
        suitable for the growth process of each different breed and crop.`,
      },
      {
        type: TYPE.TITLE,
        content: `Support optimal distribution of resources (land resources, water resources) and resources for agricultural production activities`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%203.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Land and water are both limited resources, so it's up to you to calculate your usage
        Optimizing these resources is extremely necessary. With IoT technology
        includes sensors, real-time monitoring systems and software
        Smartly, farmers will be supported in inspection, collection and composting
        Analyze actual data to optimize the use of land and water resources. Specifically yes
        Factors that can be mentioned include: optimal plant density per land area, humidity and soil capacity
        Soil water holding capacity, crop irrigation water needs at each time...
        These parameters will help farmers increase resource use efficiency
        Land and water increased significantly.`,
      },
      {
        type: TYPE.TITLE,
        content: `Optimize workforce`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        Once you have the support of smart machines, your time and effort
        farmers will be reduced. This is an inevitable benefit when applying these
        achievements of the 4.0 technology revolution in agriculture in particular and all fields
        In general, it is to optimize the amount of human resources.
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Control and optimize time and dosage of fertilizers, chemicals and drugs
        pesticides need to be used`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%204.png`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        One of the disadvantages of agriculture in Vietnam is its use
        Currently, chemical preparations in the production process are not strictly controlled
        strictly, the dosage has not been calculated accurately to ensure development
        plant growth, while keeping the product free from chemical residue. Besides,
        Fertilization and pesticide spraying are mostly done manually
        involving humans, this is not only harmful to human health
        labor but also affects the ecological environment. With IoT technology in
        agriculture, calculation and control of use time and dosage
        Fertilizers, chemicals and pesticides will be applied most accurately. These
        New methods such as using automatic vehicles with precise nozzles and spraying equipment
        Unmanned chemical irrigation... is gradually being applied, to ensure the elements
        Usage time, dosage and safety for human health and
        ecological environment.
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Control harvest time to give the best product quality`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `To maximize yields and profits, choose the right harvest time
        has great significance for agricultural activities. An IoT system with sensors
        Variables and intelligent analysis software, which can predict data obtained from online
        crop feed to assist farmers in predicting yield and output, from there
        Plan and decide when to harvest to get the best yield.
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Helps connect and synchronize with other IoT systems across the country,
        Promote commercial activities to bring products to consumers`,
      },
      {
        type: TYPE.IMAGE,
        content: `https://niptech.vn/images/ckeditor/images/iot%205.jpg`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        With the participation of the Internet, IoT systems in many different fields exist
        can connect to work together. With agricultural activities, no
        Only in the production process, IoT technology can also help promote and support operations
        product preservation and consumption, through practical applications such as warehouses
        smart storage, smart distribution stores or purchasing applications
        smart. All will promote commercial activities to be able to bring products
        agriculture with the best quality to consumers.
              `,
      },
      {
        type: TYPE.TITLE,
        content: `Conclude`,
      },
      {
        type: TYPE.PARAGRAPH,
        content: `
        From the benefits of applying IoT technology to the agricultural sector, they
        We have analyzed and pointed out above, we can draw the conclusion: For Vietnamese agriculture
        Nam can keep up with the pace of development as well as meet standards
        rigorous in major markets around the world, the application of IoT technology in this field
        agricultural sector is extremely necessary. IoT technology in agriculture is not only
        helps optimize agricultural production costs but also helps promote trade and
        Increase safety for both manufacturers and product users. You can say cents
        The application of IoT technology in agriculture is gradually becoming a trend
        weak objectivity.
              `,
      },
    ],
  },
]
