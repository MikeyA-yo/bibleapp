"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Loading } from "./results";
import "./Sections.css";
import { useEffect, useState } from "react";
import { Open_Sans, Roboto } from "next/font/google";
import Dialog from "./dialog";

const rob = Roboto({ weight: ["700"], subsets: ["vietnamese"] });
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
          <div>
            <p>Current Daily Streak </p>
            <p>{userData.streak.count} </p>
          </div>
          {userData.readingPlan && (
            <p>
              Your Reading Plan is{" "}
              {`${userData.readingPlan?.numberPerType ?? "none"} chapters ${
                userData.readingPlan?.type ??
                "not available, set up a reading plan"
              }` ?? "non set yet"}
            </p>
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
function AddDailyPlanForm({ email }: { email: string }) {
  const [dailyPlan, setDailyPlan] = useState<DailyPlan>({ email: email });
  const [daily, setDaily] = useState("daily");
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
        return;
      }
    } catch (e) {
      console.log("oops something went wrong");
    }
  };
  return (
    <>
      <div>
        <Image src={`dailyplan.svg`} height={100} width={100} alt="dailyplan" />
        <form className="flex flex-col gap-1">
          <p>You want to read x number of chapters per?</p>
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
      <div className="dashboard bg-center bg-cover  h-screen">
        <div className="flex h-full overflow-auto">
          <div className="lg:min-h-full   bg-gray-500 bg-opacity-50 md:min-h-full lg:flex md:flex w-80  hidden ">
            <div className="mt-20  flex-col gap-2 flex h-full">
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
          <div className="flex  w-full bg-white bg-opacity-50 justify-evenly items-center gap-4 flex-col">
            <div className="flex w-full  gap-3 flex-col lg:flex-row md:flex-row justify-center   items-center">
              <div
                className={`lg:text-3xl text-xl md:text-2xl flex flex-col gap-1 ${openSans.className}  text-gray-600`}
              >
                <p>
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
              <div className={`flex flex-col gap-1`}>
                <div>
                  Add daily a plan or edit
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
