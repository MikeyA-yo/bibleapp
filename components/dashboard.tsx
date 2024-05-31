"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Loading } from "./results";
import "./Sections.css";
import { useEffect, useState } from "react";
async function GetData() {
  const res = await fetch("/api/UserStats");
  const data = await res.json();
  return data;
}
async function CheckDataAndUpdate(email: string) {
  try {
    const data = { email };
    const res = await fetch("/api/UserStats", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return;
    }
  } catch (e) {
    console.log(e);
  }
}
function SideBar() {
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    async function getData() {
      const data = await GetData();
      setUserData(data);
      console.log(data);
      return;
    }
    getData();
  }, []);

  return (
    <>
      {userData && (
        <div>
          <p>Your streak {userData.streak.count} </p>
        </div>
      )}
    </>
  );
}
function DashMain({
  session,
}: {
  session:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
}) {
  useEffect(() => {
    CheckDataAndUpdate(session?.email as string);
  }, []);
  return (
    <>
      <div className="dashboard bg-center bg-cover mt-20 flex h-screen">
        <div className="lg:min-h-screen bg-gray-500 md:min-h-screen lg:flex w-80 md:flex md:flex-col hidden lg:flex-col">
          <div className="flex w-full pt-4 justify-evenly gap-2">
            <p>{session?.name}</p>
            <Image
              src={session?.image ?? "/Avatar.png"}
              priority
              alt="Image of you"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div>
            <p>Your Daily Streak </p>
            <p>Your reading Plan</p>
            <SideBar />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <p> Hey {session?.name} welcome to your dashboard</p>
        </div>
      </div>
    </>
  );
}
export default function UserDashboard() {
  const { data: session, status } = useSession();

  if (!session?.user) {
    if (status !== "loading") {
      redirect("/api/auth/signin");
    }
  }
  if (status == "loading") {
    return (
      <div className="w-full h-full bg-slate-50 bg-opacity-50 animate-pulse">
        <Loading />
      </div>
    );
  }

  if (session && status == "authenticated") {
    return <DashMain session={session.user} />;
  }
}
