import { VersesNumber } from "@/components/BibleCards";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:"Search"
}
export default function Search(){
  return (
    <>
    <div className="bg-white mt-20">
        welcome Search
        <VersesNumber number={23} />
    </div>
    </>
  )
}