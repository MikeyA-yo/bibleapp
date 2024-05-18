"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import useQueryParams from "./query";
import { ChaptersNumber } from "./BibleCards";
import "./Sections.css";

interface QueryParams {
  v: string;
}

export default function Chapters({ chapters }: { chapters: number[] }) {
  const [version, setVersion] = useState("kjv");
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();

  useEffect(() => {
    setQueryParams({ v: version });
  }, [version, setQueryParams]);

  const pathname = usePathname();

  return (
    <div className="h-screen  bg-center bg-cover bg-fixed chapters">
      <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center gap-3 items-center  lg:gap-3 md:gap-3">
        <div className="pt-32 lg:pt-16 md:pt-16">
          <div className="relative group rounded-lg w-64  bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
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
              <option value={"nkjv"}>New King James Version</option>
              <option value={"amp"}>Amplified Version</option>
              <option value={"nvi"}>NVI (português)</option>
              <option value={"niv"}>New International Version</option>
              <option value={"nlt"}>New Living Translation</option>
              <option value={"esv"}>English Standard Version</option>
            </select>
          </div>
        </div>
        <div className="flex gap-1 items-center  justify-center flex-wrap overflow-auto max-h-full">
          {chapters.map((chapter) => (
            <div key={chapter}>
              <ChaptersNumber
                path={pathname + "/" + chapter}
                query={{ v: version }}
                number={chapter}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
