"use client"
//import { useSession } from "next-auth/react"

import { redirect } from "next/navigation";

export default function SignupP(){
   // const { data: session, status } = useSession();
  //  if (session){
        redirect("/dashboard")
    //}
    // if(!session){
    //     if(status !== 'loading'){
    //         redirect('/api/auth/signin')
    //     }
    // }
    return (
        <>
            <div className="bg-white dashboard  flex justify-center h-screen">
                 Empty
            </div>
        </>
    )
}