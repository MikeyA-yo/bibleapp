"use server"
import { verseOfTheDay } from "@/app/api/fetch";

export async function VerseOfTheDay(){
    const data = await verseOfTheDay()
    return(
        <>
          <p className="text-sm">{data.verse}</p>
          <p className="text-xl">{data.text}</p>
        </>
    )
}