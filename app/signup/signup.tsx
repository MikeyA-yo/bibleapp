"use client"
import { getSession, useSession } from "next-auth/react"

export default function SignupP(){
    const { data: session, status } = useSession();
    if (session){
        return (
          <div className="bg-white z-0 flex mt-20">
            <p>Hey {session.user?.name}</p>
          </div>
        )
    }
    return (
        <>
            <div className="bg-white z-0 flex mt-20">
              <p>welcome Signup</p> 
            </div>
        </>
    )
}