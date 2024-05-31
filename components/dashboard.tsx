"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Loading } from "./results";
import "./Sections.css";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import Dialog from "./dialog";

const rob = Roboto({ weight: ["700"], subsets: ["vietnamese"] });
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
      return;
    }
    getData();
  }, []);

  return (
    <>
      {userData && (
        <div
          className={`text-2xl flex flex-col justify-evenly ${rob.className}`}
        >
          <p>Your Daily Streak {userData.streak.count} </p>
          <p>
            Your Reading Plan is{" "}
            {`${userData.readingPlan?.numberPerType ?? "none"} chapters ${
              userData.readingPlan?.type ??
              "not available, set up a reading plan"
            }` ?? "non set yet"}
          </p>
        </div>
      )}
    </>
  );
}
function AddDailyPlanForm() {
  return <></>;
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
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    CheckDataAndUpdate(session?.email as string);
  }, []);
  return (
    <>
      <div className="dashboard bg-center bg-cover flex h-screen">
        <div className="lg:min-h-screen   bg-gray-500 bg-opacity-50 md:min-h-screen lg:flex md:flex w-80  hidden ">
          <div className="mt-20 justify-evenly flex-col gap-2 flex h-full">
            <div className="flex w-full py-4 justify-evenly gap-2">
              <p className="text-xl text-gray-300">{session?.name}</p>
              <Image
                src={session?.image ?? "/Avatar.png"}
                priority
                alt="Image of you"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <SideBar />
          </div>
        </div>
        <div className="flex w-full  bg-white bg-opacity-50 justify-center">
          <p> Hey {session?.name} welcome to your dashboard</p>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            See Verse of the Day
          </button>
          {isOpen && (
            <Dialog
              onClick={() => {
                setIsOpen(false);
              }}
            />
          )}
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
