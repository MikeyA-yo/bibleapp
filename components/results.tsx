"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Resolved } from "./verse";
import mapUrl from "./urlMapper";
import Spinner from "./spinner";
import { Montserrat } from "next/font/google";
import { getNKJVVersesArray } from "@/app/api/fetch";
import { useEffect, useState } from "react";
import VerseNav from "./verseNav";
const mont = Montserrat({ weight: ["700"], subsets: ["latin"] });
function SelectNav({
  onChange,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="pl-7">
      <p className="text-gray-300 text-sm">Show Verses Navigation</p>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider">Not</span>
      </label>
    </div>
  );
}
export function Loading() {
  return (
    <>
      <div className="flex flex-col items-center  justify-center mt-16">
        <Spinner className="animate-spin h-20 w-20" />
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
          <div className="p-4">
            <div className="h-6 bg-gray-500 rounded mb-4 w-1/4"></div>
            <div className="h-32 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Result() {
  const [resArray, setResArray] = useState(0);
  const [a, setA] = useState(false);

  let sp = useSearchParams();
  const params = useParams();
  const pathname = usePathname();
  let book = mapUrl(pathname.split("/")[2].replace("%20", " "));
  let verse = sp.get("v") ?? "nkjv";
  let chapter = params.chap + "";
  useEffect(() => {
    async function fetchArray() {
      const verseArray = await getNKJVVersesArray(book, chapter);
      setResArray(verseArray);
    }
    fetchArray();
  }, [book, chapter]);

  return (
    <>
      <h1 className={`${mont.className} pl-20 text-2xl text-white`}>
        {pathname.split("/")[2].replace("%20", " ")} {chapter}
      </h1>
      <SelectNav
        onChange={(e) => {
          if (e.target.checked) {
            setA(true);
          } else {
            setA(false);
          }
        }}
      />
      <div className="mx-10 rounded-xl  pb-10 my-8 bg-slate-200 bg-opacity-40 ">
        {a && resArray && <VerseNav verseNo={resArray} />}
        <Resolved version={verse} book={book} chapter={chapter} />
      </div>
    </>
  );
}
