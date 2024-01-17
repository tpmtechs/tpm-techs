
import { Metadata } from "next"
import Home from "./home/page"

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
