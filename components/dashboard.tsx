"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Loading } from "./results";
import "./Sections.css";
import { useEffect, useState } from "react";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import Dialog from "./dialog";
import { Check } from "./spinner";

const rob = Roboto({ weight: ["700"], subsets: ["vietnamese"] });
const mont = Montserrat({ weight: ["700"], subsets: ["vietnamese"] })
const openSans = Open_Sans({ weight: ["700"], subsets: ["vietnamese"] });
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
          <div className="flex flex-col items-center justify-between">
            <p >Current Daily Streak </p>
            <p className=" font-light">{userData.streak.count} </p>
            <p>Best Streak</p>
            <p className="font-light">{userData.streak.best}</p>
          </div>
          {userData.readingPlan && (
            <div className="flex flex-col items-center justify-between">
                <p className={`text-xl ${mont.className}`}>Reading Plan</p>
                <p>{userData.readingPlan.numberPerType} Chapters {userData.readingPlan.type}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
interface DailyPlan {
  numberPerDay?: number;
  numberPerWeek?: number;
  email: string;
}
function Success() {
  return (
    <>
      <div className="flex gap-2 rounded-xl w-4/6 bg-green-500">
        <Check className="size-6 text-lime-700" />
        <p className="text-sm">Changes successfuly Made</p>
      </div>
    </>
  );
}
function AddDailyPlanForm({ email }: { email: string }) {
  const [dailyPlan, setDailyPlan] = useState<DailyPlan>({ email: email });
  const [daily, setDaily] = useState("daily");
  const [success, setSuccess] = useState(false);
  const handleDailyNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    {
      setDailyPlan((prevState) => ({
        ...prevState,
        numberPerWeek: 0,
        numberPerDay: parseInt(e.target.value),
        email: email,
      }));
    }
  };
  const handleWeeklyNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    {
      setDailyPlan((prevState) => ({
        ...prevState,
        numberPerDay: 0,
        numberPerWeek: parseInt(e.target.value),
        email: email,
      }));
    }
  };
  const handleSubmit = async (data: DailyPlan) => {
    try {
      const jsonData = JSON.stringify(data);
      const res = await fetch("/api/UserPlan", {
        method: "POST",
        body: jsonData,
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2300);
        return;
      }
    } catch (e) {
      setSuccess(false);
      console.log("oops something went wrong");
    }
  };
  return (
    <>
      <div>
        {success && <Success />}
        <Image src={`dailyplan.svg`} height={100} width={100} alt="dailyplan" />
        <form
          className="flex flex-col gap-1"
          onSubmit={(e) => {
            e.preventDefault(); // if i remove this line the page refreshes and updates data, but doesn't show saved message, what should i do?
            handleSubmit(dailyPlan);
          }}
        >
          <select
            onChange={(e) => {
              setDaily(e.target.value);
            }}
          >
            <option value={"daily"}>Daily</option>
            <option value={"weekly"}>Weekly</option>
          </select>
          {daily === "daily" ? (
            <input
              type="number"
              placeholder={`number of chapters ${daily}`}
              onChange={handleDailyNumberChange}
            />
          ) : (
            <input
              type="number"
              placeholder={`number of chapters ${daily}`}
              onChange={handleWeeklyNumberChange}
            />
          )}
          <button
            type="submit"
            className="rounded bg-slate-50 w-auto p-2 bg-opacity-50 hover:bg-opacity-50 hover:bg-slate-200"
          >
            Save Changes
          </button>
        </form>
      </div>
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
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    CheckDataAndUpdate(session?.email as string);
  }, []);
  return (
    <>
      <div className="dashboard bg-center bg-cover  min-h-screen">
        <div className="flex min-h-full">
          <div className="lg:min-h-full   bg-gray-500 bg-opacity-50 md:min-h-full lg:flex md:flex w-80  hidden ">
            <div className="mt-20  flex-col gap-2 flex ">
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
          <div className="flex  w-full bg-white bg-opacity-50 py-4 justify-evenly items-center gap-4 flex-col">
            <div className="flex w-full  gap-3 flex-col lg:flex-row md:flex-row justify-center   items-center">
              <div
                className={`lg:text-3xl text-xl md:text-2xl flex flex-col gap-1 ${openSans.className}  text-gray-600`}
              >
                <p className="pt-14">
                  {" "}
                  Hey {session?.name}, <br /> Welcome to your Dashboard
                </p>
                <Image
                  src={"/dashboard.svg"}
                  alt="dashboard"
                  height={320}
                  width={320}
                  className="lg:h-72 lg:w-72 md:h-72 h-52 w-52 md:w-72"
                />
              </div>
              <div className={`flex flex-col gap-1  ${openSans.className}`}>
                <div>
                  <span className="text-xl">Add a daily plan or edit</span>
                  <AddDailyPlanForm email={session?.email as string} />
                </div>
              </div>

              {isOpen && (
                <Dialog
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              )}
            </div>
            <button
              className="rounded bg-slate-50 w-auto p-2 bg-opacity-50 hover:bg-opacity-50 hover:bg-slate-200"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Verse of the Day
            </button>{" "}
          </div>
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
      <div className="w-full h-screen flex justify-center dashboard bg-slate-50 bg-opacity-50 animate-pulse">
        <Loading />
      </div>
    );
  }

  if (session && status == "authenticated") {
    return <DashMain session={session.user} />;
  }
}
