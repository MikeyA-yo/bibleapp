"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Loading } from "./results";
import "./Sections.css"
async function CheckDataAndUpdate(email:string){
   try{
    const data = {email}
    const res = await fetch("/api/UserStats", {
     method:"POST",
     body:JSON.stringify(data)
    });
    if(res.ok){
       return;
    }
   }catch(e){
    console.log(e)
   }
}
export default function UserDashboard() {
  const { data: session, status } = useSession();

  if (!session) {
    if (status !== "loading") {
      redirect("/api/auth/signin");
    }
  }
  if (status == "loading"){
    return (
       <div className="w-full h-full bg-slate-50 bg-opacity-50 animate-pulse">
         <Loading />
       </div>
    )
  }
  if (session && status == "authenticated") {
    CheckDataAndUpdate(session.user?.email as string)
    return (
      <>
        <div className="dashboard bg-center bg-cover mt-20 flex h-screen">
          <div className="lg:min-h-screen bg-gray-500 md:min-h-screen lg:flex w-80 md:flex md:flex-col hidden lg:flex-col">
              <div className="flex w-full pt-4 justify-evenly gap-2">
                <p>{session?.user?.name}</p>
                <Image src={session.user?.image ?? "/Avatar.png"} priority alt="Image of you" width={40} height={40} className="h-10 w-10 rounded-full" />
              </div>
              <div>
                <p>Your Daily Streak</p>
                <p>Your reading Plan</p>
              </div>
          </div>
          <div className="flex w-full justify-center">
            <p> Hey {session?.user?.name} welcome to your dashboard</p>
          </div>
        </div>
      </>
    );
  }
}
