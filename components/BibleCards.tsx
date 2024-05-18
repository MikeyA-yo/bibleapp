"use client";

import Link from "next/link";
import { useState } from "react";

export function ChaptersNumber({
  number,
  path,
  query,
}: {
  number: number | string;
  path: string;
  query: { v: string };
}) {
  return (
    <>
      <Link
        href={{
          pathname: path,
          query: query,
        }}
      >
        <div className="flex h-20 w-20 m-5 items-center transition duration-300 ease-in-out rounded bg-gradient-to-b from-neutral-500 via-slate-100 to-gray-300 hover:scale-110 hover:bg-gradient-to-t hover:from-gray-300 hover:via-slate-100 hover:to-neutral-500 justify-center">
          <p className="text-2xl text-gray-700">{number}</p>
        </div>
      </Link>
    </>
  );
}
export function BookCards({ book }: { book: string }) {
  return (
    <>
      <Link href={"/search/" + book}>
        {" "}
        <div className="flex lg:h-24 md:h-24 h-16 w-auto lg:w-44 md:w-44 lg:m-5 m-2 items-center transition duration-300 ease-in-out rounded-2xl bg-gradient-to-b from-neutral-500 via-slate-100 to-gray-300 hover:scale-110 hover:bg-gradient-to-t hover:from-red-300 hover:via-slate-100 hover:to-indigo-500 justify-center">
          <p className="text-base lg:text-2xl p-2 md:text-xl  text-gray-700">
            {book}
          </p>
        </div>
      </Link>
    </>
  );
}
let value: string;
let versionValue: string;
export function SearchBox() {
  const [text, setText] = useState("");
  const [version, setVersion] = useState("kjv");
  value = text;
  versionValue = version;
  // console.log(version, value, versionValue, text);
  return (
    <>
      <div className="flex flex-col gap-1 w-72">
        <div className="wrap-input-6">
          <input
            className="input"
            type="text"
            placeholder="Enter key phrase in bible"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <span className="focus-border" />
        </div>
        <div className="relative group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
          <svg
            y={0}
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            width={100}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height={100}
            className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
          >
            <path
              strokeWidth={4}
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
              className="svg-stroke-primary"
            />
          </svg>
          <select
            onChange={(e) => {
              setVersion(e.target.value);
            }}
            className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
          >
            <option value={"kjv"}>King James Version</option>
            <option value={"nkjv"}>New king James Version</option>
            <option value={"amp"}>Amplified Version</option>
            <option value={"nvi"}>NVI (portuegues)</option>
            <option value={"niv"}>New International Version</option>
            <option value={"nlt"}>New Living Translation</option>
            <option value={"esv"}>English Standard Version</option>
          </select>
        </div>
      </div>
    </>
  );
}
export function searchValues() {
  return [value, versionValue];
}
