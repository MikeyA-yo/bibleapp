"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Loading } from "./results";
import "./Sections.css";
import { useEffect, useState } from "react";
import { Montserrat, Open_Sans, Roboto, Roboto_Mono } from "next/font/google";
import Dialog from "./dialog";
import { Check, LogOutArr } from "./spinner";
import Link from "next/link";
import helper, { secondHelper } from "@/components/dashboardHelper";

const rob = Roboto({ weight: ["700"], subsets: ["vietnamese"] });
const robMon = Roboto_Mono({ weight: ["700"], subsets: ["vietnamese"] });
const mont = Montserrat({ weight: ["700"], subsets: ["vietnamese"] });
const openSans = Open_Sans({ weight: ["700"], subsets: ["vietnamese"] });
async function GetData() {
  const res = await fetch("/api/UserStats");
  const data = await res.json();
  return data;
}
async function getFavVer() {
  const res = await fetch("/api/FavVerse");
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
    const reminderApi = await fetch("/api/UserChecks");
    if (res.ok && reminderApi.ok) {
      return;
    }
  } catch (e) {
    console.log(e);
  }
}
async function AddTask({
  email,
  state,
  task,
}: {
  email: string;
  state: boolean;
  task: string;
}) {
  try {
    const data = { email, state, task };
    const res = await fetch("api/UserChecks", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return;
    }
  } catch (e) {
    console.log("oops something happened");
  }
}
function SignOut() {
  return (
    <>
      <div
        className={`flex justify-center gap-2 ${mont.className} `}
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        <LogOutArr />
        <button>Sign Out</button>
      </div>
    </>
  );
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
          className={`text-2xl text-wrap max-w-80  flex flex-col justify-evenly ${rob.className}`}
        >
          <div className="flex flex-col pr-5 pl-2 gap-4 items-center justify-between">
            <p>Current Daily Streak </p>
            <p className=" font-light">{userData.streak.count} </p>
            <p>Best Streak</p>
            <p className="font-light">{userData.streak.best}</p>
          </div>
          {userData.readingPlan && (
            <div className="flex flex-col text-wrap gap-4 items-center justify-between">
              <p className={`text-2xl ${mont.className}`}>Reading Plan</p>
              <p>
                {userData.readingPlan.numberPerType} Chapters{" "}
                {userData.readingPlan.type}
              </p>
            </div>
          )}
          <div className="flex flex-col text-wrap items-center gap-4 justify-between">
            <p className={`text-2xl pr-5 pl-2 ${mont.className}`}>
              Rank: {userData.rank.name}
            </p>
            <p className={`text-2xl ${mont.className}`}>
              Level: {userData.rank.level}
            </p>
          </div>
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
      <div className="flex flex-col justify-evenly gap-4">
        {success && <Success />}
        <Image
          priority
          src={`dailyplan.svg`}
          height={100}
          width={100}
          alt="dailyplan"
        />
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
function UpdateTask({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  const [change, setChange] = useState<boolean>();
  async function AddTaskData() {
    let obj = {
      email,
      state: done,
      task: "chapters",
    };
    AddTask(obj);
    setChange(true);
    setTimeout(() => {
      setChange(false);
    }, 1000);
  }
  return (
    <>
      <div className="pt-8 pl-4">
        {change && <Success />}
        <form
          className={`${openSans.className} flex flex-col items-center justify-evenly`}
        >
          <p className="text-xl">
            Have you read your daily/weekly Bible plan for today?
          </p>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              className="check"
              id="check1-61"
              onChange={(e) => {
                if (e.target.checked) {
                  setDone(true);
                } else {
                  setDone(false);
                }
              }}
            />
            <label htmlFor="check1-61" className="label flex gap-1">
              <svg width={45} height={45} viewBox="0 0 95 95">
                <rect
                  x={30}
                  y={20}
                  width={50}
                  height={50}
                  stroke="black"
                  fill="none"
                />
                <g transform="translate(0,-952.36222)">
                  <path
                    d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                    stroke="black"
                    strokeWidth={3}
                    fill="none"
                    className="path1"
                  />
                </g>
              </svg>
              <span>Have you Read?</span>
            </label>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              AddTaskData();
            }}
            className="rounded bg-slate-50 w-auto p-2 bg-opacity-50 hover:bg-opacity-50 hover:bg-slate-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
interface VersesList {
  email: string;
  verse: string;
  url?: string;
  version?: string;
}
type UserFavorites = Pick<VersesList, "verse" | "url" | "version">;
type ListVerses = VersesList[];
function CoolInput({
  onChange,
  fieldName,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  fieldName?: string;
}) {
  return (
    <>
      <div className="coolinput !w-72">
        <label htmlFor="verse" className="text">
          {fieldName ?? "Favorite Verse:"}
        </label>
        <input
          type="text"
          placeholder="e.g Joshua 1 : 8 or SongofSongs 2 : 3"
          name="verse"
          id={fieldName ?? "cool"}
          className="input w-full"
          onChange={onChange}
        />
      </div>
    </>
  );
}
function FavoriteVerses({ email }: { email: string }) {
  const [verses, setVerses] = useState<ListVerses>();
  const [verse, setVerse] = useState("Joshua 1 : 8");
  const [version, setVersion] = useState("nkjv");
  const [submit, setSubmit] = useState(false);
  const [prev, setPrev] = useState("");
  const [edit, setEdit] = useState("");
  const [edt, setEdt] = useState(false);
  useEffect(() => {
    async function GetArray() {
      const data = await getFavVer();
      setVerses(data);
    }
    GetArray();
  }, [verse, version, submit]);
  async function editFav() {
    const data = {
      email,
      prev,
      edit,
    };
    const jsonData = JSON.stringify(data);
    const res = await fetch("/api/FavVerse", {
      method: "PUT",
      body: jsonData,
    });
    if (res.ok) {
      secondHelper();
      setEdt(true);
      setTimeout(() => {
        setEdt(false);
      }, 2000);
      return;
    }
  }
  async function submitFav() {
    const data = {
      email,
      verse,
      version,
    };
    const jsonData = JSON.stringify(data);
    const res = await fetch("/api/FavVerse", {
      method: "POST",
      body: jsonData,
    });
    if (res.ok) {
      helper();
      return;
    }
  }
  return (
    <>
      <div className={`${robMon.className} flex flex-col items-center`}>
        <p className="p-8">
          Instructions:
          <ul className="list-disc">
            <br />
            <li className={mont.className}>
              Type in a verse in this format: 1 John 2 : 3 or John 1 : 3
            </li>
            <br />
            <li className={mont.className}>
              Once you type in the verse, a URL will automatically be created that points
              to the verse. Click the link on the list to take you to where it is located
            </li>
            <br />
            <li className={mont.className}>
              {" "}
              If you type in a verse that is invalid, a URL will not be created for you
            </li>
            <br />{" "}
            <li className={mont.className}>
              Also note that you can add a Bible version, although the default version is the New King
              James
            </li>
          </ul>
        </p>
        <form
          className="w-72 flex flex-col justify-evenly gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            submitFav();
            setSubmit(!submit);
          }}
        >
          <CoolInput
            onChange={(e) => {
              setVerse(e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              setVersion(e.target.value);
            }}
          >
            <option disabled>Select a version optionally</option>
            <option value={"nkjv"}>New King James Version</option>
            <option value={"kjv"}>King James Version</option>
            <option value={"amp"}>Amplified Version</option>
            <option value={"nvi"}>NVI (portuegues)</option>
            <option value={"niv"}>New International Version</option>
            <option value={"nlt"}>New Living Translation</option>
            <option value={"esv"}>English Standard Version</option>
            <option value={"msg"}>The Message Translation</option>
          </select>
          <button
            type="submit"
            className="rounded bg-slate-50 w-auto p-2 bg-opacity-50 hover:bg-opacity-50 hover:bg-slate-200"
          >
            Add Verse
          </button>
        </form>
        <ul>
          {verses &&
            verses.map((verseObj: UserFavorites, i: number) => {
              return (
                <li className="list-disc" key={i}>
                  <Link
                    href={{
                      pathname: "/search" + verseObj.url,
                      query: { v: verseObj.version },
                    }}
                  >
                    <p className="text-gray-800 hover:text-gray-600">
                      {verseObj.verse}
                    </p>
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="flex flex-col gap-2 items-center">
          <h3>Edit a Verse</h3>
          <p className="p-3">
            You made a typo? worry not, just fill this edit form
          </p>
          <form
            className="flex flex-col justify-evenly gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              editFav();
              setSubmit(!submit);
            }}
          >
            <CoolInput
              fieldName="Previous"
              onChange={(e) => {
                setPrev(e.target.value);
              }}
            />
            <CoolInput
              fieldName="Corrected"
              onChange={(e) => {
                setEdit(e.target.value);
              }}
            />
            <button
              type="submit"
              className="rounded bg-slate-50 w-auto p-2 bg-opacity-50 hover:bg-opacity-50 hover:bg-slate-200"
            >
              Save Changes
            </button>
          </form>
          {edt && <p>Edit was a Success</p>}
        </div>
      </div>
    </>
  );
}
function MobileSidebar({ session }: { session: any }) {
  return (
    <>
      <div className="lg:hidden  bg-gray-500 bg-opacity-50 gap-5 justify-evenly flex flex-col">
        <div className="flex flex-col items-center  py-4 justify-evenly gap-2">
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
        <SignOut />
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
        <div className="flex  overflow-auto">
          <div className=" lg:min-h-full  md:min-h-full bg-gray-500 bg-opacity-50 lg:flex w-96 hidden ">
            <div className=" flex-col w-auto justify-around items-center fixed text-wrap  flex ">
              <div className="flex w-full pt-24 pb-4 justify-evenly gap-2">
                <p className="text-xl  text-gray-300">{session?.name}</p>
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
              <SignOut />
            </div>
          </div>
          <div className="flex  bg-white bg-opacity-50 py-4 justify-evenly items-center gap-4 flex-col">
            <div className="flex w-full  gap-3 flex-col mt-10 lg:flex-row md:flex-row justify-center   items-center">
              <div
                className={`lg:text-3xl text-xl md:text-2xl flex flex-col gap-1 ${openSans.className}  text-gray-600`}
              >
                <p className="pt-14">
                  {" "}
                  Hey {session?.name}, <br /> Welcome to your Dashboard
                </p>
                <Image
                  priority
                  src={"/dashboard.svg"}
                  alt="dashboard"
                  height={320}
                  width={320}
                  className="lg:h-72 lg:w-72 md:h-72 h-52 w-52 md:w-72"
                />
              </div>
              <div className={`flex flex-col gap-1  ${openSans.className}`}>
                <div>
                  <span className="text-xl p-2">Add a daily plan or edit</span>
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
            <div>
              <UpdateTask email={session?.email as string} />
            </div>
            <div className="flex flex-col gap-2 items-center justify-evenly">
              <h1 className={`text-2xl ${mont.className}`}>Favorite Verses</h1>
              <FavoriteVerses email={session?.email as string} />
            </div>
            <MobileSidebar session={session} />
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
