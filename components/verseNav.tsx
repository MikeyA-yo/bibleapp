"use client";

import { Link } from "react-scroll";


export default function VerseNav({ verseNo }: { verseNo: number }) {
    let verseArray = []
    for(let i = 1; i <= verseNo; i++){
        verseArray.push(`${i}`)
    }
  return (
    <>
      <nav className="overflow-x-auto flex lg:items-center lg:justify-center md:justify-center md:items-center sticky flex-row gap-3 pb-5 pt-2 whitespace-nowrap">
         {verseArray.map((no)=>{
            return (
               <Link to={no} delay={300} duration={500} smooth spy className="cursor-pointer" key={no}> <p className="bg-red-500 bg-opacity-50 p-2 rounded-b h-8 w-8 text-sm" >{no}</p></Link>
            )
         })}
      </nav>
    </>
  );
}
