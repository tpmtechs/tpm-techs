
import { Metadata } from "next"
import Home from "./[locale]/home/page"

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
