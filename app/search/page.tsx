import SearchMain from "@/components/SearchMain";
import { Metadata } from "next";
import { Bible } from "../fetch";

export const metadata: Metadata = {
    title:"Search"
}
export default function Search(){
  return (
    <>
      <SearchMain />
    </>
  )
}