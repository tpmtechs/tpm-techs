/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { type FC } from "react"
import './index.css';

interface IServiceCard {
    title: string;
    description: string;
    image: string;
    href?: string;
}

const ServiceCard: FC<IServiceCard> = ({title, description, image, href}) => {
  return (
    <div className="w-96 rounded-xl bg-white" style={{ height: 420 }}>
      <img
        alt="banner"
        className="w-full rounded-t-xl h-48 object-cover"
        src={image}
      />
      <div className="p-10 h-72">
        <div></div>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-base font-regular mt-2 block-ellipsis">{description}</div>
        {
          !!href && (<Link href={href}>{`Đọc thêm`}</Link>)
        }
        
      </div>
    </div>
  )
}

export default ServiceCard
