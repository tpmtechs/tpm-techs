"use client"

import { Carousel, Col, Divider, Image, Row } from "antd"
import { type FC } from "react"
import "animate.css"
import MemberCard from "components/MemberCard"

const profiles = [
  {
    name: "Johnny Tractor",
    role: "Human Resource Director",
    imageUrl: "https://img.freepik.com/free-photo/portrait-beautiful-woman-engineer_23-2148826527.jpg",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit",
  },
  {
    name: "Johnny Tractor",
    role: "Human Resource Director",
    imageUrl: "https://img.freepik.com/free-photo/portrait-beautiful-woman-engineer_23-2148826527.jpg",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit",
  },
  {
    name: "Johnny Tractor",
    role: "Human Resource Director",
    imageUrl: "https://img.freepik.com/free-photo/portrait-beautiful-woman-engineer_23-2148826527.jpg",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit",
  },
  {
    name: "Johnny Tractor",
    role: "Human Resource Director",
    imageUrl: "https://img.freepik.com/free-photo/portrait-beautiful-woman-engineer_23-2148826527.jpg",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit",
  },
]

const About: FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center " style={{ marginTop: "66px" }}>
      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-2.jpg?alt=media&token=1eb8d70f-c57b-4350-ab09-bb161e9262fd')] bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="text-2xl italic text-white">About</div>
              <div className=" text-7xl font-extrabold text-white">TPM Technology, Inc.</div>
            </Col>
          </Row>
        </div>
        <div style={{ height: 600 }} className="absolute inset-0 z-30 w-full bg-black bg-opacity-50" />
      </section>

      <div style={{ maxWidth: 1280 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # TPM Technology, Inc.
          </div>
          <Divider />
          <Row align="middle">
            <Col span={12}>
              <div className="text-lg font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </Col>
            <Col span={12}>
              <Row align="middle" justify="center">
                <Image
                  preview={false}
                  width={240}
                  alt="tpm-techs-logo"
                  src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/tpm-technology-no-background.png?alt=media&token=d12002fa-bc8c-45e9-9607-b166005dc3fa"
                />
              </Row>
            </Col>
          </Row>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-mabel bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280, height: 600 }} className="z-40 flex w-full items-center justify-start">
          <Row style={{ width: "100%" }} align="middle" gutter={[24, 24]}>
            <Col span={12}>
              <div className="text-2xl italic text-primary">TPM Technology</div>
              <div className=" text-7xl font-extrabold text-primary">Mission & Goal</div>
            </Col>
            <Col span={12}>
              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="my-2 text-2xl font-semibold">
                  Mission
                </div>
                <div className=" text-xl text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
              </div>

              <div className="my-8">
                <div style={{ color: "#3172A9" }} className="text-2xl font-semibold">
                  Goal
                </div>
                <div className="my-2 text-xl text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <div style={{ maxWidth: 1280 }} className="w-full">
        <section className="my-16">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # People
          </div>
          <Divider />
          <div className="my-8 flex items-center justify-center text-center text-4xl font-semibold">
            <div className="w-6/12 ">50+ years of experience</div>
          </div>
          <div className="my-8 flex items-center justify-center text-center text-lg font-semibold">
            <div className="w-6/12 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="my-8">
            <Row gutter={[48, 48]}>
              {profiles.map((profile: any) => {
                return (
                  <Col key={profile.name} span={6}>
                    <MemberCard profile={profile} />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
      </div>

      <section
        style={{ width: "100vw" }}
        className="flex w-full items-center justify-center bg-mabel bg-cover bg-no-repeat"
      >
        <div style={{ maxWidth: 1280 }} className="my-16 w-full">
          <div style={{ color: "#3172A9" }} className="text-3xl font-semibold">
            # Testimonials
          </div>
          <Divider />

          <Carousel afterChange={onChange} autoplay autoplaySpeed={1000}>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-center">
                <div className="w-10/12">
                  <section className="relative isolate overflow-hidden rounded-xl border border-primary bg-mabel  py-12">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Walkcation</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default About
