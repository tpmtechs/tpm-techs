import Home from "app/home/page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TPM Technology",
}


export default function Web() {
  return (
    <>
      <Home />
    </>
  )
}
