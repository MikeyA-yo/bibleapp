"use client";

import { Link } from "react-scroll";


export default function VerseNav({ verseNo }: { verseNo: number }) {
    let verseArray = []
    for(let i = 1; i <= verseNo; i++){
        verseArray.push(`${i}`)
    }
  return (
    <>
      <nav className="overflow-x-auto flex items-center justify-center sticky flex-row gap-3 pb-5 whitespace-nowrap">
         {verseArray.map((no)=>{
            return (
               <Link to={no} delay={300} duration={500} smooth spy className="cursor-pointer"> <p className="bg-red-500 bg-opacity-50 rounded-b h-6 w-6 text-sm" >{no}</p></Link>
            )
         })}
      </nav>
    </>
  );
}
