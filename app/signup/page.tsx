
import { Metadata } from "next";
import SessionPage from "./Session";
export const metadata: Metadata = {
    title:"Signup"
}
export default function Signup(){
  return (
    <>
      <SessionPage />
    </>
  )
}