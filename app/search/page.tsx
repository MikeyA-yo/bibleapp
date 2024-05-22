import SearchMain from "@/components/SearchMain";
import { Metadata } from "next";

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