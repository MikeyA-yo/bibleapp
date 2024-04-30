import { Metadata } from "next";
import SignupP from "./signup";
export const metadata: Metadata = {
    title:"Signup"
}
export default function Signup(){
  return (
    <>
       <SignupP />
    </>
  )
}