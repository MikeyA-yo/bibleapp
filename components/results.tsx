"use client";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { Resolved } from "./verse";
import mapUrl from "./urlMapper";
import Spinner from "./spinner";
import { Montserrat } from "next/font/google";
import { ChapterArray, getNKJVVersesArray, specialChapters } from "@/app/api/fetch";
import { useEffect, useState } from "react";
import VerseNav from "./verseNav";
const mont = Montserrat({ weight: ["700"], subsets: ["latin"] });
function SelectNav({
  onChange,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="pl-20">
      <p className="text-gray-300 text-sm">Show Verses Navigation</p>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider">Not</span>
      </label>
    </div>
  );
}
function NextChapter({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="button" onClick={onClick}>
      <span className="text text-sm">Next </span>
      <svg
        className="arrow"
        viewBox="0 0 448 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg>
    </button>
  );
}
function PrevChapter({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="button" onClick={onClick}>
      <span className="text text-sm">Previous</span>
      <svg
        className="arrow-prev rotate-180"
        viewBox="0 0 448 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg>
    </button>
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
  //this was supposed to represent an array, but i don't know what it represents now
  const [a, setA] = useState(false);
  //this represents the available chapters an array, where the first element represnts
  //if there is a next chapter it is true else, false, second element 
  //for previous if there is a previous chapter in that book returns true , else false
  const [b, setB] = useState<any>();

  let sp = useSearchParams();
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter()
  let book = mapUrl(pathname.split("/")[2].replace("%20", " "));
  let verse = sp.get("v") ?? "nkjv";
  let chapter = params.chap + "";
  useEffect(() => {
    async function fetchArray() {
      const verseArray = await getNKJVVersesArray(book, chapter);
      setResArray(verseArray);
      const ChapterState = await specialChapters(book, chapter);
      setB(ChapterState)
    }
    fetchArray();
  }, [book, chapter]);
  return (
    <>
      <h1 className={`${mont.className} pl-20 pb-8 text-2xl text-white`}>
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
        <div className="flex pt-8 justify-around items-center">
         {b && b[1] && <PrevChapter onClick={()=>{
          let query = new URLSearchParams(window.location.search)
          let positionNumber = Number(chapter) - 1
          router.push(pathname.replace(chapter, `${positionNumber}?${query.toString()}`))
         }} /> }
          {b && b[0] && <NextChapter onClick={()=>{
           let query = new URLSearchParams(window.location.search)
           let positionNumber = Number(chapter) + 1
           router.push(pathname.replace(chapter, `${positionNumber}?${query.toString()}`))
         }} /> }
        </div>
      </div>
    </>
  );
}
// alert(b[1])