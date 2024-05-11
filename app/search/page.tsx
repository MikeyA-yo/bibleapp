import { VersesNumber } from "@/components/BibleCards";
import SearchMain from "@/components/SearchMain";
import { Metadata } from "next";
import { getBibles } from "../fetch";

export const metadata: Metadata = {
    title:"Search"
}
export default function Search(){
  getBibles('kjv', 'Joshua','1', '8')
  return (
    <>
      <SearchMain />
    </>
  )
}