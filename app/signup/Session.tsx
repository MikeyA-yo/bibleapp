"use client";
import { SessionProvider } from "next-auth/react";
import SignupP from "./signup";

export default function SessionPage(){
    return (
      <>
         <SessionProvider>
           <SignupP />
         </SessionProvider>
      </>
    )
  }