import { VersesNumber } from "@/components/BibleCards";
import SearchMain from "@/components/SearchMain";
import { Metadata } from "next";
import { VerseArray, getBibles } from "../fetch";

export const metadata: Metadata = {
    title:"Search"
}
export default function Search(){
  getBibles('kjv', 'Isaiah','38', '8')
  VerseArray('kjv',"joshua", '1')
  return (
    <>
      <SearchMain />
    </>
  )
}