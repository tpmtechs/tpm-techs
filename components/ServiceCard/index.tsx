/* eslint-disable @next/next/no-img-element */

import { type FC } from "react"

interface IServiceCard {
    title: string;
    description: string;
}

const ServiceCard: FC<IServiceCard> = ({title, description}) => {
  return (
    <div className="w-96 rounded-xl bg-white" style={{ height: 500 }}>
      <img
        alt="banner"
        className="w-full rounded-t-xl"
        src="https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-1.jpeg?alt=media&token=0d2c26d9-4d3a-497b-bf55-a8e1be6bc35d"
      />
      <div className="p-10">
        <div></div>
        <div className="text-2xl font-extrabold">{title}</div>
        <div className="text-base font-medium mt-2">{description}</div>
      </div>
    </div>
  )
}

export default ServiceCard
