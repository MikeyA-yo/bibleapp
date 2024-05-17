"use client";
import { useState } from "react";
import useQueryParams from "./query";

interface QueryParams {
  v: string;
}
export default function Chapters({ chapters }: { chapters: number[] }) {
  const [version, setVersion] = useState("kjv");
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  setQueryParams({ v: version });
  return (
    <>
      <div className="text-black flex  flex-col gap-3 bg-gray-300 pt-16">
        <div className="w-40">
          <div className="relative  group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
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

               // setQueryParams({ v: e.target.value });
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
        My Chapters:{" "}
        {chapters.map((chapter) => {
          return <p key={chapter}>{chapter}</p>;
        })}
      </div>
    </>
  );
}
