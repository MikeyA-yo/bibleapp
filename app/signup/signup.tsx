"use client"
import { useSession } from "next-auth/react"
import Image from "next/image";
import { redirect } from "next/navigation";

export default function SignupP(){
    const { data: session, status } = useSession();
    if (session){
        return (
          <div className="bg-white justify-center z-0 flex mt-20">
            <p>Hey {session.user?.name}</p>
            <Image src={session.user?.image as string} alt="Image of you" width={40} height={40} />
          </div>
        )
    }
    if(!session){
        if(status !== 'loading'){
            redirect('/api/auth/signin')
        }
    }
    return (
        <>
            <div className="bg-white z-0 flex mt-20">
              <p>welcome Signup</p> 
            </div>
        </>
    )
}